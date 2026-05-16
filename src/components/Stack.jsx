import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Stack.module.css'

import { FaReact, FaJava, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiVite, SiSupabase, SiSpring, SiJavascript, SiVercel } from 'react-icons/si'

const STACK = [
  { name: 'React', icon: FaReact },
  { name: 'Vite', icon: SiVite },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'Java', icon: FaJava },
  { name: 'Spring Boot', icon: SiSpring },
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Vercel', icon: SiVercel },
]

export default function Stack() {
  const [ref, visible] = useScrollReveal()

  return (
    <section
      ref={ref}
      className={`${styles.stack} reveal ${visible ? 'visible' : ''}`}
      id="stack"
    >
      <p className={styles.label}>// stack</p>
      <div className={styles.chips}>
        {STACK.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.name}
              className={styles.chip}
            >
              <Icon className={styles.icon} />
              <span>{item.name}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}