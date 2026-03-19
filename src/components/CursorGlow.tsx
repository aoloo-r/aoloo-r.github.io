"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const el = ref.current;
    if (!el) return;

    let mouseX = 0,
      mouseY = 0,
      x = 0,
      y = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      el.style.opacity = "1";
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };

    const animate = () => {
      x += (mouseX - x) * 0.07;
      y += (mouseY - y) * 0.07;
      el.style.left = x + "px";
      el.style.top = y + "px";
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-0 opacity-0 -translate-x-1/2 -translate-y-1/2"
      style={{
        background:
          "radial-gradient(circle, var(--accent-glow), transparent 70%)",
        transition: "opacity 0.4s ease",
      }}
    />
  );
}
