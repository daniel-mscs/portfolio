import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const EXTS = ['.dev', '.html', '.css', '.js', '.java']

export default function Navbar() {
  const [displayed, setDisplayed] = useState('.dev')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let timeout
    let i = 0

    function cycle() {
      i = (i + 1) % EXTS.length
      const next = EXTS[i]
      const prev = EXTS[i - 1] ?? EXTS[EXTS.length - 1]
      let step = 0

      function erase() {
        if (step <= prev.length) {
          setDisplayed(prev.slice(0, prev.length - step))
          step++
          timeout = setTimeout(erase, 60)
        } else {
          step = 0
          type()
        }
      }

      function type() {
        if (step <= next.length) {
          setDisplayed(next.slice(0, step))
          step++
          timeout = setTimeout(type, 80)
        } else {
          timeout = setTimeout(cycle, 1800)
        }
      }

      erase()
    }

    timeout = setTimeout(cycle, 1800)
    return () => clearTimeout(timeout)
  }, [])

  function handleLink() {
    setOpen(false)
  }

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          daniel<span className={styles.ext}>{displayed}</span>
          <span className={styles.cursor} />
        </div>

        <ul className={styles.links}>
          <li><a href="#sobre">sobre</a></li>
          <li><a href="#projetos">projetos</a></li>
          <li><a href="#stack">stack</a></li>
          <li><a href="#contato">contato</a></li>
        </ul>

        <a
          href="/curriculo.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.cta} ${styles.ctaDesktop}`}
        >
          ver currículo
        </a>

        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`${styles.bar} ${open ? styles.bar1Open : ''}`} />
          <span className={`${styles.bar} ${open ? styles.bar2Open : ''}`} />
          <span className={`${styles.bar} ${open ? styles.bar3Open : ''}`} />
        </button>
      </nav>

      {/* Menu mobile */}
      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          <li><a href="#sobre" onClick={handleLink}>sobre</a></li>
          <li><a href="#projetos" onClick={handleLink}>projetos</a></li>
          <li><a href="#stack" onClick={handleLink}>stack</a></li>
          <li><a href="#contato" onClick={handleLink}>contato</a></li>
        </ul>
        <a
          href="/curriculo.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaMobile}
          onClick={handleLink}
        >
          ver currículo
        </a>
      </div>
    </>
  )
}