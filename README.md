# Daniel Alves — Portfólio

Portfólio pessoal desenvolvido com React + Vite. Apresenta projetos, stack técnica e informações de contato.

🌐 **[daniel-alvesdev.com.br](https://daniel-alvesdev.com.br)**

---

## Stack

- **React + Vite** — frontend
- **CSS Modules** — estilização por componente
- **Vercel** — deploy contínuo

## Como rodar localmente

```bash
npm install
npm run dev
```

Acessa `http://localhost:5173`

## Estrutura

```
src/
  components/
    Navbar.jsx        # Logo animado com digitação
    Hero.jsx          # Apresentação + avatar
    Stack.jsx         # Tecnologias com ícones
    Projects.jsx      # Cards de projetos com screenshots
    About.jsx         # Sobre + stats
    Contact.jsx       # Links de contato
    Footer.jsx
  hooks/
    useScrollReveal.js  # Animação de entrada no scroll
  assets/
    avatar.png
    rezenha.png
    thaimax.png
    dayforge.png
public/
  favicon.ico
  curriculo.pdf
```

## Projetos no portfólio

| Projeto | Stack | Link |
|--------|-------|------|
| Rezenha Barbearia | HTML · CSS · JS | [ver](https://daniel-mscs.github.io/rezenhabarbearia) |
| Thai Max | HTML · CSS · JS | [ver](https://daniel-mscs.github.io/thaimax) |
| DayForge | React · Vite · Supabase | [ver](https://dayforge-web.vercel.app) |

## Deploy

Hospedado na Vercel com deploy automático a cada push na branch `main`.