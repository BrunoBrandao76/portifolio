// Dados do seu perfil (edite aqui)

export const profile = {
  name: "Bruno Brandão",
  role: "Full Stack / .NET & Vue",
  location: "Recife - PE, Brasil",
  email: "seuemail@dominio.com",

  headline:
    "Atuo com desenvolvimento e evolução de sistemas (full stack), integrações, rastreabilidade/auditoria e segurança da informação — sempre com foco em qualidade e consistência nas entregas.",

  about:
    "Sou desenvolvedor com foco em entregar soluções sólidas e bem estruturadas. Gosto de código limpo, padrões (ex.: CQRS), automações e uma visão forte de qualidade.",

  currentTitle: "Desenvolvedor de Software III",
  currentCompany: "Blue Technology",
  areas: "Backend (.NET), Frontend (Vue), Integrações, Qualidade",
  availability: "Aberto a oportunidades e freelas",

  stats: {
    years: 2,
    projects: 12,
    focus: "Qualidade + Entrega",
  },

  dailyStack: ["C#", ".NET", "EF Core", "MediatR", "Vue 3", "PrimeVue", "SQL", "Docker"],

  // ✅ Foto local (recomendado)
  // Coloque sua foto em: src/assets/images/perfil.jpg
  // E use essa linha:
  photoUrl: new URL("../assets/images/perfil.jpg", import.meta.url).href,

  links: {
    github: "https://github.com/seuusuario",
    instagram: "https://instagram.com/seuusuario",
    linkedin: "https://linkedin.com/in/seuusuario",
    cv: "https://drive.google.com/your-cv-link",
    whatsappNumber: "5581999999999",
  },

  differentials: [
    {
      tag: "Qualidade",
      title: "Código consistente e confiável",
      desc: "Valorizo padrão, validação, clareza e manutenção fácil. Menos retrabalho, mais previsibilidade.",
    },
    {
      tag: "Entrega",
      title: "Foco em resultado",
      desc: "Transformo requisitos em features completas, com visão de ponta a ponta e atenção ao detalhe.",
    },
    {
      tag: "Evolução",
      title: "Melhoria contínua",
      desc: "Gosto de refatorar, automatizar e evoluir módulos para manter o produto saudável.",
    },
  ],
};
