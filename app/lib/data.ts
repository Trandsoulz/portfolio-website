export const siteConfig = {
    name: "Bethrand Nnaemeka",
    title: "Backend Engineer Building Production-Grade Systems",
    description:
        "Full-stack developer with 4+ years of experience specializing in backend engineering. I design and build scalable APIs, real-time systems, and secure payment architectures.",
    email: "bethrand2019@gmail.com",
    linkedin: "https://www.linkedin.com/in/bethrandnnaemeka2019/",
    github: "https://github.com/Trandsoulz",
    location: "Port Harcourt, Nigeria",
    formspreeId: "xojndpae", // Replace with your actual Formspree form ID
};

export const aboutContent = {
    paragraphs: [
        "I'm a full-stack developer who thinks in systems, not just screens. With 4+ years of experience shipping production software across e-commerce, fintech, real estate, and marketplace platforms, I focus on building architecture that scales.",
        "My work centers on designing secure REST APIs, implementing payment flows with escrow logic, building real-time communication systems, and deploying cloud infrastructure that stays online. I write code that other engineers can maintain and businesses can depend on.",
        "When I take on a project, I think about database modeling, authentication security, transaction integrity, monitoring, and performance — not just making things look right, but making them work right under load.",
    ],
};

export const techStack = {
    frontend: {
        label: "Frontend",
        items: [
            "TypeScript",
            "React.js",
            "Next.js",
            "TailwindCSS",
            "Zustand",
            "Redux Toolkit",
        ],
    },
    backend: {
        label: "Backend",
        items: [
            "Node.js",
            "Express.js",
            "NestJS",
            "Golang",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Prisma ORM",
            "GORM",
            "Mongoose",
            "Socket.IO",
            "JWT Auth",
            "Stripe",
            "AWS S3",
            "Firebase FCM",
            "Supabase Auth",
        ],
    },
    devops: {
        label: "Infrastructure",
        items: [
            "AWS",
            "Docker",
            "VPS",
            "Sentry",
            "Winston",
            "Git & GitHub",
            "Swagger/OpenAPI",
            "Vercel",
        ],
    },
};

export const projects = [
    {
        name: "WORLDSHOP",
        type: "eCommerce Platform",
        summary:
            "Full-stack eCommerce platform with payments, digital product delivery, inventory management, and admin operations.",
        achievements: [
            "External authentication integration (JWT, WorldStreet Identity)",
            "Paystack payment gateway with webhook handling",
            "Digital product delivery with download tracking (limits & expiry)",
            "File uploads to Cloudflare R2 with signed URLs",
            "Cart system with guest-to-user merge on login",
            "Order lifecycle management with status tracking",
            "Transactional emails via Resend (receipts, digital delivery)",
            "Admin dashboard (products, categories, orders, inventory)",
            "Product reviews, ratings, wishlist, and address management",
        ],
        tech: [
            "TypeScript",
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Prisma ORM",
            "Paystack",
            "Cloudflare R2",
            "Zustand",
            "Resend",
        ],
    },
    {
        name: "MY-HELPERR",
        type: "Marketplace Platform – Canada",
        summary:
            "Production-grade marketplace architecture with payments, escrow, real-time systems, and secure authentication.",
        achievements: [
            "Authentication system (JWT, OTP, Google OAuth, role-based access)",
            "KYC verification with admin approval workflow",
            "Escrow payment system using Stripe Connect",
            "Wallet & transaction tracking with audit trails",
            "Real-time chat via Socket.IO (7 events, 5 broadcasts)",
            "Push notifications with Firebase FCM",
            "Google Maps integration for geocoding & distance discovery",
            "AWS S3 file uploads with presigned URLs",
            "API security: CORS, rate limiting, Helmet, Sentry monitoring",
            "Database with 8 models, relationships, indexes, cascade deletions",
        ],
        tech: [
            "TypeScript",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Prisma ORM",
            "Stripe Connect",
            "Socket.IO",
            "Firebase FCM",
            "AWS S3",
            "Google Maps API",
        ],
    },
    {
        name: "BID&BUY GLOBAL",
        type: "Auction + E-commerce",
        summary:
            "Fintech-level transactional system with audit trails and marketplace economics.",
        achievements: [
            "Real-time auction engine with Socket.IO",
            "Escrow lifecycle (hold/release/void, auto penalties)",
            "Wallet & ledger system with full audit trails",
            "Finecore + Paystack payment integrations",
            "KYC onboarding (BVN/NIN validation)",
            "Referral tracking & marketer analytics",
            "Gamified streak rewards & BidCredit bonus tiers",
            "Role-based admin tools & platform configuration engine",
            "Comprehensive Swagger/OpenAPI documentation",
        ],
        tech: [
            "TypeScript",
            "Node.js",
            "MongoDB",
            "Socket.IO",
            "Paystack",
            "Finecore",
            "Swagger",
        ],
    },
    {
        name: "RAHA",
        type: "Multi-vendor Commerce",
        summary:
            "Frontend architecture for a multi-vendor commerce platform with dynamic product listings and seamless checkout.",
        achievements: [
            "Engineered frontend architecture with Next.js App Router",
            "Zustand state management for cart, vendor selection, orders",
            "Dynamic vendor product listings with availability tracking",
            "Mobile-optimized responsive UI",
            "Accessibility compliance with web standards",
        ],
        tech: ["Next.js", "TypeScript", "TailwindCSS", "Zustand", "REST APIs"],
    },
    {
        name: "EKOCRIB",
        type: "Real Estate Platform",
        summary:
            "Property listing platform with role-based access, search functionality, and admin dashboards.",
        achievements: [
            "Next.js App Router frontend architecture",
            "Role-based authentication and access control",
            "Dynamic property listings with search and filters",
            "Responsive UI optimized for mobile and desktop",
            "RESTful API integration for real-time data display",
        ],
        tech: ["Next.js", "TypeScript", "TailwindCSS", "REST APIs"],
    },
];

export const architecturePrinciples = [
    {
        title: "Secure Authentication",
        description:
            "JWT with refresh tokens, OTP verification, OAuth integration, role-based access control, and session management designed for zero-trust environments.",
        icon: "shield",
    },
    {
        title: "Scalable Database Design",
        description:
            "Relational and document modeling with proper indexing, cascade rules, constraints, and migration strategies that support growth without rewrites.",
        icon: "database",
    },
    {
        title: "Payment Safety & Escrow",
        description:
            "Stripe Connect integration with escrow hold/release flows, wallet systems, transaction ledgers, and webhook-driven state management.",
        icon: "wallet",
    },
    {
        title: "Monitoring & Logging",
        description:
            "Sentry error tracking, Winston structured logging, health check endpoints, and environment-aware configuration for production observability.",
        icon: "monitor",
    },
    {
        title: "Clean API Architecture",
        description:
            "RESTful design with proper HTTP semantics, rate limiting, CORS policies, input validation, and comprehensive Swagger/OpenAPI documentation.",
        icon: "code",
    },
    {
        title: "Real-time Systems",
        description:
            "Socket.IO event architectures with typing indicators, read receipts, presence detection, and graceful reconnection handling.",
        icon: "zap",
    },
];

export const experience = [
    {
        company: "MY-HELPERR",
        location: "Toronto, Canada",
        period: "Aug 2025 – Present",
        role: "Backend Engineer",
        highlights: [
            "Built production marketplace API with authentication, escrow, and real-time chat",
            "Deployed SSR app on AWS Amplify, resolving server actions and runtime issues",
            "Integrated Stripe Connect, Firebase FCM, and Google Maps API",
        ],
    },
    {
        company: "BID&BUY GLOBAL",
        location: "Abuja, Nigeria",
        period: "Apr 2025 – Jul 2025",
        role: "Backend Engineer",
        highlights: [
            "Designed real-time multi-vendor auction platform with Socket.IO and MongoDB",
            "Implemented escrow lifecycle and automated seller payouts",
            "Built KYC onboarding, referral tracking, and gamified reward system",
        ],
    },
    {
        company: "The Day Brand",
        location: "Manchester, UK",
        period: "Apr 2024 – Apr 2025",
        role: "Full-Stack Developer",
        highlights: [
            "Engineered e-commerce platform increasing user engagement and conversion rates",
            "Developed custom web applications for real estate and fashion industry clients",
            "Collaborated with cross-functional teams on performance and scalability",
        ],
    },
    {
        company: "SMART-ARENA",
        location: "Port Harcourt, Nigeria",
        period: "Jun 2023 – Mar 2024",
        role: "Full-Stack Developer",
        highlights: [
            "Built company's complete web infrastructure and e-commerce platform",
            "Implemented SEO strategies achieving top rankings for key search terms",
            "Created reusable UI components improving development efficiency",
        ],
    },
    {
        company: "BINGPAY",
        location: "Port Harcourt, Nigeria",
        period: "Feb 2022 – Jul 2023",
        role: "Frontend Developer",
        highlights: [
            "Engineered modular, reusable frontend components streamlining development",
            "Optimized web application UI for performance across various devices",
            "Developed SEO strategies to improve site visibility",
        ],
    },
];
