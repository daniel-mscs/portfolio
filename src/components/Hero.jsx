import avatar from '../assets/avatar.png'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Hero.module.css'

export default function Hero() {
  const [ref, visible] = useScrollReveal(0.1)

  return (
    <section
      ref={ref}
      className={`${styles.hero} reveal ${visible ? 'visible' : ''}`}
      id="sobre"
    >
      <div className={styles.left}>
        <div className={styles.tag}>disponível para projetos</div>
        <h1 className={styles.title}>
          Daniel <span>Alves</span>
        </h1>
        <p className={styles.sub}>// dev web & engenharia de software</p>
        <p className={styles.desc}>
          Estudante de Engenharia de Software construindo coisas reais.
          Sites e aplicações para negócios locais que precisam sair do papel.
        </p>
        <div className={styles.actions}>
          <a href="#projetos" className={styles.btnPrimary}>ver projetos</a>
          <a href="#contato" className={styles.btnOutline}>entrar em contato</a>
        </div>
      </div>

      <img
        src={avatar}
        alt="Daniel Alves"
        className={styles.avatar}
      />
    </section>
  )
}