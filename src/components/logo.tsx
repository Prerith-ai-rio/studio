import React from "react";
import { cn } from "@/lib/utils";

export interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 80"
        className="h-10 w-auto"
      >
        {/* Blue bars */}
        <rect x="0" y="10" width="12" height="60" rx="6" fill="#2563eb" />
        <rect x="20" y="10" width="12" height="60" rx="6" fill="#2563eb" />
        <rect x="40" y="10" width="12" height="60" rx="6" fill="#2563eb" />
        <rect x="60" y="10" width="12" height="60" rx="6" fill="#2563eb" />
      </svg>

      <span className="text-2xl font-bold text-foreground">Attendease</span>
    </div>
  );
};

export default Logo;
