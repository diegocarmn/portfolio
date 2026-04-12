export const translations = {
  en: {
    navbar: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },

    hero: {
      tag: "Available for projects",
      name: "Diego Carmona.",
      title: "Frontend Developer.",
      subtitle:
        "Building production-ready web apps with performance and accessibility in mind.",
      button: "Contact me",
      buttonAriaLabel: "Go to contact section",
      scrollDown: "Scroll down to see my projects",
    },

    projects: {
      title: "Projects",
      features: "Features",

      cineai: {
        title: "CineAI",
        description:
          "AI-powered movie discovery platform with personalized recommendations based on user profile and mood.",
        subtitle: "AI-Powered Movie Discovery Platform",
        overview:
          "CineAI integrates LLMs (Groq/LLaMA) with the TMDB API to deliver personalized movie recommendations based on user profile and mood. Built with Next.js App Router and serverless APIs, it includes Google OAuth authentication, relational database persistence, and a full favorites and watchlist system synced across sessions.",
        features: [
          "LLM-powered recommendations using Groq (LLaMA models) + TMDB API",
          "Google OAuth authentication via Auth.js with PostgreSQL persistence",
          "Full favorites and watchlist system synced across sessions and users",
          "Serverless API architecture with Next.js App Router",
        ],
        tags: [
          "Next.js",
          "TypeScript",
          "React",
          "Tailwind CSS",
          "Prisma",
          "PostgreSQL",
          "Auth.js",
          "Groq/LLaMA",
          "Node.js",
        ],
        buttons: {
          github: {
            text: "GitHub",
            link: "https://github.com/diegocarmn/cineai",
          },
          website: {
            text: "View Website",
            link: "https://aicine.vercel.app",
          },
        },
        media: {
          urls: [
            "/projects/cineai/landing.mp4",
            "/projects/cineai/main.mp4",
            "/projects/cineai/mood.mp4",
            "/projects/cineai/favorites.mp4",
            "/projects/cineai/watchlist.mp4",
          ],
          descriptions: [
            "Landing page",
            "Discover movies",
            "Mood-based recommendations",
            "Favorites",
            "Watchlist",
          ],
          logo: "/logo-cineai.png",
        },
      },

      pitada: {
        title: "Pitada",
        description:
          "Web app that generates AI-powered recipes from ingredients you already have at home, delivered as an installable PWA.",
        subtitle: "AI Recipe Generator",
        overview:
          "Pitada generates personalized recipes via AI (Groq/LLaMA) from user-provided ingredients. Delivered as an installable PWA with async state management via TanStack Query, full accessibility support, and a responsive mobile-first interface.",
        features: [
          "AI recipe generation using Groq/LLaMA via serverless API endpoint",
          "Installable PWA with light/dark theme and persistent preferences",
          "Async state management with TanStack Query",
          "Fully accessible UI (ARIA, keyboard navigation, semantic HTML)",
        ],
        tags: [
          "Next.js",
          "TypeScript",
          "React",
          "Tailwind CSS",
          "TanStack Query",
          "Groq/LLaMA",
          "PWA",
        ],
        buttons: {
          github: {
            text: "GitHub",
            link: "https://github.com/diegocarmn/pitada",
          },
          website: {
            text: "View Website",
            link: "https://pitada.vercel.app",
          },
        },
        media: {
          urls: [
            "/projects/pitada/main.mp4",
            "/projects/pitada/error.mp4",
            "/projects/pitada/theme.mp4",
          ],
          descriptions: ["Get recipes", "Smart error handling", "Dark theme"],
          logo: "/logo-pitada.png",
        },
      },
    },

    about: {
      title: "About me",

      profile: {
        intro: "Hi, there!",
        intro2: "I'm Diego",
        description:
          "I'm a frontend developer focused on building real, production-ready products. My background in technical support shaped how I work: I care deeply about reliability, ownership, and what happens after something goes live. I focus on the frontend, but I'm comfortable going deeper into the stack when the product needs it.",
        button: {
          text: "View Resume",
          link: "/resume.pdf",
        },
      },

      techstack: {
        title: "Tech Stack",
        description: "Current technologies I've been working with.",
      },

      research: {
        title: "Research",
        description:
          "Tecmides is an academic research project centered on identifying disengaged students in online learning environments.",
        button: "View Publication",
      },

      location: {
        title: "Location",
        location: "Porto Alegre, Brazil",
      },
    },

    contact: {
      title: "Let's talk!",
      description:
        "I'm always interested in hearing about new opportunities, collaborations, or just chatting about technology. Send me a message and I'll get back to you as soon as I can.",

      whatsapp: {
        title: "",
        description: "",
      },

      linkedin: {
        title: "LinkedIn",
        subtitle: "/in/diegocarmn/",
        description: "Connect with me",
      },

      github: {
        title: "GitHub",
        subtitle: "github.com/diegocarmn",
        description: "Check out my projects",
      },

      location: "Porto Alegre, Brazil",

      button: {
        copy: "Copy email",
        copied: "Copied!",
      },
    },

    footer: {
      text: "Built with a good playlist.",
      source: "Source Code",
    },

    ui: {
      seeMore: "See more",
      back: "Back",
      close: "Close",
      next: "Next",
      previous: "Previous",
    },

    accessibility: {
      darkMode: "Dark mode",
      lightMode: "Light mode",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      emailLabel: "Email address for contact",
    },
  },

  pt: {
    navbar: {
      home: "Início",
      projects: "Projetos",
      about: "Sobre",
      contact: "Contato",
    },

    hero: {
      tag: "Disponível para oportunidades",
      name: "Diego Carmona.",
      title: "Desenvolvedor Frontend.",
      subtitle:
        "Construindo aplicações web prontas para produção, com foco em performance e acessibilidade.",
      button: "Fale comigo",
      buttonAriaLabel: "Ir à seção de contato",
      scrollDown: "Desça para ver meus projetos",
    },

    projects: {
      title: "Projetos",
      features: "Funcionalidades",

      cineai: {
        title: "CineAI",
        description:
          "Plataforma de descoberta de filmes com IA que gera recomendações personalizadas com base no perfil e humor do usuário.",
        subtitle: "Plataforma de Descoberta de Filmes com IA",
        overview:
          "CineAI integra LLMs (Groq/LLaMA) com a API do TMDB para gerar recomendações personalizadas de filmes com base no perfil e humor do usuário. Construído com Next.js App Router e APIs serverless, inclui autenticação Google OAuth, persistência em banco relacional e sistema completo de favoritos e watchlist sincronizados entre sessões.",
        features: [
          "Recomendações via LLM usando Groq (modelos LLaMA) + API do TMDB",
          "Autenticação Google OAuth via Auth.js com persistência em PostgreSQL",
          "Sistema completo de favoritos e watchlist sincronizados entre sessões",
          "Arquitetura serverless com Next.js App Router",
        ],
        tags: [
          "Next.js",
          "TypeScript",
          "React",
          "Tailwind CSS",
          "Prisma",
          "PostgreSQL",
          "Auth.js",
          "Groq/LLaMA",
          "Node.js",
        ],
        buttons: {
          github: {
            text: "GitHub",
            link: "https://github.com/diegocarmn/cineai",
          },
          website: {
            text: "Ver Website",
            link: "https://aicine.vercel.app",
          },
        },
        media: {
          urls: [
            "/projects/cineai/landing.mp4",
            "/projects/cineai/main.mp4",
            "/projects/cineai/mood.mp4",
            "/projects/cineai/favorites.mp4",
            "/projects/cineai/watchlist.mp4",
          ],
          descriptions: [
            "Página inicial",
            "Descobrir filmes",
            "Recomendações por humor",
            "Favoritos",
            "Watchlist",
          ],
          logo: "/logo-cineai.png",
        },
      },

      pitada: {
        title: "Pitada",
        description:
          "Aplicação web que gera receitas com IA a partir dos ingredientes que você já tem em casa, entregue como PWA instalável.",
        subtitle: "Gerador Inteligente de Receitas com IA",
        overview:
          "Pitada gera receitas personalizadas via IA (Groq/LLaMA) a partir dos ingredientes informados pelo usuário. Entregue como PWA instalável, com gerenciamento de estado assíncrono via TanStack Query, acessibilidade completa e interface responsiva mobile-first.",
        features: [
          "Geração de receitas com Groq/LLaMA via endpoint serverless",
          "PWA instalável com tema claro/escuro e preferências persistentes",
          "Gerenciamento de estado assíncrono com TanStack Query",
          "Interface totalmente acessível (ARIA, navegação por teclado, HTML semântico)",
        ],
        tags: [
          "Next.js",
          "TypeScript",
          "React",
          "Tailwind CSS",
          "TanStack Query",
          "Groq/LLaMA",
          "PWA",
        ],
        buttons: {
          github: {
            text: "GitHub",
            link: "https://github.com/diegocarmn/pitada",
          },
          website: {
            text: "Ver Website",
            link: "https://pitada.vercel.app",
          },
        },
        media: {
          urls: [
            "/projects/pitada/main.mp4",
            "/projects/pitada/error.mp4",
            "/projects/pitada/theme.mp4",
          ],
          descriptions: [
            "Gerar receitas",
            "Tratamento de erros",
            "Tema escuro",
          ],
          logo: "/logo-pitada.png",
        },
      },
    },

    about: {
      title: "Sobre mim",

      profile: {
        intro: "Olá! Eu",
        intro2: "sou Diego",
        description:
          "Sou um desenvolvedor frontend focado em construir produtos reais prontos para produção. Minha experiência em suporte técnico moldou a forma como eu trabalho: me importo com confiabilidade, responsabilidade e com o que acontece depois que algo entra em produção. Foco no frontend, mas fico à vontade para ir mais fundo na stack quando o produto precisa.",
        button: {
          text: "Ver currículo",
          link: "/curriculo.pdf",
        },
      },

      techstack: {
        title: "Tecnologias",
        description: "Tecnologias usadas por mim atualmente.",
      },

      research: {
        title: "Pesquisa",
        description:
          "Tecmides é um projeto de pesquisa acadêmica focado em identificar estudantes desengajados em ambientes de aprendizagem EAD.",
        button: "Ver publicação",
      },

      location: {
        title: "Localização",
        location: "Porto Alegre, RS",
      },
    },

    contact: {
      title: "Vamos conversar!",
      description:
        "Estou sempre aberto a conversar sobre novos projetos, colaborações ou simplesmente trocar ideias sobre tecnologia. Manda uma mensagem que eu respondo assim que possível.",

      whatsapp: {
        title: "WhatsApp",
        description: "Enviar mensagem",
      },

      linkedin: {
        title: "LinkedIn",
        subtitle: "/in/diegocarmn/",
        description: "Conecte-se comigo",
      },

      github: {
        title: "GitHub",
        subtitle: "github.com/diegocarmn",
        description: "Confira meus projetos",
      },

      location: "Porto Alegre, Brasil",

      button: {
        copy: "Copiar email",
        copied: "Copiado!",
      },
    },

    footer: {
      text: "Feito com uma boa playlist.",
      source: "Código-fonte",
    },

    ui: {
      seeMore: "Ver mais",
      back: "Voltar",
      close: "Fechar",
      next: "Próximo",
      previous: "Anterior",
    },

    accessibility: {
      darkMode: "Modo escuro",
      lightMode: "Modo claro",
      zoomIn: "Aumentar zoom",
      zoomOut: "Diminuir zoom",
      emailLabel: "Endereço de email para contato",
    },
  },
};

export default translations;
