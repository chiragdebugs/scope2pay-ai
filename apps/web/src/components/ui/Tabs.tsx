import React from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  badge?: string | number;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className,
}) => {
  return (
    <div
      role="tablist"
      className={cn("flex flex-wrap items-center gap-[8px]", className)}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              "px-[20px] py-[12px] text-[16px] font-normal rounded-[8px] transition-colors cursor-pointer select-none",
              "focus-visible:outline focus-visible:outline-1.5 focus-visible:outline-[#B154F9]",
              isActive
                ? "bg-white text-black border-[1.5px] border-[#B154F9]"
                : "bg-white text-black border border-[#B3B3B3] hover:border-black"
            )}
          >
            <span className="flex items-center gap-[8px]">
              {tab.label}
              {tab.badge !== undefined && (
                <span
                  className={cn(
                    "text-[12px] px-[6px] py-[1px] rounded-[4px]",
                    isActive
                      ? "bg-[#F1F1F1] text-[#B154F9]"
                      : "bg-[#F1F1F1] text-[#6C6B6B]"
                  )}
                >
                  {tab.badge}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
};

Tabs.displayName = "Tabs";
