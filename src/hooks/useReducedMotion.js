import { useState, useEffect } from 'react'

export function useReducedMotion() {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  const [reduced, setReduced] = useState(mediaQuery.matches)

  useEffect(() => {
    const handler = (e) => setReduced(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [mediaQuery])

  return reduced
}
