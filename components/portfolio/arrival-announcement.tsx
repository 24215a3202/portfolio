"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ArrivalAnnouncement() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnnouncement(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showAnnouncement && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-surface-dark"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <div className="font-display text-5xl md:text-6xl font-bold text-background mb-6 tracking-tight">
              Now Arriving at
            </div>
            
            <div className="font-signage text-6xl md:text-7xl text-accent-amber mb-8 letter-spacing-wider">
              PLATFORM 00
            </div>
            
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="font-mono-railway text-lg text-background mb-8 tracking-widest"
            >
              The Portfolio of Karthik matham 
            </motion.div>
            
            <div className="font-body text-base md:text-lg text-background opacity-80">
              Please mind the gap
            </div>
            
            {/* Decorative track lines */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-12 h-1 bg-accent-amber"
              style={{ width: "300px", margin: "0 auto" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
