import { useEffect, useRef } from 'react'
import './CursorFX.css'

const BITS = ['0', '1', '0', '1', '</>', '{ }']

function spawn(cls, x, y) {
  const el = document.createElement('span')
  el.className = cls
  el.style.left = `${x}px`
  el.style.top = `${y}px`
  document.body.appendChild(el)
  return el
}

function burst(x, y) {
  const ease = 'cubic-bezier(0.22, 1, 0.36, 1)'

  const ring = spawn('fx-ring', x, y)
  ring.animate(
    [
      { transform: 'translate(-50%, -50%) rotate(0deg) scale(0.3)', opacity: 1 },
      { transform: 'translate(-50%, -50%) rotate(45deg) scale(1)', opacity: 0 },
    ],
    { duration: 550, easing: ease }
  ).onfinish = () => ring.remove()

  ;[0, 90, 180, 270].forEach((deg) => {
    const line = spawn('fx-line', x, y)
    line.animate(
      [
        { transform: `rotate(${deg}deg) translateX(6px) scaleX(0.2)`, opacity: 1 },
        { transform: `rotate(${deg}deg) translateX(34px) scaleX(1)`, opacity: 0 },
      ],
      { duration: 450, easing: ease }
    ).onfinish = () => line.remove()
  })

  for (let i = 0; i < 5; i++) {
    const bit = spawn('fx-char', x, y)
    bit.textContent = BITS[Math.floor(Math.random() * BITS.length)]
    const dx = (Math.random() - 0.5) * 70
    const dy = -40 - Math.random() * 50
    bit.animate(
      [
        { transform: 'translate(-50%, -50%)', opacity: 0 },
        { transform: `translate(calc(-50% + ${dx * 0.3}px), calc(-50% + ${dy * 0.3}px))`, opacity: 1, offset: 0.25 },
        { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`, opacity: 0 },
      ],
      { duration: 800 + Math.random() * 300, delay: i * 40, easing: 'ease-out', fill: 'backwards' }
    ).onfinish = () => bit.remove()
  }
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