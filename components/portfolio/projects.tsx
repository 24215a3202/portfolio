"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    name: "Bus Tracking System",
    description:
      "A real-time bus tracking system that helps users monitor live bus locations and plan their travel efficiently.",
    tags: ["Java", "JavaScript", "Python", "MySQL"],
    status: "arrived" as const,
  },
  {
    name: "Early Detection of Mental Health Conditions Using NLP",
    description:
      "A research project focused on leveraging NLP techniques to analyze textual data for the early detection of mental health conditions.",
    tags: ["Python", "NLP", "Machine Learning"],
    status: "arrived" as const,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-surface">
      {/* Platform number watermark */}
      <div
        className="platform-watermark"
        style={{ bottom: "50px", right: "-50px", opacity: 0.04 }}
      >
        03
      </div>

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="font-signage text-xs md:text-sm uppercase tracking-widest text-accent-red mb-4">
            Platform 03
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-surface-dark text-balance">
            Departures Hall
          </h2>
          <p className="font-body text-text-muted mt-4 text-lg">
            Notable Journeys — Projects on the Rails
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              onHoverStart={() => setHoveredProject(project.name)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative group cursor-pointer h-full"
            >
              {/* Ticket card */}
              <div className="relative h-full bg-surface border-4 border-surface-dark p-6 md:p-8 transition-all duration-300 hover:shadow-2xl">
                {/* Platform label */}
                <div className="flex justify-between items-start mb-6 pb-4 border-dashed border-b-2 border-track-line">
                  <p className="font-signage text-xs md:text-sm text-surface-dark tracking-widest">
                    PLATFORM 03
                  </p>
                  <p className="font-signage text-xs text-text-muted">
                    {idx + 1} / {projects.length}
                  </p>
                </div>

                {/* Journey details */}
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-dashed border-b-2 border-track-line font-mono-railway text-xs">
                  <div>
                    <p className="text-text-muted uppercase">FROM</p>
                    <p className="font-semibold text-surface-dark">Your Ideas</p>
                  </div>
                  <div className="text-right">
                    <p className="text-text-muted uppercase">TO</p>
                    <p className="font-semibold text-surface-dark">Real Impact</p>
                  </div>
                </div>

                {/* Locomotive icon */}
                <div className="text-3xl mb-4">🚂</div>

                {/* Project name */}
                <h3 className="font-display text-xl md:text-2xl font-bold text-surface-dark mb-3 leading-tight">
                  {project.name}
                </h3>

                {/* Project description */}
                <p className="font-body text-sm md:text-base leading-relaxed text-text-primary mb-6">
                  {project.description}
                </p>

                {/* Tags as tech manifesto */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex px-2 py-1 font-mono-railway text-xs border border-track-line text-surface-dark bg-background/50 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Status indicator */}
                <div className="flex items-center justify-between pt-6 mb-6 border-dashed border-t-2 border-track-line">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-accent-red" />
                      <span className="w-2 h-2 rounded-full bg-accent-red" />
                      <span className="w-2 h-2 rounded-full bg-accent-red" />
                    </div>
                    <span className="font-mono-railway text-xs text-surface-dark font-semibold uppercase tracking-wider">
                      {project.status === "arrived"
                        ? "Arrived — On Time"
                        : "Departing Soon"}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-accent-red text-background font-mono-railway font-semibold text-xs uppercase tracking-wider hover:bg-accent-orange transition-colors duration-300"
                    aria-label={`${project.name} GitHub repository`}
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border-2 border-accent-red text-accent-red font-mono-railway font-semibold text-xs uppercase tracking-wider hover:bg-accent-red hover:text-background transition-colors duration-300"
                    aria-label={`${project.name} live demo`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Demo</span>
                  </a>
                </div>

                {/* Ticket stub perforation */}
                <div className="absolute -right-4 top-0 bottom-0 w-8 flex flex-col items-center justify-center gap-3 opacity-30">
                  <div className="w-3 h-3 rounded-full bg-surface-dark" />
                  <div className="w-3 h-3 rounded-full bg-surface-dark" />
                  <div className="w-3 h-3 rounded-full bg-surface-dark" />
                  <div className="w-3 h-3 rounded-full bg-surface-dark" />
                </div>

                {/* Decorative stamp on hover */}
                {hoveredProject === project.name && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -15 }}
                    animate={{ opacity: 1, scale: 1, rotate: -15 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute top-12 right-8 text-accent-red font-signage text-sm font-bold uppercase tracking-wider border-2 border-current px-3 py-2"
                  >
                    Validated
                  </motion.div>
                )}

                {/* Decorative corners */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-accent-red opacity-30" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-accent-red opacity-30" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-accent-red opacity-30" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-accent-red opacity-30" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
