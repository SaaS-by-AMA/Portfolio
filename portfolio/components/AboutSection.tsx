"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Award, Users, Clock, TrendingUp, Sparkles, Code, Cloud, Zap, Cpu, Shield } from "lucide-react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const stats = [
    { number: "50+", label: "Projects Delivered", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: Users },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "5+", label: "Years Experience", icon: TrendingUp },
  ];

  const expertise = [
    { name: "AI & Machine Learning", icon: Sparkles },
    { name: "Cloud Architecture", icon: Cloud },
    { name: "SaaS Development", icon: Code },
    { name: "Custom Software", icon: Zap },
    { name: "API Integration", icon: Cpu },
    { name: "Security & DevOps", icon: Shield },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--background)] py-24 md:py-32 px-6"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[var(--primary)]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[var(--secondary)]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[var(--primary)]" />
            <span className="text-sm font-semibold text-[var(--primary)] tracking-[0.2em] uppercase">
              About Us
            </span>
            <div className="h-px w-8 bg-[var(--primary)]" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">About </span>
            <span className="gradient-text">Cloudora Tech</span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-[var(--text-muted)] leading-relaxed">
            Innovating the future of business technology with cutting-edge solutions
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left content - 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Empowering Businesses Through{" "}
                <span className="text-[var(--primary)]">Innovation</span>
              </h3>

              <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
                <p>
                  At Cloudora Tech, we specialize in delivering cutting-edge{" "}
                  <span className="text-[var(--primary)] font-medium">SaaS solutions</span> and{" "}
                  <span className="text-[var(--primary)] font-medium">AI-powered technologies</span>{" "}
                  that transform how businesses operate in the digital age.
                </p>
                <p>
                  With a focus on{" "}
                  <span className="text-[var(--primary)]">security</span>,{" "}
                  <span className="text-[var(--primary)]">scalability</span>, and{" "}
                  <span className="text-[var(--primary)]">performance</span>, we build
                  cloud-native software that accelerates growth and drives
                  measurable results.
                </p>
              </div>
            </div>

            {/* Mission quote */}
            <div className="relative p-6 rounded-2xl bg-[var(--surface)]/40 border border-[var(--surface-highlight)]/50 backdrop-blur-sm">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)]" />
              <p className="pl-4 text-[var(--text-dim)] text-lg italic leading-relaxed">
                "We believe in democratizing advanced technology, making
                enterprise-level solutions accessible to businesses of all sizes
                while maintaining the highest standards of security and innovation."
              </p>
            </div>

            {/* Expertise badges */}
            <div>
              <h4 className="text-sm text-[var(--text-dim)] uppercase tracking-wider mb-4">
                Our Expertise
              </h4>
              <div className="flex flex-wrap gap-3">
                {expertise.map((e) => {
                  const Icon = e.icon;
                  return (
                    <motion.div
                      key={e.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--surface)]/60 border border-[var(--surface-highlight)]/50 hover:border-[var(--primary)]/30 transition-all duration-300"
                    >
                      <Icon className="w-4 h-4 text-[var(--primary)]" />
                      <span className="text-sm text-[var(--text-muted)] font-medium">
                        {e.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right - Stats - 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="relative p-6 rounded-2xl bg-gradient-to-b from-[var(--surface)]/60 to-[var(--background)]/60 border border-[var(--surface-highlight)]/50 backdrop-blur-sm hover:border-[var(--primary)]/30 transition-all duration-300"
                  >
                    {/* Glow dot */}
                    <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-[var(--primary)] opacity-60 blur-sm" />

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[var(--primary)]" />
                      </div>
                    </div>

                    <div className="text-3xl font-bold text-[var(--primary)] mb-1">
                      {s.number}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-[var(--text-dim)]">
                      {s.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[var(--surface)]/30 border border-[var(--surface-highlight)]/30">
              <p className="text-sm text-[var(--text-muted)] text-center">
                Trusted by businesses worldwide for secure, scalable solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
