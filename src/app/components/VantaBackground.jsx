"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

const lightColors = {
  highlightColor: 0x9ebfff,
  midtoneColor: 0xcdd8ff,
  lowlightColor: 0xffffff,
  baseColor: 0xffffff,
};
const darkColors = {
  highlightColor: 0x000000,
  midtoneColor: 0x74008e,
  lowlightColor: 0x2c00ff,
  baseColor: 0x000000,
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
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

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
        zoom: 0.6,
        speed: 0.4,
        ...colors,
      });
    }
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
      vantaEffect.current = null;
    };
  }, [colors]);

  return (
    <div
      ref={vantaRef}
      className={`relative w-full h-screen overflow-hidden ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
