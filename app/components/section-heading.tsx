interface SectionHeadingProps {
    label: string;
    title: string;
    description?: string;
}

export default function SectionHeading({
    label,
    title,
    description,
}: SectionHeadingProps) {
    return (
        <div className="mb-16">
            <span className="text-accent text-sm font-mono tracking-wider uppercase">
                {label}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight text-foreground">
                {title}
            </h2>
            {description && (
                <p className="text-muted mt-4 max-w-2xl text-lg leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
}
