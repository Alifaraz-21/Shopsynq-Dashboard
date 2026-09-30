import { ClipboardList, Wrench, UserPlus } from 'lucide-react'

type Job = {
  id: string
  customer: string
  vehicle: string
  note: string
  time: string
}

const availableJobs: Job[] = [
  {
    id: '#2',
    customer: 'Michael Johnson',
    vehicle: '2021 Ford F-150',
    note: 'Check engine light is illuminated. Vehicle hesitates when accelerating.',
    time: 'just now',
  },
  {
    id: '#1',
    customer: 'John Smith',
    vehicle: '2022 Toyota Corolla',
    note: 'Check engine light is on and vehicle runs rough at idle. Brakes squeak when stopping.',
    time: 'just now',
  },
]

export default function Home() {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="p-6 max-w-3xl space-y-8">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="page-title">My Jobs</h1>
              <p className="text-xs text-muted mt-0.5">Open ROs assigned to you</p>
            </div>
          </div>
          <div className="card text-center py-10">
            <ClipboardList
              className="text-muted mx-auto mb-2"
              width={28}
              height={28}
              aria-hidden="true"
            />
            <p className="text-sm text-muted-light">No jobs assigned to you</p>
            <p className="text-xs text-muted mt-1">
              Claim a job below, or ask your manager to assign one
            </p>
          </div>
        </div>

        <div>
          <div className="mb-3">
            <h2 className="text-base font-semibold text-white">Available Jobs</h2>
            <p className="text-xs text-muted mt-0.5">Unassigned — tap Claim to take one</p>
          </div>
          <div className="space-y-2">
            {availableJobs.map((job) => (
              <div className="card transition-colors hover:border-accent/30" key={job.id}>
                <div className="flex items-start gap-4" style={{ cursor: 'pointer' }}>
                  <div className="flex-shrink-0 pt-0.5">
                    <Wrench className="text-muted mt-0.5" width={16} height={16} aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold text-accent">{job.id}</span>
                      <span className="badge text-accent bg-accent/10">Active</span>
                    </div>
                    <p className="text-sm font-semibold text-white">{job.customer}</p>
                    <p className="text-xs text-muted-light mt-0.5">{job.vehicle}</p>
                    <p className="text-xs text-muted mt-1.5 truncate">{job.note}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <p className="text-xs text-muted">{job.time}</p>
                    <button
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20 transition-colors disabled:opacity-40"
                      type="button"
                    >
                      <UserPlus width={11} height={11} aria-hidden="true" />
                      Claim
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
