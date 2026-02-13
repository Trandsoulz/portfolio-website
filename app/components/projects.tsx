"use client";

import SectionHeading from "./section-heading";
import MotionWrapper from "./motion-wrapper";
import { projects } from "../lib/data";

export default function Projects() {
    return (
        <section id="projects" className="py-24 md:py-32 border-t border-border">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading
                    label="Projects"
                    title="Systems I've built"
                    description="Real-world production systems — not tutorials, not toy apps."
                />

                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <MotionWrapper key={project.name} delay={index * 0.05}>
                            <div className="bg-card border border-border rounded-xl p-8 hover:border-accent/20 transition-colors duration-300 group">
                                {/* Header */}
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                                        {project.name}
                                    </h3>
                                    <span className="text-sm text-muted font-mono">
                                        {project.type}
                                    </span>
                                </div>

                                {/* Summary */}
                                <p className="text-accent/80 text-base italic mb-6 border-l-2 border-accent/30 pl-4">
                                    &ldquo;{project.summary}&rdquo;
                                </p>

                                {/* Achievements */}
                                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                                    {project.achievements.map((achievement, i) => (
                                        <div key={i} className="flex gap-2.5 py-1">
                                            <svg
                                                className="w-4 h-4 text-accent shrink-0 mt-0.5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span className="text-muted text-sm leading-relaxed">
                                                {achievement}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 text-xs font-mono text-accent/70 bg-accent/5 border border-accent/10 rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
