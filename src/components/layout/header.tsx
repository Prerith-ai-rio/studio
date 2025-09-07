"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bell, Settings } from "lucide-react"
import Logo from "@/components/logo"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-4 bg-card border-b shadow-sm">
      <Link href="/dashboard" className="flex items-center gap-2">
        <Logo />
      </Link>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
        </Button>
        <Link href="/settings">
            <Button variant="ghost" size="icon" className="rounded-full">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
            </Button>
        </Link>
      </div>
    </header>
  )
}
