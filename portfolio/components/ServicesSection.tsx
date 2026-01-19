"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Globe, Smartphone, Zap, Rocket, Bug, Sparkles,
  ArrowRight
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Build stunning, high-performance web applications with cutting-edge technologies",
    icon: Globe,
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    gradientText: "from-cyan-400 to-blue-500",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Create intuitive mobile experiences for iOS and Android platforms",
    icon: Smartphone,
    gradient: "from-purple-500 via-pink-500 to-red-500",
    gradientText: "from-purple-400 to-pink-500",
  },
  {
    id: 3,
    title: "AI Automations",
    description: "Leverage AI to automate workflows and enhance business intelligence",
    icon: Zap,
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    gradientText: "from-yellow-400 to-orange-500",
  },
  {
    id: 4,
    title: "Deployment Services",
    description: "Seamless deployment solutions with zero-downtime and optimal scalability",
    icon: Rocket,
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    gradientText: "from-green-400 to-emerald-500",
  },
  {
    id: 5,
    title: "Error Debugging",
    description: "Identify and resolve issues quickly with comprehensive debugging expertise",
    icon: Bug,
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    gradientText: "from-indigo-400 to-purple-500",
  },
  {
    id: 6,
    title: "Performance Optimization",
    description: "Maximize speed and efficiency across all your digital infrastructure",
    icon: Sparkles,
    gradient: "from-cyan-500 via-teal-500 to-green-500",
    gradientText: "from-cyan-400 to-teal-500",
  },
];

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  // Lightweight animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative w-full py-20 bg-slate-950 overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container relative mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400 tracking-wider">OUR SERVICES</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What We Build
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Delivering exceptional digital solutions with precision and excellence
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === service.id;
            
            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-slate-900/50 rounded-2xl border border-slate-700/50 overflow-hidden cursor-pointer backdrop-blur-sm"
              >
                {/* Smooth border and shadow transition */}
                <motion.div
                  animate={{
                    borderColor: isHovered ? "rgba(96, 165, 250, 0.5)" : "rgba(71, 85, 105, 0.3)",
                    boxShadow: isHovered 
                      ? "0 20px 40px rgba(59, 130, 246, 0.2)" 
                      : "0 4px 12px rgba(0, 0, 0, 0.3)"
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 rounded-2xl pointer-events-none border"
                />

                {/* Content */}
                <div className="relative p-7 h-full flex flex-col">
                  {/* Icon - Always visible */}
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.08 : 1,
                      y: isHovered ? -2 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="mb-5 inline-flex"
                  >
                    <div className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-400",
                      isHovered ? "bg-blue-500/30" : "bg-slate-800"
                    )}>
                      <Icon className={cn(
                        "w-7 h-7 transition-colors duration-400",
                        isHovered ? "text-blue-400" : "text-slate-300"
                      )} />
                    </div>
                  </motion.div>

                  {/* Title - Always visible */}
                  <motion.h3
                    animate={{
                      color: isHovered ? "#60a5fa" : "#f1f5f9",
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-xl font-bold mb-2 transition-colors"
                  >
                    {service.title}
                  </motion.h3>
                  
                  {/* Description */}
                  <motion.p
                    animate={{
                      color: isHovered ? "#cbd5e1" : "#94a3b8",
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-slate-400 text-sm leading-relaxed flex-grow transition-colors"
                  >
                    {service.description}
                  </motion.p>
                </div>

                {/* Top accent line on hover */}
                <motion.div
                  animate={{
                    scaleX: isHovered ? 1 : 0,
                    originX: 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400"
                />
              </motion.div>
            );
          })}
        </motion.div>


      </div>
    </section>
  );
}
