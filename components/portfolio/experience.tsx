"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timelineItems = [
  {
    date: "2020",
    title: "SSC",
    org: "Spectra High School",
    description: "Foundation in Science",
  },
  {
    date: "2020-2023",
    title: "Diploma in Computer Engineering",
    org: "Mahaveer Institute of Science and Technology",
    description:
      "C programming, C++, RDBMS, OOPs, Operating systems.",
  },
  {
    date: "2024 — 2027",
    title: "Bachelor of Technology",
    org: "B V Raju Institute of Technology",
    description:
      "Java, Web development, Computer Networks, DBMS.",
  },
];

export function Experience() {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start end", "end end"],
  });
  const trackHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-surface">
      {/* Platform number watermark */}
      <div
        className="platform-watermark"
        style={{ top: "100px", right: "-50px" }}
      >
        04
      </div>

      <div className="mx-auto max-w-4xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="font-signage text-xs md:text-sm uppercase tracking-widest text-accent-red mb-4">
            Platform 04
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-surface-dark text-balance">
            Journey Log
          </h2>
          <p className="font-body text-text-muted mt-4 text-lg">
            Route History — Education & Experience
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative" ref={trackRef}>
          {/* Central track line */}
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-amber via-accent-red to-accent-amber md:transform md:-translate-x-1/2"
            style={{ background: "#EDE8DC" }}
          >
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: trackHeight,
                background: "linear-gradient(to bottom, #C0392B, #D4A017)",
                originY: 0,
              }}
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {timelineItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
                className={`flex gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center`}
              >
                {/* Station dot */}
                <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-accent-amber border-4 border-surface rounded-full md:transform md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pr-6 md:text-right" : "md:pl-6"} ml-12 md:ml-0`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="bg-surface border-3 border-surface-dark p-6 md:p-8 relative"
                  >
                    {/* Station label */}
                    <p className="font-signage text-xs uppercase tracking-widest text-accent-red mb-2">
                      {item.date}
                    </p>

                    {/* Title */}
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-surface-dark mb-1">
                      {item.title}
                    </h3>

                    {/* Organization */}
                    <p className="font-mono-railway text-sm text-accent-amber mb-3 uppercase tracking-wider">
                      {item.org}
                    </p>

                    {/* Description */}
                    <p className="font-body text-sm md:text-base text-text-primary">
                      {item.description}
                    </p>

                    {/* Decorative corners */}
                    <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-accent-red opacity-50" />
                    <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-accent-red opacity-50" />
                    <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-accent-red opacity-50" />
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-accent-red opacity-50" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
