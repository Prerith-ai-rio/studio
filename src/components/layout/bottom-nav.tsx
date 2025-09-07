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
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-card border-t z-50">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
        {navItems.map((item) => {
           const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "inline-flex flex-col items-center justify-center px-5 hover:bg-muted font-medium group",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground"
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
