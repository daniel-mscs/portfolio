import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Contact.module.css'

const LINKS = [
{ label: 'GitHub', icon: 'ti-brand-github', href: 'https://github.com/daniel-mscs' },
{ label: 'LinkedIn', icon: 'ti-brand-linkedin', href: 'https://www.linkedin.com/in/daniel-mscs/' },
{ label: 'WhatsApp', icon: 'ti-brand-whatsapp', href: 'https://wa.me/5555991975065?text=Olá%20Daniel,%20vim%20pelo%20seu%20portfólio!' },
{ label: 'Email', icon: 'ti-mail', href: 'mailto:daniel.mth1996@gmail.com' },
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
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            <i className={`ti ${l.icon}`} aria-hidden="true" />
            {l.label}
          </a>
        ))}
      </div>
    </section>
  )
}