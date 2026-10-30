# Scope2Pay AI — Product Requirements Document (PRD)

**Version:** 2.0.0  
**Status:** Approved for Phase 0  
**Owner:** Scope2Pay Product & Engineering Team  
**Design Reference:** [DESIGN.md](../DESIGN.md) (Krepling Minimalist Atelier Aesthetic)

---

## 1. Executive Summary

**Scope2Pay AI** is an AI-powered freelance business management platform engineered to streamline the entire freelance project lifecycle:
1. **Intelligent Scoping & Proposal Generation:** Converting unstructured client briefs into precise, structured proposals and milestone breakdowns with strict human-in-the-loop approval.
2. **Project & Milestone Tracking:** Clear deliverables, acceptance criteria, and revision boundaries that protect freelancers against scope creep.
3. **Invoicing & PayPal Payment Verification:** Direct generation of professional milestone-based invoices and frictionless client payment processing verified via the PayPal REST API.
4. **Client Collaboration Portal:** Zero-friction proposal sign-offs, live project tracking, secure messaging, and one-click invoice settlement.

---

## 2. Core Problem & Value Proposition

### 2.1 The Problem
- **Freelancers** spend excessive non-billable time drafting proposals, negotiating contracts, tracking scope creep ("can you just add this small thing?"), issuing invoices manually, and chasing overdue payments.
- **Clients** struggle with ambiguous proposals, lack clarity on milestone delivery dates, and face cumbersome payment mechanisms.
- **Traditional freelance platforms** charge exorbitant commissions (10–20%), restrict direct client relationships, and enforce clunky, generic interfaces.

### 2.2 The Solution
- **High-Velocity AI Workspace (Powered by Groq API):** Generates structured proposals, project scopes, milestones, deliverables, and out-of-scope boundaries in seconds.
- **Strict Human-Approval Workflow:** AI suggestions are never dispatched autonomously. The freelancer maintains total editorial control: review, modify, calibrate pricing, and explicitly approve before anything reaches the client.
- **Invoice & PayPal Verification Engine:** Direct milestone-to-invoice pipeline. Clients settle invoices seamlessly via PayPal, and webhooks verify payments in real time.
- **Dedicated Client Portal & Messaging:** Clients review proposals, track milestones, message freelancers, and pay invoices via secure, tokenized magic links.

---

## 3. User Personas & Roles

| Persona | Role | Key Goals | Pain Points Solved |
|---|---|---|---|
| **Alex Rivera** | Senior Freelance Engineer / Designer | Fast proposal turnaround, eliminate unpaid revisions, get invoices paid promptly | Unclear scopes, scope creep, manual invoicing |
| **Sarah Jenkins** | Creative Studio / Agency Operator | Standardize client proposals, manage multiple active client projects, maintain clear invoice audit trails | Disorganized client approvals, late payments |
| **Marcus Vance** | Startup Founder / Client | Transparent deliverable tracking, fast proposal review, direct communication, easy PayPal invoice settlement | Vague progress reports, complex payment portals |

---

## 4. Product Modules & Experiences

Scope2Pay AI delivers four unified experiences built on a React + TypeScript + Vite frontend following the Krepling visual design system:

### 4.1 Marketing Website
- **Hero & Value Proposition:** High-impact editorial display typography (`64px`–`80px`, Inter 400), expansive whitespace, and floating pastel 3D decorative assets.
- **Interactive Scoper Preview:** Public interactive demo showcasing Groq-powered scope synthesis.
- **Feature Modules:** AI Proposal Generator, Scope Creep Shield, Milestone Invoicing, and Client Portal.
- **Full-Bleed Charcoal Footer:** Site map, legal terms, and brand links in `#171717`.

### 4.2 Freelancer Dashboard
- **Financial & Operational Overview:** Outstanding invoices, settled PayPal payments, active projects, and pending proposals.
- **Client CRM:** Contact management, project history, and total revenue per client.
- **Project & Milestone Manager:** Phased milestone cards, deliverable statuses, and one-click invoice generation.
- **Invoicing Hub:** Invoice status lifecycle (`DRAFT` → `SENT` → `PAID` → `CANCELLED`), PayPal payment reconciliation, and downloadable receipts.

### 4.3 AI Workspace
- **Conversational & Structured Brief Intake:** Paste raw client emails, transcripts, or notes.
- **Proposal & Scope Generator:** Groq API synthesizes executive summary, deliverables, timeline, milestones, pricing, and explicit out-of-scope boundaries.
- **Human-in-the-Loop Approval Workflow:**
  1. *AI Drafts:* Structured JSON schema generation via Groq.
  2. *Freelancer Edits:* Interactive granular tuning of milestones, pricing, and terms.
  3. *Freelancer Approves:* Formal promotion to an active proposal/project before publishing to the client.
- **Scope Creep Detector:** Analyze new client messages against the active contract, flag out-of-scope requests, and generate polite amendment drafts with pricing deltas.

### 4.4 Client Portal
- **Zero-Friction Access:** Authenticated via secure, tokenized magic links without mandatory account registration.
- **Proposal Review & Acceptance:** Clean, readable proposal layout with digital sign-off.
- **Milestone & Deliverable Tracker:** Real-time visibility into what is in progress, submitted, or completed.
- **Invoice Settlement via PayPal:** Integrated PayPal Smart Payment Buttons (Credit Card, PayPal balance, Pay in 4) with instant receipt generation.
- **Conversations & Messaging:** Direct message threads attached to proposals and projects for centralized client communication.

---

## 5. Functional Requirements

### 5.1 Authentication & Role-Based Access Control
- **Provider:** Supabase Auth.
- **Roles:** Strict separation between `FREELANCER` (authenticated management account) and `CLIENT` (portal access via signed magic link tokens or verified client login).
- **Security:** Supabase Row-Level Security (RLS) enforcing multi-tenant isolation.

### 5.2 AI Engine & Scoping Architecture
- **Inference Engine:** Groq API (leveraging ultra-low latency Llama-3 / Mixtral models).
- **Output Validation:** Pydantic schemas on the FastAPI backend and Zod schemas on the React frontend.
- **Safety & Editorial Control:** Mandatory human approval gate; prompt isolation against prompt injection.

### 5.3 Invoicing & PayPal Integration
- **Payment Gateway:** PayPal REST API (Orders v2 API).
- **Verification Flow:**
  1. Client clicks "Pay Invoice" in the portal.
  2. FastAPI creates a PayPal Order linked to the specific `invoice_id`.
  3. Client authorizes payment via PayPal Smart Buttons.
  4. FastAPI captures the order, validates payment status, records a `payments` entry, and marks the invoice as `PAID`.
  5. Webhook listener (`PAYMENT.CAPTURE.COMPLETED`) reconciles asynchronous payment events.

### 5.4 Conversations & Client Messaging
- Threaded conversation models attached to proposals and projects.
- Message history tracking freelancer and client communications.
- Real-time updates via Supabase Realtime / WebSockets.

---

## 6. Non-Functional Requirements

- **Frontend Performance:** React + Vite SPA delivering initial load < 1.0s, optimal Core Web Vitals.
- **Backend Performance:** FastAPI asynchronous endpoints responding in < 150ms (excluding external AI/PayPal calls).
- **AI Latency:** Groq inference completion in < 2 seconds for comprehensive project scopes.
- **Design Adherence:** Strict compliance with [DESIGN.md](../DESIGN.md) (Inter 400, `#B154F9` accent, `#FFFFFF` canvas, `#F1F1F1` alt-surfaces, 8px/14px/30px radii, zero drop shadows).
- **Deployment:** Frontend on Vercel; Backend on Render; Database & Auth on Supabase.
