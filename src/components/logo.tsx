import React from "react";
import { cn } from "@/lib/utils";

export interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="8" fill="#E2E8F0"/>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="14" fill="#4A5568">ing</text>
      </svg>

      <span className="text-2xl font-bold text-foreground">Attendease</span>
    </div>
  );
};

export default Logo;
