"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

const lightColors = {
  highlightColor: 0xd1ff,
  midtoneColor: 0xffa8da,
  lowlightColor: 0xc0c8fa,
  baseColor: 0xffffff,
};
const darkColors = {
  highlightColor: 0xd1ff,
  midtoneColor: 0xdc1c84,
  lowlightColor: 0x2c00ff,
  baseColor: 0x0,
};

export default function VantaBackground({ children, className = "" }) {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [colors, setColors] = useState(darkColors);

  useEffect(() => {
    function updateColors() {
      if (document.documentElement.classList.contains("dark")) {
        setColors(darkColors);
      } else {
        setColors(lightColors);
      }
    }
    updateColors();

    const observer = new MutationObserver(updateColors);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (vantaEffect.current) {
      vantaEffect.current.setOptions(colors);
    } else {
      vantaEffect.current = FOG({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        blurFactor: 0.85,
        ...colors,
      });
    }
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
      vantaEffect.current = null;
    };
  }, [colors]);

  return (
    <div ref={vantaRef} className={`relative w-full h-screen overflow-visible  ${className}`}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}