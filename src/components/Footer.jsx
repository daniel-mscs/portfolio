import styles from './Footer.module.css'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>© {YEAR} Daniel Alves</span>
      <a href="#" className={styles.top}>↑ topo</a>
    </footer>
  )
}