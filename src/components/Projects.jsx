import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Projects.module.css'

import rezenha from '../assets/rezenha.png'
import thaimax from '../assets/thaimax.png'
import dayforge from '../assets/dayforge.png'

const PROJECTS = [
  {
    name: 'Rezenha Barbearia',
    desc: 'Site institucional com sistema de agendamento online, painel administrativo e integração com WhatsApp, apenas demonstrativo.',
    tags: ['React', 'Supabase', 'Vercel'],
    image: rezenha,
    live: 'https://daniel-mscs.github.io/rezenhabarbearia/',
    code: 'https://github.com/daniel-mscs/rezenhabarbearia',
  },
  {
    name: 'Thai Max',
    desc: 'Site institucional para escola de Muay Thai com grade de horários, modalidades e formulário de contato, apenas demonstrativo.',
    tags: ['React', 'Vercel'],
    image: thaimax,
    live: 'https://daniel-mscs.github.io/thaimaxmuaythai/',
    code: 'https://github.com/daniel-mscs/thaimaxmuaythai',
  },
  {
    name: 'DayForge',
    desc: 'PWA de saúde e performance com rastreamento de macros, treinos, cardio, sono e avatar RPG customizável.',
    tags: ['React', 'Vite', 'Supabase'],
    image: dayforge,
    live: 'https://dayforge-web.vercel.app',
    code: 'https://github.com/daniel-mscs/dayforge',
  },
]

function ProjectCard({ project, index }) {
  const [ref, visible] = useScrollReveal(0.1)

  return (
    <div
      ref={ref}
      className={`${styles.card} reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={styles.imageWrap}>
        <img src={project.image} alt={project.name} className={styles.image} />
        <div className={styles.overlay}>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.overlayBtn}>
            Ver ao vivo
          </a>
          <a href={project.code} target="_blank" rel="noopener noreferrer" className={styles.overlayBtnOutline}>
            Ver código
          </a>
        </div>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.name}>{project.name}</div>
        <div className={styles.cardDesc}>{project.desc}</div>
        <div className={styles.tags}>
          {project.tags.map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
        <div className={styles.cardLinks}>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.link}>
            → ver ao vivo
          </a>
          <a href={project.code} target="_blank" rel="noopener noreferrer" className={styles.linkGhost}>
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className={styles.projects} id="projetos">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <p className={styles.label}>// projetos</p>
        <h2 className={styles.title}>O que tenho construído</h2>
        <p className={styles.desc}>projetos reais, para clientes reais</p>
      </div>

      <div className={styles.grid}>
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}