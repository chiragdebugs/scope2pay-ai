import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "muted" | "accent" | "dark";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "neutral",
  size = "md",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center gap-[6px] font-normal rounded-[8px] select-none tracking-[0.02em]";

  const variantStyles = {
    // Secondary mist gray surface
    neutral: "bg-[#F1F1F1] text-black border border-black/10",
    // Helper / inactive pill
    muted: "bg-[#F1F1F1] text-[#6C6B6B] border border-[#B3B3B3]",
    // Sole violet accent state
    accent: "bg-white text-[#B154F9] border border-[#B154F9]",
    // Dark inverted badge
    dark: "bg-[#171717] text-white border border-transparent",
  };

  const sizeStyles = {
    sm: "text-[12px] px-[8px] py-[3px]",
    md: "text-[14px] px-[12px] py-[5px]",
  };

  return (
    <span
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </span>
  );
};

Badge.displayName = "Badge";
