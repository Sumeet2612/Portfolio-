import resumeUrl from '../Sumeet_SDE_Resume.pdf';

export const portfolioData = {
  personal: {
    name: "Sumeet Kumar Raj",
    role: "Software Developer",
    statusLine: "Open to Software Engineering / Frontend / Full-Stack opportunities",
    tagline: "I build practical web applications with React and JavaScript, while strengthening my foundations in data structures, backend development, and software engineering.",
    aboutBio: [
      "I'm a software developer focused on building practical web applications and improving my problem-solving skills. My current work is centered around JavaScript, React, APIs and modern frontend development, while I'm gradually expanding into backend and full-stack engineering."
    ],
    currentlyFocusingOn: [
      "React & frontend engineering",
      "Data Structures & Algorithms",
      "Backend development",
      "Building practical projects"
    ],
    location: "India",
    email: "sumeetkumarraj2612@gmail.com",
    resumeUrl,
    contactFormEndpoint: "", // Configurable endpoint (Formspree / EmailJS)
  },
  social: {
    github: "https://github.com/Sumeet2612",
    linkedin: "https://www.linkedin.com/in/sumeet-kumar-raj-d7b8/",
    leetcode: "https://leetcode.com/u/Sumeet_1226/",
    leetcodeHandle: "Sumeet_1226",
    email: "mailto:sumeetkumarraj2612@gmail.com"
  },
  skills: [
    {
      category: "Languages",
      skills: ["C++", "JavaScript", "HTML", "CSS"]
    },
    {
      category: "Frontend",
      skills: ["React", "Tailwind CSS", "Vite"]
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "REST APIs", "Vercel"]
    },
    {
      category: "CS Fundamentals",
      skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems"]
    }
  ],
  projects: [
    {
      id: "price-craft",
      title: "Price Craft (ShopCart)",
      subtitle: "Rules-based e-commerce discount engine",
      summary: "A React-based shopping cart focused on realistic pricing and discount logic.",
      description: "A React shopping cart where discount rules behave like a real checkout system — including BOGO offers, category restrictions, minimum spend requirements and coupon precedence.",
      tags: ["React", "Context API", "useReducer", "Tailwind CSS", "Vite"],
      highlights: [
        "BOGO discounts",
        "Coupon validation",
        "Minimum cart requirements",
        "Non-stackable discounts",
        "LocalStorage persistence"
      ],
      github: "https://github.com/Sumeet2612/Price-Craft",
      demo: "https://price-craft-navy.vercel.app/",
      featured: true
    },
    {
      id: "room-sync",
      title: "Room Sync",
      subtitle: "Modern Hotel & Stay Reservation Platform",
      summary: "A responsive hotel booking application designed to streamline stay discovery and filtering.",
      description: "A responsive hotel booking application designed to streamline stay discovery, destination filtering, room feature comparison, and user reservation management.",
      tags: ["React", "Vite", "Component CSS", "JavaScript"],
      highlights: [
        "Segmented search bar for destination & date selection",
        "Featured stays hero view with star ratings & amenity badges",
        "My Bookings view for tracking active & past reservations"
      ],
      github: "https://github.com/Sumeet2612/Room-Sync",
      demo: "https://room-sync-delta.vercel.app/",
      featured: false
    },
    {
      id: "instagram-stories-feature",
      title: "24hr Instagram Stories Feature",
      subtitle: "Ephemeral Content Engine & Progress Tracker",
      summary: "A client-side social media story component modeling 24-hour content expiration.",
      description: "A client-side social media story component modeling 24-hour content expiration, auto-playing segment progress bars, and offline-first state persistence.",
      tags: ["React", "Vite", "JavaScript ES6+", "LocalStorage"],
      highlights: [
        "Automatic 24-hour expiration lifecycle with client cleanup",
        "Auto-play progress bar timing with tap navigation",
        "LocalStorage state hydration for offline persistence"
      ],
      github: "https://github.com/Sumeet2612/instagram-stories-feature",
      demo: "https://stories-feature-steel.vercel.app/",
      featured: false
    }
  ],
  achievements: [
    {
      id: "sih-2025",
      title: "Smart India Hackathon 2025",
      award: "Runner-Up — Hardware Track",
      category: "National-level Hackathon · 2025",
      project: "Stealth Coating / Stealth Drone",
      description: "Worked as part of a team on a research-driven stealth coating / UAV concept, contributing to technical research, modelling and system integration.",
      highlights: [
        "National-level hackathon competition",
        "Runner-Up in Hardware Track (2025)",
        "Contributed to stealth coating and UAV concept development",
        "Technical research, modeling, and system integration"
      ]
    }
  ],
  codingProfiles: {
    github: {
      username: "Sumeet2612",
      url: "https://github.com/Sumeet2612",
      tagline: "Open-source repositories, project commits, and frontend codebases."
    },
    leetcode: {
      username: "Sumeet_1226",
      url: "https://leetcode.com/u/Sumeet_1226/",
      tagline: "Regular problem solving in Data Structures & Algorithms."
    }
  }
};

