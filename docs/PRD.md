# Scope2Pay AI — Product Requirements Document (PRD)

**Version:** 1.0.0  
**Status:** Approved for Phase 0  
**Owner:** Scope2Pay Product & Engineering Team  
**Design Reference:** [DESIGN.md](../DESIGN.md) (Krepling Minimalist Atelier Aesthetic)

---

## 1. Executive Summary

**Scope2Pay AI** is an intelligent freelance management and milestone-escrow platform designed to solve the two biggest failure points in freelance and agency engagements:
1. **Ambiguous project scoping and subsequent scope creep.**
2. **Delayed, disputed, or unpaid invoices.**

By marrying a conversational AI Scoping Engine with an automated milestone-to-escrow payment architecture, Scope2Pay AI empowers freelancers to draft binding, crystalline project scopes in minutes, while giving clients a friction-free approval and payment portal.

---

## 2. Core Problem & Value Proposition

### 2.1 The Problem
- **Freelancers** spend 20–30% of their billable hours drafting proposals, arguing about out-of-scope requests ("Can you just add this small thing?"), chasing late payments, and risking non-payment.
- **Clients** fear paying upfront for half-finished work or receiving vague deliverables that do not match their expectations.
- **Traditional Platforms** (e.g., Upwork, Fiverr) charge predatory take rates (10–20%), trap user relationships, and provide bloated, generic interfaces.

### 2.2 The Solution
- **AI-Powered Scoping**: Converts unstructured client conversations, briefs, or notes into structured milestones, concrete deliverables, acceptance criteria, and out-of-scope boundaries.
- **Locked Escrow & Instant Milestone Releases**: Clients fund milestones into escrow (powered by Stripe Connect / Custom Escrow). Once acceptance criteria are met, funds release immediately.
- **One-Click Change Orders**: When scope creep occurs, the AI identifies new requests, generates a formal micro-amendment with pricing/timeline adjustments, and collects client sign-off before work commences.
- **Zero-Friction Client Experience**: Clients review and approve scopes without creating heavy accounts—just secure magic link access with bank-grade security.

---

## 3. User Personas

| Persona | Role | Key Goals | Pain Points |
|---|---|---|---|
| **Alex Rivera** | Senior Freelance Engineer / Designer | Protect time, eliminate unpaid revisions, secure upfront deposits | Scope creep, drafting legal agreements, chasing invoices |
| **Sarah Jenkins** | Small Agency Founder | Standardize agency proposals, track multiple active client contracts, manage milestone cashflow | Disorganized client approvals, payment delays of 30–60 days |
| **Marcus Vance** | Startup Founder / Client | Clear visibility into deliverables, peace of mind that funds are only released upon verified completion | Paying upfront for poor results, surprise extra fees |

---

## 4. Product Modules & Experiences

Scope2Pay AI is organized into four core experiences, sharing a unified design aesthetic:

### 4.1 Marketing Website (`apps/web/marketing`)
- **Hero & Value Proposition**: High-impact editorial display typography, floating pastel 3D decorative assets, dual CTA.
- **Interactive Scoper Demo**: Light interactive widget allowing visitors to type a sample project prompt and see an instant milestone breakdown.
- **Feature Deep Dives**:
  - AI Scoping & Scope Creep Protection.
  - Milestone Escrow & Instant Payouts.
  - Client Portal with One-Click Approvals.
  - Contract & Dispute Shield.
- **Transparent Pricing**: Free tier (pay-as-you-get-paid transaction fee) vs. Pro Subscriptions.
- **Full-Bleed Charcoal Footer**: Site map, compliance badges, and resources.

### 4.2 Freelancer Dashboard (`apps/web/dashboard`)
- **Financial & Project Overview**: Active escrow balances, pending milestone approvals, monthly revenue metrics.
- **Project Pipeline**: Kanban/Table view of engagements: *Drafting → Awaiting Deposit → In Progress → Review → Released → Completed*.
- **Milestone Manager**: Deliverable checklist, file attachments, submission for client review.
- **Invoicing & Payout Settings**: Stripe Express connected account onboarding, payout schedules, tax document generation.

### 4.3 AI Workspace (`apps/web/ai-workspace`)
- **Conversational Intake**: Chat/Prompt interface to input project details, audio transcripts, or rough notes.
- **Scope Generator**:
  - Automatically synthesizes: Project Overview, Objectives, Deliverables, Milestones, Payment Schedules, Out-of-Scope lists, and Acceptance Criteria.
- **Scope Creep Analyzer**: Paste a client's Slack message or email; the AI compares it to the agreed contract and flags out-of-scope items with drafted polite response templates and Change Order proposals.
- **Contract Customizer**: Tailor legal boilerplate (IP assignment, confidentiality, termination clauses) per jurisdiction.

### 4.4 Client Portal (`apps/web/portal`)
- **Zero-Login Magic Link Access**: Tokenized, secure links sent via email or shared directly.
- **Interactive Scope Review**: Granular view of each milestone, pricing, and exact delivery dates.
- **Escrow Deposit**: Direct credit card, ACH, or Apple Pay deposit into escrow.
- **Deliverable Acceptance & Release**: Client marks milestones as approved; triggers automated escrow release to the freelancer.
- **Change Order Sign-Off**: Straightforward review of amendments with transparent price deltas.

---

## 5. Functional Requirements

### 5.1 Authentication & Multi-Tenancy
- Email/Password, Google OAuth, and GitHub OAuth via Supabase / Auth.js.
- Role-based authorization: `FREELANCER`, `CLIENT`, `ADMIN`.
- Secure Magic Link verification for Client Portal sessions.

### 5.2 AI Engine & Scoping Architecture
- Support for Gemini 1.5 Pro / GPT-4o for structured JSON output generation.
- Strict schema validation (Zod) on all generated scopes and change orders.
- Prompt injection protection and content safety filtering.

### 5.3 Payments & Escrow Engine
- Stripe Connect Custom / Express integration.
- Separate holding of escrow authorizations until milestone sign-off.
- Multi-currency support (USD, EUR, GBP, CAD).
- Automated receipt and PDF contract generation.

### 5.4 Notifications & Audit Trail
- Real-time notifications (Email via Resend + in-app webhooks).
- Immutable audit log of every scope view, approval, payment, and file submission.

---

## 6. Non-Functional Requirements

- **Performance**: Initial page load under 1.2s; LCP < 1.5s; 99.9% uptime SLA.
- **Security**: SOC2 and GDPR compliance readied; end-to-end TLS 1.3; field-level encryption for sensitive client data.
- **Accessibility**: WCAG 2.1 AA compliant; keyboard-navigable dialogs and portals.
- **Design Consistency**: Strict conformance to [DESIGN.md](../DESIGN.md) (single weight Inter 400, #B154F9 accent, flat surfaces, 8px/14px/30px radii).

---

## 7. Success Metrics & KPIs

1. **Time-to-Contract**: Reduce contract creation time from 3 hours to < 5 minutes.
2. **Escrow Dispute Rate**: Maintain escrow dispute rate under 1.5%.
3. **Payment Velocity**: 95% of milestone approvals released within 24 hours.
4. **Change Order Conversion**: > 40% of flagged scope creep successfully converted into paid change orders.
