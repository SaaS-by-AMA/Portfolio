"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Linkedin, Github, Twitter, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "hello@cloudora.tech",
            href: "mailto:hello@cloudora.tech",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+92 300 1234567",
            href: "tel:+923001234567",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Lahore, Pakistan",
            href: "#",
        },
    ];

    const socialLinks = [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Twitter, href: "#", label: "Twitter" },
    ];

    return (
        <section id="contact" className="relative w-full py-24 md:py-32 bg-[var(--background)] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-transparent" />
                <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[var(--secondary)]/5 rounded-full blur-[120px]" />
            </div>

            <div className="container relative mx-auto px-6 max-w-6xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-6">
                        <div className="h-px w-8 bg-[var(--primary)]" />
                        <span className="text-sm font-semibold text-[var(--primary)] tracking-[0.2em] uppercase">
                            Get In Touch
                        </span>
                        <div className="h-px w-8 bg-[var(--primary)]" />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">Let's </span>
                        <span className="gradient-text">Talk.</span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-lg text-[var(--text-muted)] leading-relaxed">
                        Ready to bring your ideas to life? We're here to design, build & scale with you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Quick note */}
                        <div className="p-6 rounded-2xl bg-[var(--surface)]/40 border border-[var(--surface-highlight)]/50">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-[var(--primary)]">24</span>
                                </div>
                                <div>
                                    <div className="text-sm text-[var(--text-muted)]">Response within</div>
                                    <div className="text-white font-semibold">24 hours — usually faster</div>
                                </div>
                            </div>
                        </div>

                        {/* Contact details */}
                        <div className="space-y-4">
                            {contactInfo.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-[var(--surface)]/20 border border-transparent hover:border-[var(--primary)]/20 transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-[var(--surface-highlight)]/40 flex items-center justify-center group-hover:bg-[var(--primary)]/10 transition-colors duration-300">
                                            <Icon className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-[var(--text-dim)] uppercase tracking-wider">
                                                {item.label}
                                            </div>
                                            <div className="text-white group-hover:text-[var(--primary)] transition-colors duration-300">
                                                {item.value}
                                            </div>
                                        </div>
                                        <ArrowUpRight className="w-4 h-4 text-[var(--text-dim)] ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Social links */}
                        <div>
                            <div className="text-sm text-[var(--text-dim)] uppercase tracking-wider mb-4">
                                Follow Us
                            </div>
                            <div className="flex gap-3">
                                {socialLinks.map((link) => {
                                    const Icon = link.icon;
                                    return (
                                        <motion.a
                                            key={link.label}
                                            href={link.href}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-12 h-12 rounded-xl bg-[var(--surface)]/60 border border-[var(--surface-highlight)]/50 flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--primary)]/30 hover:text-[var(--primary)] transition-all duration-300"
                                        >
                                            <Icon className="w-5 h-5" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="p-8 rounded-2xl bg-[var(--surface)]/40 border border-[var(--surface-highlight)]/50 backdrop-blur-sm">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-16 h-16 rounded-full bg-[var(--primary)]/20 flex items-center justify-center mx-auto mb-6">
                                        <Send className="w-8 h-8 text-[var(--primary)]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        Message Sent!
                                    </h3>
                                    <p className="text-[var(--text-muted)]">
                                        Thank you for reaching out. We'll get back to you soon.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm text-[var(--text-muted)] mb-2">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-[var(--surface-highlight)]/50 border border-[var(--surface-highlight)]/50 text-white placeholder-[var(--text-dim)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]/50 transition-all duration-300"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-[var(--text-muted)] mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-[var(--surface-highlight)]/50 border border-[var(--surface-highlight)]/50 text-white placeholder-[var(--text-dim)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]/50 transition-all duration-300"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm text-[var(--text-muted)] mb-2">
                                            Company (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-[var(--surface-highlight)]/50 border border-[var(--surface-highlight)]/50 text-white placeholder-[var(--text-dim)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]/50 transition-all duration-300"
                                            placeholder="Your Company"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm text-[var(--text-muted)] mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-xl bg-[var(--surface-highlight)]/50 border border-[var(--surface-highlight)]/50 text-white placeholder-[var(--text-dim)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]/50 transition-all duration-300 resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-4 rounded-xl bg-[var(--primary)] text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-4 h-4" />
                                            </>
                                        )}
                                    </motion.button>

                                    <p className="text-xs text-center text-[var(--text-dim)]">
                                        By submitting, you agree to our{" "}
                                        <a href="#" className="text-[var(--primary)] hover:underline">
                                            Privacy Policy
                                        </a>
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
