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
    <section id="experience" className="relative py-16 md:py-24 lg:py-32 bg-surface overflow-hidden">
      {/* Platform number watermark */}
      <div
        className="platform-watermark hidden md:block"
        style={{ top: "100px", right: "-50px" }}
      >
        04
      </div>

      <div className="mx-auto max-w-4xl px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12 text-center"
        >
          <p className="font-signage text-xs md:text-sm uppercase tracking-widest text-accent-red mb-4">
            Platform 04
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-surface-dark text-balance">
            Journey Log
          </h2>
          <p className="font-body text-text-muted mt-4 text-base md:text-lg">
            Route History — Education & Experience
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative" ref={trackRef}>
          {/* Central track line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:transform md:-translate-x-1/2"
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

          <div className="space-y-8 md:space-y-16">
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
                className={`flex gap-4 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start md:items-center`}
              >
                {/* Station dot */}
                <div className="absolute left-4 md:left-1/2 w-4 md:w-6 h-4 md:h-6 bg-accent-amber border-3 md:border-4 border-surface rounded-full md:transform md:-translate-x-1/2 z-10 shrink-0 -ml-1.5 md:ml-0" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pr-6 md:text-right" : "md:pl-6"} ml-10 md:ml-0`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="bg-surface border-2 md:border-3 border-surface-dark p-4 md:p-6 lg:p-8 relative"
                  >
                    {/* Station label */}
                    <p className="font-signage text-[10px] md:text-xs uppercase tracking-widest text-accent-red mb-2">
                      {item.date}
                    </p>

                    {/* Title */}
                    <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-surface-dark mb-1">
                      {item.title}
                    </h3>

                    {/* Organization */}
                    <p className="font-mono-railway text-[10px] md:text-xs lg:text-sm text-accent-amber mb-2 md:mb-3 uppercase tracking-wider leading-tight">
                      {item.org}
                    </p>

                    {/* Description */}
                    <p className="font-body text-xs md:text-sm lg:text-base text-text-primary">
                      {item.description}
                    </p>

                    {/* Decorative corners */}
                    <div className="absolute top-1 md:top-2 left-1 md:left-2 w-2 h-2 border-t border-l border-accent-red opacity-50" />
                    <div className="absolute top-1 md:top-2 right-1 md:right-2 w-2 h-2 border-t border-r border-accent-red opacity-50" />
                    <div className="absolute bottom-1 md:bottom-2 left-1 md:left-2 w-2 h-2 border-b border-l border-accent-red opacity-50" />
                    <div className="absolute bottom-1 md:bottom-2 right-1 md:right-2 w-2 h-2 border-b border-r border-accent-red opacity-50" />
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
