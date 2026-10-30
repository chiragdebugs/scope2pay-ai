import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface NavbarProps {
  onLoginClick?: () => void;
  onGetStartedClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onLoginClick,
  onGetStartedClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {/* Container with generous page margins matching Krepling */}
      <div className="w-full px-[20px] sm:px-[36px] lg:px-[48px] py-[20px] sm:py-[24px] box-border">
        <div className="w-full flex items-center justify-between">
          {/* Logo on Left */}
          <div className="flex items-center gap-[10px] pointer-events-auto shrink-0">
            <a
              href="/"
              className="flex items-center gap-[9px] select-none text-black hover:opacity-85 transition-opacity"
              aria-label="Scope2Pay Homepage"
            >
              {/* Circular Monogram Icon matching Krepling's style */}
              <svg
                width="30"
                height="30"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <circle cx="16" cy="16" r="14.5" stroke="#000000" strokeWidth="2.2" />
                {/* Stylized S glyph */}
                <path
                  d="M19.5 11.5C19.5 11.5 18 10 16 10C13.8 10 12.5 11.2 12.5 12.8C12.5 15.5 19.5 14.8 19.5 18.8C19.5 20.8 18 22 15.8 22C13.5 22 11.8 20.2 11.8 20.2"
                  stroke="#000000"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {/* Wordmark */}
              <span className="text-[18px] sm:text-[20px] font-normal tracking-[-0.02em] uppercase font-sans text-black">
                Scope2Pay
              </span>
            </a>
          </div>

          {/* Desktop Center Links */}
          <nav className="hidden lg:flex items-center gap-[36px] pointer-events-auto">
            <a
              href="#features"
              className="text-[15px] text-black font-normal hover:text-[#B154F9] transition-colors"
            >
              Features
            </a>

            <a
              href="#pricing"
              className="text-[15px] text-black font-normal hover:text-[#B154F9] transition-colors"
            >
              Pricing
            </a>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button
                className="flex items-center gap-[4px] text-[15px] text-black font-normal hover:text-[#B154F9] transition-colors cursor-pointer"
                onClick={() => setCompanyOpen(!companyOpen)}
              >
                <span>Company</span>
                <ChevronDown size={13} strokeWidth={1.8} className="text-black" />
              </button>

              {companyOpen && (
                <div className="absolute top-full left-0 mt-[8px] w-[160px] bg-white border border-black/10 rounded-[8px] p-[8px] flex flex-col gap-[4px] shadow-none">
                  <a href="#about" className="px-[12px] py-[8px] text-[14px] text-black hover:bg-[#F1F1F1] rounded-[6px]">
                    About
                  </a>
                  <a href="#blog" className="px-[12px] py-[8px] text-[14px] text-black hover:bg-[#F1F1F1] rounded-[6px]">
                    Blog
                  </a>
                  <a href="#careers" className="px-[12px] py-[8px] text-[14px] text-black hover:bg-[#F1F1F1] rounded-[6px]">
                    Careers
                  </a>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button
                className="flex items-center gap-[4px] text-[15px] text-black font-normal hover:text-[#B154F9] transition-colors cursor-pointer"
                onClick={() => setResourcesOpen(!resourcesOpen)}
              >
                <span>Resources</span>
                <ChevronDown size={13} strokeWidth={1.8} className="text-black" />
              </button>

              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-[8px] w-[180px] bg-white border border-black/10 rounded-[8px] p-[8px] flex flex-col gap-[4px] shadow-none">
                  <a href="#status" className="px-[12px] py-[8px] text-[14px] text-black hover:bg-[#F1F1F1] rounded-[6px]">
                    Status
                  </a>
                  <a href="#support" className="px-[12px] py-[8px] text-[14px] text-black hover:bg-[#F1F1F1] rounded-[6px]">
                    Support
                  </a>
                  <a href="#guides" className="px-[12px] py-[8px] text-[14px] text-black hover:bg-[#F1F1F1] rounded-[6px]">
                    Scoping Guides
                  </a>
                  <a href="#paypal-guide" className="px-[12px] py-[8px] text-[14px] text-black hover:bg-[#F1F1F1] rounded-[6px]">
                    PayPal Invoicing
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-[24px] pointer-events-auto">
            <button
              onClick={onLoginClick}
              className="text-[15px] text-black font-normal hover:text-[#B154F9] transition-colors cursor-pointer"
            >
              Log in
            </button>
            <button
              onClick={onGetStartedClick}
              className="text-[15px] text-black font-normal border border-black/80 hover:border-[#B154F9] hover:text-[#B154F9] px-[20px] py-[10px] rounded-[8px] transition-colors cursor-pointer bg-transparent"
            >
              Get started
            </button>
          </div>

          {/* Mobile Right: 3-line hamburger matching Krepling mobile */}
          <div className="flex lg:hidden items-center pointer-events-auto shrink-0 pr-[4px]">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-[6px] text-black cursor-pointer bg-transparent border-none flex items-center justify-center"
              aria-label="Toggle navigation"
            >
              <div className="w-[20px] h-[13px] flex flex-col justify-between">
                <span className="w-full h-[1.5px] bg-black block" />
                <span className="w-full h-[1.5px] bg-black block" />
                <span className="w-full h-[1.5px] bg-black block" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-[16px] bg-white border border-black/10 rounded-[8px] p-[20px] flex flex-col gap-[14px] pointer-events-auto">
            <a href="#features" className="text-[16px] text-black font-normal" onClick={() => setMobileMenuOpen(false)}>
              Features
            </a>
            <a href="#pricing" className="text-[16px] text-black font-normal" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </a>
            <a href="#about" className="text-[16px] text-black font-normal" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a href="#guides" className="text-[16px] text-black font-normal" onClick={() => setMobileMenuOpen(false)}>
              Guides
            </a>
            <div className="pt-[10px] border-t border-black/10 flex flex-col gap-[10px]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onLoginClick?.();
                }}
                className="text-[15px] text-left text-black font-normal py-[4px]"
              >
                Log in
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
