import { useEffect, useRef } from 'react'
import './CursorFX.css'

const COLORS = ['#6ee7b7', '#F5A623', '#22d3ee', '#a78bfa', '#f472b6']
const CHARS = ['{', '}', '</>', '0', '1', ';', '=>', '()', '#', '*']

function burst(x, y) {
  const total = 18
  for (let i = 0; i < total; i++) {
    const el = document.createElement('span')
    const isChar = i % 2 === 0
    const color = COLORS[Math.floor(Math.random() * COLORS.length)]

    el.className = isChar ? 'fx-char' : 'fx-dot'
    if (isChar) el.textContent = CHARS[Math.floor(Math.random() * CHARS.length)]
    el.style.left = `${x}px`
    el.style.top = `${y}px`
    el.style.color = color
    el.style.background = isChar ? 'transparent' : color
    el.style.boxShadow = isChar ? 'none' : `0 0 8px ${color}`
    document.body.appendChild(el)

    const angle = (Math.PI * 2 * i) / total + Math.random() * 0.5
    const dist = 40 + Math.random() * 70
    const dx = Math.cos(angle) * dist
    const dy = Math.sin(angle) * dist

    el.animate(
      [
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
        { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy + 20}px)) scale(0.3) rotate(${Math.random() * 180}deg)`, opacity: 0 },
      ],
      { duration: 700 + Math.random() * 300, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
    ).onfinish = () => el.remove()
  }

  const flash = document.createElement('span')
  flash.className = 'fx-flash'
  flash.style.left = `${x}px`
  flash.style.top = `${y}px`
  document.body.appendChild(flash)
  flash.animate(
    [{ transform: 'translate(-50%, -50%) scale(0)', opacity: 0.9 }, { transform: 'translate(-50%, -50%) scale(1)', opacity: 0 }],
    { duration: 500, easing: 'ease-out' }
  ).onfinish = () => flash.remove()
}

export default function CursorFX() {
  const glow = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const fine = window.matchMedia('(pointer: fine)').matches

    let x = -500, y = -500, gx = -500, gy = -500, raf

    const move = (e) => { x = e.clientX; y = e.clientY }
    const loop = () => {
      gx += (x - gx) * 0.12
      gy += (y - gy) * 0.12
      if (glow.current) glow.current.style.transform = `translate(${gx}px, ${gy}px)`
      raf = requestAnimationFrame(loop)
    }
    const click = (e) => burst(e.clientX, e.clientY)

    if (fine) {
      window.addEventListener('mousemove', move)
      loop()
    }
    window.addEventListener('pointerdown', click)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('pointerdown', click)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={glow} className="fx-glow" />
}