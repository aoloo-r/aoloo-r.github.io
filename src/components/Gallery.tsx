"use client";

import { useState, useEffect, useCallback } from "react";
import AnimateIn from "./AnimateIn";

const photos = [
  {
    src: "gallery/lab-tour-1.jpg",
    alt: "Demonstrating the humanoid robot to students during the lab tour",
  },
  {
    src: "gallery/lab-tour-2.jpg",
    alt: "Showing the quadruped robot to students during the lab tour",
  },
  {
    src: "gallery/lab-tour-3.jpg",
    alt: "Group photo with the African Road Elementary students and the humanoid robot",
  },
  {
    src: "gallery/lab-tour-4.jpg",
    alt: "Walking students through teleoperating the humanoid robot",
  },
];

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <section
      id="gallery"
      className="relative py-[120px] px-10 z-[1] max-md:py-20 max-md:px-5"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <AnimateIn>
          <div className="mb-16">
            <span
              className="inline-flex items-center gap-2.5 text-[13px] font-medium uppercase tracking-wider mb-3"
              style={{
                color: "var(--accent)",
                fontFamily: "var(--font-mono)",
              }}
            >
              <span
                className="text-xs px-2.5 py-0.5 rounded-full"
                style={{
                  background: "var(--accent-soft)",
                  border: "1px solid var(--accent-border)",
                }}
              >
                04
              </span>
              Outreach
            </span>
            <h2
              className="text-[44px] font-bold leading-[1.15] tracking-[-1px] max-lg:text-4xl max-md:text-[30px] max-sm:text-[26px]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Gallery
            </h2>
            <p
              className="mt-4 text-base leading-[1.7] max-w-[640px]"
              style={{ color: "var(--text-secondary)" }}
            >
              Hosting a lab tour for students from African Road Elementary
              during their field trip &mdash; introducing them to humanoid and
              quadruped robots in the lab.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-2 gap-4 max-[680px]:grid-cols-1">
          {photos.map((photo, i) => (
            <AnimateIn key={photo.src} delay={(i % 2) * 0.1}>
              <button
                onClick={() => setOpen(i)}
                className="group block w-full overflow-hidden rounded-2xl cursor-zoom-in border-0 p-0"
                style={{
                  background: "var(--bg-glass)",
                  border: "1px solid var(--bg-glass-border)",
                }}
                aria-label={`Open image: ${photo.alt}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-[300px] object-cover transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04] max-md:h-[240px]"
                />
              </button>
            </AnimateIn>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          onClick={close}
          className="fixed inset-0 z-[2000] flex items-center justify-center p-6"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(4px)" }}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-6 text-3xl leading-none text-white/80 hover:text-white transition-colors"
          >
            &times;
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos[open].src}
            alt={photos[open].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
