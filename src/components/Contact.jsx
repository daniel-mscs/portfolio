import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Contact.module.css'
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const LINKS = [
  { label: 'E-mail', value: 'daniel.mth1996@gmail.com', icon: FaEnvelope, color: '#F5A623', href: 'mailto:daniel.mth1996@gmail.com' },
  { label: 'WhatsApp', value: '(55) 99197-5065', icon: FaWhatsapp, color: '#25D366', href: 'https://wa.me/5555991975065?text=Olá%20Daniel,%20vim%20pelo%20seu%20portfólio!' },
  { label: 'LinkedIn', value: 'in/daniel-mscs', icon: FaLinkedin, color: '#0A66C2', href: 'https://www.linkedin.com/in/daniel-mscs/' },
  { label: 'GitHub', value: 'daniel-mscs', icon: FaGithub, color: '#e5e5e5', href: 'https://github.com/daniel-mscs' },
]

export default function Contact() {
  const [ref, visible] = useScrollReveal()

  return (
    <section ref={ref} className={styles.contact} id="contato">
      <p className={styles.label}>(05) // contato</p>
      <h2 className={styles.title}>Vamos trabalhar juntos?</h2>
      <p className={styles.desc}>Aberto a estágio, vaga júnior e projetos freelance</p>

      <div className={`${styles.cards} reveal-stagger ${visible ? 'visible' : ''}`}>
        {LINKS.map((l) => {
          const Icon = l.icon
          return (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={styles.card}>
              <Icon className={styles.cardIcon} style={{ color: l.color }} />
              <div>
                <span className={styles.cardLabel}>{l.label}</span>
                <span className={styles.cardValue}>{l.value}</span>
              </div>
              <span className={styles.arrow}>↗</span>
            </a>
          )
        })}
      </div>

      <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer" className={styles.cv}>
        baixar currículo (PDF)
      </a>
    </section>
  )
}