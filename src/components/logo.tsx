import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            <svg
                width="34"
                height="34"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="42" height="42" rx="8" fill="hsl(var(--primary))"/>
                <circle cx="13" cy="13" r="4" fill="#69B578" />
                <circle cx="29" cy="29" r="4" fill="#69B578" />
            </svg>
            <span className="text-2xl font-semibold text-foreground">
                AttendEase
            </span>
        </div>
    );
}
