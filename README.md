# Portfolio — Daniel Cardoso Alves

## Como rodar

```bash
npm install
npm run dev
```

## Estrutura

```
src/
  components/
    Navbar.jsx        # Logo animado + navegação
    Navbar.module.css
    Hero.jsx          # Apresentação + avatar
    Hero.module.css
    Stack.jsx         # Tecnologias
    Stack.module.css
    Projects.jsx      # Cards de projetos
    Projects.module.css
    About.jsx         # Sobre + stats
    About.module.css
    Contact.jsx       # Links de contato
    Contact.module.css
    Footer.jsx
    Footer.module.css
  assets/
    avatar.png        # <- coloca sua foto aqui
  App.jsx
  index.css           # variáveis CSS globais
  main.jsx
```

## O que personalizar

- `src/assets/avatar.png` — substitui pelo seu avatar
- `src/components/Projects.jsx` — atualiza links dos projetos
- `src/components/Contact.jsx` — coloca seu WhatsApp e email reais
- `index.html` — atualiza o título e meta description

## Deploy no Vercel

1. Sobe o projeto no GitHub
2. Importa no vercel.com
3. Aponta o domínio `daniel.dev.com.br`
