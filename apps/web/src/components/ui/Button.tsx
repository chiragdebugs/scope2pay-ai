import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outlined" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "filled",
      size = "md",
      fullWidth = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-normal transition-colors focus-visible:outline focus-visible:outline-1.5 focus-visible:outline-[#B154F9] disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer";

    const variantStyles = {
      // Primary action CTA: background #b154f9, text #ffffff, radius 8px
      filled:
        "bg-[#B154F9] text-white hover:bg-[#a03ee8] active:bg-[#902bd8] border border-transparent rounded-[8px]",
      // Secondary action: background #ffffff, border 1.5px #b154f9, text #b154f9, radius 8px
      outlined:
        "bg-white border-[1.5px] border-[#B154F9] text-[#B154F9] hover:bg-[#F1F1F1] active:bg-[#e8e8e8] rounded-[8px]",
      // Nav links & subtle actions: text #000000, hover shifts to #b154f9, underline only on hover
      ghost:
        "bg-transparent text-black hover:text-[#B154F9] hover:underline rounded-[8px]",
      // Secondary surface button: background #f1f1f1, border 1px #b3b3b3
      secondary:
        "bg-[#F1F1F1] text-black border border-[#B3B3B3] hover:border-black rounded-[8px]",
    };

    const sizeStyles = {
      sm: "text-[14px] px-[14px] py-[8px]",
      md: "text-[16px] px-[20px] py-[14px]",
      lg: "text-[18px] px-[24px] py-[16px]",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
