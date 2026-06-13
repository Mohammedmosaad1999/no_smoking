"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return ( 
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-slate-50 to-teal-50 overflow-hidden">
      
      {/* Glow Background */}
      <motion.div
        className="absolute h-72 w-72 rounded-full bg-teal-400/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Loader Container */}
      <div className="relative flex items-center justify-center">

        {/* Outer Ring */}
        <motion.div
          className="absolute h-40 w-40 rounded-full border border-teal-300/40"
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Middle Ring */}
        <motion.div
          className="absolute h-52 w-52 rounded-full border border-cyan-300/30"
          animate={{ rotate: -360 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner Pulsing Core */}
        <motion.div
          className="h-24 w-24 rounded-full bg-white shadow-2xl flex items-center justify-center relative z-10"
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="h-10 w-10 rounded-full bg-teal-500/20 animate-pulse" />
        </motion.div>

      </div>

      {/* Bottom subtle loading dots */}
      <div className="absolute bottom-20 flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-2 w-2 rounded-full bg-teal-600"
            animate={{
              y: [0, -6, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>
    </div>
  );
}