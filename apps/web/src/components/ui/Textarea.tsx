import React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, helperText, error, id, rows = 4, ...props }, ref) => {
    const textareaId =
      id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex flex-col gap-[6px] w-full text-left">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-[16px] text-black font-normal tracking-[0.01em]"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          rows={rows}
          className={cn(
            "w-full bg-white text-black font-normal text-[16px] px-[16px] py-[12px] rounded-[8px]",
            "border border-[#B3B3B3] transition-colors placeholder:text-[#6C6B6B] resize-y",
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

Textarea.displayName = "Textarea";
