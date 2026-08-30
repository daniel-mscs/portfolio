import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Projects.module.css'

import rezenha from '../assets/rezenha.png'
import thaimax from '../assets/thaimax.png'
import dayforge from '../assets/dayforge.png'
import turnozen from '../assets/turnozen.png'
import doraisa from '../assets/doraisa.png'
import jessicaalmeida from '../assets/jessicaalmeida.png'

const PROJECTS = [
  {
    name: 'DayForge',
    desc: 'PWA de saúde e performance com rastreamento de macros, treinos, cardio, sono e avatar RPG customizável.',
    tags: ['React', 'Vite', 'Supabase'],
    image: dayforge,
    live: 'https://dayforge-web.vercel.app',
    code: 'https://github.com/daniel-mscs/dayforge',
    status: 'em produção',
    featured: true,
  },
  {
    name: 'TurnoZen',
    desc: 'App para organização de escalas para quem trabalha em mais de um emprego. Calendário mensal, cálculo de horas de descanso, exportação de PDF e APK Android via Capacitor.',
    tags: ['React', 'Vite', 'Supabase', 'Capacitor'],
    image: turnozen,
    live: 'https://turnozen.vercel.app',
    code: 'https://github.com/daniel-mscs/turnozen',
    status: 'em produção',
  },
  {
    name: 'Doraisa Tattoo',
    desc: 'Site institucional para tatuadora com portfólio em carrossel, seção sobre, stats e agendamento via WhatsApp e Instagram.',
    tags: ['HTML', 'CSS', 'JS'],
    image: doraisa,
    live: 'https://daniel-mscs.github.io/doraisa/',
    code: 'https://github.com/daniel-mscs/doraisa',
    status: 'demonstrativo',
  },
  {
    name: 'Jéssica Almeida',
    desc: 'Site institucional para terapeuta com listagem de serviços, depoimentos, seção sobre e agendamento via WhatsApp.',
    tags: ['HTML', 'CSS', 'JS'],
    image: jessicaalmeida,
    live: 'https://daniel-mscs.github.io/site-jessica-almeida/',
    code: 'https://github.com/daniel-mscs/site-jessica-almeida',
    status: 'demonstrativo',
  },
  {
    name: 'Rezenha Barbearia',
    desc: 'Site institucional com sistema de agendamento online, painel administrativo e integração com WhatsApp.',
    tags: ['React', 'Supabase', 'Vercel'],
    image: rezenha,
    live: 'https://daniel-mscs.github.io/rezenhabarbearia/',
    code: 'https://github.com/daniel-mscs/rezenhabarbearia',
    status: 'demonstrativo',
  },
  {
    name: 'Thai Max',
    desc: 'Site institucional para escola de Muay Thai com grade de horários, modalidades e formulário de contato.',
    tags: ['React', 'Vercel'],
    image: thaimax,
    live: 'https://daniel-mscs.github.io/thaimaxmuaythai/',
    code: 'https://github.com/daniel-mscs/thaimaxmuaythai',
    status: 'demonstrativo',
  },
]

function ProjectCard({ project, index }) {
  const [ref, visible] = useScrollReveal(0.1)

  return (
    <div
      ref={ref}
      className={`${styles.card} ${project.featured ? styles.featured : ''} reveal ${visible ? 'visible' : ''}`}
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
        <div className={styles.cardTop}>
          <div className={styles.name}>{project.name}</div>
          <span className={`${styles.status} ${project.status === 'em produção' ? styles.statusLive : styles.statusDemo}`}>
            {project.status}
          </span>
        </div>
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