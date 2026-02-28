"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "../lib/data";

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center relative overflow-hidden"
        >
            {/* Grid background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                }}
            />
            {/* Radial fade so the grid fades toward edges */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-background)_70%)] pointer-events-none" />
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)' }}
            />

            <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 w-full relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Text Content */}
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <motion.div {...fadeUp(0)}>
                            <span className="text-accent font-mono text-sm tracking-wider">
                                Full-Stack Engineer · Backend Specialist
                            </span>
                        </motion.div>

                        <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                            Backend Engineer{" "}
                            <br className="hidden sm:block" />
                            Building{" "}
                            <span className="text-accent">Production-Grade</span>{" "}
                            Systems
                        </motion.h1>

                        <motion.p
                            {...fadeUp(0.2)}
                            className="text-muted text-lg md:text-xl max-w-xl leading-relaxed mx-auto lg:mx-0"
                        >
                            {siteConfig.description}
                        </motion.p>

                        <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <a
                                href="#projects"
                                className="px-6 py-3 bg-accent hover:bg-accent-dark text-black font-medium rounded-lg transition-colors duration-200"
                            >
                                View Projects
                            </a>
                            <a
                                href="https://wa.me/2348113848299?text=Hey%2C%20I%20 would%20like%20you%20to%20build%20a%20software%20for%20me"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 border border-border hover:border-muted text-foreground rounded-lg transition-colors duration-200"
                            >
                                Contact Me
                            </a>
                        </motion.div>

                        <motion.div {...fadeUp(0.4)} className="flex items-center gap-6 justify-center lg:justify-start pt-2">
                            <a
                                href={siteConfig.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-foreground transition-colors"
                                aria-label="GitHub"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                href={siteConfig.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-foreground transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="text-muted hover:text-foreground transition-colors"
                                aria-label="Email"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </a>
                        </motion.div>
                    </div>

                    {/* Profile Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="relative shrink-0"
                    >
                        {/* Glow ring */}
                        <div
                            className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-accent/10 via-accent/3 to-accent/10 opacity-80"
                        />
                        {/* Decorative corner accents */}
                        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent/40 rounded-tl-lg" />
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent/40 rounded-br-lg" />
                        {/* Image container */}
                        <div
                            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-2xl overflow-hidden border-2 border-accent/20 hover:scale-[1.02] hover:border-accent/40 transition-all duration-300"
                        >
                            <Image
                                src="/bethrand.webp"
                                alt={siteConfig.name}
                                width={420}
                                height={420}
                                className="object-cover w-full h-full"
                                priority
                                quality={100}
                                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 420px"
                            />
                            {/* Subtle overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
