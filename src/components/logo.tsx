
import React from "react";

export interface LogoProps {
  width?: number;
  height?: number;
  title?: string;
  className?: string;
  fillBlue?: string;
  fillGreen?: string;
  fillCoral?: string;
}

const Logo: React.FC<LogoProps> = ({
  width = 160,
  height,
  title = "AttendEase",
  className,
  fillBlue = "hsl(var(--primary))",
  fillGreen = "hsl(var(--accent))",
  fillCoral = "hsl(var(--destructive))",
}) => {
  const aspect = 1200 / 300;
  const computedHeight = height ?? Math.round(width / aspect);
  const wordmarkFill = "hsl(var(--sidebar-foreground))";

  return (
    <svg
      role="img"
      aria-label={title}
      width={width}
      height={computedHeight}
      viewBox="0 0 1200 300"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g className="group-data-[collapsible=icon]:hidden">
        <title>{title}</title>
        <g transform="translate(60,40)">
          <rect x="0" y="0" width="40" height="220" rx="20" fill={fillBlue} />
          <rect x="80" y="0" width="40" height="220" rx="20" fill={fillBlue} />
          <rect x="160" y="0" width="40" height="120" rx="20" fill={fillBlue} />
          <circle cx="60" cy="250" r="22" fill={fillGreen} />
          <circle cx="130" cy="250" r="22" fill={fillGreen} />
          <circle cx="200" cy="250" r="22" fill={fillCoral} />
        </g>
        <g fill={wordmarkFill} transform="translate(300,215) scale(1.05)">
          <path d="M60-20c0-38 26-64 64-64 21 0 38 8 49 22l10-18h32v160H168v-20c-12 14-29 22-50 22-38 0-58-22-58-56 0-35 22-56 64-56h44c-2-22-16-34-38-34-18 0-31 9-35 24H60zm116 60v-28h-40c-24 0-34 8-34 24 0 14 10 24 30 24 18 0 34-8 44-20z" />
          <path d="M260-40v100h-36V-40h-22v-32h22v-28h36v28h32v32h-32z" />
          <path d="M332-40v100h-36V-40h-22v-32h22v-28h36v28h32v32h-32z" />
          <path d="M370 20c0-36 28-64 68-64 41 0 68 27 68 66v6h-100c4 16 18 26 38 26 16 0 28-6 34-16l26 16c-12 20-36 32-62 32-42 0-72-28-72-66zm36-16h64c-4-16-16-26-34-26-19 0-30 10-30 26z" />
          <path d="M594-40v100h-36V-40h-22v-32h22v-10c0-34 20-52 56-52 10 0 18 1 24 2v32c-6-1-12-2-18-2-16 0-26 8-26 26v4h34v32h-34z" />
          <path d="M640 20c0-36 28-64 68-64 41 0 68 27 68 66v6h-100c4 16 18 26 38 26 16 0 28-6 34-16l26 16c-12 20-36 32-62 32-42 0-72-28-72-66zm36-16h64c-4-16-16-26-34-26-19 0-30 10-30 26z" />
          <path d="M884-40v20c10-16 26-24 46-24 36 0 58 22 58 60v84h-36V18c0-20-12-34-30-34-20 0-34 16-34 38v76h-36V-72h36v32z" />
        </g>
      </g>
      <g className="hidden group-data-[collapsible=icon]:block" transform="scale(3.5) translate(40, 20)">
        <g>
          <rect x="0" y="0" width="40" height="70" rx="20" fill={fillBlue} />
          <rect x="50" y="0" width="40" height="70" rx="20" fill={fillBlue} />
          <circle cx="20" cy="85" r="10" fill={fillGreen} />
          <circle cx="70" cy="85" r="10" fill={fillCoral} />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
