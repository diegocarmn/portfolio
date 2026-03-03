export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Diego Carmona",
    jobTitle: "Software Engineer",
    url: "https://diegocarmona.me",
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
