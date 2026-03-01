"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingPreview() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full opacity-[0.12] blur-[100px]"
          style={{
            background: "radial-gradient(circle, #7C3AED, #06FFA5)",
          }}
        />
      </div>

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6">
        {/* Animated logo/text */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-serif text-5xl font-bold text-foreground">
            MATHAM
          </h1>
          <h2 className="font-serif text-5xl font-bold bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent">
            KARTHIK
          </h2>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "easeInOut" }}
          className="h-1 w-48 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan"
        />

        {/* Status text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-mono text-sm text-accent-cyan"
        >
            Loading ...
        </motion.p>

        {/* Pulsing dots */}
        <div className="flex gap-2 pt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="h-2 w-2 rounded-full bg-accent-cyan"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
