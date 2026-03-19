"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  GoogleScholar,
  FileText,
  ChevronDown,
} from "./Icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-10 pt-[120px] pb-20 overflow-hidden max-md:px-5 max-md:pt-[100px] max-md:pb-14"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(var(--border-strong) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto w-full flex gap-20 items-center relative z-[1] max-md:flex-col max-md:gap-12 max-md:text-center">
        {/* Photo side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="shrink-0 flex flex-col items-center gap-6 max-md:w-full"
        >
          <div
            className="relative rounded-3xl overflow-hidden group"
            style={{ boxShadow: "var(--shadow-lg), var(--shadow-glow)" }}
          >
            {/* Glow border on hover */}
            <div
              className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent), transparent 50%, var(--accent-hover))",
              }}
            />
            <Image
              src="/me.jpg"
              alt="Austine R. Oloo"
              width={340}
              height={420}
              priority
              className="object-cover object-[center_top] block rounded-3xl transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.02]
                max-md:w-[260px] max-md:h-[320px] max-sm:w-[220px] max-sm:h-[270px]"
              style={{ width: 340, height: 420 }}
            />
            {/* Status badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/70 backdrop-blur-xl text-white text-xs font-medium px-4 py-2 rounded-full whitespace-nowrap">
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "var(--green)",
                  boxShadow: "0 0 8px var(--green)",
                  animation: "pulse-dot 2s infinite",
                }}
              />
              Open to collaborations
            </div>
          </div>

          {/* Quick links row */}
          <div className="flex gap-2 max-md:justify-center">
            {[
              { href: "mailto:aoloo@binghamton.edu", icon: <Mail />, title: "Email" },
              { href: "https://github.com/aoloo-r", icon: <Github />, title: "GitHub" },
              { href: "https://www.linkedin.com/in/aoloo-r-oloo", icon: <Linkedin />, title: "LinkedIn" },
              { href: "https://scholar.google.com/citations?user=LYSMcY0AAAAJ&hl=en&authuser=1", icon: <GoogleScholar />, title: "Google Scholar" },
              { href: "https://x.com/aoloo_r?s=11", icon: <Twitter />, title: "Twitter/X" },
            ].map((l) => (
              <a
                key={l.title}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel={l.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                title={l.title}
                className="w-11 h-11 flex items-center justify-center rounded-[10px] border transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5"
                style={{
                  background: "var(--bg-surface)",
                  borderColor: "var(--border)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.borderColor = "var(--accent-border)";
                  e.currentTarget.style.background = "var(--accent-soft)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "var(--bg-surface)";
                }}
              >
                {l.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex-1 min-w-0"
        >
          {/* Intro line */}
          <div className="flex items-center gap-3 mb-4 max-md:justify-center">
            <span
              className="w-10 h-0.5 rounded-sm"
              style={{ background: "var(--accent)" }}
            />
            <span
              className="text-xs font-medium uppercase tracking-wider"
              style={{
                color: "var(--accent)",
                fontFamily: "var(--font-mono)",
              }}
            >
              PhD Student &middot; Embodied AI
            </span>
          </div>

          {/* Name */}
          <h1
            className="text-[64px] font-bold leading-[1.05] tracking-[-2px] mb-4 max-lg:text-[52px] max-md:text-[40px] max-sm:text-[34px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="block">Austine R.</span>
            <span
              className="block bg-clip-text"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent), var(--accent-hover))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Oloo
            </span>
          </h1>

          {/* Affiliation */}
          <p
            className="text-[15px] mb-8 flex items-center gap-2 flex-wrap max-md:justify-center"
            style={{ color: "var(--text-muted)" }}
          >
            <a
              href="https://www.binghamton.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
              style={{ color: "var(--text-secondary)" }}
            >
              Binghamton University
            </a>
            <span style={{ color: "var(--border-strong)" }}>/</span>
            Computer Science
          </p>

          {/* Bio card */}
          <div
            className="relative rounded-2xl p-6 mb-6 overflow-hidden"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              className="absolute top-0 left-0 w-[3px] h-full rounded-r-sm"
              style={{
                background:
                  "linear-gradient(to bottom, var(--accent), var(--accent-hover))",
              }}
            />
            <p
              className="text-[15px] leading-[1.8]"
              style={{ color: "var(--text-secondary)" }}
            >
              I am a Computer Science PhD student specializing in{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                Embodied AI
              </strong>
              . My research bridges high-level symbolic reasoning and low-level
              sensorimotor control to enable intuitive Human-Robot Interaction
              &mdash; creating robotic systems that collaborate safely and
              naturally with people. I actively explore how modern foundation
              models can be grounded in robotic systems as powerful interfaces
              for perception and action.
            </p>
          </div>

          {/* Advisor */}
          <div className="flex items-center gap-3 mb-8 max-md:justify-center">
            <span
              className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
              style={{
                color: "var(--text-muted)",
                background: "var(--accent-softer)",
                border: "1px solid var(--border)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Advisor
            </span>
            <a
              href="https://www.cs.binghamton.edu/~szhang/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
              style={{ color: "var(--text-secondary)" }}
            >
              Prof. Shiqi Zhang
            </a>
          </div>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap max-md:justify-center max-sm:flex-col max-sm:items-stretch">
            <a
              href="cv.pdf"
              className="inline-flex items-center gap-2.5 px-7 py-3 text-sm font-semibold rounded-[10px] text-white transition-all duration-300 hover:-translate-y-0.5 max-sm:justify-center"
              style={{
                background: "var(--accent)",
                boxShadow: "0 2px 12px rgba(99,102,241,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent-hover)";
                e.currentTarget.style.boxShadow =
                  "0 6px 24px rgba(99,102,241,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.boxShadow =
                  "0 2px 12px rgba(99,102,241,0.3)";
              }}
            >
              <FileText />
              Download CV
            </a>
            <a
              href="mailto:aoloo@binghamton.edu"
              className="inline-flex items-center px-7 py-3 text-sm font-semibold rounded-[10px] border transition-all duration-300 hover:-translate-y-0.5 max-sm:justify-center"
              style={{
                background: "var(--bg-surface)",
                color: "var(--text-secondary)",
                borderColor: "var(--border-strong)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.borderColor = "var(--accent-border)";
                e.currentTarget.style.background = "var(--accent-softer)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.borderColor = "var(--border-strong)";
                e.currentTarget.style.background = "var(--bg-surface)";
              }}
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 flex flex-col items-center gap-1.5 text-xs font-medium uppercase tracking-wider opacity-60 max-md:hidden"
        style={{
          color: "var(--text-muted)",
          animation: "bounce-down 2s infinite",
        }}
      >
        <span>Scroll</span>
        <ChevronDown />
      </div>
    </section>
  );
}
