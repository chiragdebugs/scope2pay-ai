import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Badge } from "@/components/ui/Badge";
import { Tabs } from "@/components/ui/Tabs";
import { Modal } from "@/components/ui/Modal";
import { Dropdown } from "@/components/ui/Dropdown";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { DecorativeObject } from "@/components/3d/DecorativeObject";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, FileText, CreditCard } from "lucide-react";

export function App() {
  const [activeTab, setActiveTab] = useState("proposals");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sampleInput, setSampleInput] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const showcaseTabs = [
    { id: "proposals", label: "Proposals", badge: 4 },
    { id: "milestones", label: "Milestones", badge: 12 },
    { id: "invoices", label: "Invoices", badge: 2 },
    { id: "ai-workspace", label: "AI Scoping" },
  ];

  const dropdownItems = [
    {
      id: "view",
      label: "View Scope Document",
      icon: <FileText size={16} strokeWidth={1.5} />,
      onClick: () => alert("Viewing Scope Document"),
    },
    {
      id: "invoice",
      label: "Issue PayPal Invoice",
      icon: <CreditCard size={16} strokeWidth={1.5} />,
      onClick: () => alert("Generating Invoice"),
    },
    {
      id: "ai",
      label: "AI Scope Creep Check",
      icon: <Sparkles size={16} strokeWidth={1.5} />,
      onClick: () => setIsModalOpen(true),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-[#B154F9] selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar
        onLoginClick={() => alert("Login clicked")}
        onGetStartedClick={() => setIsModalOpen(true)}
      />

      <main className="flex-1 pb-[120px]">
        {/* 2. Hero Statement Section (Krepling Style: 80px typography, generous whitespace, pastel 3D object) */}
        <section className="pt-[72px] pb-[96px] border-b border-black/8 overflow-hidden relative">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] items-center">
              {/* Left Column: Oversized Display Typography */}
              <div className="lg:col-span-8 flex flex-col gap-[24px]">
                <div className="flex items-center gap-[8px]">
                  <Badge variant="accent">Phase 1 Design System</Badge>
                  <Badge variant="muted">Inter @ 400</Badge>
                </div>

                <h1 className="text-[48px] sm:text-[64px] lg:text-[80px] text-black font-normal leading-[1.08] tracking-[-0.01em]">
                  The quiet workspace for freelance scoping & payments.
                </h1>

                <p className="text-[18px] sm:text-[20px] text-black font-normal leading-[1.3] max-w-[640px]">
                  Draft binding project proposals in minutes, shield against unpaid scope creep with Groq AI, and verify milestone payouts through PayPal.
                </p>

                <div className="flex flex-wrap items-center gap-[16px] pt-[12px]">
                  <Button variant="filled" size="lg" onClick={() => setIsModalOpen(true)}>
                    <span>Explore Design System</span>
                    <ArrowUpRight size={20} className="ml-[8px]" strokeWidth={1.5} />
                  </Button>
                  <Button variant="outlined" size="lg" onClick={() => {
                    const el = document.getElementById("tokens");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}>
                    View Tokens
                  </Button>
                </div>
              </div>

              {/* Right Column: Playful Pastel 3D Objects Cluster (Purely decorative) */}
              <div className="lg:col-span-4 flex items-center justify-center relative min-h-[300px]">
                <div className="relative w-[280px] h-[280px] flex items-center justify-center">
                  {/* Floating pastel shapes */}
                  <div className="absolute top-0 right-4 animate-bounce duration-[4000ms]">
                    <DecorativeObject type="sphere" color="lavender" size={130} />
                  </div>
                  <div className="absolute bottom-2 left-2 animate-pulse duration-[3000ms]">
                    <DecorativeObject type="cube" color="mint" size={120} rotate={15} />
                  </div>
                  <div className="absolute top-12 left-0">
                    <DecorativeObject type="torus" color="butter" size={90} rotate={-20} />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. Design Tokens Architecture Grid */}
        <section id="tokens" className="pt-[80px] pb-[80px] border-b border-black/8">
          <Container>
            <div className="flex flex-col gap-[16px] mb-[40px]">
              <span className="text-[14px] text-[#6C6B6B] tracking-[0.05em] uppercase font-normal">
                Color & Geometry System
              </span>
              <h2 className="text-[48px] text-black font-normal tracking-[-0.01em] leading-[1.1]">
                Authoritative Tokens from DESIGN.md
              </h2>
              <p className="text-[18px] text-[#6C6B6B] font-normal leading-[1.3] max-w-[700px]">
                A near-monochrome canvas where black typography carries the content and a single vivid violet (#B154F9) provides the only chromatic action signal.
              </p>
            </div>

            {/* Token Swatch Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[16px] mb-[48px]">
              <div className="border border-black/10 rounded-[8px] p-[16px] flex flex-col gap-[12px] bg-white">
                <div className="w-full h-[60px] rounded-[6px] bg-[#B154F9]" />
                <div>
                  <div className="text-[16px] text-black font-normal">Bolt Violet</div>
                  <div className="text-[14px] text-[#6C6B6B] font-normal">#B154F9</div>
                  <div className="text-[12px] text-[#B154F9] font-normal mt-[4px]">Sole UI Accent</div>
                </div>
              </div>

              <div className="border border-black/10 rounded-[8px] p-[16px] flex flex-col gap-[12px] bg-white">
                <div className="w-full h-[60px] rounded-[6px] bg-[#000000]" />
                <div>
                  <div className="text-[16px] text-black font-normal">Ink Black</div>
                  <div className="text-[14px] text-[#6C6B6B] font-normal">#000000</div>
                  <div className="text-[12px] text-[#6C6B6B] font-normal mt-[4px]">Primary Text</div>
                </div>
              </div>

              <div className="border border-black/10 rounded-[8px] p-[16px] flex flex-col gap-[12px] bg-white">
                <div className="w-full h-[60px] rounded-[6px] bg-[#FFFFFF] border border-black/10" />
                <div>
                  <div className="text-[16px] text-black font-normal">Paper White</div>
                  <div className="text-[14px] text-[#6C6B6B] font-normal">#FFFFFF</div>
                  <div className="text-[12px] text-[#6C6B6B] font-normal mt-[4px]">Primary Canvas</div>
                </div>
              </div>

              <div className="border border-black/10 rounded-[8px] p-[16px] flex flex-col gap-[12px] bg-white">
                <div className="w-full h-[60px] rounded-[6px] bg-[#F1F1F1]" />
                <div>
                  <div className="text-[16px] text-black font-normal">Mist Gray</div>
                  <div className="text-[14px] text-[#6C6B6B] font-normal">#F1F1F1</div>
                  <div className="text-[12px] text-[#6C6B6B] font-normal mt-[4px]">Alt Surface</div>
                </div>
              </div>

              <div className="border border-black/10 rounded-[8px] p-[16px] flex flex-col gap-[12px] bg-white">
                <div className="w-full h-[60px] rounded-[6px] bg-[#171717]" />
                <div>
                  <div className="text-[16px] text-black font-normal">Charcoal</div>
                  <div className="text-[14px] text-[#6C6B6B] font-normal">#171717</div>
                  <div className="text-[12px] text-[#6C6B6B] font-normal mt-[4px]">Footer Surface</div>
                </div>
              </div>

              <div className="border border-black/10 rounded-[8px] p-[16px] flex flex-col gap-[12px] bg-white">
                <div className="w-full h-[60px] rounded-[6px] bg-[#6C6B6B]" />
                <div>
                  <div className="text-[16px] text-black font-normal">Steel Gray</div>
                  <div className="text-[14px] text-[#6C6B6B] font-normal">#6C6B6B</div>
                  <div className="text-[12px] text-[#6C6B6B] font-normal mt-[4px]">Muted / Helper</div>
                </div>
              </div>
            </div>

            {/* Corner Radii Demonstration */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
              <div className="bg-[#F1F1F1] border border-black/8 rounded-[8px] p-[24px]">
                <span className="text-[14px] text-[#6C6B6B] font-normal">8px Corner Radius</span>
                <div className="text-[20px] text-black font-normal mt-[4px]">Cards & Buttons</div>
                <p className="text-[14px] text-[#6C6B6B] font-normal mt-[8px]">
                  Standard elements across the entire dashboard and inputs.
                </p>
              </div>

              <div className="bg-[#F1F1F1] border border-black/8 rounded-[14px] p-[24px]">
                <span className="text-[14px] text-[#6C6B6B] font-normal">14px Corner Radius</span>
                <div className="text-[20px] text-black font-normal mt-[4px]">Large Modal Containers</div>
                <p className="text-[14px] text-[#6C6B6B] font-normal mt-[8px]">
                  Dialog windows, popovers, and slide-out drawers.
                </p>
              </div>

              <div className="bg-[#F1F1F1] border border-black/8 rounded-[30px] p-[24px]">
                <span className="text-[14px] text-[#6C6B6B] font-normal">30px Corner Radius</span>
                <div className="text-[20px] text-black font-normal mt-[4px]">Hero Statement Surfaces</div>
                <p className="text-[14px] text-[#6C6B6B] font-normal mt-[8px]">
                  Exclusive to landing page hero canvases and major sections.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* 4. Interactive Reusable Components Showcase */}
        <section className="pt-[80px] pb-[80px] border-b border-black/8">
          <Container>
            <div className="flex flex-col gap-[16px] mb-[40px]">
              <span className="text-[14px] text-[#6C6B6B] tracking-[0.05em] uppercase font-normal">
                Component Library
              </span>
              <h2 className="text-[48px] text-black font-normal tracking-[-0.01em] leading-[1.1]">
                Interactive Component Family
              </h2>
              <p className="text-[18px] text-[#6C6B6B] font-normal leading-[1.3] max-w-[700px]">
                Fully reusable, accessible components strictly adhering to zero drop shadows, single-weight Inter 400, and flat planes.
              </p>
            </div>

            {/* Tab Strip Demo */}
            <div className="mb-[36px]">
              <span className="text-[14px] text-[#6C6B6B] block mb-[12px] font-normal">
                Interactive Tab Strip Component:
              </span>
              <Tabs
                tabs={showcaseTabs}
                activeTab={activeTab}
                onChange={setActiveTab}
              />
            </div>

            {/* Component Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
              {/* Form Controls Column */}
              <Card variant="white">
                <CardHeader>
                  <CardTitle>Form Controls</CardTitle>
                  <CardDescription>
                    Inputs, Textareas, Selects & Dropdowns with hairline borders and violet focus rings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-[20px]">
                  <Input
                    label="Project Title"
                    placeholder="e.g. Fintech Mobile App Redesign"
                    value={sampleInput}
                    onChange={(e) => setSampleInput(e.target.value)}
                    helperText="Title visible on client proposals and PayPal invoices."
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                    <Select
                      label="Primary Currency"
                      value={selectedCurrency}
                      onChange={(e) => setSelectedCurrency(e.target.value)}
                      options={[
                        { value: "USD", label: "USD ($) United States" },
                        { value: "EUR", label: "EUR (€) Eurozone" },
                        { value: "GBP", label: "GBP (£) British Pound" },
                      ]}
                      helperText="Default invoice currency"
                    />

                    <div>
                      <label className="text-[16px] text-black font-normal block mb-[6px]">
                        Actions Dropdown
                      </label>
                      <Dropdown triggerLabel="Options Menu" items={dropdownItems} />
                    </div>
                  </div>

                  <Textarea
                    label="Scope Deliverables & Acceptance Criteria"
                    placeholder="Paste project brief or client communication here..."
                    rows={3}
                    helperText="Input processed by Groq API under human-approval review."
                  />
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" size="sm">
                    Clear Input
                  </Button>
                  <Button variant="filled" size="sm" onClick={() => setIsModalOpen(true)}>
                    Test Modal
                  </Button>
                </CardFooter>
              </Card>

              {/* Action Buttons & Badges Column */}
              <div className="flex flex-col gap-[32px]">
                <Card variant="mist">
                  <CardHeader>
                    <CardTitle>Button Hierarchy</CardTitle>
                    <CardDescription>
                      Strict button variants: Filled Violet (primary), Outlined Violet (secondary), Ghost (links), and Secondary (mist).
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap items-center gap-[16px]">
                    <Button variant="filled">Filled Violet CTA</Button>
                    <Button variant="outlined">Outlined Violet</Button>
                    <Button variant="ghost">Ghost Nav Link</Button>
                    <Button variant="secondary">Secondary Surface</Button>
                    <Button variant="filled" disabled>Disabled State</Button>
                  </CardContent>
                </Card>

                <Card variant="white">
                  <CardHeader>
                    <CardTitle>Status Badges & Indicators</CardTitle>
                    <CardDescription>
                      Subtle de-saturated pill badges used for proposals, milestone states, and payment verifications.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap items-center gap-[12px]">
                    <Badge variant="accent">
                      <Sparkles size={14} />
                      AI Scope Ready
                    </Badge>
                    <Badge variant="neutral">
                      <CheckCircle2 size={14} />
                      Invoice Paid (PayPal)
                    </Badge>
                    <Badge variant="muted">Pending Client Review</Badge>
                    <Badge variant="dark">
                      <ShieldCheck size={14} />
                      Supabase RLS Protected
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        {/* 5. Responsive Grid & Layout Section (30px Radius Panel) */}
        <section className="pt-[80px]">
          <Container>
            <div className="bg-[#F1F1F1] border border-black/8 rounded-[30px] p-[40px] md:p-[64px] relative overflow-hidden">
              <div className="max-w-[700px] flex flex-col gap-[20px]">
                <span className="text-[14px] text-[#6C6B6B] tracking-[0.05em] uppercase font-normal">
                  Responsive Layout Spec
                </span>
                <h3 className="text-[32px] sm:text-[48px] text-black font-normal tracking-[-0.01em] leading-[1.1]">
                  Comfortable density with mathematical precision.
                </h3>
                <p className="text-[18px] text-black font-normal leading-[1.3]">
                  Scope2Pay AI adapts cleanly from mobile viewport (16px margins) to 1200px centered desktop grid. Surfaces communicate elevation through 1px hairlines and Mist Gray washes, never drop shadows.
                </p>
                <div className="pt-[12px] flex items-center gap-[16px]">
                  <Button variant="filled" size="md" onClick={() => setIsModalOpen(true)}>
                    Trigger 14px Modal
                  </Button>
                  <Button variant="outlined" size="md" onClick={() => alert("Scope2Pay Design System validated.")}>
                    System Validated
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* 6. Accessible Modal Component (14px Corner Radius) */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="AI Scope Creep Analyzer"
        description="Paste an email or Slack message from your client to check against the active contract."
        maxWidth="md"
      >
        <div className="flex flex-col gap-[16px]">
          <Textarea
            label="Client Message"
            placeholder="e.g. 'Can you also add dark mode and 3 extra animations by tomorrow?'"
            rows={4}
          />
          <div className="bg-[#F1F1F1] rounded-[8px] p-[16px] border border-black/8 text-[14px] text-[#6C6B6B]">
            <span className="text-black font-normal block mb-[4px]">
              Human-in-the-Loop Safeguard:
            </span>
            Any change orders or amendments generated by Groq API will remain in draft status until you explicitly approve them.
          </div>
          <div className="flex justify-end gap-[12px] pt-[8px]">
            <Button variant="ghost" size="sm" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="filled"
              size="sm"
              onClick={() => {
                alert("Scope analyzed: Change order drafted.");
                setIsModalOpen(false);
              }}
            >
              Analyze Message
            </Button>
          </div>
        </div>
      </Modal>

      {/* 7. Full-Bleed Charcoal Footer */}
      <Footer />
    </div>
  );
}

export default App;
