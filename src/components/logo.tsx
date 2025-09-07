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
        <rect x="20" y="10" width="12" height="60" rx="6" fill="hsl(var(--primary))"/>
        <rect x="40" y="10" width="12" height="60" rx="6" fill="hsl(var(--primary))"/>
        <rect x="60" y="10" width="12" height="40" rx="6" fill="hsl(var(--primary))"/>
        <circle cx="85" cy="25" r="6" fill="hsl(var(--accent))"/>
        <circle cx="85" cy="45" r="6" fill="hsl(var(--accent))"/>
        <circle cx="85" cy="65" r="6" fill="hsl(var(--destructive))"/>
      </svg>
      <span className="text-2xl font-bold text-foreground">AttendEase</span>
    </div>
  );
};

export default Logo;
