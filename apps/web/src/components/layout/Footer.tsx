import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#171717] text-white pt-[80px] pb-[60px] border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-[24px]">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[48px] pb-[64px] border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-2 flex flex-col gap-[16px]">
            <div className="flex items-center gap-[10px]">
              <span className="w-[14px] h-[14px] rounded-[3px] bg-[#B154F9] inline-block" />
              <span className="text-[22px] tracking-[-0.01em] font-normal">
                Scope2Pay AI
              </span>
            </div>
            <p className="text-[16px] text-[#B3B3B3] font-normal leading-[1.3] max-w-[340px]">
              AI-powered freelance business management. Eliminate scope creep, draft binding proposals in minutes, and verify milestone payments via PayPal.
            </p>
          </div>

          {/* Column 1: Product */}
          <div className="flex flex-col gap-[12px]">
            <span className="text-[14px] text-[#6C6B6B] tracking-[0.05em] uppercase font-normal">
              Product
            </span>
            <ul className="flex flex-col gap-[10px] list-none p-0 m-0">
              <li>
                <a href="#features" className="text-[16px] text-white hover:text-[#B154F9] transition-colors font-normal">
                  Features
                </a>
              </li>
              <li>
                <a href="#ai-workspace" className="text-[16px] text-white hover:text-[#B154F9] transition-colors font-normal">
                  AI Scoping Engine
                </a>
              </li>
              <li>
                <a href="#portal" className="text-[16px] text-white hover:text-[#B154F9] transition-colors font-normal">
                  Client Portal
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-[16px] text-white hover:text-[#B154F9] transition-colors font-normal">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="flex flex-col gap-[12px]">
            <span className="text-[14px] text-[#6C6B6B] tracking-[0.05em] uppercase font-normal">
              Resources
            </span>
            <ul className="flex flex-col gap-[10px] list-none p-0 m-0">
              <li>
                <a href="#docs" className="text-[16px] text-white hover:text-[#B154F9] transition-colors font-normal">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#guides" className="text-[16px] text-white hover:text-[#B154F9] transition-colors font-normal">
                  Freelance Guides
                </a>
              </li>
              <li>
                <a href="#api" className="text-[16px] text-white hover:text-[#B154F9] transition-colors font-normal">
                  FastAPI Reference
                </a>
              </li>
              <li>
                <a href="#status" className="text-[16px] text-white hover:text-[#B154F9] transition-colors font-normal">
                  System Status
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Trust */}
          <div className="flex flex-col gap-[12px]">
            <span className="text-[14px] text-[#6C6B6B] tracking-[0.05em] uppercase font-normal">
              Trust & Legal
            </span>
            <ul className="flex flex-col gap-[10px] list-none p-0 m-0">
              <li>
                <a href="#security" className="text-[16px] text-white hover:text-[#B154F9] transition-colors font-normal">
                  Security (RLS)
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-[16px] text-white hover:text-[#B154F9] transition-colors font-normal">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-[16px] text-white hover:text-[#B154F9] transition-colors font-normal">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#paypal" className="text-[16px] text-white hover:text-[#B154F9] transition-colors font-normal">
                  PayPal Verification
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-[32px] flex flex-col sm:flex-row items-center justify-between gap-[16px] text-[14px] text-[#6C6B6B] font-normal">
          <span>&copy; {new Date().getFullYear()} Scope2Pay AI Inc. All rights reserved.</span>
          <span>Designed with Krepling Quiet Atelier Aesthetic</span>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";
