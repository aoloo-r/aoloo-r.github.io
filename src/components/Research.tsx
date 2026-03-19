"use client";

import AnimateIn from "./AnimateIn";
import { Eye, Layers } from "./Icons";

const cards = [
  {
    num: "01",
    icon: <Eye />,
    title: "Spatial Intelligence\nfor Robotics",
    subtitle: "Empowering Robots to Understand the Real World",
    desc: "Developing methods that enable robots to build rich, semantic understanding of 3D environments \u2014 fusing geometric perception with high-level reasoning so that mobile manipulators can interpret scenes, localize objects, and plan actions grounded in spatial awareness.",
    tags: [
      "3D Scene Understanding",
      "Semantic Mapping",
      "Active Perception",
      "Foundation Models",
    ],
  },
  {
    num: "02",
    icon: <Layers />,
    title: "Skill Learning\nfor Robotics",
    subtitle: "Enabling Robots to Transform the Real World",
    desc: "Building frameworks for robots to acquire, compose, and generalize manipulation skills \u2014 bridging symbolic task planning with learned sensorimotor policies so that mobile manipulators can perform complex, multi-step tasks in unstructured environments.",
    tags: [
      "Task & Motion Planning",
      "Skill Composition",
      "Sim-to-Real Transfer",
      "Human-Robot Interaction",
    ],
  },
];

export default function Research() {
  return (
    <section id="research" className="relative py-[120px] px-10 z-[1] max-md:py-20 max-md:px-5">
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
                01
              </span>
              Research Focus
            </span>
            <h2
              className="text-[44px] font-bold leading-[1.15] tracking-[-1px] mb-4 max-lg:text-4xl max-md:text-[30px] max-sm:text-[26px]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Building Intelligent
              <br />
              Mobile Manipulators
            </h2>
            <p
              className="text-[17px] leading-[1.7] max-w-[680px]"
              style={{ color: "var(--text-secondary)" }}
            >
              My work sits at the intersection of robotics, computer vision, and
              AI &mdash; with a particular emphasis on their applications in the
              context of{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                mobile manipulators
              </strong>
              .
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-2 gap-6 max-[900px]:grid-cols-1">
          {cards.map((card, i) => (
            <AnimateIn key={card.num} delay={i * 0.15}>
              <div
                className="relative rounded-2xl p-10 overflow-hidden group transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 max-md:p-7"
                style={{
                  background: "var(--bg-glass)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
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
                {/* Shimmer accent top */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--accent), var(--accent-hover), var(--accent))",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 2s linear infinite",
                  }}
                />

                {/* Header */}
                <div className="flex items-center justify-between mb-7">
                  <div
                    className="w-[52px] h-[52px] flex items-center justify-center rounded-[10px]"
                    style={{
                      background: "var(--accent-soft)",
                      color: "var(--accent)",
                      border: "1px solid var(--accent-border)",
                    }}
                  >
                    {card.icon}
                  </div>
                  <span
                    className="text-5xl font-bold leading-none tracking-[-2px]"
                    style={{
                      color: "var(--accent-softer)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {card.num}
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold mb-2 leading-[1.2] tracking-[-0.5px] whitespace-pre-line max-md:text-xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm font-medium italic mb-5"
                  style={{ color: "var(--accent)" }}
                >
                  {card.subtitle}
                </p>
                <p
                  className="text-sm leading-[1.75] mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {card.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold px-3 py-1 rounded-full tracking-wide transition-all duration-200 cursor-default hover:text-white"
                      style={{
                        color: "var(--accent)",
                        background: "var(--accent-soft)",
                        border: "1px solid var(--accent-border)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--accent)";
                        e.currentTarget.style.color = "white";
                        e.currentTarget.style.borderColor = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "var(--accent-soft)";
                        e.currentTarget.style.color = "var(--accent)";
                        e.currentTarget.style.borderColor = "var(--accent-border)";
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
