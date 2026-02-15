"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Architecture", href: "#architecture" },
    { label: "Experience", href: "#experience" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    // Lightweight scroll detection for navbar style
    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 20);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // IntersectionObserver for active section detection (non-blocking, async)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -60% 0px",
                threshold: 0,
            }
        );

        const sections = navLinks.map((link) => link.href.replace("#", ""));
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-lg shadow-black/5"
                : ""
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#"
                    className="text-lg font-semibold tracking-tight text-foreground relative group"
                >
                    bethrand<span className="text-accent">.</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.replace("#", "");
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`relative px-3 py-2 text-sm transition-colors duration-200 rounded-md ${isActive
                                    ? "text-accent bg-accent/8"
                                    : "text-muted hover:text-foreground"
                                    }`}
                            >
                                {link.label}
                            </a>
                        );
                    })}
                    <a
                        href="#contact"
                        className="ml-4 px-4 py-2 text-sm font-medium bg-accent hover:bg-accent-dark text-black rounded-md transition-colors duration-200"
                    >
                        Get in Touch
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden relative w-10 h-10 flex items-center justify-center text-muted hover:text-foreground transition-colors rounded-md hover:bg-card"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-5 h-4 relative flex flex-col justify-between">
                        <span
                            className={`block h-0.5 w-5 bg-current rounded-full transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-5 bg-current rounded-full transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                                }`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-background/98 backdrop-blur-sm border-b border-border"
                    >
                        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-1">
                            {navLinks.map((link, index) => {
                                const isActive = activeSection === link.href.replace("#", "");
                                return (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.25, delay: index * 0.05 }}
                                        className={`text-base py-3 px-4 rounded-lg transition-colors duration-200 ${isActive
                                            ? "text-accent bg-accent/8"
                                            : "text-muted hover:text-foreground hover:bg-card"
                                            }`}
                                    >
                                        {link.label}
                                    </motion.a>
                                );
                            })}
                            <motion.a
                                href="#contact"
                                onClick={() => setMobileOpen(false)}
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: navLinks.length * 0.05 }}
                                className="mt-3 px-4 py-3 text-base font-medium bg-accent hover:bg-accent-dark text-black rounded-lg transition-colors duration-200 text-center"
                            >
                                Get in Touch
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
