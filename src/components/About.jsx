import { useEffect, useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './About.module.css'

function CoffeeCup() {
  const [fill, setFill] = useState(0)
  const [overflow, setOverflow] = useState(false)
  const [reset, setReset] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    let timeout
    let interval

    function animate() {
      setFill(0)
      setOverflow(false)
      setReset(false)

      let current = 0
      interval = setInterval(() => {
        current += 2
        setFill(current)
        if (current >= 100) {
          clearInterval(interval)
          setOverflow(true)
          timeout = setTimeout(() => {
            setReset(true)
            timeout = setTimeout(animate, 600)
          }, 800)
        }
      }, 30)
    }

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) animate() },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)

    return () => {
      observer.disconnect()
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  const liquidColor = overflow ? '#F07B00' : '#6ee7b7'
  const cupY = 18 + (24 * (1 - fill / 100))
  const cupH = 24 * (fill / 100)

  return (
    <div ref={ref} className={styles.coffeeWrap}>
      <svg width="48" height="52" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="cupClip">
            <path d="M8 18 H36 L32 42 H12 Z" />
          </clipPath>
        </defs>

        {/* Líquido */}
        {!reset && (
          <rect
            x="8"
            y={cupY}
            width="28"
            height={cupH}
            fill={liquidColor}
            clipPath="url(#cupClip)"
          />
        )}

        {/* Corpo da xícara */}
        <path d="M8 18 H36 L32 42 H12 Z" stroke="#444" strokeWidth="1.5" fill="none" />

        {/* Alça */}
        <path d="M36 22 Q44 22 44 30 Q44 38 36 38" stroke="#444" strokeWidth="1.5" fill="none" />

        {/* Pires */}
        <line x1="6" y1="44" x2="42" y2="44" stroke="#444" strokeWidth="1.5" strokeLinecap="round" />

        {/* Vapor 1 */}
        <path
          d="M16 16 Q14 12 16 8"
          stroke="#6ee7b7"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity={fill > 60 && !reset ? 1 : 0}
          style={{ transition: 'opacity 0.4s' }}
        />
        {/* Vapor 2 */}
        <path
          d="M24 14 Q22 10 24 6"
          stroke="#6ee7b7"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity={fill > 75 && !reset ? 1 : 0}
          style={{ transition: 'opacity 0.4s' }}
        />
        {/* Vapor 3 */}
        <path
          d="M32 16 Q30 12 32 8"
          stroke="#6ee7b7"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity={fill > 90 && !reset ? 1 : 0}
          style={{ transition: 'opacity 0.4s' }}
        />
      </svg>
      <span className={styles.coffeeLabel}>café</span>
    </div>
  )
}

const STATS = [
  { num: '3', label: 'projetos' },
  { num: '1º', label: 'semestre' },
]

export default function About() {
  const [ref, visible] = useScrollReveal()

  return (
    <section
      ref={ref}
      className={`${styles.about} reveal ${visible ? 'visible' : ''}`}
    >
      <div className={styles.text}>
        <p className={styles.label}>// sobre</p>
        <p>
          Desenvolvedor web no <strong>primeiro semestre de Engenharia de Software</strong>,
          com projetos reais já no ar.
        </p>
        <p>
          Foco em <strong>sites e aplicações para negócios locais</strong> — barbearias,
          academias e pequenas empresas que precisam de presença digital de qualidade.
        </p>
        <p>
          Fora do código: <strong>Muay Thai</strong> e academia.
        </p>
      </div>
      <div className={styles.stats}>
        {STATS.map((s) => (
          <div key={s.label} className={styles.stat}>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
        <div className={styles.stat}>
          <CoffeeCup />
        </div>
      </div>
    </section>
  )
}