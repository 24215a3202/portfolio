"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Menu, X } from "lucide-react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

const stations = [
  { id: "hero", label: "CONCOURSE", number: "00" },
  { id: "about", label: "INFO", number: "01" },
  { id: "skills", label: "ENGINE", number: "02" },
  { id: "projects", label: "DEPARTURES", number: "03" },
  { id: "experience", label: "LOG", number: "04" },
  { id: "contact", label: "TICKET", number: "05" },
];

export function Navbar() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const locomotivePosition = Math.min(scrollProgress * 100, 100);
  const activeStation = stations.find((s) => s.id === activeSection);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 md:top-6 left-1/2 z-50 -translate-x-1/2 w-[calc(100%-2rem)] md:w-full max-w-6xl md:px-6"
        >
          <div className="bg-surface border-2 border-surface-dark p-3 md:p-4 backdrop-blur">
            {/* Station header */}
            <div className="text-center mb-2 hidden md:block">
              <p className="font-signage text-xs text-surface-dark tracking-widest">
                ▬▬▬ RAILWAY ROUTE MAP ▬▬▬
              </p>
            </div>

            {/* Mobile: compact header with hamburger */}
            <div className="flex items-center justify-between md:hidden">
              <p className="font-signage text-[10px] text-surface-dark tracking-widest">
                RAILWAY ROUTE MAP
              </p>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-accent-red font-semibold">
                  {activeStation?.number} — {activeStation?.label}
                </span>
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="p-1 text-surface-dark hover:text-accent-red transition-colors"
                  aria-label="Toggle navigation menu"
                >
                  {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Mobile dropdown menu */}
            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden md:hidden mt-3"
                >
                  <div className="grid grid-cols-3 gap-2 pb-3">
                    {stations.map((station) => (
                      <a
                        key={station.id}
                        href={`#${station.id}`}
                        onClick={() => setMobileOpen(false)}
                        className={`text-center p-2 border border-track-line transition-all ${
                          activeSection === station.id
                            ? "bg-accent-red text-background border-accent-red"
                            : "text-text-muted hover:text-text-primary hover:border-surface-dark"
                        }`}
                      >
                        <div className="font-signage text-xs tracking-wider">
                          {station.number}
                        </div>
                        <div className="font-mono text-[9px] uppercase opacity-75">
                          {station.label}
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="flex justify-center pt-2 border-t border-dashed border-track-line">
                    <a
                      href="https://github.com/24215a3202"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-surface-dark hover:text-accent-red transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop: Track with locomotive */}
            <div className="relative mb-4 hidden md:block">
              <style>{`
                @keyframes steamRise {
                  0% { transform: translateY(0) scale(1); opacity: 0.7; }
                  100% { transform: translateY(-20px) scale(2); opacity: 0; }
                }
              `}</style>

              {/* Steam puffs */}
              <div style={{ position: "relative", height: "32px" }}>
                {[0, 0.3, 0.6].map((delay, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      top: "-8px",
                      left: `calc(${(locomotivePosition / 100) * 100}% - ${6 - i * 3}px)`,
                      width: `${6 + i * 2}px`,
                      height: `${6 + i * 2}px`,
                      borderRadius: "50%",
                      background: `rgba(180, 170, 155, ${0.7 - i * 0.2})`,
                      animation: `steamRise 1.2s ease-out ${delay}s infinite`,
                      transition: "left 0.05s linear",
                    }}
                  />
                ))}
              </div>

              {/* Main track */}
              <svg
                className="w-full h-8"
                viewBox="0 0 1000 60"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Track lines */}
                <line
                  x1="0"
                  y1="30"
                  x2="1000"
                  y2="30"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-surface-dark"
                />
                <line
                  x1="0"
                  y1="36"
                  x2="1000"
                  y2="36"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-surface-dark"
                />

                {/* Stations - dots */}
                {stations.map((_, i) => (
                  <circle
                    key={i}
                    cx={(i / (stations.length - 1)) * 1000}
                    cy="33"
                    r="8"
                    fill={
                      i * (100 / (stations.length - 1)) <= locomotivePosition
                        ? "#C0392B"
                        : i * (100 / (stations.length - 1)) - 5 <=
                            locomotivePosition
                          ? "#D4A017"
                          : "none"
                    }
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-surface-dark"
                  />
                ))}

                {/* Locomotive */}
                <g transform={`translate(${(locomotivePosition / 100) * 1000 - 25}, 0)`}>
                  <text
                    x="25"
                    y="18"
                    fontSize="24"
                    textAnchor="middle"
                    className="animate-pulse"
                  >
                    🚂
                  </text>
                </g>
              </svg>
            </div>

            {/* Desktop: Station labels */}
            <div className="hidden md:flex justify-between px-2 mb-3 gap-1">
              {stations.map((station) => (
                <a
                  key={station.id}
                  href={`#${station.id}`}
                  className={`text-center text-xs transition-all ${
                    activeSection === station.id
                      ? "font-bold text-accent-red"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                  style={{
                    flex: 1,
                    cursor: "pointer",
                  }}
                >
                  <div className="font-signage text-xs tracking-wider">
                    {station.number}
                  </div>
                  <div className="font-mono-railway text-xs uppercase opacity-75">
                    {station.label}
                  </div>
                </a>
              ))}
            </div>

            {/* Desktop: Social link */}
            <div className="hidden md:flex justify-center">
              <a
                href="https://github.com/24215a3202"
                target="_blank"
                rel="noopener noreferrer"
                className="text-surface-dark hover:text-accent-red transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
