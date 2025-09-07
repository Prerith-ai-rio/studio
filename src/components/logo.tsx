import React from "react";
import { cn } from "@/lib/utils";

export interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="6" fill="#E2E8F0"/>
        <text x="50%" y="52%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fill="#4A5568" fontWeight="500">ing</text>
      </svg>

      <span className="text-xl font-bold text-foreground">Attendease</span>
    </div>
  );
};

export default Logo;
