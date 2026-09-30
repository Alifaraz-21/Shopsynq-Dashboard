'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Plus, ClipboardList, FileText, Clock, Sun, LogOut } from 'lucide-react'

const navItems = [
  { href: '/', label: 'My Jobs', icon: ClipboardList },
  { href: '/repair-orders', label: 'Repair Orders', icon: FileText },
  { href: '/time-clock', label: 'Time Clock', icon: Clock },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex w-56 flex-shrink-0 flex-col">
      <div className="flex flex-col h-full bg-surface-elevated border-r border-surface-border">
        <div className="h-14 flex items-center justify-between px-4 border-b border-surface-border flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
              <Image
                src="/logo.png"
                alt="ShopSynq"
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="leading-none">
              <p className="text-[15px] font-bold tracking-tight">
                <span className="text-white">Shop</span>
                <span className="text-accent">Synq</span>
              </p>
              <p className="text-[10px] text-muted font-medium tracking-[0.12em] uppercase mt-0.5">
                Shop Management, Reimagined
              </p>
            </div>
          </div>
        </div>

        <div className="px-3 pt-4 pb-2">
          <button className="btn-primary w-full text-sm font-semibold" type="button">
            <Plus className="w-[15px] h-[15px]" aria-hidden="true" />
            New Repair Order
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-3 space-y-0.5">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={active ? 'nav-item-active' : 'nav-item'}
                aria-current={active ? 'page' : undefined}
              >
                <Icon className="flex-shrink-0" width={16} height={16} aria-hidden="true" />
                {label}
              </Link>
            )
          })}
        </nav>

        <div className="border-t border-surface-border p-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30 flex-shrink-0 flex items-center justify-center">
              <span className="text-xs font-bold text-accent">T1</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">John Doe</p>
              <p className="text-2xs text-muted capitalize">owner</p>
            </div>
            <button
              className="p-1.5 rounded hover:bg-surface-hover text-muted hover:text-white transition-colors"
              title="Switch to light mode"
              type="button"
            >
              <Sun width={14} height={14} aria-hidden="true" />
            </button>
            <button
              className="p-1.5 rounded hover:bg-surface-hover text-muted hover:text-white transition-colors"
              title="Sign out"
              type="button"
            >
              <LogOut width={14} height={14} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
