"use client";

export default function Footer() {
  return (
    <footer
      className="relative z-[1] px-10 pt-12 pb-8 max-md:px-5"
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-base)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div
          className="flex items-center justify-between mb-8 pb-6 flex-wrap gap-5 max-md:flex-col max-md:text-center"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-4 max-md:flex-col">
            <span
              className="text-lg font-semibold"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span style={{ color: "var(--accent)", fontWeight: 400 }}>
                {"{"}
              </span>
              AO
              <span style={{ color: "var(--accent)", fontWeight: 400 }}>
                {"}"}
              </span>
            </span>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>
              Embodied AI Researcher
            </span>
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            {[
              { label: "Email", href: "mailto:aoloo@binghamton.edu" },
              { label: "GitHub", href: "https://github.com/aoloo-r" },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/aoloo-r-oloo",
              },
              { label: "Twitter/X", href: "https://x.com/aoloo_r?s=11" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={
                  link.href.startsWith("mailto") ? undefined : "_blank"
                }
                rel={
                  link.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="text-sm font-medium transition-colors duration-200 hover:underline"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <p
          className="text-[13px] max-md:text-center"
          style={{ color: "var(--text-muted)" }}
        >
          &copy; 2026 Austine R. Oloo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
