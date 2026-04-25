export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://diegocarmona.me/#person",
    name: "Diego Carmona",
    jobTitle: "Full-Stack Web Developer",
    url: "https://diegocarmona.me",
    email: "mailto:diegoncarmona@gmail.com",
    image: "https://diegocarmona.me/profile.jpg",
    inLanguage: ["en", "pt-BR"],
    description:
      "Diego Carmona is a full-stack developer specializing in React, Next.js, and TypeScript, building production-ready web applications with scalable backend architectures, AI integrations, OAuth authentication, and a strong focus on performance, accessibility, and user experience.",
    sameAs: [
      "https://www.linkedin.com/in/diegocarmn/",
      "https://github.com/diegocarmn",
    ],
    mainEntityOfPage: "https://diegocarmona.me",
    identifier: "https://diegocarmona.me/#person",
    knowsAbout: [
      "Backend Development",
      "Frontend Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "REST APIs",
      "API Design",
      "Web Performance",
      "Accessibility",
      "Tailwind CSS",
      "PostgreSQL",
      "Database Design",
      "Prisma",
      "Authentication",
      "TanStack Query",
      "OAuth Authentication",
      "AI Integration",
      "System Design",
      "LLMs",
      "PWA",
      "SEO",
    ],
    knowsLanguage: [
      {
        "@type": "Language",
        name: "Portuguese",
      },
      {
        "@type": "Language",
        name: "English",
      },
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidade Federal do Rio Grande do Sul (UFRGS)",
      url: "https://www.ufrgs.br",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Full-Stack Web Developer",
      occupationLocation: {
        "@type": "City",
        name: "Porto Alegre, RS",
      },
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Prisma",
      ],
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Porto Alegre",
      addressCountry: "BR",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
