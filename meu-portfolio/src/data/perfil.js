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

  stats: { years: 2, projects: 12, focus: "Qualidade + Entrega" },
  dailyStack: ["C#", ".NET", "EF Core", "MediatR", "Vue 3", "PrimeVue", "SQL", "Docker"],

  // Se você ainda não colocou a foto local, pode deixar um link temporário:
  // photoUrl: "https://i.imgur.com/9QO7QZp.png",
  // Se colocar local em: src/assets/images/perfil.jpg -> use:
  photoUrl: new URL("../assets/images/perfil.jpg", import.meta.url).href,

  links: {
    github: "https://github.com/seuusuario",
    instagram: "https://instagram.com/seuusuario",
    linkedin: "https://linkedin.com/in/seuusuario",
    cv: "",
    whatsappNumber: "5581999999999",
  },

  differentials: [
    { tag: "Qualidade", title: "Código consistente e confiável", desc: "Valorizo padrão, validação e manutenção fácil." },
    { tag: "Entrega", title: "Foco em resultado", desc: "Transformo requisitos em features completas, ponta a ponta." },
    { tag: "Evolução", title: "Melhoria contínua", desc: "Refatoro, automatizo e evoluo módulos para manter o produto saudável." },
  ],
};
