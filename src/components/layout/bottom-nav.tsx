"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", icon: Home, label: "Home" },
  { href: "/users", icon: Users, label: "Manage" },
  { href: "/history", icon: Calendar, label: "Calendar" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4 left-0 right-0 h-16 z-50 flex justify-center">
      <div className="grid h-full w-[calc(100%-2rem)] max-w-lg grid-cols-3 mx-auto bg-card/80 backdrop-blur-lg border rounded-full shadow-lg">
        {navItems.map((item, index) => {
           const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "inline-flex flex-col items-center justify-center px-5 font-medium group text-muted-foreground hover:text-primary transition-colors",
                isActive && "text-primary",
                 "first:rounded-l-full last:rounded-r-full hover:bg-muted/50"
              )}
            >
              <item.icon className="w-6 h-6 mb-1" />
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
