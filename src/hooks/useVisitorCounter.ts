import { useState, useEffect } from 'react'

const COUNTED_KEY = 'aa_counted'

// One request per page load, shared by every component using the hook.
// A visit is counted once per browser session (refreshes just read the count).
let pending: Promise<number> | null = null

function loadCount(): Promise<number> {
  if (!pending) {
    let counted = false
    try {
      counted = sessionStorage.getItem(COUNTED_KEY) === '1'
    } catch { /* storage unavailable: treat as a new visit */ }

    pending = fetch('/api/visits', { method: counted ? 'GET' : 'POST' })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then(({ count }: { count: number }) => {
        try {
          sessionStorage.setItem(COUNTED_KEY, '1')
        } catch { /* ignore */ }
        return count
      })
      .catch(() => 0)
  }
  return pending
}

export function useVisitorCounter() {
  const [visits, setVisits] = useState<number>(0)

  useEffect(() => {
    let active = true
    loadCount().then((count) => active && setVisits(count))
    return () => {
      active = false
    }
  }, [])

  return visits
}
