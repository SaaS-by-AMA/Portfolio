"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Zap, Cloud, Code, Rocket, ArrowRight } from "lucide-react";
import Hyperspeed from "./Hyperspeed";

const services = [
  {
    id: 1,
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with cutting-edge technologies. From landing pages to complex portals.",
    icon: Globe,
    tags: ["React", "Next.js", "Node.js", "APIs"],
  },
  {
    id: 2,
    number: "02",
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android. Intuitive interfaces, seamless performance.",
    icon: Smartphone,
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    id: 3,
    number: "03",
    title: "AI Automation",
    description:
      "Intelligent automation solutions powered by AI. Streamline workflows, enhance productivity, and reduce costs.",
    icon: Zap,
    tags: ["Machine Learning", "ChatBots", "Process Automation", "AI APIs"],
  },
  {
    id: 4,
    number: "04",
    title: "SaaS Solutions",
    description:
      "End-to-end SaaS product development. From MVP to scale, we build platforms that grow with your business.",
    icon: Cloud,
    tags: ["Cloud Native", "Scalable", "Secure", "Multi-tenant"],
  },
  {
    id: 5,
    number: "05",
    title: "Desktop Apps",
    description:
      "Cross-platform desktop applications with native performance. Enterprise software, productivity tools, and utilities.",
    icon: Code,
    tags: ["Electron", "Tauri", "Windows", "macOS"],
  },
  {
    id: 6,
    number: "06",
    title: "DevOps & Cloud",
    description:
      "Cloud infrastructure, CI/CD pipelines, and DevOps practices. Deploy faster, scale effortlessly.",
    icon: Rocket,
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section id="services" className="relative w-full py-24 md:py-32 bg-[var(--background)] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[var(--primary)]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-[var(--secondary)]/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient([var(--primary)] 1px, transparent 1px), linear-gradient(90deg, [var(--primary)] 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-px w-8 bg-[var(--primary)]" />
            <span className="text-sm font-semibold text-[var(--primary)] tracking-[0.2em] uppercase">
              Our Expertise
            </span>
            <div className="h-px w-8 bg-[var(--primary)]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white"
          >
            Premium <span className="gradient-text">Digital Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--text-muted)] text-lg leading-relaxed"
          >
            We blend aesthetic excellence with technical precision to build digital products that define brands.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative p-8 rounded-3xl border border-[var(--surface-highlight)] transition-all duration-500 overflow-hidden
                                ${isHovered
                    ? "bg-[var(--surface)]/80 border-[var(--primary)]/40 shadow-[0_0_40px_rgba(73,34,229,0.15)]"
                    : "bg-[var(--surface)]/40 hover:bg-[var(--surface)]/60"
                  }
                            `}
              >
                {/* Hover Gradient Border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] origin-left rounded-t-2xl
                                    transition-transform duration-500 ease-out
                                    ${isHovered ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}
                                `}
                />

                {/* Background Number */}
                <div
                  className={`absolute -right-4 -top-4 text-9xl font-bold opacity-5 pointer-events-none select-none
                                  transition-all duration-500 ${isHovered ? "text-[var(--primary)]/30" : "text-[var(--surface-highlight)]/50"}
                                `}
                >
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300
                                    ${isHovered
                      ? "bg-[var(--primary)]/20 shadow-[0_0_20px_rgba(73,34,229,0.3)]"
                      : "bg-[var(--surface-highlight)]"
                    }
                                `}>
                    <service.icon
                      className={`w-7 h-7 transition-colors duration-300 ${isHovered ? "text-[var(--primary)]" : "text-[var(--text-muted)]"}
                                        `}
                    />
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isHovered ? "text-[var(--primary)]" : "text-white"}
                                `}>
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-muted)] mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map((tag, i) => (
                      <span key={i} className={`text-xs px-3 py-1 rounded-full transition-colors duration-300
                                            ${isHovered
                          ? "bg-[var(--primary)]/10 text-[var(--foreground)] border border-[var(--primary)]/30"
                          : "bg-[var(--surface-highlight)] text-[var(--text-dim)] border border-transparent"
                        }
                                        `}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className={`flex items-center text-sm font-semibold transition-all duration-300
                                    ${isHovered ? "text-[var(--primary)] translate-x-2" : "text-[var(--text-muted)]"}
                                `}>
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <p className="text-[var(--text-muted)] mb-6">Looking for a custom solution?</p>
          <div className="flex justify-center gap-6">
            <a href="#contact" className="text-[var(--primary)] hover:underline">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
