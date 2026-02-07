"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "CloudSync Pro",
        category: "SaaS Platform",
        year: "2024",
        description:
            "Enterprise file synchronization platform with real-time collaboration, end-to-end encryption, and seamless integrations.",
        image: "/projects/cloudsync.jpg",
        color: "var(--primary)",
        tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    },
    {
        id: 2,
        title: "AutoFlow AI",
        category: "AI Automation",
        year: "2024",
        description:
            "Intelligent workflow automation tool that uses AI to streamline business processes and reduce manual work by 80%.",
        image: "/projects/autoflow.jpg",
        color: "var(--secondary)",
        tags: ["Python", "TensorFlow", "React", "FastAPI"],
    },
    {
        id: 3,
        title: "FinTrack Mobile",
        category: "Mobile App",
        year: "2023",
        description:
            "Personal finance management app with expense tracking, budgeting, and investment portfolio analysis.",
        image: "/projects/fintrack.jpg",
        color: "var(--primary)",
        tags: ["React Native", "Firebase", "Node.js"],
    },
    {
        id: 4,
        title: "DevOps Dashboard",
        category: "Web Application",
        year: "2023",
        description:
            "Comprehensive DevOps monitoring dashboard with real-time metrics, alerting, and CI/CD pipeline visualization.",
        image: "/projects/devops.jpg",
        color: "var(--secondary)",
        tags: ["Vue.js", "Go", "Docker", "Kubernetes"],
    },
    {
        id: 5,
        title: "SmartRetail POS",
        category: "Desktop Application",
        year: "2024",
        description:
            "Modern point-of-sale system with inventory management, analytics, and multi-location support.",
        image: "/projects/smartretail.jpg",
        color: "var(--primary)",
        tags: ["Electron", "React", "SQLite", "Node.js"],
    },
    {
        id: 6,
        title: "HealthHub API",
        category: "Backend System",
        year: "2023",
        description:
            "HIPAA-compliant healthcare API platform connecting hospitals, clinics, and insurance providers.",
        image: "/projects/healthhub.jpg",
        color: "var(--secondary)",
        tags: ["Go", "gRPC", "MongoDB", "Kubernetes"],
    },
];

const categories = ["All", "SaaS Platform", "AI Automation", "Mobile App", "Web Application", "Desktop Application", "Backend System"];

export default function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

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
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            },
        },
        exit: {
            opacity: 0,
            y: 20,
            transition: { duration: 0.3 },
        },
    };

    return (
        <section id="work" className="relative w-full py-24 md:py-32 bg-[var(--background)] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent" />
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[var(--secondary)]/5 rounded-full blur-[120px]" />
            </div>

            <div className="container relative mx-auto px-6 max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-6">
                        <div className="h-px w-8 bg-[var(--primary)]" />
                        <span className="text-sm font-semibold text-[var(--primary)] tracking-[0.2em] uppercase">
                            Our Work
                        </span>
                        <div className="h-px w-8 bg-[var(--primary)]" />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">Featured </span>
                        <span className="gradient-text">Projects</span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-lg text-[var(--text-muted)] leading-relaxed">
                        A showcase of our best work across various industries and technologies.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                ? "bg-[var(--primary)] text-white shadow-[0_0_20px_rgba(73,34,229,0.3)]"
                                : "bg-[var(--surface-highlight)]/60 text-[var(--text-muted)] border border-[var(--surface-highlight)]/50 hover:border-[var(--primary)]/30 hover:text-white"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => {
                            const isHovered = hoveredProject === project.id;

                            return (
                                <motion.div
                                    key={project.id}
                                    variants={itemVariants}
                                    layout
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    onMouseEnter={() => setHoveredProject(project.id)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                    className="group relative"
                                >
                                    <div
                                        className={`relative h-full rounded-2xl overflow-hidden transition-all duration-500 ${isHovered
                                            ? "shadow-[0_0_40px_rgba(73,34,229,0.15)]"
                                            : ""
                                            }`}
                                    >
                                        {/* Project Image / Placeholder */}
                                        <div
                                            className="relative h-56 overflow-hidden"
                                            style={{
                                                background: `linear-gradient(135deg, [var(--primary)] 10%, [var(--background)] 100%)`, // Simplified placeholder gradient
                                            }}
                                        >
                                            {/* Placeholder pattern */}
                                            <div className="absolute inset-0 bg-[var(--surface)] opacity-50" />

                                            {/* Project icon/visual */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <motion.div
                                                    animate={{
                                                        scale: isHovered ? 1.1 : 1,
                                                        rotate: isHovered ? 5 : 0,
                                                    }}
                                                    transition={{ duration: 0.4 }}
                                                    className="w-20 h-20 rounded-2xl flex items-center justify-center bg-[var(--primary)]/20"
                                                >
                                                    <span
                                                        className="text-3xl font-bold"
                                                        style={{ color: "var(--primary)" }}
                                                    >
                                                        {project.title.charAt(0)}
                                                    </span>
                                                </motion.div>
                                            </div>

                                            {/* Year badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-[var(--background)]/80 backdrop-blur-sm rounded-full text-xs font-medium text-[var(--text-muted)] border border-[var(--surface-highlight)]/50">
                                                    {project.year}
                                                </span>
                                            </div>

                                            {/* Hover overlay */}
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: isHovered ? 1 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/80 to-transparent flex items-end justify-center pb-6"
                                            >
                                                <motion.button
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{
                                                        y: isHovered ? 0 : 20,
                                                        opacity: isHovered ? 1 : 0,
                                                    }}
                                                    transition={{ duration: 0.3, delay: 0.1 }}
                                                    className="flex items-center gap-2 px-5 py-2.5 bg-[var(--primary)] text-white rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
                                                >
                                                    View Project
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </motion.button>
                                            </motion.div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 bg-[var(--surface)]/60 border-t border-[var(--surface-highlight)]/30">
                                            {/* Category */}
                                            <span
                                                className="text-xs font-medium uppercase tracking-wider text-[var(--primary)]"
                                            >
                                                {project.category}
                                            </span>

                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-[var(--secondary)] transition-colors duration-300">
                                                {project.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4 line-clamp-2">
                                                {project.description}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.slice(0, 3).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2.5 py-1 bg-[var(--surface-highlight)] text-[var(--text-dim)] text-xs rounded-md"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                                {project.tags.length > 3 && (
                                                    <span className="px-2.5 py-1 bg-[var(--surface-highlight)] text-[var(--text-dim)] text-xs rounded-md">
                                                        +{project.tags.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* View All Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--primary)]/30 text-[var(--primary)] rounded-full font-medium hover:bg-[var(--primary)]/10 transition-all duration-300"
                    >
                        Start Your Project
                        <ArrowUpRight className="w-4 h-4" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
