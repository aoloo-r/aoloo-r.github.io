"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#home", label: "About", section: "home" },
  { href: "#research", label: "Research", section: "research" },
  { href: "#publications", label: "Publications", section: "publications" },
  { href: "#updates", label: "Updates", section: "updates" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -20% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    const theme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <nav
      className={`fixed top-3 left-1/2 -translate-x-1/2 z-[1000] px-2 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]
        rounded-full border border-[var(--border)]
        ${scrolled ? "shadow-[var(--shadow-md)] top-2" : ""}
        max-md:left-3 max-md:right-3 max-md:translate-x-0 max-md:rounded-2xl`}
      style={{
        background: "var(--bg-nav)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
    >
      <div className="flex items-center gap-1 h-[52px] px-3">
        {/* Logo */}
        <a
          href="#"
          className="font-[var(--font-mono)] text-base font-semibold pr-3 transition-colors duration-200"
          style={{ color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}
        >
          <span style={{ color: "var(--accent)", fontWeight: 400 }}>{"{"}</span>
          AO
          <span style={{ color: "var(--accent)", fontWeight: 400 }}>{"}"}</span>
        </a>

        {/* Desktop Links */}
        <div
          className={`flex gap-0.5 max-md:fixed max-md:inset-0 max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-3 max-md:z-[999] max-md:transition-opacity max-md:duration-300
            ${menuOpen ? "max-md:opacity-100 max-md:pointer-events-auto" : "max-md:opacity-0 max-md:pointer-events-none"}`}
          style={menuOpen ? { background: "var(--bg-base)" } : {}}
        >
          {links.map((link) => (
            <a
              key={link.section}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-1.5 text-[13px] font-medium py-1.5 px-3.5 rounded-full transition-all duration-200 no-underline
                max-md:text-lg max-md:py-3 max-md:px-7
                ${
                  active === link.section
                    ? ""
                    : ""
                }`}
              style={{
                color:
                  active === link.section
                    ? "var(--accent)"
                    : "var(--text-muted)",
                background:
                  active === link.section
                    ? "var(--accent-soft)"
                    : "transparent",
              }}
              onMouseEnter={(e) => {
                if (active !== link.section) {
                  e.currentTarget.style.color = "var(--text-primary)";
                  e.currentTarget.style.background = "var(--accent-softer)";
                }
              }}
              onMouseLeave={(e) => {
                if (active !== link.section) {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              {active === link.section && (
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ background: "currentColor" }}
                />
              )}
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 pl-2 ml-auto">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border-none cursor-pointer transition-all duration-200"
            style={{
              background: "none",
              color: "var(--text-muted)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.background = "var(--accent-soft)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-muted)";
              e.currentTarget.style.background = "none";
            }}
          >
            <svg
              className="sun-icon block dark:hidden [html[data-theme='dark']_&]:hidden"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <svg
              className="moon-icon hidden [html[data-theme='dark']_&]:block"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="hidden max-md:flex flex-col gap-1 p-2 border-none cursor-pointer z-[1001]"
            style={{ background: "none" }}
          >
            <span
              className={`block w-[18px] h-0.5 rounded-sm transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
              style={{
                background: "var(--text-primary)",
                transformOrigin: "center",
              }}
            />
            <span
              className={`block w-[18px] h-0.5 rounded-sm transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
              style={{ background: "var(--text-primary)" }}
            />
            <span
              className={`block w-[18px] h-0.5 rounded-sm transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
              style={{
                background: "var(--text-primary)",
                transformOrigin: "center",
              }}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
