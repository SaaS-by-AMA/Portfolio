"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Instagram, ArrowUp, Mail } from "lucide-react";

const navigation = {
    main: [
        { name: "Home", href: "#" },
        { name: "Services", href: "#services" },
        { name: "Work", href: "#work" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ],
    services: [
        { name: "Web Development", href: "#services" },
        { name: "Mobile Apps", href: "#services" },
        { name: "AI Automation", href: "#services" },
        { name: "SaaS Solutions", href: "#services" },
    ],
    social: [
        { name: "LinkedIn", icon: Linkedin, href: "#" },
        { name: "GitHub", icon: Github, href: "#" },
        { name: "Twitter", icon: Twitter, href: "#" },
        { name: "Instagram", icon: Instagram, href: "#" },
    ],
};

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative w-full bg-[var(--background)] overflow-hidden">
            {/* Top border gradient */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/30 to-transparent" />

            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[var(--primary)]/3 rounded-full blur-[150px]" />
            </div>

            <div className="container relative mx-auto px-6 max-w-7xl">
                {/* Main footer content */}
                <div className="py-16 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Brand */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                {/* Logo */}
                                <div className="mb-6">
                                    <span className="text-2xl font-bold">
                                        <span className="text-[var(--secondary)]">Cloudora</span>
                                        <span className="text-white">Tech</span>
                                    </span>
                                </div>

                                <p className="text-[var(--text-muted)] max-w-md mb-6 leading-relaxed">
                                    Building the future of software, one line of code at a time.
                                    We transform ideas into powerful digital solutions that scale your business.
                                </p>

                                {/* Newsletter */}
                                <div className="flex gap-3 max-w-sm">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-3 rounded-xl bg-[var(--surface-highlight)]/50 border border-[var(--surface-highlight)]/50 text-white placeholder-[var(--text-dim)] focus:border-[var(--primary)] focus:outline-none transition-all duration-300"
                                    />
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-5 py-3 rounded-xl bg-[var(--primary)] text-white font-medium hover:opacity-90 transition-colors duration-300"
                                    >
                                        <Mail className="w-5 h-5" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                            <ul className="space-y-3">
                                {navigation.main.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors duration-300"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Services */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-white font-semibold mb-6">Services</h3>
                            <ul className="space-y-3">
                                {navigation.services.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors duration-300"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="py-6 border-t border-[var(--surface-highlight)]">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Copyright */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-sm text-[var(--text-dim)]"
                        >
                            © {new Date().getFullYear()} Cloudora Tech. All rights reserved.
                        </motion.p>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex items-center gap-4"
                        >
                            {navigation.social.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        className="w-10 h-10 rounded-lg bg-[var(--surface)]/50 flex items-center justify-center text-[var(--text-dim)] hover:text-[var(--primary)] hover:bg-[var(--surface-highlight)] transition-all duration-300"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </motion.a>
                                );
                            })}
                        </motion.div>

                        {/* Back to top */}
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex items-center gap-2 text-sm text-[var(--text-dim)] hover:text-[var(--primary)] transition-colors duration-300"
                        >
                            Back to top
                            <ArrowUp className="w-4 h-4" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
