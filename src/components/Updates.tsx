"use client";

import AnimateIn from "./AnimateIn";

const updates = [
  { date: "Mar 2026", text: "Submitted to IROS 2026: Robot Planning and Situation Handling with Active Perception" },
  { date: "Jan 2026", text: "Teaching Assistant for Intelligent Mobile Robotics" },
  { date: "Dec 2025", text: "Successfully defended my Master\u2019s thesis" },
  {
    date: "Aug 2025",
    text: 'Teaching Assistant for <a href="https://www.cs.binghamton.edu/~szhang/teaching/25fall-ai/index.html" target="_blank" rel="noopener noreferrer">Introduction to AI</a>',
  },
  {
    date: "Aug 2025",
    text: 'Started PhD in Computer Science at <a href="https://www.binghamton.edu/" target="_blank" rel="noopener noreferrer">Binghamton University</a>, advised by <a href="https://www.cs.binghamton.edu/~szhang/" target="_blank" rel="noopener noreferrer">Prof. Shiqi Zhang</a>',
  },
  {
    date: "Feb 2025",
    text: "Successfully demonstrated autonomous robot navigation system in complex indoor environments",
  },
  {
    date: "Aug 2024",
    text: 'Started MSc in Computer Science at <a href="https://www.binghamton.edu/" target="_blank" rel="noopener noreferrer">Binghamton University</a>',
  },
];

export default function Updates() {
  return (
    <section id="updates" className="relative py-[120px] px-10 z-[1] max-md:py-20 max-md:px-5">
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
                03
              </span>
              Latest
            </span>
            <h2
              className="text-[44px] font-bold leading-[1.15] tracking-[-1px] max-lg:text-4xl max-md:text-[30px] max-sm:text-[26px]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              News & Updates
            </h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-2 gap-4 max-[900px]:grid-cols-1">
          {updates.map((item, i) => (
            <AnimateIn key={i} delay={i * 0.06}>
              <div
                className="rounded-2xl p-6 transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5"
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
                <span
                  className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3"
                  style={{
                    color: "var(--accent)",
                    background: "var(--accent-soft)",
                    border: "1px solid var(--accent-border)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {item.date}
                </span>
                <p
                  className="text-sm leading-[1.65] [&_a]:font-medium [&_a]:underline-offset-2 hover:[&_a]:underline"
                  style={{ color: "var(--text-secondary)" }}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
