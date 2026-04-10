"use client";

import { motion } from "framer-motion";

const buildingCards = [
  {
    status: "Building",
    statusEmoji: "🔨",
    title: "Tether",
    description:
      "A mobile app that helps people discover their attachment style through an intelligent quiz and delivers personalized advice.",
    progress: 10,
    tags: ["React", "Flutter", "Figma"],
  },
  {
    status: "Learning",
    statusEmoji: "📚",
    title: "Next.js & Full-Stack Architecture",
    description:
      "Going deep on Next.js App Router, server components, and scalable full-stack applications.",
    progress: 20,
    tags: ["Next.js", "TypeScript", "Supabase"],
  },
  {
    status: "Exploring",
    statusEmoji: "🧪",
    title: "React Native + Flutter Comparison",
    description:
      "Exploring Flutter as an alternative to React Native. Building the same app in both to compare.",
    progress: 10,
    tags: ["Flutter", "Dart", "React Native"],
  },
];

const statusItems = [
  { emoji: "🎓", text: "Available for internships", highlight: "Summer 2026" },
  { emoji: "🤝", text: "Open to", highlight: "collaborations" },
  { emoji: "📍", text: "Based in", highlight: "Hyderabad, India" },
  { emoji: "📧", text: "Responds within", highlight: "24hrs" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function Now() {
  return (
    <section id="now" className="relative py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      {/* Platform number watermark */}
      <div
        className="platform-watermark hidden md:block"
        style={{ bottom: "200px", left: "-50px" }}
      >
        05
      </div>

      <div className="mx-auto max-w-5xl px-4 md:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12 text-center"
        >
          <p className="font-signage text-xs md:text-sm uppercase tracking-widest text-accent-red mb-4">
            Platform 05
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-surface-dark mb-3">
            Active Platforms
          </h2>
          <p className="font-body text-text-muted text-base md:text-lg">
            Current Service — What I'm Building Now
          </p>
        </motion.div>

        {/* Building Cards Grid with Railway Tracks */}
        <div className="grid gap-4 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
          {buildingCards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex h-full flex-col bg-surface border-2 md:border-4 border-surface-dark p-4 sm:p-5 md:p-6 lg:p-8 relative"
            >
              {/* Status indicator */}
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 pb-3 md:pb-4 border-b-2 border-dashed border-track-line">
                <span className="text-lg md:text-2xl">{card.statusEmoji}</span>
                <span className="font-mono-railway text-[10px] md:text-xs uppercase font-semibold text-surface-dark tracking-widest">
                  {card.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-lg md:text-xl lg:text-2xl font-bold text-surface-dark mb-2 md:mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mb-4 md:mb-6 flex-grow font-body text-xs md:text-sm leading-relaxed text-text-primary">
                {card.description}
              </p>

              {/* Railway Track Progress Bar */}
              <div className="mb-4 md:mb-6">
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <span className="font-mono-railway text-[10px] md:text-xs uppercase font-semibold text-text-muted tracking-wider">
                    Progress
                  </span>
                  <span className="font-mono-railway text-[10px] md:text-xs uppercase font-semibold text-accent-amber">
                    {card.progress}%
                  </span>
                </div>

                {/* Track visualization */}
                <div className="relative h-5 md:h-6 bg-background border-2 border-track-line overflow-hidden">
                  {/* Unfilled dashed track */}
                  <div className="absolute inset-0 flex items-center px-2">
                    <span className="text-[10px] md:text-xs text-track-line opacity-40">
                      ╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
                    </span>
                  </div>

                  {/* Filled solid track with locomotive */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-accent-red to-accent-orange relative origin-left flex items-center pr-1"
                    style={{
                      width: `${card.progress}%`,
                    }}
                  >
                    <div className="absolute right-0 text-[10px] md:text-xs leading-none transform translate-x-2">
                      🚂
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 md:gap-2 pt-3 md:pt-4 border-t-2 border-dashed border-track-line">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] md:text-xs font-mono-railway px-1.5 md:px-2 py-0.5 md:py-1 border border-track-line text-surface-dark bg-background/50 uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Decorative corners */}
              <div className="absolute top-1 md:top-2 left-1 md:left-2 w-2 h-2 border-t-2 border-l-2 border-accent-red opacity-40" />
              <div className="absolute top-1 md:top-2 right-1 md:right-2 w-2 h-2 border-t-2 border-r-2 border-accent-red opacity-40" />
              <div className="absolute bottom-1 md:bottom-2 left-1 md:left-2 w-2 h-2 border-b-2 border-l-2 border-accent-red opacity-40" />
              <div className="absolute bottom-1 md:bottom-2 right-1 md:right-2 w-2 h-2 border-b-2 border-r-2 border-accent-red opacity-40" />
            </motion.div>
          ))}
        </div>

        {/* Status Indicator Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 md:mt-10 bg-surface border-2 md:border-4 border-surface-dark p-4 sm:p-6 md:p-8 relative"
        >
          {/* Divider */}
          <div className="border-b-2 border-dashed border-track-line pb-3 md:pb-4 mb-4 md:mb-6">
            <p className="font-signage text-[10px] md:text-xs uppercase tracking-widest text-surface-dark">
              ◈ OPERATIONAL STATUS ◈
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {statusItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl mb-1 md:mb-2">{item.emoji}</div>
                <p className="font-mono-railway text-[9px] md:text-xs text-text-muted uppercase tracking-wider">
                  {item.text}
                </p>
                <p className="font-signage text-xs md:text-sm font-bold text-accent-red mt-1">
                  {item.highlight}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Decorative corners */}
          <div className="absolute top-2 md:top-3 left-2 md:left-3 w-2 h-2 border-t-2 border-l-2 border-accent-red opacity-40" />
          <div className="absolute top-2 md:top-3 right-2 md:right-3 w-2 h-2 border-t-2 border-r-2 border-accent-red opacity-40" />
          <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 w-2 h-2 border-b-2 border-l-2 border-accent-red opacity-40" />
          <div className="absolute bottom-2 md:bottom-3 right-2 md:right-3 w-2 h-2 border-b-2 border-r-2 border-accent-red opacity-40" />
        </motion.div>
      </div>
    </section>
  );
}
