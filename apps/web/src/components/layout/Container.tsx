import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "full";
}

export const Container: React.FC<ContainerProps> = ({
  className,
  size = "default",
  children,
  ...props
}) => {
  const sizeStyles = {
    default: "max-w-[1200px]",
    narrow: "max-w-[800px]",
    full: "max-w-full",
  };

  return (
    <div
      className={cn("w-full mx-auto px-[24px]", sizeStyles[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};

Container.displayName = "Container";
