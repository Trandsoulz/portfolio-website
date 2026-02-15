import SectionHeading from "./section-heading";
import MotionWrapper from "./motion-wrapper";
import { aboutContent } from "../lib/data";

const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "10+", label: "Projects Shipped" },
    { value: "5+", label: "Industries Served" },
    { value: "8+", label: "Payment Integrations" },
];

const capabilities = [
    {
        label: "System Architecture",
        detail: "Designing services that communicate cleanly and scale independently",
    },
    {
        label: "API Design",
        detail: "RESTful APIs with proper auth, validation, error handling, and documentation",
    },
    {
        label: "Payment Systems",
        detail: "Escrow flows, wallet ledgers, webhook handlers — battle-tested integrations",
    },
    {
        label: "Real-time Features",
        detail: "Chat systems, live updates, and notification pipelines that just work",
    },
    {
        label: "Security & Auth",
        detail: "JWT, OAuth, OTP, role-based access, and zero-trust session management",
    },
    {
        label: "Cloud & DevOps",
        detail: "AWS deployments, Docker containers, monitoring, and CI/CD pipelines",
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 md:py-32">
            <div className="max-w-6xl mx-auto px-6">
                <MotionWrapper>
                    <SectionHeading
                        label="About"
                        title="Engineering systems that scale"
                        description="I don't just write code — I architect solutions that handle real-world complexity."
                    />
                </MotionWrapper>

                {/* Stats Bar */}
                <MotionWrapper delay={0.1}>
                    <div className="mb-16">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent/20 transition-colors duration-300"
                                >
                                    <span className="text-3xl md:text-4xl font-bold text-accent">
                                        {stat.value}
                                    </span>
                                    <p className="text-muted text-sm mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </MotionWrapper>

                {/* Bio Paragraphs */}
                <MotionWrapper delay={0.2}>
                    <div className="space-y-6 mb-12">
                        {aboutContent.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-muted leading-relaxed text-base md:text-lg">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </MotionWrapper>

                {/* Capabilities List */}
                <MotionWrapper delay={0.15}>
                    <div className="space-y-8">
                        {capabilities.map((item, index) => (
                            <div key={item.label} className="flex gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                                <div>
                                    <h4 className="text-foreground font-semibold text-base mb-1">
                                        {item.label}
                                    </h4>
                                    <p className="text-muted text-sm md:text-base leading-relaxed">
                                        {item.detail}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </MotionWrapper>

                {/* Education */}
                <MotionWrapper delay={0.2}>
                    <div className="mt-12 pt-8 border-t border-border">
                        <p className="text-accent font-mono text-xs tracking-wider uppercase mb-2">
                            Education
                        </p>
                        <p className="text-foreground font-medium">
                            BSc. Computer Science
                        </p>
                        <p className="text-muted text-sm">University of Port Harcourt</p>
                    </div>
                </MotionWrapper>
            </div>
        </section>
    );
}
