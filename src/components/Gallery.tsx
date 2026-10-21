"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import AnimateIn from "./AnimateIn";

type Item = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  caption: string;
  /** Grid footprint: "wide" = 2x2, "tall" = 1x2, "square" = 1x1 */
  size: "wide" | "tall" | "square";
  /** Optional object-position for the cropped tile */
  pos?: string;
};

type Album = {
  id: string;
  title: string;
  meta: string;
  description: string;
  items: Item[];
};

const albums: Album[] = [
  {
    id: "iros-2026",
    title: "IROS 2026, Pittsburgh",
    meta: "Pittsburgh, PA · 2026",
    description:
      "Presenting Robot Planning and Situation Handling with Active Perception at IROS 2026, and receiving the Best Paper Award at the Full-Shift Robot Co-Workers Workshop.",
    items: [
      {
        type: "image",
        src: "/gallery/iros-2026-group.jpg",
        alt: "Four Binghamton University researchers standing behind the IROS 2026 Pittsburgh sign with the city skyline behind them",
        caption: "With Binghamton labmates at the IROS 2026 venue",
        size: "wide",
        pos: "center 40%",
      },
      {
        type: "video",
        src: "/gallery/iros-2026-award-ceremony.mp4",
        poster: "/gallery/iros-2026-award-ceremony.jpg",
        alt: "Video of the Best Paper Award being presented at the Full-Shift Robot Co-Workers Workshop",
        caption: "Best Paper Award presentation at the workshop",
        size: "tall",
        pos: "center 40%",
      },
      {
        type: "image",
        src: "/gallery/iros-2026-award-1.jpg",
        alt: "Austine holding the Best Paper Award certificate on stage with the workshop organizers",
        caption: "Receiving the Best Paper Award certificate",
        size: "tall",
        pos: "center 40%",
      },
      {
        type: "image",
        src: "/gallery/iros-2026-award-2.jpg",
        alt: "Austine smiling and holding the award certificate beside the presenting organizer",
        caption: "On stage with the award certificate",
        size: "tall",
        pos: "center 40%",
      },
      {
        type: "image",
        src: "/gallery/iros-2026-pittsburgh.jpg",
        alt: "Austine leaning on a railing in an IROS 2026 shirt with downtown Pittsburgh buildings behind",
        caption: "Downtown Pittsburgh between sessions",
        size: "tall",
        pos: "center 35%",
      },
    ],
  },
  {
    id: "lab-tour",
    title: "Lab Tour: African Road Elementary",
    meta: "Binghamton University · 2026",
    description:
      "Hosting a lab tour for students from African Road Elementary during their field trip — introducing them to the humanoid and quadruped robots in the lab.",
    items: [
      {
        type: "image",
        src: "/gallery/lab-tour-3.jpg",
        alt: "Group photo with the African Road Elementary students and the humanoid robot",
        caption: "Group photo with the students and the humanoid",
        size: "wide",
      },
      {
        type: "image",
        src: "/gallery/lab-tour-4.jpg",
        alt: "Walking students through teleoperating the humanoid robot",
        caption: "Walking students through teleoperation",
        size: "tall",
        pos: "40% center",
      },
    ],
  },
];

const sizeClass: Record<Item["size"], string> = {
  wide: "col-span-2 row-span-2",
  tall: "row-span-2",
  square: "",
};

function PlayIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5Z" />
    </svg>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {dir === "left" ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
  );
}

export default function Gallery() {
  // Lightbox state: which album and which item inside it
  const [open, setOpen] = useState<{ album: number; item: number } | null>(
    null
  );

  const close = useCallback(() => setOpen(null), []);

  const step = useCallback(
    (delta: number) => {
      setOpen((cur) => {
        if (!cur) return cur;
        const n = albums[cur.album].items.length;
        return { album: cur.album, item: (cur.item + delta + n) % n };
      });
    },
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const current = open ? albums[open.album].items[open.item] : null;
  const total = open ? albums[open.album].items.length : 0;

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
              Moments
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
              Conferences, outreach, and life in the lab. Click any photo to
              view it full size.
            </p>
          </div>
        </AnimateIn>

        <div className="flex flex-col gap-20 max-md:gap-14">
          {albums.map((album, ai) => (
            <div key={album.id} id={album.id}>
              {/* Album header */}
              <AnimateIn>
                <div className="mb-7">
                  <div className="flex items-center gap-4 mb-3">
                    <h3
                      className="text-2xl font-bold tracking-[-0.5px] max-sm:text-xl"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {album.title}
                    </h3>
                    <span
                      className="h-px flex-1"
                      style={{ background: "var(--border-strong)" }}
                    />
                    <span
                      className="shrink-0 text-xs font-medium whitespace-nowrap max-sm:hidden"
                      style={{
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {album.meta}
                    </span>
                  </div>
                  <p
                    className="text-[15px] leading-[1.7] max-w-[680px]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {album.description}
                  </p>
                </div>
              </AnimateIn>

              {/* Tile grid */}
              <div className="grid grid-cols-3 auto-rows-[240px] gap-3 grid-flow-dense max-md:grid-cols-2 max-md:auto-rows-[180px] max-sm:auto-rows-[150px]">
                {album.items.map((item, ii) => (
                  <AnimateIn
                    key={item.src}
                    delay={(ii % 3) * 0.06}
                    className={`${sizeClass[item.size]} h-full`}
                  >
                    <button
                      onClick={() => setOpen({ album: ai, item: ii })}
                      className="group relative block w-full h-full overflow-hidden rounded-2xl cursor-zoom-in p-0 text-left"
                      style={{
                        background: "var(--bg-glass)",
                        border: "1px solid var(--bg-glass-border)",
                      }}
                      aria-label={`${item.type === "video" ? "Play video" : "Open image"}: ${item.caption}`}
                    >
                      {item.type === "video" ? (
                        <video
                          src={item.src}
                          poster={item.poster}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          aria-label={item.alt}
                          className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
                          style={{ objectPosition: item.pos ?? "center" }}
                        />
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.src}
                          alt={item.alt}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
                          style={{ objectPosition: item.pos ?? "center" }}
                        />
                      )}

                      {/* Gradient + caption on hover */}
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 p-4 pt-12 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0))",
                        }}
                      >
                        <span className="block text-[13px] font-medium leading-snug text-white">
                          {item.caption}
                        </span>
                      </div>

                      {/* Video badge */}
                      {item.type === "video" && (
                        <span
                          className="absolute top-3 left-3 inline-flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 rounded-full text-[11px] font-semibold text-white"
                          style={{
                            background: "rgba(0,0,0,0.55)",
                            backdropFilter: "blur(6px)",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          <PlayIcon />
                          Video
                        </span>
                      )}
                    </button>
                  </AnimateIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox (portaled to body so it sits above the fixed navbar) */}
      {open !== null && current && createPortal(
        <div
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[2000] flex flex-col items-center justify-center p-6 max-sm:p-3"
          style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(6px)" }}
        >
          {/* Top bar */}
          <div className="absolute top-0 inset-x-0 flex items-center justify-between px-6 py-4 max-sm:px-4">
            <span
              className="text-xs text-white/60"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {albums[open.album].title} &middot; {open.item + 1} / {total}
            </span>
            <button
              onClick={close}
              aria-label="Close"
              className="text-3xl leading-none text-white/80 hover:text-white transition-colors"
            >
              &times;
            </button>
          </div>

          {/* Prev / Next */}
          {total > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full text-white/85 hover:text-white transition-colors max-sm:left-1"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                <Chevron dir="left" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full text-white/85 hover:text-white transition-colors max-sm:right-1"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                <Chevron dir="right" />
              </button>
            </>
          )}

          {/* Media */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center gap-4 max-w-full"
          >
            {current.type === "video" ? (
              <video
                key={current.src}
                src={current.src}
                poster={current.poster}
                controls
                autoPlay
                muted
                loop
                playsInline
                aria-label={current.alt}
                className="max-w-full max-h-[80vh] rounded-xl shadow-2xl"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={current.src}
                src={current.src}
                alt={current.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
            )}
            <p className="text-sm text-center text-white/80 max-w-[640px]">
              {current.caption}
            </p>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
