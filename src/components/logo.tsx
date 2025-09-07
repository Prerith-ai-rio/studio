import React from 'react';
import { cn } from '@/lib/utils';

export interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn('flex items-center', className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 80"
        className="h-8 w-auto"
      >
        <rect x="0" y="10" width="12" height="60" rx="6" fill="hsl(var(--primary))" />
        <rect x="20" y="10" width="12" height="60" rx="6" fill="hsl(var(--primary))" />
        <rect x="40" y="25" width="12" height="45" rx="6" fill="hsl(var(--primary))" />
        <rect x="60" y="40" width="12" height="30" rx="6" fill="hsl(var(--primary))" />
      </svg>

      <span className="text-xl font-bold text-foreground">Attendease</span>
    </div>
  );
};

export default Logo;
