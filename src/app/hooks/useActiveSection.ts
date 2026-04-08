import React from "react";

interface SectionRef {
  ref: React.RefObject<HTMLElement | null>;
  id: string;
}

export function useActiveSection(
  homeRef: React.RefObject<HTMLElement | null>,
  projectsRef: React.RefObject<HTMLElement | null>,
  aboutRef: React.RefObject<HTMLElement | null>,
  contactRef: React.RefObject<HTMLElement | null>,
): string | null {
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        if (window.scrollY < 10) {
          setActiveSection("home");
          ticking = false;
          return;
        }

        const sections: SectionRef[] = [
          { ref: homeRef, id: "home" },
          { ref: projectsRef, id: "projects" },
          { ref: aboutRef, id: "about" },
          { ref: contactRef, id: "contact" },
        ];

        const viewportCenter = window.innerHeight / 2;
        let closestSection = sections[0];
        let closestDistance = Infinity;

        sections.forEach(({ ref, id }) => {
          if (!ref.current) return;

          const rect = ref.current.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = { ref, id };
          }
        });

        setActiveSection(closestSection.id);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [homeRef, projectsRef, aboutRef, contactRef]);

  return activeSection;
}
