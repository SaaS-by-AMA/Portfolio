"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Clock, TrendingUp } from "lucide-react";

const features = [
    {
        id: 1,
        icon: Zap,
        title: "Lightning Fast Delivery",
        description:
            "Our streamlined development process delivers your projects 2x faster without compromising quality. Agile sprints, rapid iterations.",
        stat: "2x",
        statLabel: "Faster",
    },
    {
        id: 2,
        icon: Shield,
        title: "Enterprise Security",
        description:
            "Bank-grade security built into every solution. SSL, encryption, secure APIs, and compliance with industry standards.",
        stat: "100%",
        statLabel: "Secure",
    },
    {
        id: 3,
        icon: Clock,
        title: "24/7 Support",
        description:
            "Round-the-clock support ensures your systems run smoothly. Dedicated team, quick response times, proactive monitoring.",
        stat: "24/7",
        statLabel: "Available",
    },
    {
        id: 4,
        icon: TrendingUp,
        title: "Scalable Architecture",
        description:
            "Built to grow with your business. Cloud-native solutions that handle millions of users without breaking a sweat.",
        stat: "∞",
        statLabel: "Scale",
    },
];

export default function FeaturesSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    return (
        <section className="relative w-full py-24 md:py-32 bg-[var(--background)] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="grid-pattern absolute inset-0 opacity-30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[150px]" />
            </div>

            <div className="container relative mx-auto px-6 max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <div className="inline-flex items-center gap-2 mb-6">
                        <div className="h-px w-8 bg-[var(--primary)]" />
                        <span className="text-sm font-semibold text-[var(--primary)] tracking-[0.2em] uppercase">
                            Why Cloudora
                        </span>
                        <div className="h-px w-8 bg-[var(--primary)]" />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">Clarity, Speed & </span>
                        <span className="gradient-text">Intelligence</span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-lg text-[var(--text-muted)] leading-relaxed">
                        The Cloudora way — combining cutting-edge technology with human expertise
                        to deliver exceptional results.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.id}
                                variants={itemVariants}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group relative"
                            >
                                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-b from-[var(--surface)]/60 to-[var(--background)]/60 border border-[var(--surface-highlight)]/50 backdrop-blur-sm transition-all duration-500 hover:border-[var(--primary)]/30 hover:shadow-[0_0_30px_rgba(73,34,229,0.1)]">
                                    {/* Stat Badge */}
                                    <div className="absolute top-6 right-6 text-right">
                                        <div className="text-3xl font-bold text-[var(--primary)]">
                                            {feature.stat}
                                        </div>
                                        <div className="text-xs text-[var(--text-dim)] uppercase tracking-wider">
                                            {feature.statLabel}
                                        </div>
                                    </div>

                                    {/* Icon */}
                                    <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--primary)]/20 transition-colors duration-300">
                                        <Icon className="w-6 h-6 text-[var(--primary)]" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[var(--secondary)] transition-colors duration-300">
                                        {feature.title}
                                    </h3>

                                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                        {feature.description}
                                    </p>

                                    {/* Hover glow line */}
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[var(--primary)]/50 to-transparent origin-center"
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom Visual Element */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-16 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/30 to-transparent"
                />
            </div>
        </section>
    );
}
