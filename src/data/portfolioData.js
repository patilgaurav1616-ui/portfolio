export const resumeData = {
  personal: {
    name: "Gaurav Patil",
    firstName: "GAURAV",
    lastName: "PATIL.",
    title: "AI Developer | Full Stack Developer | Data Analytics Enthusiast",
    headlineLine1: "Turning Ideas Into",
    headlineLine2: "Intelligent Digital Experiences.",
    taglineRight1: "Building scalable solutions",
    taglineRight2: "with AI, Data and Code.",
    educationTag: "B.Tech Computer Engineering\nMPSTME, NMIMS University\n| 2023 – 2027",
    email: "gaurav.patil406@nmims.in",
    phone: "+91 8263842032",
    dob: "16/09/2005",
    location: "Shirpur & Mumbai, Maharashtra, India",
    status: "Available for new opportunities",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  
  about: {
    lead: "Computer Engineering undergraduate passionate about the convergence of Artificial Intelligence, full-stack web architectures, and actionable data analytics.",
    bio: "Currently pursuing B.Tech in Computer Engineering (Batch 2023–2027) at Mukesh Patel School of Technology Management & Engineering (MPSTME), NMIMS University. My technical foundation spans building AI-powered text-to-SQL assistants with RAG and LangChain, engineering predictive consumer behavior models, and developing full-stack MERN platforms integrated with Google Gemini AI. Driven by clean code, architectural simplicity, and high-impact solutions.",
    community: "Beyond software development, I actively dedicate time to community initiatives at Matimand Mulanche Balgruh, Shirpur, conducting creative computational and interactive learning workshops for specially-abled children.",
    stats: [
      { label: "B.Tech Batch", value: "2023–2027" },
      { label: "CGPA", value: "2.70 / 4.0" },
      { label: "Core Projects", value: "3+ Flagship" },
      { label: "Certifications", value: "7 Verified" },
    ]
  },

  projects: [
    {
      id: "querymind",
      title: "QueryMind – Text-to-SQL System",
      subtitle: "AI-Powered Natural Language Database Assistant",
      category: "AI & Generative AI",
      tags: ["Python", "FastAPI", "LangChain", "LLMs", "RAG", "SQLite", "ChromaDB", "Streamlit"],
      description: "An AI-powered Text-to-SQL assistant that seamlessly translates natural language questions into accurate SQL queries and executes safe database retrieval in real-time.",
      highlights: [
        "Implemented Retrieval-Augmented Generation (RAG) using LangChain, LLMs, dense vector embeddings, and ChromaDB to extract exact schema context for higher SQL accuracy.",
        "Built modular microservice backend with FastAPI, SQLite, and Streamlit frontend.",
        "Integrated strict SQL query validation, query sanitization, and read-only execution modes for zero risk of accidental schema mutations."
      ],
      featured: true,
      metrics: "Sub-second schema lookup & safe query validation"
    },
    {
      id: "retail-analytics",
      title: "Retail Consumer Behavior Analysis",
      subtitle: "End-to-End Data Analytics & BI Pipeline",
      category: "Data Analytics & BI",
      tags: ["Python", "SQL", "Pandas", "NumPy", "Power BI", "Matplotlib", "Data Cleaning"],
      description: "A comprehensive business intelligence pipeline analyzing retail transaction logs to discover consumer buying patterns, churn indicators, and market opportunities.",
      highlights: [
        "Analyzed multi-dimensional customer purchasing patterns using Python and SQL to uncover seasonality, basket affinity, and revenue trends.",
        "Engineered robust data cleaning, deduplication, normalization, and RFM customer segmentation with Pandas and NumPy.",
        "Created an interactive executive Power BI dashboard with dynamic KPI drill-downs for executive decision-making and inventory optimization."
      ],
      featured: true,
      metrics: "Full RFM segmentation & interactive Power BI KPI dashboards"
    },
    {
      id: "skill-exchange",
      title: "AI-Powered Learning & Skill Exchange",
      subtitle: "Full-Stack P2P Platform with Google Gemini AI",
      category: "Full Stack & Web",
      tags: ["MERN Stack", "Google Gemini AI", "Node.js", "Express.js", "React.js", "MongoDB", "JWT", "Tailwind CSS"],
      description: "A full-stack peer-to-peer barter learning platform where users create professional profiles, list skills they can teach or learn, find matching peers, and propose skill swaps.",
      highlights: [
        "Architected an Express.js MVC backend with JWT authentication, bcrypt password hashing, protected REST endpoints, and Multer media uploads.",
        "Integrated Google Gemini AI for smart semantic skill categorization and personalized multi-week learning roadmap generation.",
        "Developed a modern, responsive React/Tailwind dashboard for managing skill proposals, trade acceptance, and progress tracking."
      ],
      featured: true,
      metrics: "Gemini AI automated learning roadmaps & real-time proposal tracking"
    }
  ],

  skills: {
    aiGenAI: [
      { name: "LLMs & Prompt Engineering", level: "Advanced" },
      { name: "Retrieval-Augmented Generation (RAG)", level: "Advanced" },
      { name: "LangChain", level: "Proficient" },
      { name: "Google Gemini API", level: "Proficient" },
      { name: "Embeddings & ChromaDB", level: "Proficient" }
    ],
    programming: [
      { name: "Python", level: "Advanced" },
      { name: "Java", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Proficient" }
    ],
    dataAnalytics: [
      { name: "Pandas & NumPy", level: "Advanced" },
      { name: "Power BI", level: "Proficient" },
      { name: "Data Cleaning & Preprocessing", level: "Advanced" },
      { name: "Customer Segmentation", level: "Proficient" },
      { name: "Matplotlib & Seaborn", level: "Proficient" },
      { name: "Microsoft Excel (Advanced)", level: "Proficient" },
      { name: "KPI Reporting", level: "Proficient" }
    ],
    fullstack: [
      { name: "React.js", level: "Advanced" },
      { name: "Node.js & Express.js", level: "Proficient" },
      { name: "FastAPI", level: "Proficient" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "Tailwind CSS & CSS3", level: "Advanced" },
      { name: "JWT Authentication", level: "Proficient" },
      { name: "Streamlit", level: "Proficient" }
    ],
    databasesTools: [
      { name: "SQLite", level: "Advanced" },
      { name: "MongoDB", level: "Proficient" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "VS Code & Postman", level: "Advanced" }
    ],
    coreCS: [
      { name: "Data Structures & Algorithms (DSA)", level: "Strong Foundation" },
      { name: "Database Management Systems (DBMS)", level: "Strong Foundation" },
      { name: "Object-Oriented Programming (OOP)", level: "Strong Foundation" },
      { name: "Computer Networks", level: "Strong Foundation" },
      { name: "Operating Systems", level: "Strong Foundation" }
    ],
    softSkills: [
      "Analytical Thinking",
      "Problem Solving",
      "Communication Skills",
      "Team Collaboration",
      "Critical Thinking"
    ]
  },

  education: [
    {
      institution: "MPSTME, NMIMS University",
      degree: "B.Tech in Computer Engineering",
      period: "2023 – 2027",
      score: "CGPA: 2.70 / 4.0",
      location: "Shirpur, Maharashtra",
      highlights: "Core focus on AI systems, scalable software engineering, cloud databases, and data structures."
    },
    {
      institution: "R.C Patel Junior College",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2021 – 2023",
      score: "85.33%",
      location: "Shirpur, Maharashtra",
      highlights: "Science stream with distinction in Mathematics and Physics."
    },
    {
      institution: "Dr. V.V. Randhe English Medium School",
      degree: "Secondary School Certificate (SSC)",
      period: "2020 – 2021",
      score: "88.33%",
      location: "Shirpur, Maharashtra",
      highlights: "Academic excellence award."
    }
  ],

  certifications: [
    {
      title: "Data Structures & Algorithms in Java",
      issuer: "Apna College",
      type: "Course Certificate"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Apna College",
      type: "Course Certificate"
    },
    {
      title: "Managing Projects with AI",
      issuer: "Coursera",
      type: "Professional Certification"
    },
    {
      title: "SQL (Basic)",
      issuer: "HackerRank",
      type: "Skill Verification"
    },
    {
      title: "Java (Basic)",
      issuer: "HackerRank",
      type: "Skill Verification"
    },
    {
      title: "Data Science Workshop",
      issuer: "IIT Bombay",
      type: "Technical Workshop"
    },
    {
      title: "Yugantar 2.0 SIH 2025",
      issuer: "Smart India Hackathon",
      type: "Participation Certificate"
    }
  ],

  achievements: [
    {
      title: "Smart India Hackathon (SIH) – College Level",
      role: "Participant",
      organization: "MPSTME, NMIMS University, Shirpur",
      description: "Collaborated in an intensive hackathon sprint designing innovative AI-driven software solutions for civic and technical challenges."
    },
    {
      title: "Community Service & Educational Outreach",
      role: "Volunteer & Mentor",
      organization: "Matimand Mulanche Balgruh, Shirpur",
      description: "Supporting students with special needs through community service, conducting creative learning sessions, and fostering computational thinking."
    }
  ]
};
