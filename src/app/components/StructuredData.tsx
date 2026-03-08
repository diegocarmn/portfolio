export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://diegocarmona.me/#person",
    name: "Diego Carmona",
    jobTitle: "Software Developer",
    url: "https://diegocarmona.me",
    email: "mailto:diegoncarmona@gmail.com",
    image: "https://diegocarmona.me/profile.jpg",
    inLanguage: ["en", "pt-BR"],
    description:
      "Diego Carmona is a software developer focused on building real, production-ready web products end to end. He works across the full stack with React, Next.js, TypeScript, and Node.js, with strong attention to performance, accessibility, and real-world usage.",
    sameAs: [
      "https://www.linkedin.com/in/diegocarmn/",
      "https://github.com/diegocarmn",
      "https://diegocarmona.me",
    ],
    mainEntityOfPage: "https://diegocarmona.me",
    identifier: "https://diegocarmona.me/#person",
    knowsAbout: [
      "Software Development",
      "Full Stack Web Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "REST APIs",
      "Web Performance",
      "Accessibility",
    ],
    knowsLanguage: ["Portuguese", "English"],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidade Federal do Rio Grande do Sul (UFRGS)",
      url: "https://www.ufrgs.br",
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
