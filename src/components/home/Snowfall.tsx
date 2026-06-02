import { useEffect, useMemo, useState } from 'react'

interface Flake {
  left: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export default function Snowfall() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 200)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const flakes = useMemo<Flake[]>(() => {
    const count = 40
    return Array.from({ length: count }, (_, i) => {
      const size = Math.random() * 6 + 4 // 4 - 10 px
      return {
        left: Math.random() * 100, // vw
        size,
        duration: 4 + Math.random() * 4, // 4 - 8 s
        delay: Math.random() * 2, // 0 - 2 s
        opacity: 0.35 + Math.random() * 0.4, // 0.35 - 0.75
      }
    })
  }, [])

  if (!visible) return null

  return (
    <div className="snowfall-container pointer-events-none">
      {flakes.map((f, idx) => (
        <span
          key={idx}
          className="snowflake"
          style={{
            left: `${f.left}vw`,
            width: f.size,
            height: f.size,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            opacity: f.opacity,
          }}
        />
      ))}
    </div>
  )
}







