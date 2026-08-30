import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Contact.module.css'

const LINKS = [
{ label: 'GitHub', icon: 'ti-brand-github', href: 'https://github.com/daniel-mscs' },
{ label: 'LinkedIn', icon: 'ti-brand-linkedin', href: 'https://www.linkedin.com/in/daniel-mscs/' },
{ label: 'WhatsApp', icon: 'ti-brand-whatsapp', href: 'https://wa.me/5555991975065?text=Olá%20Daniel,%20vim%20pelo%20seu%20portfólio!' },
{ label: 'Email', icon: 'ti-mail', href: 'mailto:daniel.mth1996@gmail.com' },
]

// troque pelo endpoint do seu formulário criado em https://formspree.io
const FORM_ENDPOINT = 'https://formspree.io/f/SEU_ID_AQUI'

export default function Contact() {
  const [ref, visible] = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <label htmlFor="name">nome</label>
          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
        </div>
        <div className={styles.formRow}>
          <label htmlFor="email">email</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
        </div>
        <div className={styles.formRow}>
          <label htmlFor="message">mensagem</label>
          <textarea id="message" name="message" required value={form.message} onChange={handleChange} />
        </div>

        <button type="submit" className={styles.submit} disabled={status === 'sending'}>
          {status === 'sending' ? 'enviando...' : 'enviar mensagem'}
        </button>

        {status === 'sent' && <p className={styles.success}>Mensagem enviada! Te respondo em breve.</p>}
        {status === 'error' && <p className={styles.errorMsg}>Algo deu errado — tenta de novo ou usa o WhatsApp/Email acima.</p>}
      </form>
    </section>
  )
}