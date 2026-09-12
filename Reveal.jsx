import { useEffect, useRef, useState } from 'react'

// Wraps content that should fade + slide in the first time it scrolls
// into view. Fires once, then leaves the content alone.
export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
      style={{ animationDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
