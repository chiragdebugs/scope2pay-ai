import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, helperText, error, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex flex-col gap-[6px] w-full text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[16px] text-black font-normal tracking-[0.01em]"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            "w-full bg-white text-black font-normal text-[16px] px-[16px] py-[12px] rounded-[8px]",
            "border border-[#B3B3B3] transition-colors placeholder:text-[#6C6B6B]",
            "focus:outline-none focus:border-[#B154F9] focus:border-[1.5px]",
            "disabled:bg-[#F1F1F1] disabled:cursor-not-allowed disabled:text-[#6C6B6B]",
            error && "border-red-500 focus:border-red-500",
            className
          )}
          {...props}
        />
        {error ? (
          <span className="text-[14px] text-red-500 font-normal">{error}</span>
        ) : helperText ? (
          <span className="text-[14px] text-[#6C6B6B] font-normal">{helperText}</span>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
