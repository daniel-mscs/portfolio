import avatar from '../assets/avatar.png'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Hero.module.css'
import { Terminal } from './About'
import { FaFileDownload, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'

export default function Hero() {
  const [ref, visible] = useScrollReveal(0.1)

  return (
    <section
      ref={ref}
      className={`${styles.hero} reveal ${visible ? 'visible' : ''}`}
      id="hero"
    >
      <div className={styles.left}>
        <div className={styles.tag}>aberto a estágio e júnior</div>
        <h1 className={styles.title}>
          Daniel <span>Alves</span>
        </h1>
        <p className={styles.sub}>// dev web · java & spring boot em formação</p>
        <p className={styles.desc}>
          Técnico de enfermagem e estudante de Engenharia de Software.
          Crio sistemas para negócios locais e ferramentas para a área da saúde.
        </p>
        <div className={styles.meta}>
          <span><FaMapMarkerAlt /> Santa Maria, RS</span>
          <a href="https://github.com/daniel-mscs" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/daniel-mscs/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
        <div className={styles.actions}>
          <a href="#projetos" className={styles.btnPrimary}>ver projetos</a>
          <a
            href="https://wa.me/5555991975065?text=Olá%20Daniel,%20vim%20pelo%20seu%20portfólio!"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnOutline}
          >
            fale comigo
          </a>
        </div>
      </div>

            <div className={styles.termWrap}>
        <Terminal run={visible} />
      </div>
    </section>
  )
}