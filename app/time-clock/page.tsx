import { Clock, Wrench, LogIn } from 'lucide-react'

type ActiveJob = {
  id: string
  customer: string
  vehicle: string
}

const activeJobs: ActiveJob[] = [
  { id: '#2', customer: 'Michael Johnson', vehicle: '2021 Ford F-150' },
  { id: '#1', customer: 'John Smith', vehicle: '2022 Toyota Corolla' },
]

export default function TimeClock() {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="p-6 max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="page-title">Time Clock</h1>
            <p className="text-xs text-muted mt-0.5">John Doe</p>
          </div>
        </div>

        <div className="mb-5">
          <div className="card p-0 overflow-hidden border-accent/20">
            <div className="flex items-center justify-between px-4 py-3 border-b border-surface-border bg-surface-elevated">
              <p className="text-xs font-semibold text-white">Start Timer On...</p>
              <button className="text-xs text-muted hover:text-white transition-colors" type="button">
                Cancel
              </button>
            </div>
            <div className="divide-y divide-surface-border max-h-64 overflow-y-auto">
              <button
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-surface-elevated transition-colors text-left disabled:opacity-40"
                type="button"
              >
                <Clock className="text-muted flex-shrink-0" width={14} height={14} aria-hidden="true" />
                <span className="text-sm text-white">General shop time (no RO)</span>
              </button>

              {activeJobs.map((job) => (
                <button
                  key={job.id}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-surface-elevated transition-colors text-left disabled:opacity-40"
                  type="button"
                >
                  <Wrench
                    className="text-accent flex-shrink-0"
                    width={14}
                    height={14}
                    aria-hidden="true"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-accent">{job.id}</span>
                      <span className="text-sm text-white truncate">{job.customer}</span>
                    </div>
                    <p className="text-xs text-muted truncate">{job.vehicle}</p>
                  </div>
                  <LogIn
                    className="text-success flex-shrink-0"
                    width={13}
                    height={13}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
