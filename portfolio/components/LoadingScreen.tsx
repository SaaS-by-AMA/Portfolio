"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 100);

        // Hide loading screen after animation completes
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, []);

    // Don't render anything until mounted to avoid hydration mismatch
    if (!isMounted) {
        return (
            <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--background)]">
                <h1 className="text-5xl md:text-6xl font-bold">
                    <span className="text-[var(--primary)]">Cloudora</span>
                    <span className="text-white">Tech</span>
                </h1>
            </div>
        );
    }

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.5, ease: "easeInOut" },
                    }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--background)]"
                >
                    {/* Background gradient orbs */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/10 rounded-full blur-[100px]"
                        />
                        <motion.div
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--secondary)]/10 rounded-full blur-[80px]"
                        />
                    </div>

                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10 mb-12"
                    >
                        <motion.h1
                            className="text-5xl md:text-6xl font-bold"
                            animate={{
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <span className="text-[var(--primary)]">Cloudora</span>
                            <span className="text-white">Tech</span>
                        </motion.h1>
                    </motion.div>

                    {/* Loading bar container */}
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "200px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative z-10"
                    >
                        {/* Track */}
                        <div className="w-[200px] h-1 bg-[var(--surface-highlight)] rounded-full overflow-hidden">
                            {/* Progress bar */}
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: `${Math.min(progress, 100)}%` }}
                                transition={{ duration: 0.1 }}
                                className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full"
                                style={{
                                    boxShadow: "0 0 20px rgba(73, 34, 229, 0.5)",
                                }}
                            />
                        </div>

                        {/* Percentage */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-center text-sm text-[var(--text-dim)] mt-4 font-mono"
                        >
                            {Math.min(Math.round(progress), 100)}%
                        </motion.p>
                    </motion.div>

                    {/* Bottom tagline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="absolute bottom-8 text-sm text-[var(--text-dim)]"
                    >
                        Building the future of software
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
