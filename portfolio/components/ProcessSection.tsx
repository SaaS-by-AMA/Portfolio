"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket, CheckCircle } from "lucide-react";

// Updated Process Steps with theme-compliant colors
const processSteps = [
    {
        id: 1,
        number: "01",
        title: "Discovery",
        subtitle: "Understanding Your Vision",
        description:
            "We dive deep into your business goals, target audience, and project requirements through collaborative workshops.",
        icon: Lightbulb,
        color: "var(--primary)",
    },
    {
        id: 2,
        number: "02",
        title: "Design",
        subtitle: "Crafting the Experience",
        description:
            "Our design team creates intuitive interfaces and interactive prototypes that convert users into customers.",
        icon: PenTool,
        color: "var(--secondary)",
    },
    {
        id: 3,
        number: "03",
        title: "Develop",
        subtitle: "Building with Excellence",
        description:
            "Using cutting-edge technologies, we build robust, scalable solutions with clean, maintainable code.",
        icon: Code2,
        color: "var(--primary)",
    },
    {
        id: 4,
        number: "04",
        title: "Launch",
        subtitle: "Going Live",
        description:
            "We handle deployment, optimization, and launch with zero downtime. Your product goes live production-ready.",
        icon: Rocket,
        color: "var(--secondary)",
    },
    {
        id: 5,
        number: "05",
        title: "Support",
        subtitle: "Growing Together",
        description:
            "Post-launch support, monitoring, and updates. As your business grows, we scale your solution seamlessly.",
        icon: CheckCircle,
        color: "var(--primary)",
    },
];

export default function ProcessSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section
            id="process"
            ref={containerRef}
            className="relative w-full py-24 md:py-32 bg-[var(--background)] overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-[var(--secondary)]/5 rounded-full blur-[120px]" />
            </div>

            <div className="container relative mx-auto px-6 max-w-6xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 mb-6">
                        <div className="h-px w-8 bg-[var(--primary)]" />
                        <span className="text-sm font-semibold text-[var(--primary)] tracking-[0.2em] uppercase">
                            Our Process
                        </span>
                        <div className="h-px w-8 bg-[var(--primary)]" />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">How We </span>
                        <span className="gradient-text">Work</span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-lg text-[var(--text-muted)] leading-relaxed">
                        A streamlined process designed to deliver exceptional results
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--surface-highlight)] to-transparent" />

                    {/* Animated Progress Line */}
                    <motion.div
                        className="absolute left-6 md:left-1/2 top-0 w-px bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)]"
                        style={{
                            height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                            opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1])
                        }}
                    />

                    {/* Process Steps */}
                    <div className="relative space-y-16 md:space-y-24">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex items-center gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                                        <motion.div
                                            whileInView={{ scale: [0, 1.2, 1] }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.15 }}
                                            className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--background)]"
                                            style={{
                                                border: `2px solid ${step.color}`,
                                                boxShadow: `0 0 30px ${step.color}`
                                            }}
                                        >
                                            <Icon className="w-5 h-5" style={{ color: step.color }} />
                                        </motion.div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${isEven ? "md:pr-8" : "md:pl-8"}`}>
                                        <motion.div
                                            whileHover={{ y: -5, scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                            className="relative p-6 md:p-8 rounded-2xl bg-[var(--surface)]/80 border border-[var(--surface-highlight)] backdrop-blur-sm group"
                                        >
                                            {/* Hover Glow */}
                                            <div
                                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                style={{
                                                    background: `radial-gradient(circle at center, var(--primary) 0%, transparent 70%)`,
                                                    opacity: 0.1
                                                }}
                                            />

                                            {/* Number Badge */}
                                            <div
                                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4"
                                                style={{
                                                    backgroundColor: `var(--surface-highlight)`,
                                                    color: step.color
                                                }}
                                            >
                                                STEP {step.number}
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                                {step.title}
                                            </h3>

                                            <p className="text-sm font-medium mb-4" style={{ color: step.color }}>
                                                {step.subtitle}
                                            </p>

                                            {/* Description */}
                                            <p className="text-[var(--text-muted)] leading-relaxed">
                                                {step.description}
                                            </p>

                                            {/* Decorative Corner */}
                                            <div
                                                className="absolute top-0 right-0 w-20 h-20 rounded-tr-2xl opacity-20"
                                                style={{
                                                    background: `linear-gradient(135deg, ${step.color} 0%, transparent 60%)`
                                                }}
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Spacer for alternating layout */}
                                    <div className="hidden md:block md:w-[calc(50%-40px)]" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
