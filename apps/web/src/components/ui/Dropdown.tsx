import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface DropdownItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  destructive?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export interface DropdownProps {
  triggerLabel: string;
  items: DropdownItem[];
  className?: string;
  align?: "left" | "right";
}

export const Dropdown: React.FC<DropdownProps> = ({
  triggerLabel,
  items,
  className,
  align = "left",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className={cn("relative inline-block text-left", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={cn(
          "inline-flex items-center justify-between gap-[10px] px-[18px] py-[12px] text-[16px] font-normal",
          "bg-white text-black border border-[#B3B3B3] rounded-[8px] hover:border-black transition-colors select-none cursor-pointer",
          "focus-visible:outline focus-visible:outline-1.5 focus-visible:outline-[#B154F9]",
          isOpen && "border-[#B154F9] border-[1.5px]"
        )}
      >
        <span>{triggerLabel}</span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={cn("transition-transform duration-150", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className={cn(
            "absolute z-40 mt-[6px] w-[220px] rounded-[8px] bg-white border border-black/10 py-[6px]",
            align === "right" ? "right-0" : "left-0"
          )}
        >
          {items.map((item) => (
            <button
              key={item.id}
              role="menuitem"
              disabled={item.disabled}
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
              className={cn(
                "w-full flex items-center gap-[10px] px-[16px] py-[10px] text-[16px] font-normal text-left transition-colors cursor-pointer",
                item.destructive
                  ? "text-red-600 hover:bg-[#F1F1F1]"
                  : "text-black hover:bg-[#F1F1F1]",
                item.disabled && "opacity-50 cursor-not-allowed hover:bg-transparent"
              )}
            >
              {item.icon && <span className="text-black">{item.icon}</span>}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.displayName = "Dropdown";
