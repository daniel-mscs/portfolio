import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Stack.module.css'

import { FaReact, FaJava, FaGitAlt, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa'
import {
  SiVite, SiSupabase, SiSpringboot, SiJavascript, SiVercel, SiTypescript,
  SiTailwindcss, SiNodedotjs, SiFirebase, SiFlyway, SiGithub, SiCapacitor,
  SiCloudinary, SiPostman,
} from 'react-icons/si'

const GROUPS = [
  {
    num: '01',
    title: 'Front-end',
    items: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Vite', icon: SiVite, color: '#A78BFA' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#38BDF8' },
    ],
  },
  {
    num: '02',
    title: 'Back-end',
    items: [
      { name: 'Java', icon: FaJava, color: '#F89820' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'APIs REST', icon: SiPostman, color: '#FF6C37' },
    ],
  },
  {
    num: '03',
    title: 'Dados',
    items: [
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'JPA / H2', icon: FaDatabase, color: '#9CA3AF' },
      { name: 'Flyway', icon: SiFlyway, color: '#CC0200' },
    ],
  },
  {
    num: '04',
    title: 'Ferramentas',
    items: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
      { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
      { name: 'Capacitor', icon: SiCapacitor, color: '#53B9FF' },
      { name: 'Cloudinary', icon: SiCloudinary, color: '#3448C5' },
    ],
  },
]

export default function Stack() {
  const [ref, visible] = useScrollReveal()

  return (
    <section ref={ref} className={styles.stack} id="habilidades">
      <p className={styles.label}>(02) // habilidades</p>

      <div className={`${styles.groups} reveal-stagger ${visible ? 'visible' : ''}`}>
        {GROUPS.map((g) => (
          <div key={g.title} className={styles.group}>
            <div className={styles.groupHead}>
              <span className={styles.groupNum}>{g.num}</span>
              <h3>{g.title}</h3>
            </div>
            <div className={styles.chips}>
              {g.items.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.name} className={styles.chip}>
                    <Icon className={styles.icon} style={{ color: item.color }} />
                    <span>{item.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}