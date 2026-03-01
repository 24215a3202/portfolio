"use client";

import { motion } from "framer-motion";

const SplitFlapBoard = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const characters = text.split("");

  return (
    <div className="flex gap-1">
      {characters.map((char, i) => (
        <motion.div
          key={i}
          initial={{ rotateX: 90 }}
          animate={{ rotateX: 0 }}
          transition={{
            delay: delay + i * 0.05,
            duration: 0.5,
            ease: "easeOut",
          }}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
          className="inline-block"
        >
          <span className="font-mono-railway text-lg md:text-2xl font-semibold tracking-wider">
            {char === " " ? "\u00A0" : char}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export function Hero() {
  const boardRows = [
    { label: "PASSENGER", value: "Karthik Matham", delay: 0.2 },
    { label: "OCCUPATION", value: "Problem Architect", delay: 0.5 },
    { label: "DESTINATION", value: "Building Great Products", delay: 0.8 },
    { label: "STATUS", value: "Boarding — Class of 2027", delay: 1.1 },
    {
      label: "PLATFORM",
      value: "All Aboard — Let's Build",
      delay: 1.4,
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-surface-dark via-surface to-background"
    >
      {/* Platform number watermark */}
      <div className="platform-watermark" style={{ top: "-50px", left: "-100px" }}>
        00
      </div>

      {/* Decorative border */}
      <div className="absolute inset-0 border-8 md:border-16 border-accent-amber opacity-5 pointer-events-none" />

      {/* Top tracks */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
        className="absolute top-12 left-12 right-12 h-1 bg-gradient-to-r from-transparent via-accent-amber to-transparent"
      />

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        className="relative z-10 max-w-4xl mx-auto px-6 w-full"
      >
        {/* Station header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="text-2xl">◈</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-surface-dark dark:text-slate-950">
              GRAND CENTRAL STATION
            </h1>
            <span className="text-2xl">◈</span>
          </div>
          <div className="h-1 bg-accent-amber w-64 mx-auto mt-4" />
        </motion.div>

        {/* Split-flap arrival board */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-surface border-4 md:border-8 border-surface-dark p-8 md:p-12 mb-8 relative"
          style={{
            boxShadow: "0 20px 60px rgba(28, 43, 74, 0.15)",
          }}
        >
          <div className="space-y-4 font-mono-railway">
            {boardRows.map((row, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: row.delay }}
                className="flex gap-4 md:gap-6"
              >
                <span className="font-signage font-bold text-surface-dark w-32 md:w-48 text-sm md:text-base tracking-wider">
                  {row.label}
                </span>
                <div className="flex-1 bg-background/50 p-2 md:p-3 border-2 border-dashed border-track-line">
                  <SplitFlapBoard text={row.value} delay={row.delay + 0.1} />
                </div>
              </motion.div>
            ))}

            {/* Passenger Photo Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 }}
              className="flex items-center gap-4 md:gap-6 py-4 border-t border-dashed border-track-line"
            >
              {/* Label */}
              <span className="font-signage font-bold text-surface-dark w-32 md:w-48 text-sm md:text-base tracking-wider">
                PASSENGER PHOTO
              </span>

              {/* Vintage Stamp Frame */}
              <div className="relative flex items-center gap-4">
                <div style={{ position: "relative", width: "90px", height: "90px" }}>
                  {/* Outer decorative ring */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      border: "3px solid #1C2B4A",
                      boxShadow: `
                        0 0 0 2px #F5F0E8,
                        0 0 0 4px #D4A017,
                        0 0 0 6px #F5F0E8,
                        0 0 0 8px #1C2B4A
                      `,
                      zIndex: 2,
                    }}
                  />

                  {/* Serrated stamp edge */}
                  <div
                    style={{
                      position: "absolute",
                      inset: "-8px",
                      borderRadius: "50%",
                      background: `conic-gradient(
                        #1C2B4A 0deg, #1C2B4A 10deg,
                        transparent 10deg, transparent 20deg,
                        #1C2B4A 20deg, #1C2B4A 30deg,
                        transparent 30deg, transparent 40deg,
                        #1C2B4A 40deg, #1C2B4A 50deg,
                        transparent 50deg, transparent 60deg,
                        #1C2B4A 60deg, #1C2B4A 70deg,
                        transparent 70deg, transparent 80deg,
                        #1C2B4A 80deg, #1C2B4A 90deg,
                        transparent 90deg, transparent 100deg,
                        #1C2B4A 100deg, #1C2B4A 110deg,
                        transparent 110deg, transparent 120deg,
                        #1C2B4A 120deg, #1C2B4A 130deg,
                        transparent 130deg, transparent 140deg,
                        #1C2B4A 140deg, #1C2B4A 150deg,
                        transparent 150deg, transparent 160deg,
                        #1C2B4A 160deg, #1C2B4A 170deg,
                        transparent 170deg, transparent 180deg,
                        #1C2B4A 180deg, #1C2B4A 190deg,
                        transparent 190deg, transparent 200deg,
                        #1C2B4A 200deg, #1C2B4A 210deg,
                        transparent 210deg, transparent 220deg,
                        #1C2B4A 220deg, #1C2B4A 230deg,
                        transparent 230deg, transparent 240deg,
                        #1C2B4A 240deg, #1C2B4A 250deg,
                        transparent 250deg, transparent 260deg,
                        #1C2B4A 260deg, #1C2B4A 270deg,
                        transparent 270deg, transparent 280deg,
                        #1C2B4A 280deg, #1C2B4A 290deg,
                        transparent 290deg, transparent 300deg,
                        #1C2B4A 300deg, #1C2B4A 310deg,
                        transparent 310deg, transparent 320deg,
                        #1C2B4A 320deg, #1C2B4A 330deg,
                        transparent 330deg, transparent 340deg,
                        #1C2B4A 340deg, #1C2B4A 350deg,
                        transparent 350deg, transparent 360deg
                      )`,
                      zIndex: 1,
                      WebkitMaskImage: "radial-gradient(transparent 65%, black 66%)",
                      maskImage: "radial-gradient(transparent 65%, black 66%)",
                    }}
                  />

                  {/* Photo placeholder */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #D4A017 0%, #8B8478 100%)",
                      position: "relative",
                      zIndex: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "40px",
                    }}
                  >
                    <img src="/portfolio.png" alt="Passenger Photo" className="w-full h-full object-cover rounded-full" />
                  </motion.div>
                </div>

                {/* Stamped text beside photo */}
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span
                    style={{
                      fontFamily: "IBM Plex Mono",
                      fontSize: "9px",
                      color: "#6B6355",
                      letterSpacing: "0.1em",
                    }}
                  >
                    ID: KM-2027
                  </span>
                  <span
                    style={{
                      fontFamily: "IBM Plex Mono",
                      fontSize: "9px",
                      color: "#C0392B",
                      letterSpacing: "0.1em",
                      fontWeight: "bold",
                    }}
                  >
                    ✦ VERIFIED PASSENGER ✦
                  </span>
                  <span
                    style={{
                      fontFamily: "IBM Plex Mono",
                      fontSize: "9px",
                      color: "#6B6355",
                      letterSpacing: "0.1em",
                    }}
                  >
                    CLASS OF 2027
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative corners */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-accent-red" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-accent-red" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-accent-red" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-accent-red" />
        </motion.div>

        {/* CTA Buttons - styled as railway tickets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          {[
            { text: "View Projects →", href: "#projects" },
            { text: "Download CV", href: "#" },
          ].map((btn, idx) => (
            <motion.a
              key={idx}
              href={btn.href}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="relative group px-8 py-4 md:px-10 md:py-5 bg-accent-red text-background font-mono-railway font-semibold tracking-wider text-center overflow-hidden"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              }}
            >
              {/* Perforation effect */}
              <div className="absolute -right-12 top-0 bottom-0 w-12 flex items-center justify-center opacity-30">
                <div className="flex flex-col gap-2">
                  <div className="w-2 h-2 bg-background rounded-full" />
                  <div className="w-2 h-2 bg-background rounded-full" />
                  <div className="w-2 h-2 bg-background rounded-full" />
                </div>
              </div>

              <span className="relative z-10">{btn.text}</span>

              {/* Hover background */}
              <motion.div
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-accent-orange -z-10"
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom decorative tracks */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-12 right-12 h-1 bg-gradient-to-r from-transparent via-accent-amber to-transparent"
      />

      {/* Locomotive icon (decorative) */}
      <motion.div
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-20 left-8 text-4xl opacity-20 pointer-events-none"
      >
        🚂
      </motion.div>
    </section>
  );
}
