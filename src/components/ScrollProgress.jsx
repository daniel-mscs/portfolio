import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setPct(h > 0 ? Math.round((window.scrollY / h) * 100) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="scroll-bar" style={{ transform: `scaleX(${pct / 100})`, width: '100%' }} />
      <div className="scroll-pct">{String(pct).padStart(2, '0')}%</div>
    </>
  )
}