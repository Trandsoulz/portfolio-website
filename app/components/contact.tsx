"use client";

import { useState, type FormEvent } from "react";
import SectionHeading from "./section-heading";
import { siteConfig } from "../lib/data";

export default function Contact() {
    const [status, setStatus] = useState<
        "idle" | "submitting" | "success" | "error"
    >("idle");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch(
                `https://formspree.io/f/${siteConfig.formspreeId}`,
                {
                    method: "POST",
                    body: data,
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    return (
        <section id="contact" className="py-24 md:py-32 border-t border-border">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading
                    label="Contact"
                    title="Let's work together"
                    description="Have a project in mind or want to discuss an opportunity? I'd love to hear from you."
                />

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-foreground mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-foreground mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                                placeholder="your@email.com"
                            />
                        </div>
                          <div>
                            <label
                                htmlFor="tel"
                                className="block text-sm font-medium text-foreground mb-2"
                            >
                                Tel
                            </label>
                            <input
                                type="text"
                                id="tel"
                                name="tel"
                                required
                                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                                placeholder="+2348113848299"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-foreground mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="w-full px-6 py-3 bg-accent hover:bg-accent-dark text-black font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "submitting" ? "Sending..." : "Send Message"}
                        </button>
                        {status === "success" && (
                            <p className="text-accent text-sm text-center">
                                Message sent successfully! I&apos;ll get back to you soon.
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-red-400 text-sm text-center">
                                Something went wrong. Please try again or email me directly.
                            </p>
                        )}
                    </form>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-foreground font-semibold text-lg mb-4">
                                Direct contact
                            </h3>
                            <div className="space-y-4">
                                <a
                                    href={`mailto:${siteConfig.email}`}
                                    className="flex items-center gap-3 text-muted hover:text-foreground transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect width="20" height="16" x="2" y="4" rx="2" />
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm">{siteConfig.email}</span>
                                </a>

                                <a
                                    href={siteConfig.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-muted hover:text-foreground transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm">github.com/Trandsoulz</span>
                                </a>

                                <a
                                    href={siteConfig.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-muted hover:text-foreground transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm">LinkedIn Profile</span>
                                </a>
                            </div>
                        </div>

                        <div className="bg-card border border-border rounded-xl p-6">
                            <h3 className="text-foreground font-semibold mb-2">
                                Based in {siteConfig.location}
                            </h3>
                            <p className="text-muted text-sm leading-relaxed">
                                Available for remote work worldwide. Open to full-time roles,
                                contract work, and consulting engagements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
