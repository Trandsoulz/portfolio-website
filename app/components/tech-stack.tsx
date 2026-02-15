import SectionHeading from "./section-heading";
import { techStack } from "../lib/data";

const categories = [
    techStack.frontend,
    techStack.backend,
    techStack.devops,
];

export default function TechStack() {
    return (
        <section id="stack" className="py-24 md:py-32 border-t border-border">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading
                    label="Tech Stack"
                    title="Tools I work with"
                    description="A curated set of technologies I use to build production systems."
                />

                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <div key={category.label} className="bg-card border border-border rounded-xl p-6 h-full">
                            <h3 className="text-accent font-mono text-sm tracking-wider uppercase mb-6">
                                {category.label}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1.5 text-sm text-muted bg-background border border-border rounded-lg hover:text-foreground hover:border-accent/30 transition-colors duration-200"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
