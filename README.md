# Scope2Pay AI

> AI-powered freelance business management platform. Draft binding proposals in minutes, shield against unpaid scope creep with Groq AI, and verify milestone payouts through PayPal.

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Python-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL_%26_Auth-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com/)
[![Groq](https://img.shields.io/badge/Groq-LPU_Inference-F05032)](https://groq.com/)
[![PayPal](https://img.shields.io/badge/PayPal-REST_API_v2-003087?logo=paypal&logoColor=white)](https://developer.paypal.com/)

---

## 🎨 Design System: Krepling Quiet Atelier

Scope2Pay AI’s visual identity is inspired by the calm, editorial precision of **Krepling’s website**, strictly implementing [DESIGN.md](./DESIGN.md):

* **Primary Canvas:** Paper White `#FFFFFF`
* **Primary Typography:** Ink Black `#000000`
* **Sole UI Accent:** Bolt Violet `#B154F9`
* **Secondary Surface:** Mist Gray `#F1F1F1`
* **Marketing Footer:** Charcoal `#171717`
* **Font:** Inter strictly at weight 400 (`16px` to `80px`)
* **Radii Hierarchy:** `8px` (cards & buttons) / `14px` (large containers & modals) / `30px` (hero panels)
* **Flat Surfaces:** Zero drop shadows (`box-shadow: none`); elevation communicated strictly via 1px hairline borders and `#F1F1F1` surface shifts.
* **Decorative Elements:** Playful pastel 3D geometric objects (spheres, cubes, toruses) for marketing atmosphere; never replacing functional UI.

---

## 📁 Monorepo Structure

```text
scope2pay-ai/
├── apps/
│   ├── web/                     # React + TypeScript + Vite frontend (Vercel)
│   │   ├── src/
│   │   │   ├── components/      # Reusable Krepling UI components
│   │   │   │   ├── ui/          # Button, Input, Textarea, Select, Badge, Tabs, Modal, Dropdown, Card
│   │   │   │   ├── layout/      # Navbar, Footer, Container
│   │   │   │   └── 3d/          # Playful pastel 3D decorative shapes
│   │   │   ├── lib/             # cn() utility and helpers
│   │   │   ├── styles/          # Design tokens and CSS
│   │   │   ├── App.tsx          # Design System showcase & verification
│   │   │   └── index.css        # Tailwind v4 @theme and global token definitions
│   │   └── package.json
│   └── api/                     # Python + FastAPI backend (Render)
├── packages/
│   └── ui/                      # Shared design tokens & style definitions
├── docs/                        # Specifications & architecture
│   ├── PRD.md                   # Product Requirements Document
│   ├── ARCHITECTURE.md          # Full-Stack System Architecture
│   ├── DATABASE_SCHEMA.md       # PostgreSQL Schema & Supabase RLS Policies
│   ├── DEVELOPMENT_ROADMAP.md   # Phased Engineering Roadmap
│   ├── SECURITY.md              # Security, Cryptography & Compliance
│   └── DESIGN_SYSTEM.md         # Operational Design System Guide
├── DESIGN.md                    # Authoritative Krepling design reference
└── README.md
```

---

## 🚀 Local Development

### Prerequisites

* Node.js v18+ (tested with v25.8.1)
* Python 3.11+ (for backend in Phase 2)

### Starting the Frontend (`apps/web`)

```bash
# Navigate to the frontend app
cd apps/web

# Install dependencies (if not already installed)
npm install

# Start local Vite development server
npm run dev

# Or build and preview production bundle
npm run build
npm run preview
```

Local development runs at: `http://localhost:5173/`

---

## 🧩 Reusable Component Suite (Phase 1)

All components are located in `apps/web/src/components/`:

| Component | Path | Description |
|---|---|---|
| **Button** | `components/ui/Button.tsx` | Filled violet (`#B154F9`), outlined violet, ghost nav link, and secondary mist styles. |
| **Input** | `components/ui/Input.tsx` | Flat 8px radius input with hairline border, label, helper text, and violet focus ring. |
| **Textarea** | `components/ui/Textarea.tsx` | Multi-line input with 8px radius, resize control, and error state handling. |
| **Select** | `components/ui/Select.tsx` | Custom dropdown select with monochrome chevron icon and flat plane styling. |
| **Badge** | `components/ui/Badge.tsx` | Status pill tags (neutral, muted, accent, dark) with subtle de-saturated fills. |
| **Tabs** | `components/ui/Tabs.tsx` | Pill tab strip with 8px radius and active violet indicator border. |
| **Modal** | `components/ui/Modal.tsx` | Accessible dialog with 14px radius (`--radius-large-containers`), backdrop blur, and ESC dismiss. |
| **Dropdown** | `components/ui/Dropdown.tsx` | 8px radius action menu with click-outside detection and monochrome icons. |
| **Card** | `components/ui/Card.tsx` | Flat card family (Header, Title, Description, Content, Footer) with 8px radius. |
| **Navbar** | `components/layout/Navbar.tsx` | Header bar with wordmark, ghost links, and outlined violet CTA. |
| **Footer** | `components/layout/Footer.tsx` | Full-bleed Charcoal (`#171717`) site footer with inverted white text. |
| **Container** | `components/layout/Container.tsx` | 1200px max-width centered layout wrapper. |
| **DecorativeObject** | `components/3d/DecorativeObject.tsx` | Soft pastel 3D spheres, cubes, and toruses for atmospheric brand texture. |

---

## 📄 License

Proprietary © Scope2Pay AI Inc. All rights reserved.
