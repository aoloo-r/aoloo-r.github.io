"use client";

import AnimateIn from "./AnimateIn";
import { ArrowRight } from "./Icons";

const pubs = [
  {
    title:
      "VLM-Grounded Task and Motion Planning With Uncertainty Aware Active Perception",
    authors: [
      { name: "Austine Oloo", self: true },
      {
        name: "Shiqi Zhang",
        href: "https://www.cs.binghamton.edu/~szhang/",
      },
    ],
  },
  {
    title:
      "Semantic-Geometric Fusion for Task and Motion Planning in Dynamic Environments",
    authors: [
      { name: "Austine Oloo", self: true, equal: true },
      { name: "Xinwei Guo", href: "#", equal: true },
      {
        name: "Shiqi Zhang",
        href: "https://www.cs.binghamton.edu/~szhang/",
      },
    ],
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
                className="flex items-start gap-5 rounded-2xl p-7 cursor-default transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] group hover:translate-x-1.5 max-md:p-5"
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

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-lg font-semibold leading-[1.4] mb-2.5 tracking-[-0.3px]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {pub.title}
                  </h3>
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
                        ) : (
                          <a
                            href={a.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {a.name}
                          </a>
                        )}
                        {"equal" in a && a.equal && "*"}
                      </span>
                    ))}
                  </p>
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
