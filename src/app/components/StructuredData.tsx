export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://diegocarmona.me/#person",
    name: "Diego Carmona",
    jobTitle: "Frontend Developer",
    url: "https://diegocarmona.me",
    email: "mailto:diegoncarmona@gmail.com",
    image: "https://diegocarmona.me/profile.jpg",
    inLanguage: ["en", "pt-BR"],
    description:
      "Diego Carmona is a frontend developer specializing in React, Next.js, and TypeScript, focused on building production-ready web applications with AI integrations, OAuth authentication, and strong attention to performance and accessibility.",
    sameAs: [
      "https://www.linkedin.com/in/diegocarmn/",
      "https://github.com/diegocarmn",
      "https://diegocarmona.me",
    ],
    mainEntityOfPage: "https://diegocarmona.me",
    identifier: "https://diegocarmona.me/#person",
    knowsAbout: [
      "Software Development",
      "Frontend Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "REST APIs",
      "Web Performance",
      "Accessibility",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "TanStack Query",
      "OAuth Authentication",
      "AI Integration",
      "LLMs",
      "PWA",
      "SEO",
    ],
    knowsLanguage: ["Portuguese", "English"],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidade Federal do Rio Grande do Sul (UFRGS)",
      url: "https://www.ufrgs.br",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Frontend Developer",
      occupationLocation: {
        "@type": "City",
        name: "Porto Alegre",
      },
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
