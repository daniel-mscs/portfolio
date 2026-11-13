import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Projects.module.css'

import rezenha from '../assets/rezenha.png'
import thaimax from '../assets/thaimax.png'
import dayforge from '../assets/dayforge.png'
import turnozen from '../assets/turnozen.png'
import doraisa from '../assets/doraisa.png'
import jessicaalmeida from '../assets/jessicaalmeida.png'
import yasmim from '../assets/yasmim.png'
import aferi from '../assets/aferi.png'

const PROJECTS = [
  {
    name: 'Rezenha Barbearia',
    kind: 'Cliente',
    status: 'no ar · em uso',
    title: 'Agendamento e gestão para barbearia',
    desc: 'Os clientes marcavam horário pelo WhatsApp, na conversa, e os barbeiros perdiam tempo organizando agenda na mão. Criei o site com agendamento online e um painel pro dono gerenciar barbeiros, horários e clientes. As confirmações e lembretes saem automáticos pelo WhatsApp (API oficial da Meta).',
    forWho: 'barbearia em Santa Maria/RS, usado no dia a dia pelo dono e pela equipe.',
    tags: ['React', 'Vite', 'Supabase', 'WhatsApp API', 'Vercel'],
    image: rezenha,
    live: 'https://barbeariarezenha.com.br',
    code: null,
    domain: 'barbeariarezenha.com.br',
  },
  {
    name: 'DayForge',
    kind: 'Projeto próprio',
    status: 'no ar · Android',
    title: 'App de saúde e performance pra quem treina',
    desc: 'Eu usava um app pra treino, outro pra dieta e outro pra sono, e nada conversava entre si. Juntei tudo num app só: treinos com séries, supersets e timer de descanso, cardio com cálculo de calorias, rotina diária, sono e medidas. Tudo isso com um avatar RPG que evolui com a tua constância.',
    forWho: 'quem treina (academia, luta) e quer acompanhar a evolução num lugar só. Eu uso todo dia.',
    tags: ['React', 'Vite', 'Supabase', 'Capacitor', 'PWA'],
    image: dayforge,
    live: 'https://dayforge-web.vercel.app',
    code: 'https://github.com/daniel-mscs/dayforge',
    domain: 'dayforge-web.vercel.app',
  },
  {
    name: 'Aferi',
    kind: 'Projeto próprio',
    status: 'no ar',
    title: 'Diário de saúde pra levar na consulta',
    desc: 'No hospital eu vejo muito paciente chegar na consulta sem lembrar a pressão ou a glicemia da semana. O Aferi registra pressão, glicemia, frequência cardíaca e peso, calcula o IMC e gera um PDF pronto pra mostrar ao médico. Funciona como app no celular (PWA), com login Google.',
    forWho: 'quem tem hipertensão, diabetes ou precisa acompanhar a saúde em casa, e também familiares que cuidam de alguém.',
    tags: ['React', 'Vite', 'Firebase', 'PWA'],
    image: aferi,
    live: 'https://aferi-saude.vercel.app',
    code: 'https://github.com/daniel-mscs/aferi',
    domain: 'aferi-saude.vercel.app',
  },
  {
    name: 'TurnoZen',
    kind: 'Projeto próprio',
    status: 'desativado',
    title: 'Escala de plantões pra quem tem mais de um emprego',
    desc: 'Na enfermagem é comum ter dois vínculos, e eu mesmo vivia cruzando escala de um com a do outro no papel. O TurnoZen junta todos os empregos num calendário mensal com uma cor pra cada vínculo, calcula as horas de descanso entre um plantão e outro e exporta a escala em PDF. Também gerei o APK Android com login Google.',
    forWho: 'técnicos, enfermeiros e outros profissionais de saúde que fazem plantão em mais de um lugar.',
    tags: ['React', 'Vite', 'Supabase', 'Capacitor'],
    image: turnozen,
    live: null,
    code: 'https://github.com/daniel-mscs/turnozen',
    domain: 'fora do ar',
  },
  {
    name: 'Yasmim Tattoo',
    kind: 'Freelance',
    status: 'demonstrativo',
    title: 'Site com portfólio que a própria tatuadora atualiza',
    desc: 'Tatuadora precisa mostrar trabalho novo toda semana, e não dá pra depender de programador pra isso. Fiz o site com galeria em carrossel e um painel admin escondido, onde ela mesma sobe várias fotos de uma vez e reordena o portfólio. As imagens ficam otimizadas no Cloudinary, e o site tem banner de cookies (LGPD).',
    forWho: 'tatuadora autônoma que quer um portfólio profissional fora do Instagram.',
    tags: ['React', 'Vite', 'Firebase', 'Cloudinary'],
    image: yasmim,
    live: 'https://yasmim-tattoo.vercel.app',
    code: 'https://github.com/daniel-mscs/yasmim-tattoo',
    domain: 'yasmim-tattoo.vercel.app',
  },
  {
    name: 'Estoque Holandês Voador',
    kind: 'Projeto próprio',
    status: 'fora do ar',
    title: 'Controle de estoque com a câmera do celular',
    desc: 'Um amigo de treino controlava o estoque da loja de tatuagem num caderno. Fiz um PWA que usa a câmera do celular como leitor de código de barras, sem precisar comprar leitor USB. Ele registra entrada e saída, avisa quando o estoque está baixo, controla validade e filtra por categoria, com foto de cada produto.',
    forWho: 'lojas pequenas (tatuagem, piercing, insumos) que ainda controlam estoque no papel.',
    tags: ['React', 'Vite', 'Firebase', 'Cloudinary', 'ZXing'],
    image: null,
    live: null,
    code: 'https://github.com/daniel-mscs/holandesvoador',
    domain: 'fora do ar',
  },
  {
    name: 'SaaS de agendamento',
    kind: 'Produto próprio · nome em definição',
    status: 'em construção',
    title: 'SaaS de agendamento pra pequenos negócios',
    desc: 'Depois do Rezenha, percebi que toda barbearia, estúdio de tatuagem e manicure tem o mesmo problema de agenda. Estou transformando aquele sistema num produto multiempresa: cada negócio ganha o próprio site e agenda, com um banco compartilhado. Os planos vão da vitrine simples até a automação no WhatsApp.',
    forWho: 'barbearias, estúdios de tatuagem e manicures que querem agendamento online sem pagar caro.',
    tags: ['React', 'Vite', 'Supabase', 'Multi-tenant', 'WhatsApp API'],
    image: null,
    live: null,
    code: null,
    domain: 'em breve',
  },
  {
    name: 'CadastroDeNinjas',
    kind: 'Estudo',
    status: 'em andamento',
    title: 'API REST em Java com Spring Boot',
    desc: 'Meu laboratório de back-end. É uma API de cadastro de ninjas e missões, com relacionamento entre as duas entidades, organizada em camadas (Controller, Service, Repository). Uso JPA no banco H2, migrations com Flyway e variáveis de ambiente pra configuração, e testo os endpoints no Postman.',
    forWho: 'pra mim, é onde eu pratico o que uso de base pra vagas de back-end Java.',
    tags: ['Java 25', 'Spring Boot', 'JPA', 'H2', 'Flyway', 'Lombok'],
    image: null,
    live: null,
    code: 'https://github.com/daniel-mscs/CadastroDeNinjas',
    domain: 'api · localhost:8080',
  },
  {
    name: 'Atelier Vane',
    kind: 'Imersão IA · Alura',
    status: 'no ar',
    title: 'Portfólio editável feito com IA',
    desc: 'Projeto da Imersão de IA em Engenharia de Software da Alura. É um site de portfólio pra ateliê com painel de edição, onde o dono troca textos e imagens sem mexer no código. Construí com apoio do Google AI Studio, revisando e ajustando o código gerado, e publiquei no GitHub Pages.',
    forWho: 'artistas e pequenos ateliês que querem um site que eles mesmos atualizam.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Google AI Studio'],
    image: null,
    live: 'https://daniel-mscs.github.io/ateliervane',
    code: 'https://github.com/daniel-mscs/AtelierVANE',
    domain: 'daniel-mscs.github.io/ateliervane',
  },
]

function statusClass(status) {
  if (status.startsWith('no ar')) return styles.statusLive
  if (status.startsWith('em ')) return styles.statusBuild
  return styles.statusDemo
}

function ProjectCard({ project, index, total }) {
  const [ref, visible] = useScrollReveal(0.1)
  const num = String(index + 1).padStart(2, '0')

  return (
    <div
      ref={ref}
      className={`${styles.card} reveal ${visible ? 'visible' : ''}`}
    >
      <div className={styles.browserBar}>
        <span className={styles.browserDot} />
        <span className={styles.browserDot} />
        <span className={styles.browserDot} />
        <span className={styles.browserUrl}>{project.domain}</span>
      </div>

      <div className={styles.imageWrap}>
        {project.image ? (
          <img src={project.image} alt={project.name} className={styles.image} />
        ) : (
          <div className={styles.placeholder}>
            <span>{'</>'}</span>
            <p>{project.name}</p>
          </div>
        )}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.metaLine}>
          <span className={styles.idx}>{num} / {String(total).padStart(2, '0')}</span>
          <span className={styles.kind}>{project.name} · {project.kind}</span>
          <span className={`${styles.status} ${statusClass(project.status)}`}>
            {project.status}
          </span>
        </div>

        <h3 className={styles.headline}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.desc}</p>
        <p className={styles.forWho}><strong>Pra quem:</strong> {project.forWho}</p>

        <div className={styles.tags}>
          {project.tags.map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>

        <div className={styles.cardLinks}>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.link}>
              → ver ao vivo
            </a>
          )}
          {project.code && (
            <a href={project.code} target="_blank" rel="noopener noreferrer" className={styles.linkGhost}>
              GitHub
            </a>
          )}
          {!project.live && !project.code && (
            <span className={styles.soon}>em breve</span>
          )}
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
        <p className={styles.label}>(03) // projetos</p>
        <h2 className={styles.title}>O que tenho construído</h2>
        <p className={styles.desc}>o problema, pra quem resolve e com o quê</p>
      </div>

      <div className={styles.grid}>
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  )
}