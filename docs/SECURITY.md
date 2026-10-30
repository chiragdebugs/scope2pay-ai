# Scope2Pay AI — Security & Compliance Architecture

**Version:** 2.0.0  
**Status:** Approved for Phase 0  
**Reference Documents:** [ARCHITECTURE.md](./ARCHITECTURE.md) | [DATABASE_SCHEMA.md](./DATABASE_SCHEMA.md)

---

## 1. Security Philosophy

Scope2Pay AI facilitates business-critical proposals, invoices, and financial transaction verification. The security model enforces **Defense-in-Depth** across identity, database isolation, payment integrity, and AI boundaries:
1. **Zero-Trust Identity**: Supabase Auth JWTs for freelancers; cryptographically hashed magic tokens for clients.
2. **Database-Enforced Multi-Tenancy**: Supabase Row-Level Security (RLS) guarantees data isolation at the storage layer.
3. **PCI-Compliant Invoice Settlement**: Complete offloading of cardholder data handling to the PayPal REST API.
4. **Guaranteed Human-in-the-Loop AI**: AI generation is gated behind mandatory human review, eliminating autonomous hallucination or unauthorized communication.

---

## 2. Authentication & Authorization

### 2.1 Freelancer Identity & Session Security
- **Identity Provider:** Supabase Auth (Email/Password, OAuth providers).
- **Session Tokens:** JWTs containing user claims (`sub`, `email`, `role`).
- **Backend Verification:** FastAPI middleware validates the JWT cryptographic signature against the Supabase Project JWT Secret on every protected endpoint:
```python
# FastAPI JWT verification snippet
from fastapi import HTTPException, Security, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import jwt

security = HTTPBearer()

def verify_token(credentials: HTTPAuthorizationCredentials = Security(security)):
    token = credentials.credentials
    try:
        payload = jwt.decode(token, SUPABASE_JWT_SECRET, algorithms=["HS256"], audience="authenticated")
        return payload
    except jwt.PyJWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")
```

### 2.2 Client Portal Magic Link Cryptography
Clients access proposals, invoices, and messaging through friction-free tokenized links:
- **Token Generation:** Generated via Python `secrets.token_urlsafe(32)` providing 256 bits of cryptographic entropy.
- **Database Hashing:** Plaintext tokens are **never** stored in the database. Only a SHA-256 hash is persisted:
  $$\text{StoredHash} = \text{SHA256}(\text{RawToken} + \text{Salt})$$
- **Expiration & Single-Use Options:** Tokens carry expiration timestamps (`magic_token_expires_at`) and can be regenerated or revoked at any time by the freelancer.
- **Rate-Limiting:** FastAPI rate-limits portal endpoints using IP-based throttling (maximum 10 requests per minute) to thwart brute-force token enumeration.

---

## 3. Database Multi-Tenant Isolation (Supabase RLS)

Data segregation is enforced at the database level using Supabase Row-Level Security (RLS), rendering accidental data leaks across tenants impossible even in the event of an application logic defect:

```sql
-- Enforce that a freelancer can ONLY view, update, or delete their own proposals
CREATE POLICY freelancer_proposal_isolation ON proposals
    FOR ALL
    USING (auth.uid() = freelancer_id);

-- Enforce client portal access strictly via verified magic token
CREATE POLICY client_portal_proposal_read ON proposals
    FOR SELECT
    USING (
        magic_token = current_setting('request.jwt.claims', true)::json->>'portal_token'
        OR auth.uid() = freelancer_id
    );
```

---

## 4. Payment Security & PayPal Integration

### 4.1 PCI DSS Compliance Scope
- **Zero Card Data Storage:** No credit card numbers, CVVs, expiration dates, or bank account credentials pass through or reside on Scope2Pay servers.
- **Client Checkout:** Payments are processed entirely via PayPal Smart Payment Buttons and PayPal-hosted modal dialogs (PCI DSS SAQ A compliant).

### 4.2 Webhook Signature & Authenticity Verification
- Every incoming webhook from PayPal is validated against the PayPal REST API verification endpoint (`v1/notifications/verify-webhook-signature`):
```python
async def verify_paypal_webhook(request_body: bytes, headers: dict) -> bool:
    verification_payload = {
        "transmission_id": headers.get("paypal-transmission-id"),
        "transmission_time": headers.get("paypal-transmission-time"),
        "cert_url": headers.get("paypal-cert-url"),
        "auth_algo": headers.get("paypal-auth-algo"),
        "transmission_sig": headers.get("paypal-transmission-sig"),
        "webhook_id": PAYPAL_WEBHOOK_ID,
        "webhook_event": json.loads(request_body)
    }
    # Verify signature against PayPal's verification service
    response = await paypal_client.post("/v1/notifications/verify-webhook-signature", json=verification_payload)
    return response.json().get("verification_status") == "SUCCESS"
```

### 4.3 Idempotency & Duplicate Payment Prevention
- All payment capture calls generate a deterministic order verification key: `order_capture_<invoice_id>_<paypal_order_id>`.
- Invoices are checked for an existing `PAID` status inside a database transaction before any capture status is confirmed, preventing double-crediting or duplicate processing.

---

## 5. AI Safety & Human-in-the-Loop Safeguards

### 5.1 Prompt Injection Defense
- Untrusted user input (raw client emails, RFP text) is quarantined inside XML delimiters (`<client_input>...</client_input>`) in Groq API prompts.
- System instructions explicitly mandate that the LLM ignore any commands, system overrides, or instructions contained within those delimiters.

### 5.2 Schema Validation Gate
- Groq model outputs are parsed through strict Pydantic schemas in FastAPI. Any response containing unexpected keys, malformed JSON, or invalid data types is rejected before reaching the client.

### 5.3 Mandatory Human Approval Gate
- **Zero Autonomous Dispatch:** Proposals, milestones, and contract terms drafted by Groq are stored in `DRAFT` status with `human_approved = false`.
- Only an authenticated freelancer can review, modify, and explicitly toggle `human_approved = true` to promote the proposal to `READY_TO_SEND` or `SENT`.

---

## 6. Infrastructure & Network Security

- **Frontend on Vercel:** Automatic TLS 1.3, DDoS protection, edge caching, and strict HTTP Content Security Policy (CSP) headers.
- **Backend on Render:** Hosted behind HTTPS reverse proxies, isolated runtime environments, and secret environment variables for API keys (`SUPABASE_KEY`, `GROQ_API_KEY`, `PAYPAL_CLIENT_SECRET`).
- **Database on Supabase:** Encrypted at rest using AES-256 and encrypted in transit via TLS.
