import React from "react";
import { cn } from "@/lib/utils";

export interface DecorativeObjectProps {
  type?: "cube" | "sphere" | "torus" | "pill";
  color?: "lavender" | "mint" | "coral" | "butter" | "sky";
  size?: number;
  className?: string;
  rotate?: number;
}

export const DecorativeObject: React.FC<DecorativeObjectProps> = ({
  type = "sphere",
  color = "lavender",
  size = 120,
  className,
  rotate = 0,
}) => {
  const colorGradients = {
    lavender: {
      from: "#D8B4F8",
      to: "#B154F9",
      accent: "#F0E4FF",
    },
    mint: {
      from: "#A7F3D0",
      to: "#34D399",
      accent: "#E6FBF2",
    },
    coral: {
      from: "#FCA5A5",
      to: "#F87171",
      accent: "#FEE2E2",
    },
    butter: {
      from: "#FDE68A",
      to: "#FBBF24",
      accent: "#FEF9C3",
    },
    sky: {
      from: "#BAE6FD",
      to: "#38BDF8",
      accent: "#E0F2FE",
    },
  };

  const grad = colorGradients[color];
  const gradId = `grad-${type}-${color}-${Math.random().toString(36).substr(2, 5)}`;

  return (
    <div
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
      className={cn("pointer-events-none select-none inline-block", className)}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Soft ambient gradient for pastel 3D lighting */}
          <radialGradient
            id={gradId}
            cx="30%"
            cy="25%"
            r="70%"
            fx="30%"
            fy="25%"
          >
            <stop offset="0%" stopColor={grad.accent} />
            <stop offset="50%" stopColor={grad.from} />
            <stop offset="100%" stopColor={grad.to} />
          </radialGradient>
        </defs>

        {type === "sphere" && (
          <circle cx="50" cy="50" r="44" fill={`url(#${gradId})`} />
        )}

        {type === "cube" && (
          <g>
            {/* Top face */}
            <polygon
              points="50,14 84,32 50,50 16,32"
              fill={grad.accent}
            />
            {/* Left face */}
            <polygon
              points="16,32 50,50 50,86 16,68"
              fill={grad.from}
            />
            {/* Right face */}
            <polygon
              points="50,50 84,32 84,68 50,86"
              fill={grad.to}
            />
          </g>
        )}

        {type === "torus" && (
          <path
            d="M50 10 C27.9 10 10 27.9 10 50 C10 72.1 27.9 90 50 90 C72.1 90 90 72.1 90 50 C90 27.9 72.1 10 50 10 Z M50 30 C61 30 70 39 70 50 C70 61 61 70 50 70 C39 70 30 61 30 50 C30 39 39 30 50 30 Z"
            fill={`url(#${gradId})`}
            fillRule="evenodd"
          />
        )}

        {type === "pill" && (
          <rect
            x="14"
            y="30"
            width="72"
            height="40"
            rx="20"
            fill={`url(#${gradId})`}
          />
        )}
      </svg>
    </div>
  );
};

DecorativeObject.displayName = "DecorativeObject";
