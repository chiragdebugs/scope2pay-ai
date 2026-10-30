import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl";
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  className,
  maxWidth = "md",
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthStyles = {
    sm: "max-w-[420px]",
    md: "max-w-[560px]",
    lg: "max-w-[720px]",
    xl: "max-w-[900px]",
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-[16px] animate-in fade-in duration-150"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-[4px] transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog — 14px radius strictly per DESIGN.md */}
      <div
        className={cn(
          "relative z-10 w-full bg-white text-black rounded-[14px]",
          "border border-black/10 p-[28px] overflow-hidden",
          maxWidthStyles[maxWidth],
          className
        )}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-[16px] pb-[16px] border-b border-black/8">
          <div>
            {title && (
              <h3 className="text-[24px] font-normal tracking-[0.01em] text-black">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-[16px] text-[#6C6B6B] mt-[4px] font-normal leading-[1.3]">
                {description}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-black hover:text-[#B154F9] p-[6px] rounded-[8px] transition-colors focus-visible:outline focus-visible:outline-1.5 focus-visible:outline-[#B154F9] cursor-pointer"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        <div className="py-[20px]">{children}</div>
      </div>
    </div>
  );
};

Modal.displayName = "Modal";
