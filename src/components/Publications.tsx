"use client";

import AnimateIn from "./AnimateIn";
import { ArrowRight } from "./Icons";

type Pub = {
  title: string;
  href?: string;
  venue?: string;
  award?: string;
  media?: { video?: string; poster: string; alt: string };
  links?: { label: string; href: string }[];
  authors: { name: string; self?: boolean; href?: string }[];
};

const pubs: Pub[] = [
  {
    title: "Robot Planning and Situation Handling with Active Perception",
    href: "https://arxiv.org/pdf/2604.26988",
    venue: "IROS 2026 (Accepted)",
    award: "Best Paper Award \u2014 Full-Shift Robot Co-Workers Workshop, IROS 2026",
    media: {
      video: "/pubs/vap-tamp.mp4",
      poster: "/pubs/vap-tamp.jpg",
      alt: "Mobile manipulator using active perception to locate and pick up a cup",
    },
    links: [
      { label: "Project page", href: "https://vap-tamp.github.io/vap-tamp/" },
      { label: "Paper", href: "https://arxiv.org/abs/2604.26988" },
    ],
    authors: [
      { name: "Austine Oloo", self: true },
      { name: "Zainab Altaweel" },
      { name: "Yohei Hayamizu" },
      { name: "Peiqi Liu" },
      { name: "Yan Ding" },
      { name: "Saeid Amiri" },
      { name: "Hao Yang" },
      { name: "Andy Kaminski" },
      { name: "Chad Esselink" },
      { name: "Chris Paxton" },
      { name: "Xiaohan Zhang" },
      {
        name: "Shiqi Zhang",
        href: "https://www.cs.binghamton.edu/~szhang/",
      },
    ],
  },
  {
    title:
      "VLM-Grounded Task and Motion Planning With Uncertainty Aware Active Perception",
    href: "https://search.proquest.com/openview/d9028808d178d84805503ed91556d5b7/1?pq-origsite=gscholar&cbl=18750&diss=y",
    venue: "Master's Thesis",
    links: [
      {
        label: "Thesis",
        href: "https://search.proquest.com/openview/d9028808d178d84805503ed91556d5b7/1?pq-origsite=gscholar&cbl=18750&diss=y",
      },
    ],
    authors: [{ name: "Austine Oloo", self: true }],
  },
];

export default function Publications() {
  return (
    <section
      id="publications"
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
                02
              </span>
              Selected Work
            </span>
            <h2
              className="text-[44px] font-bold leading-[1.15] tracking-[-1px] max-lg:text-4xl max-md:text-[30px] max-sm:text-[26px]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Publications
            </h2>
          </div>
        </AnimateIn>

        <div className="flex flex-col gap-4">
          {pubs.map((pub, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <article
                className="flex items-start gap-5 rounded-2xl p-7 cursor-default transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] group hover:translate-x-1.5 max-md:p-5 max-md:flex-wrap"
                style={{
                  background: "var(--bg-glass)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid var(--bg-glass-border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  e.currentTarget.style.borderColor = "var(--accent-border)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "var(--bg-glass-border)";
                }}
              >
                {/* Dot + Line */}
                <div className="flex flex-col items-center pt-1.5 shrink-0">
                  <div
                    className="w-2.5 h-2.5 rounded-full transition-shadow duration-300"
                    style={{
                      background: "var(--accent)",
                      boxShadow: "0 0 0 4px var(--accent-soft)",
                    }}
                  />
                  <div
                    className="w-0.5 flex-1 min-h-[20px] mt-2 rounded-sm"
                    style={{ background: "var(--border)" }}
                  />
                </div>

                {/* Media */}
                {pub.media && (
                  <div
                    className="shrink-0 w-[220px] aspect-video rounded-xl overflow-hidden max-md:w-full max-md:order-first"
                    style={{
                      background: "var(--bg-surface)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {pub.media.video ? (
                      <video
                        src={pub.media.video}
                        poster={pub.media.poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label={pub.media.alt}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={pub.media.poster}
                        alt={pub.media.alt}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2.5 max-sm:flex-col max-sm:gap-1.5">
                    <h3
                      className="text-lg font-semibold leading-[1.4] tracking-[-0.3px]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {pub.href ? (
                        <a
                          href={pub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        pub.title
                      )}
                    </h3>
                    {pub.venue && (
                      <span
                        className="shrink-0 text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap mt-1"
                        style={{
                          color: "var(--accent)",
                          background: "var(--accent-soft)",
                          border: "1px solid var(--accent-border)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {pub.venue}
                      </span>
                    )}
                  </div>
                  {pub.award && (
                    <div className="mb-2.5">
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                        style={{
                          color: "var(--award)",
                          background: "var(--award-soft)",
                          border: "1px solid var(--award-border)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        <span aria-hidden="true">&#127942;</span>
                        {pub.award}
                      </span>
                    </div>
                  )}
                  <p
                    className="text-sm leading-[1.6]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {pub.authors.map((a, j) => (
                      <span key={j}>
                        {j > 0 && ", "}
                        {a.self ? (
                          <strong
                            style={{
                              color: "var(--text-primary)",
                              fontWeight: 600,
                            }}
                          >
                            {a.name}
                          </strong>
                        ) : a.href ? (
                          <a
                            href={a.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {a.name}
                          </a>
                        ) : (
                          <span>{a.name}</span>
                        )}
                      </span>
                    ))}
                  </p>
                  {pub.links && (
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                      {pub.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[13px] font-medium underline underline-offset-4 decoration-[var(--accent-border)] hover:decoration-[var(--accent)] transition-colors"
                          style={{ color: "var(--accent)" }}
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Arrow */}
                <div
                  className="shrink-0 pt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  style={{ color: "var(--accent)" }}
                >
                  <ArrowRight />
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
