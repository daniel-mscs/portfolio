import { useEffect, useState } from 'react'
import styles from './Footer.module.css'

const EXTS = ['.dev', '.html', '.css', '.js', '.java']

function TypedExt() {
  const [text, setText] = useState('.dev')

  useEffect(() => {
    let i = 0
    let t
    const sleep = (ms) => new Promise((r) => { t = setTimeout(r, ms) })
    let alive = true

    async function run() {
      while (alive) {
        await sleep(1800)
        const prev = EXTS[i]
        for (let s = prev.length; s >= 0 && alive; s--) { setText(prev.slice(0, s)); await sleep(60) }
        i = (i + 1) % EXTS.length
        const next = EXTS[i]
        for (let s = 0; s <= next.length && alive; s++) { setText(next.slice(0, s)); await sleep(80) }
      }
    }
    run()
    return () => { alive = false; clearTimeout(t) }
  }, [])

  return <span>{text}<i className={styles.caret} /></span>
}
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const YEAR = new Date().getFullYear()

const LINKS = [
  { label: 'GitHub', icon: FaGithub, href: 'https://github.com/daniel-mscs' },
  { label: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/daniel-mscs/' },
  { label: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/5555991975065' },
  { label: 'E-mail', icon: FaEnvelope, href: 'mailto:daniel.mth1996@gmail.com' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>daniel<TypedExt /></div>

      <div className={styles.icons}>
        {LINKS.map((l) => {
          const Icon = l.icon
          return (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.label} title={l.label}>
              <Icon />
            </a>
          )
        })}
      </div>

      <p className={styles.info}>daniel.mth1996@gmail.com · (55) 99197-5065 · Santa Maria, RS</p>
      <span className={styles.copy}>© {YEAR} Daniel Alves</span>
      <a href="#hero" className={styles.top}>↑ voltar ao topo</a>
    </footer>
  )
}