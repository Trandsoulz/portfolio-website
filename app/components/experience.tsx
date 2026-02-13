"use client";

import SectionHeading from "./section-heading";
import MotionWrapper from "./motion-wrapper";
import { experience } from "../lib/data";

export default function Experience() {
    return (
        <section id="experience" className="py-24 md:py-32 border-t border-border">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading
                    label="Experience"
                    title="Where I've worked"
                    description="A timeline of professional roles and the impact I made at each."
                />

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

                    <div className="space-y-12">
                        {experience.map((job, index) => (
                            <MotionWrapper key={job.company} delay={index * 0.1}>
                                <div className="relative pl-8 md:pl-20">
                                    {/* Timeline Dot */}
                                    <div className="absolute left-0 md:left-8 top-1.5 w-2.5 h-2.5 rounded-full bg-accent -translate-x-[calc(50%-0.5px)] ring-4 ring-background" />

                                    {/* Content */}
                                    <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/20 transition-colors duration-300">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                                            <div>
                                                <h3 className="text-foreground font-semibold text-lg">
                                                    {job.company}
                                                </h3>
                                                <p className="text-accent text-sm font-medium">
                                                    {job.role}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-muted text-sm font-mono">
                                                    {job.period}
                                                </p>
                                                <p className="text-muted/60 text-xs">{job.location}</p>
                                            </div>
                                        </div>
                                        <ul className="space-y-2 mt-4">
                                            {job.highlights.map((highlight, i) => (
                                                <li
                                                    key={i}
                                                    className="flex gap-2.5 text-muted text-sm"
                                                >
                                                    <span className="text-accent shrink-0 mt-0.5">
                                                        &#8250;
                                                    </span>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </MotionWrapper>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
