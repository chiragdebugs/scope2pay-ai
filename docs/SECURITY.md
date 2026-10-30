# Scope2Pay AI — Security & Compliance Architecture

**Version:** 1.0.0  
**Status:** Approved for Phase 0  
**Reference Document:** [ARCHITECTURE.md](./ARCHITECTURE.md) | [DATABASE_SCHEMA.md](./DATABASE_SCHEMA.md)

---

## 1. Security Philosophy

Scope2Pay AI handles both sensitive business contracts and direct financial escrow transactions. Security is therefore treated as a core architectural constraint rather than an afterthought. The platform implements a **Defense-in-Depth** model spanning client magic links, transactional data isolation, payment safeguards, and AI prompt boundaries.

---

## 2. Authentication & Authorization

### 2.1 Freelancer Sessions
- **Protocol**: PKCE OAuth 2.0 / Passwordless Magic Links with short-lived access tokens (15 minutes) and rotating refresh tokens (7 days).
- **Storage**: Tokens are stored strictly in `HttpOnly`, `SameSite=Lax`, `Secure` cookies to eliminate XSS token theft vectors.
- **CSRF Protection**: State tokens and custom request headers (`x-requested-with`) validated on all mutating Server Actions and API calls.

### 2.2 Client Portal Token Cryptography
Clients access their project review and payment interface via tokenized links without account friction.
- **Token Generation**: High-entropy 256-bit cryptographic secrets generated using `crypto.randomBytes(32).toString('hex')`.
- **Database Storage**: Raw tokens are **never** stored in plaintext. The database persists only a SHA-256 hash:
  $$\text{StoredHash} = \text{SHA256}(\text{RawToken} + \text{Salt})$$
- **Expiration & Revocation**: Magic tokens expire after 30 days or immediately upon explicit regeneration by the freelancer.
- **Rate-Limiting**: IP-based rate limiting (max 10 requests per minute) prevents brute-force token enumeration.

---

## 3. Financial & Escrow Safeguards

### 3.1 Stripe Connect & PCI Scope Reduction
- **Zero Cardholder Data Storage**: No credit card numbers, CVVs, or bank account details ever touch Scope2Pay servers. All payment collection uses Stripe Elements and Stripe Checkout (PCI DSS SAQ A compliant).
- **Webhook Authenticity**: Every incoming Stripe webhook is cryptographically verified against the raw request payload using `stripe.webhooks.constructEvent(payload, signature, endpointSecret)`.
- **Idempotency Keys**: All financial state mutations (holds, transfers, refunds) employ deterministic idempotency keys:
  `scope2pay_release_<milestone_id>_<timestamp>` to guarantee that network retries cannot cause double payouts.

### 3.2 Escrow State Machine Lock
- Escrow fund releases are executed within an atomic database transaction.
- Status transition requires:
  1. Verified client signature / authorization.
  2. Database state check: Milestone must be `UNDER_REVIEW` and Escrow `FUNDED`.
  3. Pre-flight verification of the Freelancer's Stripe Connected Account status.
  4. Execution of Stripe Transfer, followed by updating database to `RELEASED`.

---

## 4. AI Security & Prompt Injection Mitigation

### 4.1 Input Sanitization & Threat Modeling
- **Indirect Prompt Injection**: When analyzing inbound client messages or external RFPs for scope creep, user text is treated as untrusted data.
- **Context Isolation**: Untrusted user text is enclosed in strict XML tags (`<user_submission>...</user_submission>`) within system prompts, with explicit instructions forbidding the LLM from executing commands inside those tags.

### 4.2 Structured Output Enforcement
- The AI scoping engine exclusively uses JSON Schema / Zod schema validation:
```typescript
import { z } from "zod";

export const ScopeOutputSchema = z.object({
  title: z.string().max(100),
  summary: z.string().max(1000),
  milestones: z.array(z.object({
    title: z.string().max(100),
    amount: z.number().positive(),
    deliverables: z.array(z.string().max(200)),
    acceptanceCriteria: z.string().max(500),
  })).min(1).max(15),
  outOfScopeTerms: z.array(z.string().max(200)),
});
```
- If an LLM response fails schema validation, it is rejected and never persisted to the database.

---

## 5. Multi-Tenant Data Isolation & Database Security

### 5.1 Row-Level Security (RLS)
PostgreSQL Row-Level Security policies are enforced at the database layer:
```sql
-- Example RLS for Projects Table
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Freelancers can only view/modify their own projects
CREATE POLICY freelancer_project_isolation ON projects
    FOR ALL
    USING (freelancer_id = auth.uid());

-- Public client portal access via verified token hash only
CREATE POLICY client_portal_read ON projects
    FOR SELECT
    USING (magic_token = current_setting('request.jwt.claims', true)::json->>'token_hash');
```

---

## 6. Audit Trail & Incident Response

- Every sensitive lifecycle event (`SCOPE_AMENDED`, `FUNDS_DEPOSITED`, `FUNDS_RELEASED`, `CLIENT_MAGIC_ACCESSED`) logs an immutable entry to `audit_logs` capturing:
  - Timestamp (UTC)
  - Actor Identity & IP Address
  - Action Identifier
  - Cryptographic hash of the snapshot payload
- In the event of a dispute, this audit trail provides verifiable evidence for arbitration.
