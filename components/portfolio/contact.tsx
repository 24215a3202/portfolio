"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const socials = [
  { label: "GitHub", icon: Github, href: "https://github.com/24215a3202" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/mathamkarthik/" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-background pb-48">
      {/* Platform number watermark */}
      <div
        className="platform-watermark"
        style={{ bottom: "100px", right: "-50px" }}
      >
        06
      </div>

      <div className="mx-auto max-w-2xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Ticket Office heading */}
          <div className="bg-surface border-4 border-surface-dark p-8 md:p-10 mb-8 text-center relative">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-2xl">◈</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-surface-dark">
                Ticket Office
              </h2>
              <span className="text-2xl">◈</span>
            </div>
            <p className="font-mono-railway text-xs uppercase tracking-widest text-text-muted">
              Platform 06
            </p>

            {/* Decorative corners */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-accent-red opacity-40" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-accent-red opacity-40" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-accent-red opacity-40" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-accent-red opacity-40" />
          </div>

          {/* Message form styled as ticket booking form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-surface border-4 border-surface-dark p-8 md:p-10 relative"
          >
            <div className="text-center mb-6 pb-6 border-b-2 border-dashed border-track-line">
              <p className="font-signage text-xs uppercase tracking-widest text-surface-dark">
                Ready to Board?
              </p>
              <p className="font-body text-text-muted mt-2">
                All aboard — let's build something great together.
              </p>
            </div>

            <p className="font-body text-base text-text-primary mb-8 text-center">
              Open to internships, collaborations, and interesting projects. Always happy to chat.
            </p>

            <div className="flex flex-col gap-4 justify-center">
              <a
                href="mailto:24215a3202@bvrit.ac.in"
                className="w-full py-4 px-6 bg-accent-red text-background font-mono-railway font-semibold text-sm uppercase tracking-wider text-center hover:bg-accent-orange transition-colors duration-300 relative group overflow-hidden"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                }}
              >
                <span className="relative z-10">🎫 SAY HELLO — PURCHASE TICKET</span>
              </a>
            </div>

            {/* Social links section */}
            <div className="mt-10 pt-8 border-t-2 border-dashed border-track-line">
              <p className="text-center font-mono-railway text-xs uppercase tracking-widest text-text-muted mb-6">
                Connect on the rails
              </p>
              <div className="flex items-center justify-center gap-6">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-accent-red text-accent-red font-mono-railway text-xs uppercase tracking-wider hover:bg-accent-red hover:text-background transition-colors duration-300"
                  >
                    <social.icon className="h-4 w-4" />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-accent-red opacity-30" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-accent-red opacity-30" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-accent-red opacity-30" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-accent-red opacity-30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
