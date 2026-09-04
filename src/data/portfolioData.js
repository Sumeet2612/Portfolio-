export const portfolioData = {
  personal: {
    name: "Sumeet Kumar Raj",
    role: "Software Developer",
    statusBadge: "Open to SDE & Full-Stack Opportunities",
    tagline: "I build responsive and practical web applications using JavaScript, React, and modern web technologies. I enjoy solving problems, working with APIs, and turning ideas into clean, functional digital experiences.",
    aboutHeading: "Turning Ideas into Working Software",
    aboutBio: [
      "I'm a software developer focused on building practical web applications and improving my problem-solving skills. I work primarily with JavaScript, React, HTML, CSS, and modern development tools, while continuously expanding into backend development and full-stack engineering.",
      "I enjoy turning ideas into functional products — from building responsive interfaces and integrating APIs to managing application state and working with data. My approach is centered around writing clean, reusable code and understanding how the pieces of a system work together.",
      "Alongside development, I regularly practice Data Structures & Algorithms and build projects to strengthen my engineering fundamentals. I'm focused on becoming a well-rounded software developer who can contribute across the frontend, backend, and problem-solving aspects of a product."
    ],
    currentObjective: "Actively seeking Software Developer, SDE, Frontend, and Full-Stack internships where I can contribute to real-world projects, collaborate with experienced developers, and continue growing my technical skills.",
    location: "India",
    email: "sumeetkumarraj2612@gmail.com",
    contactFormEndpoint: "", // Configurable endpoint (Formspree / EmailJS)
  },
  approach: [
    {
      title: "User-Focused Interfaces",
      description: "Building responsive and intuitive interfaces with attention to usability, accessibility, and consistent experiences across devices.",
      icon: "Layout"
    },
    {
      title: "Clean & Maintainable Code",
      description: "Breaking problems into reusable components and writing code that is structured, readable, and easy to improve.",
      icon: "Code"
    },
    {
      title: "APIs & Real-World Integration",
      description: "Connecting applications with APIs and external services to build functional, interactive, and data-driven experiences.",
      icon: "Globe"
    },
    {
      title: "Problem Solving",
      description: "Strengthening my Data Structures & Algorithms fundamentals through regular practice and applying problem-solving concepts to real projects.",
      icon: "Cpu"
    }
  ],
  social: {
    github: "https://github.com/Sumeet2612",
    linkedin: "https://www.linkedin.com/in/sumeet-kumar-raj-d7b8/",
    leetcode: "https://leetcode.com/u/Sumeet2612/",
    leetcodeHandle: "Sumeet2612",
    email: "mailto:sumeetkumarraj2612@gmail.com"
  },
  skills: [
    {
      category: "Languages",
      skills: [
        { name: "C++", icon: "Code2" },
        { name: "JavaScript (ES6+)", icon: "FileCode2" },
        { name: "HTML5 & CSS3", icon: "Layout" }
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", icon: "Atom" },
        { name: "Tailwind CSS", icon: "Palette" },
        { name: "Vite", icon: "Zap" },
      ]
    },
    {
      category: "Tools & Ecosystem",
      skills: [
        { name: "Git & GitHub", icon: "GitBranch" },
        { name: "REST APIs", icon: "Globe" },
        { name: "Vercel", icon: "Cloud" }
      ]
    },
    {
      category: "CS Fundamentals",
      skills: [
        { name: "Data Structures & Algorithms", icon: "Binary" },
        { name: "Object-Oriented Programming", icon: "Layers" },
        { name: "Database Management System", icon: "MousePointer" },
        { name: "Opearting", icon: "Workflow" }
      ]
    }
  ],
  projects: [
    {
      id: "price-craft",
      category: "E-COMMERCE & STATE ENGINE",
      title: "Price Craft (ShopCart)",
      subtitle: "Rules-Based E-Commerce Discount & Cart Engine",
      description: "An interactive e-commerce cart application focused on implementing realistic discount and coupon rules, including percentage discounts, flat-rate discounts, BOGO offers, minimum cart requirements, and non-stackable coupons.",
      problem: "Most basic shopping-cart implementations focus mainly on adding products and calculating totals. Price Craft explores more realistic pricing logic involving coupon eligibility, discount precedence, cart thresholds, and automatic coupon validation.",
      solution: "Implemented discount logic as isolated, reusable functions and used React state management with useReducer and Context API to keep cart and coupon updates predictable and maintainable.",
      tags: ["React", "Vite", "Tailwind CSS", "Context API", "useReducer", "Lucide React"],
      highlights: [
        "Deterministic discount calculation",
        "Percentage discounts & flat-rate cuts",
        "BOGO discount rules & min-spend validation",
        "Category-based coupon restrictions",
        "Non-stackable coupon handling & auto invalidation",
        "LocalStorage persistence & Toast notifications"
      ],
      github: "https://github.com/Sumeet2612/Price-Craft",
      demo: "https://price-craft-navy.vercel.app/",
      featured: true,
      badge: "Featured Project"
    },
    {
      id: "room-sync",
      category: "RESERVATION & SEARCH UI",
      title: "Room Sync",
      subtitle: "Modern Hotel & Stay Reservation Platform",
      description: "A responsive hotel booking application designed to streamline stay discovery, destination filtering, room feature comparison, and user reservation management.",
      problem: "Booking interfaces often suffer from cluttered navigation and cumbersome search workflows.",
      solution: "Built a clean, segmented search bar component allowing users to filter by city, check-in/out dates, and guest count with instant grid updates.",
      tags: ["React", "Vite", "Component CSS", "ESLint", "JavaScript"],
      highlights: [
        "Segmented search bar for destination & date selection",
        "Featured stays hero view with star ratings & amenity badges",
        "Trending destination quick filters (Dubai, NY, London, etc.)",
        "My Bookings view for tracking active & past reservations"
      ],
      github: "https://github.com/Sumeet2612/Room-Sync",
      demo: "https://room-sync-delta.vercel.app/",
      featured: false,
      badge: "Web App"
    },
    {
      id: "instagram-stories-feature",
      category: "EPHEMERAL UI FEATURE",
      title: "24hr Instagram Stories Feature",
      subtitle: "Ephemeral Content Engine & Progress Tracker",
      description: "A client-side social media story component modeling 24-hour content expiration, auto-playing segment progress bars, and offline-first state persistence.",
      problem: "Handling ephemeral state lifecycle with automatic expiration timers and smooth continuous animation progress bars in React.",
      solution: "Implemented timestamp-based expiration logic that purges stories older than 24 hours while maintaining progress synchronization across story segments.",
      tags: ["React.js", "Vite", "JavaScript ES6+", "LocalStorage", "CSS3"],
      highlights: [
        "Automatic 24-hour expiration lifecycle with client-side cleanup",
        "Auto-play progress bar timing with tap/click segment navigation",
        "Visual gradient rings for read vs unread story states",
        "LocalStorage state hydration for offline persistence"
      ],
      github: "https://github.com/Sumeet2612/instagram-stories-feature",
      demo: "https://stories-feature-steel.vercel.app/",
      featured: false,
      badge: "Interactive Feature"
    }
  ],
  achievements: [
    {
      id: "sih-2025",
      title: "Smart India Hackathon 2025",
      award: "Runner-Up — Hardware Track",
      category: "NATIONAL LEVEL HACKATHON • 2025",
      project: "Stealth Coating / Stealth Drone",
      description: "Secured 2nd place in the Smart India Hackathon 2025 Hardware Track as part of a team working on a research-driven stealth coating and UAV concept, contributing to hardware-software integration and technical problem solving under competition deadlines.",
      highlights: [
        "National-level hackathon competition",
        "Contributed to stealth coating and UAV-related development",
        "Worked on technical research, modeling, and system integration",
        "Demonstrated teamwork, rapid problem solving, and execution under deadlines"
      ],
      year: "2025"
    }
  ],
  codingProfiles: {
    github: {
      username: "Sumeet2612",
      url: "https://github.com/Sumeet2612",
      tagline: "Active open-source contributions, frontend projects, and code repositories."
    },
    leetcode: {
      username: "Sumeet2612",
      url: "https://leetcode.com/u/Sumeet2612/",
      tagline: "Regular problem-solving practice in Data Structures, Algorithms, and Core Computer Science fundamentals."
    }
  }
};
