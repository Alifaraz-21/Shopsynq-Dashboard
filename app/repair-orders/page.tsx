'use client'

import { useState } from 'react'
import { Plus, Search, Clock, ChevronRight } from 'lucide-react'

type RepairOrder = {
  id: string
  customer: string
  vehicle: string
  status: string
  age: string
}

const filters = [
  'All',
  'Active',
  'Waiting Parts',
  'Waiting',
  'Estimates',
  'Complete',
  'Invoiced',
  'Paid',
  'Void',
]

const repairOrders: RepairOrder[] = [
  { id: '#2', customer: 'Michael Johnson', vehicle: '2021 Ford F-150', status: 'Active', age: '32m' },
  { id: '#1', customer: 'John Smith', vehicle: '2022 Toyota Corolla', status: 'Active', age: '36m' },
]

export default function RepairOrders() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="p-6">
        <div className="page-header">
          <div>
            <h1 className="page-title">Repair Orders</h1>
            <p className="text-xs text-muted mt-0.5">{repairOrders.length} total</p>
          </div>
          <button className="btn-primary" type="button">
            <Plus width={15} height={15} aria-hidden="true" />
            New Repair Order
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-5">
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 flex-shrink-0">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={
                  filter === activeFilter
                    ? 'px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors bg-accent/15 text-accent border border-accent/30'
                    : 'px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors text-muted-light hover:text-white hover:bg-surface-hover'
                }
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="relative flex-1 w-full sm:w-auto sm:max-w-xs ml-auto">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
              width={13}
              height={13}
              aria-hidden="true"
            />
            <input type="text" className="input pl-8 py-1.5 text-xs" placeholder="Search ROs..." />
          </div>
        </div>

        <div className="bg-surface-card rounded-xl border border-surface-border overflow-hidden">
          <div className="hidden sm:grid grid-cols-[56px_1fr_1fr_120px_100px_48px] gap-4 px-4 py-2 border-b border-surface-border">
            <span className="text-2xs font-semibold text-muted uppercase tracking-wider">RO #</span>
            <span className="text-2xs font-semibold text-muted uppercase tracking-wider">Customer</span>
            <span className="text-2xs font-semibold text-muted uppercase tracking-wider">Vehicle</span>
            <span className="text-2xs font-semibold text-muted uppercase tracking-wider">Status</span>
            <span className="text-2xs font-semibold text-muted uppercase tracking-wider text-right">Age</span>
            <span></span>
          </div>

          {repairOrders.map((ro, i) => (
            <div
              key={ro.id}
              className={`table-row-hover grid grid-cols-[56px_1fr_auto] sm:grid-cols-[56px_1fr_1fr_120px_100px_48px] gap-4 items-center px-4 py-3.5 ${
                i === repairOrders.length - 1 ? 'border-b-0' : ''
              }`}
            >
              <span className="text-sm font-mono font-bold text-accent">{ro.id}</span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-white truncate">{ro.customer}</p>
                <p className="text-xs text-muted truncate sm:hidden">{ro.vehicle}</p>
              </div>
              <div className="hidden sm:block min-w-0">
                <p className="text-sm text-muted-light truncate">{ro.vehicle}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="badge text-accent bg-accent/10">{ro.status}</span>
              </div>
              <div className="hidden sm:flex items-center justify-end gap-1 text-xs text-muted">
                <Clock width={11} height={11} aria-hidden="true" />
                {ro.age}
              </div>
              <div className="hidden sm:flex justify-end">
                <ChevronRight className="text-muted" width={15} height={15} aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
