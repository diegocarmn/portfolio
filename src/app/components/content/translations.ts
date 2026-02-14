

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
      title: "Full-stack Developer.",
      subtitle:
        "I’m a problem-solver who enjoys learning through building real projects.",
      button: "Contact Me",
    },

    projects: {
      title: "Projects",
      features: "Features",

      cineai: {
        title: "CineAI",
        description:
          "CineAI is a movie discovery platform that uses Artificial Intelligence to make recommendations based on user behavior, taste and mood.",
        subtitle: "AI-Powered Movie Discovery Platform",
        overview:
          "CineAI is a full-stack web application focused on AI-driven movie recommendations, combining LLM-based inference with real-time movie data and persistent user state. The system adapts recommendations based on user favorites, interaction history, and mood input.",
        features: [
          "LLM-powered recommendation engine using Groq (LLaMA models)",
          "Server-side movie search and trending feeds via TMDB API",
          "OAuth authentication with Auth.js (Google provider)",
          "Real-time UI updates, loading states, and resilient error handling",
        ],
        tags: [
          "Next.js",
          "TypeScript",
          "React",
          "Node.js",
          "Tailwind CSS",
          "AI API",
          "Auth.js",
          "PostgreSQL",
        ],
      },

      pitada: {
        title: "Pitada",
        description:
          "Pitada helps people figure out what to cook by transforming the ingredients they already have at home into simple, personalized recipes using AI.",
        subtitle: "Smart Recipe Generator App",
        overview:
          "Pitada is a lightweight, full-stack web application that generates AI-powered recipes from user-provided ingredients. The project focuses on performance, accessibility, and modern web standards, delivering a fast and inclusive cooking assistant experience.",
        features: [
          "AI-based recipe generation using Groq LLMs",
          "Ingredient-driven input flow with clean state management",
          "Serverless API endpoint for recipe inference (/api/ai/recipe)",
          "Light/Dark theme support with CSS variables",
          "Fully accessible UI (ARIA, keyboard navigation, semantic HTML)",
          "PWA-ready with installable app experience",
        ],
        tags: [
          "Next.js",
          "TypeScript",
          "React",
          "Tailwind CSS",
          "AI API",
          "PWA",
        ],
      },

      projectscard: {
        button: "View Website",
      },
    },

    about: {
      title: "About",

      profile: {
        intro: "Hi, there!",
        intro2: "I'm Diego",
        description:
          "I’m a full-stack developer driven by curiosity and learning through building real projects. I like working across the entire stack, from clean and intuitive user interfaces to backend logic and data. With a background in technical support, I bring a hands-on mindset, strong ownership, and attention to detail to everything I build.",
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
          "Tecmides is an academic research project focused on identifying disengaged students in online learning environments.",
        button: "View Publication",
      },

      location: {
        title: "Location",
      },
    },

    contact: {
      title: "Contact",
    },

    footer: {
      text: "All rights reserved.",
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
      tag: "Disponível para projetos",
      name: "Diego Carmona.",
      title: "Desenvolvedor Full-Stack.",
      subtitle:
        "Sou um solucionador de problemas que gosta de aprender construindo projetos reais.",
      button: "Fale comigo",
    },

    projects: {
      title: "Projetos",
        features: "Funcionalidades",

      cineai: {
        title: "CineAI",
        description:
          "CineAI é uma plataforma de descoberta de filmes que usa Inteligência Artificial para fazer recomendações com base no comportamento, gosto e humor do usuário.",
        subtitle: "Plataforma de Descoberta de Filmes com IA",
        overview:
          "CineAI é uma aplicação web full-stack focada em recomendações de filmes guiadas por IA, combinando inferência baseada em LLM com dados atualizados de filmes e estado persistente do usuário. O sistema adapta as recomendações com base nos favoritos, histórico de interação e no humor informado pelo usuário.",
        features: [
          "Motor de recomendação com LLM usando Groq (modelos LLaMA)",
          "Busca de filmes no servidor e listas de tendência via TMDB API",
          "Autenticação OAuth com Auth.js (provedor Google)",
          "Atualizações em tempo real na interface, estados de loading e tratamento resiliente de erros",
        ],
        tags: [
          "Next.js",
          "TypeScript",
          "React",
          "Node.js",
          "Tailwind CSS",
          "AI API",
          "Auth.js",
          "PostgreSQL",
        ],
      },

      pitada: {
        title: "Pitada",
        description:
          "Pitada ajuda pessoas a decidirem o que cozinhar transformando os ingredientes que já têm em casa em receitas simples e personalizadas usando IA.",
        subtitle: "App Gerador Inteligente de Receitas",
        overview:
          "Pitada é uma aplicação web full-stack leve que gera receitas com apoio de IA a partir dos ingredientes fornecidos pelo usuário. O projeto prioriza desempenho, acessibilidade e padrões modernos da web, entregando uma experiência rápida e inclusiva de assistente de cozinha.",
        features: [
          "Geração de receitas baseada em IA usando LLMs da Groq",
          "Fluxo de entrada orientado por ingredientes com gestão de estado limpa",
          "Endpoint de API serverless para inferência de receitas (/api/ai/recipe)",
          "Suporte a tema claro/escuro com variáveis CSS",
          "Interface totalmente acessível (ARIA, navegação por teclado, HTML semântico)",
          "PWA pronta, com experiência de app instalável",
        ],
        tags: [
          "Next.js",
          "TypeScript",
          "React",
          "Tailwind CSS",
          "AI API",
          "PWA",
        ],
      },

      projectscard: {
        button: "Ver site",
      },
    },

    about: {
      title: "Sobre",

      profile: {
        intro: "Olá! Eu sou",
        intro2: "o Diego",
        description:
          "Sou um desenvolvedor full-stack movido pela curiosidade e por aprender construindo projetos reais. Gosto de atuar em toda a stack, de interfaces limpas e intuitivas até lógica de backend e dados. Com experiência em suporte técnico, trago uma postura prática, forte senso de responsabilidade e atenção aos detalhes para tudo o que construo.",
        button: {
          text: "Ver currículo",
          link: "/curriculo.pdf",
        },
      },

      techstack: {
        title: "Tecnologias",
        description: "Tecnologias com as quais tenho trabalhado atualmente.",
      },

      research: {
        title: "Pesquisa",
        description:
          "Tecmides é um projeto de pesquisa acadêmica focado em identificar estudantes desengajados em ambientes de aprendizagem online.",
        button: "Ver publicação",
      },

      location: {
        title: "Localização",
      },
    },

    contact: {
      title: "Contato",
    },

    footer: {
      text: "Todos os direitos reservados.",
    },
  },
};

export default translations;
