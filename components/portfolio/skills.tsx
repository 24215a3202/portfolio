"use client";

import { motion } from "framer-motion";

const skillRows = [
  {
    category: "PROPULSION",
    skills: ["Java", "python"],
    subcategory: "Primary Fuels",
  },
  {
    category: "PROPULSION",
    skills: [ "JavaScript  "],
    subcategory: "Secondary Fuels",
  },
  {
    category: "CARRIAGES",
    skills: ["React", "Next.js"],
    subcategory: "Frontend Systems",
  },
  {
    category: "CARRIAGES",
    skills: ["React Native", "Flutter"],
    subcategory: "Mobile Carriages",
  },
  {
    category: "ENGINE ROOM",
    skills: ["Node.js", , "Django"],
    subcategory: "Backend Infrastructure",
  },
  {
    category: "EQUIPMENT",
    skills: ["Git", "Figma", "VS Code", "GitHub"],
    subcategory: "Standard Tools",
  },

];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-surface">
      {/* Platform number watermark */}
      <div
        className="platform-watermark"
        style={{ top: "50px", right: "-50px" }}
      >
        02
      </div>

      <div className="mx-auto max-w-4xl px-6 relative z-10">
        {/* Section header with platform label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="font-signage text-xs md:text-sm uppercase tracking-widest text-accent-red mb-4">
            Platform 02
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-surface-dark text-balance">
            Engine Room
          </h2>
          <p className="font-body text-text-muted mt-4 text-lg">
            Technical Manifest — British Rail Class Division
          </p>
        </motion.div>

        {/* Manifest card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-surface border-4 border-surface-dark p-8 md:p-10 relative"
          style={{
            boxShadow: "0 10px 40px rgba(28, 43, 74, 0.1)",
          }}
        >
          {/* Decorative header */}
          <div className="text-center border-b-4 border-double border-surface-dark pb-6 mb-8">
            <p className="font-signage text-xs uppercase tracking-widest text-surface-dark">
              ◈ TECHNICAL MANIFEST — ENGINE NO. 001 ◈
            </p>
            <p className="font-mono-railway text-xs text-text-muted mt-2">
              British Rail Class — Full-Stack Division
            </p>
          </div>

          {/* Skills manifest */}
          <div className="space-y-6">
            {skillRows.map((row, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="border-b border-dashed border-track-line pb-4 last:border-0"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="font-signage font-bold text-surface-dark text-sm md:text-base tracking-wider min-w-max">
                      {row.category}
                    </span>
                    <span className="text-track-line hidden md:inline">
                      ────────────────
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pl-0 md:pl-4">
                    {row.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block px-3 py-1 font-mono-railway text-xs md:text-sm bg-background/50 border border-border text-surface-dark tracking-wider"
                      >
                        {skill}
                      </span>
                    ))}
                    {row.category ===  "IN TRIALS" && (
                      <span className="inline-flex items-center gap-2 px-3 py-1 font-mono-railway text-xs md:text-sm text-accent-amber">
                        <span className="w-2 h-2 bg-accent-amber rounded-full" />
                        {row.subcategory}
                      </span>
                    )}
                  </div>

                  {row.category !== "IN TRIALS" && (
                    <p className="font-mono-railway text-xs text-text-muted">
                      {row.subcategory}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative footer */}
          <div className="mt-8 pt-6 border-t-4 border-double border-surface-dark text-center">
            <p className="font-mono-railway text-xs text-text-muted uppercase tracking-widest">
              Approved for Service — All Systems Operational
            </p>
          </div>

          {/* Decorative corners */}
          <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-accent-red" />
          <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-accent-red" />
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-accent-red" />
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-accent-red" />
        </motion.div>
      </div>
    </section>
  );
}