"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO",
        company: "TechVenture Inc.",
        image: null,
        content:
            "Cloudora transformed our outdated systems into a modern, scalable platform. Their team's expertise in cloud architecture and attention to detail exceeded our expectations. We saw a 40% improvement in performance within weeks.",
        rating: 5,
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "CTO",
        company: "DataFlow Analytics",
        image: null,
        content:
            "Working with Cloudora on our AI automation project was incredible. They understood our complex requirements and delivered a solution that reduced our processing time by 80%. Highly recommended!",
        rating: 5,
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Founder",
        company: "StartupHub",
        image: null,
        content:
            "From concept to launch in just 8 weeks! Cloudora's agile approach and technical skills helped us get our MVP to market faster than we thought possible. Their ongoing support has been exceptional.",
        rating: 5,
    },
    {
        id: 4,
        name: "David Park",
        role: "Product Manager",
        company: "FinSecure",
        image: null,
        content:
            "The mobile app Cloudora built for us has received amazing feedback from our users. Clean design, smooth performance, and rock-solid security. They're now our go-to development partner.",
        rating: 5,
    },
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="relative w-full py-24 md:py-32 bg-[var(--background)] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="grid-pattern absolute inset-0 opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-[200px]" />
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
                            Testimonials
                        </span>
                        <div className="h-px w-8 bg-[var(--primary)]" />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-white">Client </span>
                        <span className="gradient-text">Success Stories</span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-lg text-[var(--text-muted)] leading-relaxed">
                        Don't just take our word for it. Here's what our clients have to say.
                    </p>
                </motion.div>

                {/* Testimonial Carousel */}
                <div className="relative">
                    {/* Main testimonial */}
                    <div className="relative max-w-4xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="relative"
                            >
                                {/* Quote icon */}
                                <div className="absolute -top-4 -left-4 md:-left-8">
                                    <Quote className="w-16 h-16 text-[var(--text-muted)]/20" />
                                </div>

                                {/* Card */}
                                <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[var(--surface)]/80 to-[var(--background)]/80 border border-[var(--surface-highlight)]/50 backdrop-blur-sm">
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5 fill-[var(--primary)] text-[var(--primary)]"
                                            />
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-light">
                                        "{testimonials[currentIndex].content}"
                                    </blockquote>

                                    {/* Author */}
                                    <div className="flex items-center gap-4">
                                        {/* Avatar */}
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                                            <span className="text-xl font-bold text-white">
                                                {testimonials[currentIndex].name.charAt(0)}
                                            </span>
                                        </div>

                                        <div>
                                            <div className="text-lg font-semibold text-white">
                                                {testimonials[currentIndex].name}
                                            </div>
                                            <div className="text-sm text-[var(--text-muted)]">
                                                {testimonials[currentIndex].role},{" "}
                                                <span className="text-[var(--primary)]">
                                                    {testimonials[currentIndex].company}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center items-center gap-6 mt-8">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevTestimonial}
                            className="w-12 h-12 rounded-full border border-[var(--surface-highlight)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-300"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </motion.button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? "w-8 bg-[var(--primary)]"
                                        : "bg-[var(--surface-highlight)] hover:bg-[var(--text-dim)]"
                                        }`}
                                />
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextTestimonial}
                            className="w-12 h-12 rounded-full border border-[var(--surface-highlight)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-300"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
