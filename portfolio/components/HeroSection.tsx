"use client";

import React from "react";
import { motion } from "framer-motion";
import { DottedSurface } from "@/components/ui/dotted-surface";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[var(--background)]">
      {/* Dotted Surface Animation Background */}
      <DottedSurface />

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[var(--background)]/40 via-transparent to-[var(--background)]/60 pointer-events-none" />

      {/* Radial glow effect */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(73, 34, 229, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Main Content - Centered */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Company Name - Big, Bold, Centered */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8"
          >
            <span className="text-[var(--secondary)]">Cloudora</span>
            <span className="text-white">Tech</span>
          </motion.h1>

          {/* Simple Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-[var(--text-muted)] font-light tracking-wide max-w-2xl mx-auto"
          >
            Software Solutions & AI Automation
          </motion.p>
        </motion.div>
      </div>


    </section>
  );
};

export default HeroSection;
