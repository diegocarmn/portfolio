export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Diego Carmona",
    jobTitle: "Software Engineer",
    url: "https://diegocarmona.me",
    email: "mailto:diegoncarmona@gmail.com",
    image: "https://diegocarmona.me/profile.jpg",
    description:
      "Diego Carmona is a software engineer focused on building real, production-ready web products end to end. He works across the full stack with React, Next.js, TypeScript, and Node.js, with strong attention to performance, accessibility, and real-world usage.",
    sameAs: [
      "https://www.linkedin.com/in/diegocarmn/",
      "https://github.com/diegocarmn",
    ],
    knowsAbout: [
      "Software Engineering",
      "Full Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Web Performance",
      "Accessibility",
    ],
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
