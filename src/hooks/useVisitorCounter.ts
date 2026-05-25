import { useState, useEffect } from 'react'

const BASE = 10247

export function useVisitorCounter() {
  const [visits, setVisits] = useState<number>(0)

  useEffect(() => {
    let stored = parseInt(localStorage.getItem('aa_visits') || '0')
    if (!stored) {
      stored = BASE + Math.floor(Math.random() * 300)
      localStorage.setItem('aa_visits', stored.toString())
    }
    stored++
    localStorage.setItem('aa_visits', stored.toString())
    setVisits(stored)
  }, [])

  return visits
}
