import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M4.5 9.5H4.5C5.88071 9.5 7 10.6193 7 12V22C7 23.3807 5.88071 24.5 4.5 24.5H4.5C3.11929 24.5 2 23.3807 2 22V12C2 10.6193 3.11929 9.5 4.5 9.5Z" fill="hsl(var(--primary))"/>
                <path d="M11.5 9.5H11.5C12.8807 9.5 14 10.6193 14 12V22C14 23.3807 12.8807 24.5 11.5 24.5H11.5C10.1193 24.5 9 23.3807 9 22V12C9 10.6193 10.1193 9.5 11.5 9.5Z" fill="hsl(var(--primary))"/>
                <path d="M18.5 9.5H18.5C19.8807 9.5 21 10.6193 21 12V17C21 18.3807 19.8807 19.5 18.5 19.5H18.5C17.1193 19.5 16 18.3807 16 17V12C16 10.6193 17.1193 9.5 18.5 9.5Z" fill="hsl(var(--primary))"/>
                <circle cx="18.5" cy="23" r="2.5" fill="hsl(var(--accent))"/>
                <circle cx="18.5" cy="29" r="2.5" fill="hsl(var(--accent))"/>
                <circle cx="25.5" cy="29" r="2.5" fill="hsl(var(--destructive))"/>
            </svg>
            <span className="text-2xl font-semibold text-foreground">
                AttendEase
            </span>
        </div>
    );
}
