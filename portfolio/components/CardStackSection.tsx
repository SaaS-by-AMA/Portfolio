"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket, CheckCircle } from "lucide-react";

const processSteps = [
    {
        id: 1,
        number: "01",
        title: "Discovery & Strategy",
        description:
            "We dive deep into understanding your business, goals, and target audience. Through collaborative workshops, we define the project scope and create a strategic roadmap.",
        icon: Lightbulb,
        color: "var(--primary)",
    },
    {
        id: 2,
        number: "02",
        title: "Design & Prototype",
        description:
            "Our design team creates intuitive user interfaces and interactive prototypes. Every pixel is crafted to ensure a seamless user experience that converts.",
        icon: PenTool,
        color: "var(--secondary)",
    },
    {
        id: 3,
        number: "03",
        title: "Development & Build",
        description:
            "Using cutting-edge technologies, we build robust, scalable solutions. Our agile methodology ensures transparent progress with regular updates.",
        icon: Code2,
        color: "var(--primary)",
    },
    {
        id: 4,
        number: "04",
        title: "Launch & Deploy",
        description:
            "We handle deployment, optimization, and launch. Your product goes live with zero downtime, fully tested and production-ready.",
        icon: Rocket,
        color: "var(--secondary)",
    },
    {
        id: 5,
        number: "05",
        title: "Support & Scale",
        description:
            "Post-launch, we provide continuous support, monitoring, and updates. As your business grows, we help scale your solution seamlessly.",
        icon: CheckCircle,
        color: "var(--primary)",
    },
];

function ProcessCard({
    step,
    index,
    progress,
}: {
    step: (typeof processSteps)[0];
    index: number;
    progress: any;
}) {
    const Icon = step.icon;

    // Calculate the scroll range for this card
    const cardStart = index / processSteps.length;
    const cardEnd = (index + 1) / processSteps.length;

    // Transform values based on scroll position
    const y = useTransform(
        progress,
        [cardStart, cardEnd],
        [100 * (processSteps.length - index), 0]
    );

    const scale = useTransform(
        progress,
        [cardStart, cardEnd],
        [0.8 + index * 0.03, 1]
    );

    const opacity = useTransform(
        progress,
        [cardStart, cardEnd],
        [0.6, 1]
    );

    const rotateX = useTransform(
        progress,
        [cardStart, cardEnd],
        [10, 0]
    );

    return (
        <motion.div
            style={{
                y,
                scale,
                opacity,
                rotateX,
                zIndex: index + 1,
            }}
            className="sticky top-32 origin-top"
        >
            <div
                className="relative p-8 md:p-10 rounded-3xl border backdrop-blur-sm transition-shadow duration-500 hover:shadow-2xl"
                style={{
                    background: `linear-gradient(135deg, var(--surface) 0%, var(--background) 100%)`,
                    borderColor: `var(--surface-highlight)`,
                    // Box shadow needs explicit color for alpha, using primary/secondary approx
                    boxShadow: `0 25px 50px -12px rgba(0,0,0,0.5)`,
                }}
            >
                {/* Top accent line */}
                <div
                    className="absolute top-0 left-8 right-8 h-1 rounded-full"
                    style={{
                        background: `linear-gradient(90deg, transparent, ${step.color}, transparent)`,
                    }}
                />

                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    {/* Left side - Number & Icon */}
                    <div className="flex md:flex-col items-center md:items-start gap-4">
                        <div
                            className="text-6xl md:text-7xl font-bold opacity-20"
                            style={{
                                WebkitTextStroke: `2px ${step.color}`,
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            {step.number}
                        </div>
                        <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center"
                            style={{
                                backgroundColor: `var(--background)`,
                                border: `1px solid ${step.color}`
                            }}
                        >
                            <Icon className="w-8 h-8" style={{ color: step.color }} />
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="flex-1">
                        <h3
                            className="text-2xl md:text-3xl font-bold mb-4"
                            style={{ color: step.color }}
                        >
                            {step.title}
                        </h3>
                        <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                            {step.description}
                        </p>
                    </div>
                </div>

                {/* Floating accent */}
                <div
                    className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full blur-3xl opacity-30"
                    style={{ backgroundColor: step.color }}
                />
            </div>
        </motion.div>
    );
}

export default function CardStackSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section
            ref={containerRef}
            className="relative bg-[var(--background)] py-24"
            style={{ minHeight: `${(processSteps.length + 1) * 100}vh` }}
        >
            {/* Background */}
            <div className="absolute inset-0">
                <div className="grid-pattern absolute inset-0 opacity-20" />
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[200px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--secondary)]/5 rounded-full blur-[200px]" />
            </div>

            <div className="container relative mx-auto px-6 max-w-4xl">
                {/* Section Header - Sticky */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 sticky top-8 z-10"
                >
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[var(--surface)]/80 backdrop-blur-sm border border-[var(--surface-highlight)]/50">
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
                        A streamlined process designed to deliver exceptional results, on time and on budget.
                    </p>
                </motion.div>

                {/* Cards Stack */}
                <div className="relative">
                    {processSteps.map((step, index) => (
                        <ProcessCard
                            key={step.id}
                            step={step}
                            index={index}
                            progress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
