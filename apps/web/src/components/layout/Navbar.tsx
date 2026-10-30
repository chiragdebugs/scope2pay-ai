import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavbarProps {
  items?: NavItem[];
  onLoginClick?: () => void;
  onGetStartedClick?: () => void;
}

const defaultNavItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "AI Scoper", href: "#ai-scoper" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
];

export const Navbar: React.FC<NavbarProps> = ({
  items = defaultNavItems,
  onLoginClick,
  onGetStartedClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-black/10 sticky top-0 z-40">
      <div className="max-w-[1200px] mx-auto px-[24px] py-[20px] flex items-center justify-between">
        {/* Brand Wordmark */}
        <div className="flex items-center gap-[12px]">
          <a
            href="/"
            className="text-[24px] tracking-[-0.01em] text-black font-normal flex items-center gap-[8px] select-none"
          >
            <span className="w-[14px] h-[14px] rounded-[3px] bg-[#B154F9] inline-block" />
            <span>Scope2Pay</span>
          </a>
        </div>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-[32px]">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[16px] text-black hover:text-[#B154F9] hover:underline font-normal transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-[16px]">
          <Button variant="ghost" size="sm" onClick={onLoginClick}>
            Log in
          </Button>
          <Button variant="outlined" size="sm" onClick={onGetStartedClick}>
            Get started
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden text-black p-[6px] rounded-[8px] hover:bg-[#F1F1F1] transition-colors cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-black/10 px-[24px] py-[20px] flex flex-col gap-[16px]">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[18px] text-black font-normal hover:text-[#B154F9]"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-[16px] border-t border-black/10 flex flex-col gap-[12px]">
            <Button
              variant="ghost"
              size="md"
              fullWidth
              onClick={() => {
                setMobileMenuOpen(false);
                onLoginClick?.();
              }}
            >
              Log in
            </Button>
            <Button
              variant="outlined"
              size="md"
              fullWidth
              onClick={() => {
                setMobileMenuOpen(false);
                onGetStartedClick?.();
              }}
            >
              Get started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

Navbar.displayName = "Navbar";
