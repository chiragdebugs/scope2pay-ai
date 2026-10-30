# Scope2Pay AI — Design System Specification

**Version:** 1.0.0  
**Status:** Approved for Phase 0  
**Authoritative Reference:** [DESIGN.md](../DESIGN.md) (Krepling Minimalist Atelier Aesthetic)

---

## 1. Design Philosophy: "Quiet Atelier with One Violet Spark"

Scope2Pay AI’s visual identity is inspired by the calm, editorial precision of Krepling's website. It rejects the busy, gradient-heavy, drop-shadowed visual clichés common to SaaS templates. 

Instead, it operates as a **near-monochrome canvas** where pure black text, pure white surfaces, and generous whitespace carry the entire interface. A single chromatic accent—**Bolt Violet (`#B154F9`)**—acts as the exclusive visual trigger for interactive states, primary CTAs, and active navigation.

### The 6 Core Tenets
1. **Single-Weight Typographic Hierarchy**: Inter at weight 400 across all text roles. Hierarchy is created through dramatic size jumps (`16px` to `80px`) and letter tracking (`-0.01em` to `+0.02em`), never with bold weights.
2. **Strictly Flat Surfaces**: Zero drop shadows (`box-shadow: none`). Elevation and grouping are communicated strictly through 1px hairline borders (`#000000` at 10% opacity or `#B3B3B3`) and secondary surface washes (`#F1F1F1`).
3. **Sole Chromatic Accent**: `#B154F9` is the only accent color permitted across functional UI. No secondary or tertiary accent colors (no blue, green, or orange buttons).
4. **Disciplined Corner Radii**: Exactly three radius values are permitted:
   - `8px`: Buttons, interactive inputs, standard cards, and table containers.
   - `14px`: Large modal panels, flyouts, and drawer containers.
   - `30px`: Hero-scale statement containers on the marketing website.
5. **Atmospheric Pastel 3D Objects**: Soft, tactile, candy-like 3D shapes (cubes, spheres, toruses) float in empty space on the marketing website to provide texture and playfulness. They **never** replace or obstruct functional product UI.
6. **Dark Inversion Exclusively for Footers**: The full-bleed `#171717` Charcoal surface is restricted strictly to marketing footers; all product dashboards and portals remain light.

---

## 2. Color Palette & Token Architecture

```css
:root {
  /* Chromatic Accent — The sole voice for actions and focus */
  --color-bolt-violet: #b154f9;

  /* Monochromatic Base */
  --color-ink-black: #000000;
  --color-paper-white: #ffffff;
  --color-mist-gray: #f1f1f1;
  --color-charcoal: #171717;

  /* Helper & Boundary Neutrals */
  --color-steel-gray: #6c6b6b;
  --color-fog-gray: #b3b3b3;
  --color-hairline: rgba(0, 0, 0, 0.08);

  /* Status Colors (Subtle & De-saturated) */
  --status-pending-bg: #f1f1f1;
  --status-pending-text: #6c6b6b;
  --status-active-border: #b154f9;
  --status-active-text: #000000;
  --status-funded-bg: #f1f1f1;
  --status-funded-border: #000000;
}
```

### Color Mapping Matrix

| Token | Hex | Role & Usage Restrictions |
|---|---|---|
| `--color-bolt-violet` | `#B154F9` | **Primary Action CTAs**, active tab indicators, focus rings, selected milestone borders. **Never** used for body text or large background fills. |
| `--color-ink-black` | `#000000` | Primary headlines, body text, nav links, icon strokes, 1px hairline borders. |
| `--color-paper-white`| `#FFFFFF` | Global page canvas, card backgrounds, button text on filled CTAs. |
| `--color-mist-gray`  | `#F1F1F1` | Secondary card fills, table alternating rows, hover state wash, milestone summary headers. |
| `--color-charcoal`   | `#171717` | Full-bleed marketing website footer background and inverted footer text. |
| `--color-steel-gray` | `#6C6B6B` | Secondary helper text, timestamps, input placeholders, disabled states. |
| `--color-fog-gray`   | `#B3B3B3` | Low-priority dividers and inactive card borders. |

---

## 3. Typography Scale (Inter @ 400)

| Role | Font Size | Line Height | Tracking | Token | Application |
|---|---|---|---|---|---|
| **Display** | `80px` | `1.10` | `-0.01em` | `--text-display` | Marketing hero main headline |
| **Heading LG** | `64px` | `1.10` | `-0.01em` | `--text-heading-lg` | Section statement openers |
| **Heading** | `48px` | `1.20` | `-0.01em` | `--text-heading` | Page titles, AI Workspace banner |
| **Heading SM** | `32px` | `1.20` | `0` | `--text-heading-sm` | Dashboard project titles, invoice totals |
| **Subheading** | `24px` | `1.20` | `+0.01em` | `--text-subheading` | Milestone card titles, modal titles |
| **Body** | `18px` | `1.30` | `+0.01em` | `--text-body` | Primary editorial body copy |
| **Caption** | `16px` | `1.30` | `+0.01em` | `--text-caption` | Navigation items, form labels, table cells |
| **Small Label**| `14px` | `1.30` | `+0.02em` | `--text-label` | Metadata, badges, timestamps |

---

## 4. Component Standards

### 4.1 Buttons

```text
[ Filled Violet Button ] -> Background: #B154F9 | Text: #FFFFFF | Radius: 8px | Padding: 14px 20px
[ Outlined Violet Button ] -> Background: #FFFFFF | Border: 1.5px #B154F9 | Text: #B154F9 | Radius: 8px
[ Ghost Text Link ] -> Background: transparent | Text: #000000 | Hover: #B154F9 (underline)
```

- **Filled Violet Button (`<Button variant="filled">`)**: The system's high-priority trigger ("Request Demo", "Approve & Release Funds", "Generate Scope").
- **Outlined Violet Button (`<Button variant="outlined">`)**: Secondary action ("Get Started", "Edit Milestone").
- **Ghost Button (`<Button variant="ghost">`)**: Navigation links and cancel actions.

### 4.2 Content & Milestone Cards
- **Background**: `#FFFFFF` (default) or `#F1F1F1` (secondary).
- **Border**: `1px solid rgba(0, 0, 0, 0.08)` or `#B3B3B3`.
- **Corner Radius**: `8px`.
- **Shadow**: `none` (zero box-shadow).
- **Padding**: `20px` to `24px`.

### 4.3 Tab Strips
- Inactive tabs: `#FFFFFF` background, `#000000` text, `1px solid #B3B3B3` border, `8px` radius.
- Active tabs: `#FFFFFF` background, `#000000` text, `1.5px solid #B154F9` border (or subtle violet indicator).

### 4.4 Form Inputs & Dropdowns
- Background `#FFFFFF`, 1px border `#B3B3B3`, 8px radius, 14px padding.
- Focused state: Border changes to `1.5px solid #B154F9` with zero ambient glow.

---

## 5. Experience-Specific Adaptations

### 5.1 Marketing Website
- Massive typography (`80px` display), expansive whitespace, and 80px section spacing.
- Pastel 3D decorative shapes (mint, lilac, butter yellow, coral) placed in generous negative space.
- Full-bleed `#171717` Charcoal footer with inverted pure white text.

### 5.2 Freelancer Dashboard
- High-utility, distraction-free environment.
- Flat cards displaying active contracts, escrow balances, and milestone statuses.
- Zero 3D decorative elements; focus is 100% on operational efficiency and financial clarity.

### 5.3 AI Workspace
- Split-pane layout: Conversational prompt intake on the left; live, structured milestone preview on the right.
- Violet accent highlights AI-suggested milestones and scope-creep alerts.
- Inline editable fields with instant auto-save feedback.

### 5.4 Client Portal
- Ultra-clean, reassuring approval view.
- Clear milestone status badges: *Unfunded*, *Funded in Escrow*, *Under Review*, *Released*.
- Bold `#B154F9` action button for milestone fund release with explicit confirmation dialogs.
