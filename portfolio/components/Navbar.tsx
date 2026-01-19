// components/ElegantNavbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ElegantNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
  ];

  // Smooth scroll behavior like Munaeem's
  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrollingDown = latest > lastScrollY;
    const isAtTop = latest < 10;

    setIsScrolled(latest > 30);
    
    // Show immediately at top, hide when scrolling down, show when scrolling up
    if (isAtTop) {
      setIsVisible(true);
    } else if (isScrollingDown && latest > 100) {
      setIsVisible(false);
    } else if (!isScrollingDown) {
      setIsVisible(true);
    }
    
    setLastScrollY(latest);
  });

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ 
          y: isVisible ? 0 : -100,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className={cn(
          "fixed top-6 left-1/2 transform -translate-x-1/2 z-50",
          "transition-all duration-300"
        )}
      >
        {/* Main nav container */}
        <div className="relative">
          {/* Background with glass effect */}
          <motion.div
            animate={{
              scale: isScrolled ? 0.95 : 1,
              opacity: isScrolled ? 0.95 : 1,
              backdropFilter: isScrolled ? "blur(10px)" : "blur(8px)",
              backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.85)" : "rgba(10, 10, 10, 0.75)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="rounded-2xl border border-white/10 px-6 py-3"
            style={{
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
            }}
          >
            <div className="flex items-center justify-between gap-8">
              {/* Logo - left aligned */}
              <motion.div
                animate={{
                  scale: isScrolled ? 0.9 : 1,
                  opacity: isScrolled ? 0.9 : 1,
                }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-center space-x-2"
              >
                <div className="text-white font-semibold tracking-tight">
                  Cloudora<span className="text-blue-400">Tech</span>
                </div>
              </motion.div>

              {/* Desktop Navigation - centered */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ 
                      y: -2,
                      color: "#60A5FA" // blue-400
                    }}
                    whileTap={{ y: 0 }}
                    className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white 
                             transition-colors relative"
                  >
                    {item.label}
                    <motion.span
                      className="absolute bottom-1 left-1/2 h-px bg-blue-400 transform -translate-x-1/2"
                      initial={{ width: 0 }}
                      whileHover={{ width: "60%" }}
                      transition={{ type: "spring", stiffness: 400 }}
                    />
                  </motion.a>
                ))}
              </div>

              {/* CTA Button - right aligned */}
              <motion.div
                animate={{
                  scale: isScrolled ? 0.95 : 1,
                }}
                transition={{ type: "spring", stiffness: 400 }}
                className="hidden md:block"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgb(37, 99, 235)", // blue-600
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 bg-black text-white text-sm font-medium rounded-lg 
                           border border-white/10 hover:border-blue-500/30 transition-all"
                >
                  Contact
                </motion.button>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Appears from top */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25 }}
            
            className="fixed top-24 left-4 right-4 z-40 md:hidden"
          >
            <div className="bg-black/95 backdrop-blur-lg rounded-2xl border border-white/10 
                          shadow-2xl overflow-hidden">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-4 text-zinc-400 hover:text-white hover:bg-white/5 
                           border-b border-white/5 transition-colors text-center"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="p-6">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-black text-white font-medium rounded-lg
                           border border-white/10"
                >
                  Get in touch
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}