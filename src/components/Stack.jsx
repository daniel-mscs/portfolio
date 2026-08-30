import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Stack.module.css'

import { FaReact, FaJava, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiVite, SiSupabase, SiSpring, SiJavascript, SiVercel } from 'react-icons/si'

const STACK = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Vite', icon: SiVite, color: '#A78BFA' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
  { name: 'Java', icon: FaJava, color: '#F89820' },
  { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F' },
  { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
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
              <Icon className={styles.icon} style={{ color: item.color }} />
              <span>{item.name}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}