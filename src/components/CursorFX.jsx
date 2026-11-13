import { useEffect, useRef } from 'react'
import './CursorFX.css'

export default function CursorFX() {
  const ring = useRef(null)
  const dot = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    document.body.classList.add('has-cursor-fx')
    let x = 0, y = 0, rx = 0, ry = 0, raf

    const move = (e) => {
      x = e.clientX
      y = e.clientY
      dot.current.style.transform = `translate(${x}px, ${y}px)`
      const hover = e.target.closest('a, button')
      ring.current.classList.toggle('cursor-hover', !!hover)
    }

    const loop = () => {
      rx += (x - rx) * 0.18
      ry += (y - ry) * 0.18
      ring.current.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(loop)
    }

    const click = (e) => {
      const r = document.createElement('span')
      r.className = 'cursor-ripple'
      r.style.left = `${e.clientX}px`
      r.style.top = `${e.clientY}px`
      document.body.appendChild(r)
      setTimeout(() => r.remove(), 600)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', click)
    loop()

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', click)
      cancelAnimationFrame(raf)
      document.body.classList.remove('has-cursor-fx')
    }
  }, [])

  return (
    <>
      <div ref={ring} className="cursor-ring" />
      <div ref={dot} className="cursor-dot" />
    </>
  )
}