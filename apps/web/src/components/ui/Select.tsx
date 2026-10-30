import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  error?: string;
  options?: SelectOption[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, helperText, error, id, options = [], children, ...props }, ref) => {
    const selectId =
      id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex flex-col gap-[6px] w-full text-left">
        {label && (
          <label
            htmlFor={selectId}
            className="text-[16px] text-black font-normal tracking-[0.01em]"
          >
            {label}
          </label>
        )}
        <div className="relative w-full">
          <select
            id={selectId}
            ref={ref}
            className={cn(
              "w-full bg-white text-black font-normal text-[16px] px-[16px] py-[12px] pr-[40px] rounded-[8px]",
              "border border-[#B3B3B3] appearance-none transition-colors cursor-pointer",
              "focus:outline-none focus:border-[#B154F9] focus:border-[1.5px]",
              "disabled:bg-[#F1F1F1] disabled:cursor-not-allowed disabled:text-[#6C6B6B]",
              error && "border-red-500 focus:border-red-500",
              className
            )}
            {...props}
          >
            {options.length > 0
              ? options.map((opt) => (
                  <option key={opt.value} value={opt.value} className="text-black bg-white">
                    {opt.label}
                  </option>
                ))
              : children}
          </select>
          <div className="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none text-black">
            <ChevronDown size={18} strokeWidth={1.5} />
          </div>
        </div>
        {error ? (
          <span className="text-[14px] text-red-500 font-normal">{error}</span>
        ) : helperText ? (
          <span className="text-[14px] text-[#6C6B6B] font-normal">{helperText}</span>
        ) : null}
      </div>
    );
  }
);

Select.displayName = "Select";
