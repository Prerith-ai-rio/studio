"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, Calendar, UserCircle, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";


const navItems = [
  { href: "/dashboard", icon: Home, label: "Home" },
  { href: "/users", icon: Users, label: "Manage" },
  { href: "/history", icon: Calendar, label: "Calendar" },
];

export function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    // In a real app, you'd clear session/token here
    router.push("/login")
  }

  return (
    <nav className="fixed bottom-4 left-0 right-0 h-16 z-50 flex justify-center">
      <div className="grid h-full w-[calc(100%-2rem)] max-w-lg grid-cols-4 mx-auto bg-card/80 backdrop-blur-lg border rounded-full shadow-lg">
        {navItems.map((item) => {
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
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className={cn(
                    "inline-flex flex-col items-center justify-center px-5 font-medium group text-muted-foreground hover:text-primary transition-colors cursor-pointer",
                    "last:rounded-r-full hover:bg-muted/50"
                )}>
                    <UserCircle className="w-6 h-6 mb-1" />
                    <span className="text-xs">Profile</span>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="top" className="w-72 p-2 mb-2">
                <DropdownMenuLabel className="p-2">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">Admin</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            prerithm87@gmail.com
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer p-2">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer p-2">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
