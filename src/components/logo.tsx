import React from 'react';
import { cn } from "@/lib/utils";

export interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 80" className="h-10 w-auto">
        <rect x="0" y="10" width="12" height="60" rx="6" fill="hsl(var(--primary))"/>
        <rect x="25" y="10" width="12" height="60" rx="6" fill="hsl(var(--primary))"/>
        <rect x="50" y="10" width="12" height="30" rx="6" fill="hsl(var(--primary))"/>
        <rect x="75" y="10" width="12" height="45" rx="6" fill="hsl(var(--primary))"/>
        <circle cx="110" cy="25" r="8" fill="hsl(var(--accent))"/>
        <circle cx="110" cy="45" r="8" fill="hsl(var(--accent))"/>
        <circle cx="110" cy="65" r="8" fill="hsl(var(--destructive))"/>
      </svg>
      <span className="text-2xl font-bold text-foreground">AttendEase</span>
    </div>
  );
};

export default Logo;
