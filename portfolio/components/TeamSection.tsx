"use client";

import React from "react";
import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";

const teamMembers = [
    {
        id: 1,
        name: "Abdullah Javed",
        title: "Software Engineer",
        handle: "abdullahjaved",
        status: "Available for Projects",
        portfolioUrl: "https://abdullahjaved.site",
        avatarUrl: "/team/abdullah.jpg",
        behindGlowColor: "rgba(73, 34, 229, 0.4)",
        innerGradient: "linear-gradient(145deg, rgba(10, 10, 10, 0.9) 0%, rgba(2, 2, 2, 0.95) 100%)",
    },
    {
        id: 2,
        name: "Munaeem Ahmad",
        title: "Software Engineer",
        handle: "munaeem",
        status: "Open to Collaborate",
        portfolioUrl: "https://munaeem.site",
        avatarUrl: "/team/munaeem.jpg",
        behindGlowColor: "rgba(165, 86, 251, 0.4)",
        innerGradient: "linear-gradient(145deg, rgba(10, 10, 10, 0.9) 0%, rgba(2, 2, 2, 0.95) 100%)",
    },
    {
        id: 3,
        name: "Amar Waqar",
        title: "Software Engineer",
        handle: "amarwaqar",
        status: "Available",
        portfolioUrl: "https://amarwaqar.vercel.app",
        avatarUrl: "/team/amar.jpg",
        behindGlowColor: "rgba(73, 34, 229, 0.4)",
        innerGradient: "linear-gradient(145deg, rgba(10, 10, 10, 0.9) 0%, rgba(2, 2, 2, 0.95) 100%)",
    },
];

export default function TeamSection() {
    return (
        <section id="team" className="relative w-full py-24 md:py-32 bg-[var(--background)] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="grid-pattern absolute inset-0 opacity-20" />
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[200px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--secondary)]/5 rounded-full blur-[150px]" />
            </div>

            <div className="container relative mx-auto px-6 max-w-7xl">
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
                            Our Team
                        </span>
                        <div className="h-px w-8 bg-[var(--primary)]" />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">Meet The </span>
                        <span className="gradient-text">Engineers</span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-lg text-[var(--text-muted)] leading-relaxed">
                        Talented developers passionate about building exceptional software solutions
                    </p>
                </motion.div>

                {/* Team Cards */}
                <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 lg:gap-10">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="w-full max-w-sm"
                        >
                            <ProfileCard
                                name={member.name}
                                title={member.id === 1 ? "Software Engineer" : "Software Engineer"} // Ensure all are Software Engineer (or from data if fixed)
                                avatarUrl={member.avatarUrl}
                                portfolioUrl={member.portfolioUrl}
                                behindGlowColor={member.behindGlowColor}
                                innerGradient={member.innerGradient}
                                contactText="View Portfolio"
                                showUserInfo={true}
                                isGrayscale={member.name !== "Abdullah Javed"}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
