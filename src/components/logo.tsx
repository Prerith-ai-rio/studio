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
                className="text-primary"
            >
                <path d="M6 5H10V37H6V5Z" fill="currentColor" />
                <path d="M14 5H18V37H14V5Z" fill="currentColor" />
                <path d="M22 5H26V21H22V5Z" fill="currentColor" />
                <path d="M30 5H34V13H30V5Z" fill="currentColor" />
                <circle cx="24" cy="29" r="4" fill="#69B578" />
                <circle cx="32" cy="21" r="4" fill="#FD9A8B" />
            </svg>
            <span className="text-2xl font-semibold text-foreground">
                AttendEase
            </span>
        </div>
    );
}
