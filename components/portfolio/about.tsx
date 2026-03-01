"use client";

import { motion } from "framer-motion";

const stations = [
  { emoji: "🚂", label: "Problem Architect" },
  { emoji: "📱", label: "Impact First" },
  { emoji: "🧠", label: "Problem Solving" },
  { emoji: "💡", label: "Innovation" },
  { emoji: "🎯", label: "Impact Driven" },
  { emoji: "🚀", label: "Ship Fast" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-background">
      {/* Platform number watermark */}
      <div
        className="platform-watermark"
        style={{ top: "100px", left: "-50px" }}
      >
        01
      </div>

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="font-signage text-xs md:text-sm uppercase tracking-widest text-accent-red mb-4">
            Platform 01
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-surface-dark text-balance">
            Passenger Information Office
          </h2>
          <p className="font-body text-text-muted mt-4 text-lg">
            Who I am. Where I'm headed. Why I build.
          </p>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="font-body text-lg leading-relaxed text-text-muted"
          >
            {
              "I’m a Computer Science student who is deeply curious about how technology can solve real human problems. I enjoy building products that combine logic, creativity, and empathy — especially in areas like mental health, fintech, and intelligent automation. My focus is not just on writing code, but on understanding people, systems, and the impact technology can create in the real world."
            }
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4"
          >
            {stations.map((station, idx) => (
              <motion.div
                key={station.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: idx * 0.05,
                }}
                viewport={{ once: true }}
                className="bg-surface border-3 border-surface-dark p-4 md:p-6 text-center relative hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-4xl md:text-5xl mb-2">{station.emoji}</p>
                <p className="font-mono-railway text-xs md:text-sm text-surface-dark font-semibold uppercase tracking-wider">
                  {station.label}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-1 left-1 w-2 h-2 bg-accent-red opacity-30" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-accent-amber opacity-30" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
