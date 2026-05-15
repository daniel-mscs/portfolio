import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './About.module.css'

const STATS = [
  { num: '3', label: 'projetos' },
  { num: '1º', label: 'semestre' },
  { num: '∞', label: 'café ☕' },
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
            Foco em <strong>sites e aplicações para negócios locais</strong> - barbearias,
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
        </div>
    </section>
  )
}