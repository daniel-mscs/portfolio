import styles from './Footer.module.css'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span className={styles.logo}>daniel<span className={styles.dot}>.</span>dev</span>
        <span className={styles.copy}>© {YEAR} Daniel Alves</span>
      </div>

      <ul className={styles.links}>
        <li><a href="#sobre">sobre</a></li>
        <li><a href="#projetos">projetos</a></li>
        <li><a href="#stack">stack</a></li>
        <li><a href="#contato">contato</a></li>
      </ul>

      <div className={styles.right}>
        <span>feito com React + Vite</span>
        <a href="#" className={styles.top}>↑ topo</a>
      </div>
    </footer>
  )
}