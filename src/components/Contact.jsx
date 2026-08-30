import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Contact.module.css'
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const LINKS = [
  { label: 'GitHub', icon: FaGithub, color: '#e5e5e5', href: 'https://github.com/daniel-mscs' },
  { label: 'LinkedIn', icon: FaLinkedin, color: '#0A66C2', href: 'https://www.linkedin.com/in/daniel-mscs/' },
  { label: 'WhatsApp', icon: FaWhatsapp, color: '#25D366', href: 'https://wa.me/5555991975065?text=Olá%20Daniel,%20vim%20pelo%20seu%20portfólio!' },
  { label: 'Email', icon: FaEnvelope, color: '#F5A623', href: 'mailto:daniel.mth1996@gmail.com' },
]

export default function Contact() {
  const [ref, visible] = useScrollReveal()

  return (
    <section
      ref={ref}
      className={`${styles.contact} reveal ${visible ? 'visible' : ''}`}
      id="contato"
    >
      <p className={styles.label}>// contato</p>
      <h2 className={styles.title}>Vamos trabalhar juntos?</h2>
      <p className={styles.desc}>Aberto a projetos freelance e novas oportunidades</p>

      <div className={styles.links}>
        {LINKS.map((l) => {
          const Icon = l.icon
          return (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconBtn}
              aria-label={l.label}
              title={l.label}
            >
              <Icon style={{ color: l.color }} />
            </a>
          )
        })}
      </div>
    </section>
  )
}