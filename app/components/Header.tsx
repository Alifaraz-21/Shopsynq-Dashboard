'use client'

import { Menu, Bell } from 'lucide-react'

export default function Header() {
  return (
    <header className="h-14 border-b border-surface-border bg-surface flex items-center px-4 gap-4 flex-shrink-0">
      <button className="lg:hidden btn-ghost p-2" aria-label="Open menu" type="button">
        <Menu width={18} height={18} aria-hidden="true" />
      </button>
      <div className="flex-1" />
      <div className="flex items-center gap-3">
        <div className="relative">
          <button className="btn-ghost p-2 relative" aria-label="Notifications" type="button">
            <Bell width={16} height={16} aria-hidden="true" />
          </button>
        </div>
        <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
          <span className="text-xs font-bold text-accent uppercase">JD</span>
        </div>
      </div>
    </header>
  )
}
