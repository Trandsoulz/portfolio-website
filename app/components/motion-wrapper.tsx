"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface MotionWrapperProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export default function MotionWrapper({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: MotionWrapperProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

    const directionOffset = {
        up: { x: 0, y: 24 },
        down: { x: 0, y: -24 },
        left: { x: 24, y: 0 },
        right: { x: -24, y: 0 },
    };

    const { x, y } = directionOffset[direction];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x, y }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
