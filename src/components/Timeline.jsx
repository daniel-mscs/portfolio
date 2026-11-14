import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Timeline.module.css'

const WORK = [
  {
    date: 'Set 2026 — Atual',
    role: 'Desenvolvedor Web Freelancer',
    place: 'Autônomo · Santa Maria, RS',
    bullets: [
      'Sistema de agendamento e gestão da Rezenha Barbearia, em uso pelo cliente',
      'Landing pages e propostas para negócios locais',
      'SaaS de agendamento multiempresa em construção',
    ],
  },
  {
    date: 'Ago 2018 — Atual',
    role: 'Técnico de Enfermagem',
    place: 'Complexo Hospitalar Astrogildo de Azevedo · Santa Maria, RS',
    bullets: [
      'Uso diário do ERP MV PEP: prontuário eletrônico, prescrições e evolução',
      'Farmácia hospitalar com o módulo MV SOUL: estoque e dispensação',
      'Suporte a novos colaboradores no uso dos sistemas',
      'Promovido internamente após concluir o curso técnico',
      'Vivência que inspirou o TurnoZen e o Aferi',
    ],
  },
]

const EDU = [
  {
    date: 'Out 2025 — 2029',
    role: 'Engenharia de Software',
    place: 'UNOPAR',
    status: 'cursando',
  },
  {
    date: '2026',
    role: 'Imersão IA em Engenharia de Software',
    place: 'Alura',
    status: 'concluído',
  },
]

function Item({ item, index }) {
  return (
    <li className={styles.item}>
      <span className={styles.dot}>{index + 1}</span>
      <div className={styles.date}>{item.date}</div>
      <h3 className={styles.role}>{item.role}</h3>
      <div className={styles.place}>{item.place}</div>
      {item.status && <span className={styles.status}>{item.status}</span>}
      {item.bullets && (
        <ul className={styles.bullets}>
          {item.bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
      )}
    </li>
  )
}

export default function Timeline() {
  const [ref, visible] = useScrollReveal(0.1)

  return (
    <section ref={ref} id="trajetoria" className={styles.timeline}>
      <p className={styles.label}>(04) // trajetória</p>

      <div className={styles.cols}>
        <div>
          <h4 className={styles.colTitle}>Experiência</h4>
          <ol className={`${styles.list} reveal-stagger slide-left ${visible ? 'visible' : ''}`}>
            {WORK.map((w, i) => <Item key={w.role} item={w} index={i} />)}
          </ol>
        </div>
        <div>
          <h4 className={styles.colTitle}>Formação</h4>
          <ol className={`${styles.list} reveal-stagger slide-left ${visible ? 'visible' : ''}`}>
            {EDU.map((e, i) => <Item key={e.role} item={e} index={i} />)}
          </ol>
        </div>
      </div>
    </section>
  )
}