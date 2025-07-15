"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

export default function VantaBackground({ children, className = "" }) {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = FOG({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        highlightColor: 0x0d1ff,
        midtoneColor: 0x840351,
        lowlightColor: 0x2c00ff,
        baseColor: 0x000000,
        blurFactor: 0.85,
      });
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} className={`relative w-full h-screen overflow-hidden ${className}`}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}