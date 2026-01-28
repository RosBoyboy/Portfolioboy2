/**
 * Centralized content management for the portfolio
 * Update this file to customize your portfolio content
 */

export const portfolioContent = {
  // Hero section configuration
  hero: {
    name: "Ros P. Boyboy",
    title: "Full-Stack Developer",
    statement:
      "Building innovative web experiences with modern technologies. Passionate about learning and solving real-world problems.",
    ctaText: "View My Work",
    ctaLink: "#projects",
  },

  // Big Three Projects - Demonstrates past, present, and future
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      subtitle: "What I Already Know",
      description:
        "A full-featured e-commerce platform demonstrating solid fundamentals in React, Node.js, and database design. Built with authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      image: "/projects/ecommerce.jpg",
      githubLink: "https://github.com/yourusername/ecommerce-platform",
      liveLink: "https://ecommerce-demo.vercel.app",
      highlights: [
        "JWT-based authentication",
        "Real-time inventory management",
        "Responsive design",
      ],
    },
    {
      id: 2,
      title: "AI Task Assistant",
      subtitle: "What I Recently Learned",
      description:
        "A modern task management application leveraging AI to help users prioritize and organize their work. Recently integrated OpenAI API and learned prompt engineering.",
      technologies: ["Next.js", "TypeScript", "OpenAI API", "Prisma", "PostgreSQL"],
      image: "/projects/ai-assistant.jpg",
      githubLink: "https://github.com/yourusername/ai-task-assistant",
      liveLink: "https://ai-task-assistant.vercel.app",
      highlights: [
        "AI-powered task suggestions",
        "Real-time updates with WebSockets",
        "Modern UI with Tailwind CSS",
      ],
    },
    {
      id: 3,
      title: "Real-Time Collaboration Platform",
      subtitle: "What I Aspire to Build",
      description:
        "An ambitious project to build a Google Docs-like real-time collaboration platform. Will feature live editing, presence awareness, and conflict resolution—representing my next growth milestone.",
      technologies: [
        "Next.js",
        "TypeScript",
        "WebSockets",
        "Operational Transformation",
        "Redis",
      ],
      image: "/projects/collaboration.jpg",
      githubLink: "https://github.com/yourusername/collaboration-platform",
      liveLink: null,
      highlights: [
        "Real-time synchronization",
        "User presence indicators",
        "Conflict-free collaborative editing",
      ],
      status: "In Progress",
    },
  ],

  // Currently Learning section
  learning: {
    title: "Currently Learning",
    subtitle:
      "Expanding my skills and staying ahead of the curve in web development",
    technologies: [
      {
        category: "Backend & Infrastructure",
        items: ["Docker", "Kubernetes", "GraphQL", "gRPC"],
      },
      {
        category: "AI & Machine Learning",
        items: ["LLMs", "Prompt Engineering", "Vector Databases", "RAG Systems"],
      },
      {
        category: "Advanced Frontend",
        items: ["React Server Components", "Advanced Performance Optimization", "Web Assembly"],
      },
      {
        category: "DevOps & Cloud",
        items: ["AWS", "CI/CD Pipelines", "Infrastructure as Code"],
      },
    ],
    mindset:
      "I believe in continuous learning. Every project teaches me something new, and I'm committed to mastering both breadth and depth in modern web development.",
  },

  // Navigation and footer
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Learning", href: "#learning" },
    { label: "Contact", href: "#contact" },
  ],

  // Social links and contact
  social: {
    phone: "+63 906 395 1218",
    email: "rxboyboy@gmail.com",
    github: "https://github.com/RosBoyboy",
    facebook: "https://www.facebook.com/share/185QR6NPDT/",
    twitter: "https://twitter.com/RosBoyboy",
  },

  // Footer
  footer: {
    tagline: "Crafted with care and code ✨",
    year: new Date().getFullYear(),
  },
};

/**
 * Helper function to get a single project by ID
 */
export const getProjectById = (id: number) => {
  return portfolioContent.projects.find((project) => project.id === id);
};

/**
 * Helper function to get learning category
 */
export const getLearningByCategory = (category: string) => {
  return portfolioContent.learning.technologies.find(
    (tech) => tech.category === category
  );
};
