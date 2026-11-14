import { useEffect, useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './About.module.css'
import avatar from '../assets/avatar.png'

function CoffeeCup() {
  const [fill, setFill] = useState(0)
  const [overflow, setOverflow] = useState(false)
  const [reset, setReset] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    let timeout
    let interval
    let running = false

    function animate() {
      if (running) return
      running = true
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
            timeout = setTimeout(() => {
              running = false
              animate()
            }, 600)
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



const BADGE = [
  { k: 'Local', v: 'Santa Maria, RS' },
  { k: 'Idade', v: '30' },
  { k: 'No código desde', v: '2025' },
  { k: 'WhatsApp', v: '(55) 99197-5065', href: 'https://wa.me/5555991975065' },
  { k: 'E-mail', v: 'daniel.mth1996@gmail.com', href: 'mailto:daniel.mth1996@gmail.com' },
  { k: 'Hoje', v: 'Astrogildo · UNOPAR · Freelancer' },
]

const TERM = [
  { cmd: 'whoami' },
  { out: 'daniel-alves · dev web · java em formação' },
  { cmd: 'Get-Content .\\foco.txt' },
  { out: 'Back-end com Java + Spring Boot' },
  { cmd: 'ls .\\projetos' },
  { out: 'rezenha  dayforge  aferi  turnozen  ninjas  +4' },
  { cmd: 'java --version' },
  { out: 'openjdk 25' },
  { cmd: 'git commit -m "aprendendo todo dia"' },
  { out: '[main 7f3a2c1] aprendendo todo dia' },
  { cmd: 'echo $status' },
  { out: 'disponível para estágio / júnior ✔', ok: true },
]

const PROMPT = 'PS C:\\daniel>'

export function Terminal({ run }) {
  const [lines, setLines] = useState([])
  const [typing, setTyping] = useState('')

  useEffect(() => {
    if (!run) return
    let alive = true
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

    async function play() {
      while (alive) {
        setLines([])
        for (const l of TERM) {
          if (!alive) return
          if (l.cmd) {
            for (let i = 1; i <= l.cmd.length; i++) {
              if (!alive) return
              setTyping(l.cmd.slice(0, i))
              await sleep(45 + Math.random() * 45)
            }
            await sleep(250)
            setTyping('')
            setLines((prev) => [...prev, l])
          } else {
            setLines((prev) => [...prev, l])
            await sleep(450)
          }
        }
        await sleep(4000)
      }
    }

    play()
    return () => { alive = false }
  }, [run])

  return (
    <div className={styles.terminal}>
      <div className={styles.winBar}>
        <div className={styles.winTab}>
          <span className={styles.psIcon}>{'>_'}</span>
          daniel — PowerShell
          <span className={styles.tabX}>✕</span>
        </div>
        <span className={styles.winPlus}>+</span>
        <div className={styles.winCtrls}>
          <span>─</span><span>☐</span><span className={styles.winClose}>✕</span>
        </div>
      </div>

      <div className={styles.termBody}>
        {lines.map((l, i) =>
          l.cmd ? (
            <div key={i}><span className={styles.prompt}>{PROMPT}</span> {l.cmd}</div>
          ) : (
            <div key={i} className={l.ok ? styles.outOk : styles.out}>{l.out}</div>
          )
        )}
        <div>
          <span className={styles.prompt}>{PROMPT}</span> {typing}
          <span className={styles.caret} />
        </div>
      </div>
    </div>
  )
}

export default function About() {
  const [ref, visible] = useScrollReveal()

  return (
    <section
      ref={ref}
      id="sobre"
      className={styles.about}
    >
      <div className={`${styles.text} reveal from-left ${visible ? 'visible' : ''}`}>
        <p className={styles.label}>(01) // sobre</p>
        <p>
          Sou <strong>técnico de enfermagem</strong> há mais de 2 anos e estudante de{' '}
          <strong>Engenharia de Software</strong> na UNOPAR, conciliando plantões no
          hospital com estudos e projetos de código.
        </p>
        <p>
          A enfermagem me ensinou a trabalhar sob pressão, a ter atenção aos detalhes e a
          entender o problema de quem está do outro lado. É por isso que, além de criar sites
          e sistemas pra negócios locais, construo <strong>ferramentas pra área da saúde</strong>,
          como o TurnoZen e o Aferi.
        </p>
        <p>
          Hoje meu foco é <strong>back-end com Java e Spring Boot</strong>. Busco uma vaga de
          estágio ou júnior onde eu possa crescer, e no futuro trabalhar remoto.
        </p>
        <div className={styles.hobby}>
          <span>Fora do código: Muay Thai, academia e</span>
          <CoffeeCup />
        </div>
      </div>

      <div className={`${styles.side} reveal from-right ${visible ? 'visible' : ''}`}>
      <div className={styles.badgeWrap}>
        <div className={styles.strap} />
        <div className={styles.badge}>
          <div className={styles.badgeHole} />
          <div className={styles.badgeTop}>
            <span className={styles.mono}>DA</span>
            <span className={styles.badgeOrg}>dev · eng. software</span>
          </div>
          <img src={avatar} alt="Daniel Alves" className={styles.badgePhoto} />
          <div className={styles.badgeName}>Daniel Alves</div>
          <div className={styles.badgeRole}>Dev Web · Java em formação</div>
          <dl className={styles.badgeFields}>
            {BADGE.map((f) => (
              <div key={f.k}>
                <dt>{f.k}</dt>
                <dd>{f.href ? <a href={f.href} target="_blank" rel="noopener noreferrer">{f.v}</a> : f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      </div>
    </section>
  )
}