import {
    Code2,
    Brain,
    Server,
    Shield,
    Database,
    Zap,
    Cloud
} from 'lucide-react';

export const SKILLS_CATEGORIES = [
    {
        title: "Dev Operations",
        items: ["Git", "Docker", "Kubernetes", "AWS", "CI/CD", "Nginx", "GCP", "Apache", "Bash", "Linux", "Prometheus", "Redis"],
        icon: Server,
        color: "#6366f1",
        direction: 'left' as const
    },
    {
        title: "Full Stack Development",
        items: ["ReactJS", "NextJS", "TypeScript", "NodeJS", "ExpressJS", "Tailwind CSS", "Framer Motion", "Python", "Flask", "JS", "HTML", "CSS", "Postman", "Puppeteer"],
        icon: Code2,
        color: "#22d3ee",
        direction: 'right' as const
    },
    {
        title: "AI Tools",
        items: ["Copilot", "Claude", "Gemini", "Groq", "n8n", "Firebase Studio", "OpenAI"],
        icon: Brain,
        color: "#10b981",
        direction: 'left' as const
    },
    {
        title: "Databases",
        items: ["Neo4j", "MongoDB", "PostgreSQL", "SQL", "Appwrite", "Drizzle ORM"],
        icon: Database,
        color: "#ec4899",
        direction: 'right' as const
    }
];

export const PROJECTS = [
    {
        id: "SITREP_01/WEB",
        category: "Interface Layer",
        type: "WEB",
        title: "IP Tracker",
        description: "Python Flask application for real-time visitor insight, featuring IP detection, User-Agent parsing, and glassmorphic analysis results.",
        tech: ["PYTHON", "FLASK", "JAVASCRIPT", "GLASSMORPHISM"],
        accent: "#22d3ee",
        rgb: "34, 211, 238",
        image: "https://res.cloudinary.com/dfzqhhywm/image/upload/v1746533363/Screenshot_2025-04-06_211536_dsu9f0.png",
        status: "ACTIVE",
        github: "https://github.com/mehtahrishi/ip-tracker",
        webapp: "https://ip-tracker-hkz6.onrender.com/"
    },
    {
        id: "SITREP_02/ML",
        category: "Neural Core",
        type: "AIML",
        title: "Movie Recommendation",
        description: "Full-stack AI app delivering personalized suggestions via NLP & ML. Integrated Scikit-learn and TensorFlow for recommendation logic.",
        tech: ["SCIKIT-LEARN", "TENSORFLOW", "FLASK", "NLP"],
        accent: "#a855f7",
        rgb: "168, 85, 247",
        image: "https://res.cloudinary.com/dfzqhhywm/image/upload/v1746533364/ss_1_uniizu.png",
        status: "OPTIMIZED",
        github: "https://github.com/mehtahrishi/Movie_Recommendation_System",
        webapp: "https://movie-recommendation-system-twuz.onrender.com/"
    },
    {
        id: "SITREP_03/WEB",
        category: "Interface Layer",
        type: "WEB",
        title: "Student Performance",
        description: "Comprehensive educator dashboard using MongoDB for scalable record management and intuitive progress visualization.",
        tech: ["MONGODB", "FLASK", "PYMONGO", "RENDER"],
        accent: "#22d3ee",
        rgb: "34, 211, 238",
        image: "https://res.cloudinary.com/dfzqhhywm/image/upload/v1746533365/image_1_z3t8hz.png",
        status: "STABLE",
        github: "https://github.com/mehtahrishi/Student-Performance-Tracker",
        webapp: "https://student-performance-tracker-qlac.onrender.com/"
    },
    {
        id: "SITREP_04/WEB",
        category: "Interface Layer",
        type: "WEB",
        title: "Task Manager",
        description: "Advanced task engine leveraging Neo4j graph database for efficient relationship mapping and secure Flask-Login auth.",
        tech: ["NEO4J", "FLASK-LOGIN", "PYTHON", "UI/UX"],
        accent: "#22d3ee",
        rgb: "34, 211, 238",
        image: "https://res.cloudinary.com/dfzqhhywm/image/upload/v1746533364/Screenshot_2025-04-06_025755_nl7vzd.png",
        status: "SECURED",
        github: "https://github.com/mehtahrishi/Task-App",
        webapp: "https://task-app-hpe3.onrender.com"
    },
    {
        id: "SITREP_05/WEB",
        category: "Interface Layer",
        type: "WEB",
        title: "QR Generator",
        description: "High-speed link-to-code conversion tool engineered for reliability and instant scannable visual production.",
        tech: ["PYTHON", "FLASK", "QR-ENGINE", "RENDER"],
        accent: "#22d3ee",
        rgb: "34, 211, 238",
        image: "https://res.cloudinary.com/dfzqhhywm/image/upload/v1746533366/image_4_nefrzu.png",
        status: "LIVE",
        github: "https://github.com/mehtahrishi/QR--Generator",
        webapp: "https://qr-generator-512f.onrender.com/"
    },
    {
        id: "SITREP_06/AI",
        category: "Neural Core",
        type: "AIML",
        title: "AI CoAgent",
        description: "Offline-ready coding companion integrating the Groq API for near-instant natural language code generation and debugging.",
        tech: ["GROQ-API", "LLM", "FLASK", "PYTHON"],
        accent: "#a855f7",
        rgb: "168, 85, 247",
        image: "https://res.cloudinary.com/dfzqhhywm/image/upload/v1746533365/image_3_vajhh0.png",
        status: "SYNCING",
        github: "https://github.com/mehtahrishi/CoAgent",
        webapp: "https://coagent.onrender.com/"
    },
    {
        id: "SITREP_07/ML",
        category: "Neural Core",
        type: "AIML",
        title: "Spam Detector",
        description: "High-accuracy classification system utilizing Deep Learning algorithms to filter communication channels in real-time.",
        tech: ["TENSORFLOW", "DL", "SCIKIT-LEARN", "ML"],
        accent: "#a855f7",
        rgb: "168, 85, 247",
        image: "https://res.cloudinary.com/dfzqhhywm/image/upload/v1746533366/Screenshot_2025-05-02_031141_r771s0.png",
        status: "ACTIVE",
        github: "https://github.com/mehtahrishi/Spam-Detector",
        webapp: "https://spam-detector-myh7.onrender.com/"
    },
    {
        id: "SITREP_08/AI",
        category: "Neural Core",
        type: "AIML",
        title: "Nami Voice Assistant",
        description: "Siri-like voice interface with speech synthesis and rule-based NLU, featuring OpenRouter intelligent fallback.",
        tech: ["SPEECH-API", "OPENROUTER", "PYTHON", "FLASK"],
        accent: "#a855f7",
        rgb: "168, 85, 247",
        image: "https://res.cloudinary.com/dfzqhhywm/image/upload/v1746532838/image_nxnjh4.png",
        status: "ONLINE",
        github: "https://github.com/mehtahrishi/Voice-Assistant-App",
        webapp: "https://voice-assistant-app-rlyk.onrender.com/"
    },
    {
        id: "SITREP_09/WEB",
        category: "Interface Layer",
        type: "WEB",
        title: "Alien Simulator",
        description: "Retro retro-styled interview interface with CRT effects, ASCII art, and immersive simulated technical challenges.",
        tech: ["ASCII-ART", "CRT-EFFECT", "FLASK", "JS"],
        accent: "#22d3ee",
        rgb: "34, 211, 238",
        image: "https://res.cloudinary.com/dfzqhhywm/image/upload/v1746532860/Screenshot_2025-05-06_170533_kc6hqf.png",
        status: "RETRO_LINK",
        github: "https://github.com/mehtahrishi/Alien-Interview-Simulator",
        webapp: "https://alien-interview-simulator.onrender.com/"
    },
    {
        id: "SITREP_10/AI",
        category: "Neural Core",
        type: "AIML",
        title: "Suho PDF Reader",
        description: "Inteligent analysis tool using Llama 3 for local-first document summarization and metadata extraction.",
        tech: ["LLAMA-3", "GROQ", "PYTHON", "FLASK"],
        accent: "#a855f7",
        rgb: "168, 85, 247",
        image: "https://res.cloudinary.com/dfzqhhywm/image/upload/v1747428966/Screenshot_2025-05-17_014519_ka3rpf.png",
        status: "READY",
        github: "https://github.com/mehtahrishi/Suho-Pdf-Reader",
        webapp: "https://suho-pdf-reader.onrender.com/"
    },
    {
        id: "SITREP_11/AI",
        category: "Neural Core",
        type: "AIML",
        title: "Curr AI Agent",
        description: "Interactive PDF/PPT processing engine powered by Google Gemini, featuring secure Redis session management.",
        tech: ["GEMINI-API", "REDIS", "FLASK", "CLOUDINARY"],
        accent: "#a855f7",
        rgb: "168, 85, 247",
        image: "https://res.cloudinary.com/dfzqhhywm/image/upload/v1747774149/Screenshot_2025-05-21_021516_gjbvil.png",
        status: "SYNCED",
        github: "https://github.com/mehtahrishi/Curr_Agent",
        webapp: "https://curr-agent.onrender.com/"
    },
    {
        id: "SITREP_12/AI",
        category: "Neural Core",
        type: "AIML",
        title: "Enum AI Agent",
        description: "Deep-scraping analysis engine for dynamic JS-rendered sites, providing NLU insights via high-fidelity snapshots.",
        tech: ["GEMINI-SDK", "MONGODB", "PYTHON", "NLU"],
        accent: "#a855f7",
        rgb: "168, 85, 247",
        image: "https://res.cloudinary.com/dfzqhhywm/image/upload/v1748147659/Screenshot_2025-05-25_090418_xbhmye.png",
        status: "PARSING",
        github: "https://github.com/mehtahrishi/Enum",
        webapp: "https://enum-2c0t.onrender.com/"
    },
    {
        id: "SITREP_13/GAME",
        category: "Interface Layer",
        type: "WEB",
        title: "Emoji Rumble",
        description: "High-performance bullet hell game utilizing Canvas API and Flask backend for global leaderboard persistence.",
        tech: ["CANVAS-API", "MONGODB", "FLASK", "JS"],
        accent: "#22d3ee",
        rgb: "34, 211, 238",
        image: "https://res.cloudinary.com/dfzqhhywm/image/upload/v1748982694/Screenshot_2025-06-04_020031_zsrtbj.png",
        status: "RUNNING",
        github: "https://github.com/mehtahrishi/Emoji-Rumble",
        webapp: "https://emoji-rumble.onrender.com/"
    },
    {
        id: "SITREP_14/WEB",
        category: "Interface Layer",
        type: "WEB",
        title: "Skill-Surge",
        description: "Peer-to-peer skill exchange platform built with Next.js and Firebase, featuring AI-driven expert matchmaking.",
        tech: ["NEXT.JS", "FIREBASE", "REACT", "VERCEL"],
        accent: "#22d3ee",
        rgb: "34, 211, 238",
        image: "https://res.cloudinary.com/dfzqhhywm/image/upload/v1750284518/Screenshot_2025-06-10_154322_orb6tj.png",
        status: "LIVE",
        github: "https://github.com/mehtahrishi/Skills_Surge",
        webapp: "https://skills-surge.vercel.app/"
    },
    {
        id: "SITREP_15/AI",
        category: "Neural Core",
        type: "AIML",
        title: "GlassBot",
        description: "Minimalist NLP chatbot featuring tranquil glassmorphic UI and smooth conversational response animations.",
        tech: ["NLP", "FLASK", "UI/UX", "PYTHON"],
        accent: "#a855f7",
        rgb: "168, 85, 247",
        image: "https://res.cloudinary.com/dfzqhhywm/image/upload/v1751213172/Screenshot_2025-06-29_213550_fzf6gp.png",
        status: "STABLE",
        github: "https://github.com/mehtahrishi/Codotech/tree/main/Chatbot-Using-NLP",
        webapp: "https://codotech.onrender.com/"
    },
    {
        id: "SITREP_16/ML",
        category: "Neural Core",
        type: "AIML",
        title: "Music System",
        description: "ML-powered music player that crafts adaptive playlists based on algorithmic listening habit analysis.",
        tech: ["ML", "PANDAS", "PYTHON", "NUMPY"],
        accent: "#a855f7",
        rgb: "168, 85, 247",
        image: "https://res.cloudinary.com/dfzqhhywm/image/upload/v1751204348/Screenshot_2025-06-28_165809_dfvbpd.png",
        status: "SYNCING",
        github: "https://github.com/mehtahrishi/Codotech/tree/main/Music-Player-App",
        webapp: "https://codotech-1.onrender.com/"
    },
    {
        id: "SITREP_17/SEC",
        category: "Interface Layer",
        type: "WEB",
        title: "PassGen Pro",
        description: "Secure cryptographic password engine with auto-refresh mechanism and one-click clipboard extraction.",
        tech: ["PYTHON", "FLASK", "SECURITY", "RENDER"],
        accent: "#22d3ee",
        rgb: "34, 211, 238",
        image: "https://res.cloudinary.com/dfzqhhywm/image/upload/v1751214170/Screenshot_2025-06-28_173255_x8dctu.png",
        status: "SECURED",
        github: "https://github.com/mehtahrishi/Codotech/tree/main/Random-Password-Generator",
        webapp: "https://codotech-2.onrender.com/"
    }
];

export const TACTICAL_AI_MESSAGES = [
    "Hmm, let me check.",
    "Okay, So He is a bachelor from University of Mumbai.",
    "Recent Passout of Batch 2025.",
    "Hrishi has a strong background in Java, Full Stack Development, and DevOps.",
    "Cool He has Certs to Prove in Gen AI, Gemini AI, ISO, Neo4j, Lyzr and many more.",
    "Target profile confirms Java & Full Stack proficiency.",
    "Scanning AI/ML blueprints... neural links stable.",
    "Cybersecurity protocols detected in experience log.",
    "Mission-ready status: Highly Recommended for the objective."
];

export const DATA_CORES = [
    {
        id: "CORE_ALPHA",
        name: "AIML Engineering",
        key: "AIML",
        icon: Brain,
        color: "#a855f7",
        rgb: "168, 85, 247",
        image: "https://res.cloudinary.com/dfzqhhywm/image/upload/v1746533363/Screenshot_2025-04-06_211536_dsu9f0.png",
        status: "NEURAL_LINK_READY",
        pdfUrl: "/assets/Hrishi_Mehta_AI_ML_DS_Resume (1).pdf"
    },
    {
        id: "CORE_BETA",
        name: "Full Stack Dev",
        key: "WEB",
        icon: Code2,
        color: "#22d3ee",
        rgb: "34, 211, 238",
        image: "https://res.cloudinary.com/dfzqhhywm/image/upload/v1746533364/ss_1_uniizu.png",
        status: "UPLINK_STABLE",
        pdfUrl: "/assets/Hrishi_Mehta_SD_SE_Resume.pdf"
    }
];

export const EXPERIENCES = [
    {
        company: "SDAC",
        role: "Java Software Developer Intern",
        period: "Jul 2024 – Feb 2025",
        desc: "Developed backend services in Java with MySQL and REST APIs. Utilized Apache Tomcat and JSP for server-side programming and supported front-end development."
    },
    {
        company: "Redynox, VaultOfCodes & TechnoHacks",
        role: "Cybersecurity & Ethical Hacking Intern",
        period: "Sep 2024 – July 2025",
        desc: "Performed penetration testing and vulnerability assessments using Nmap, Burp Suite, and SQLMap. Secured web applications and cloud infrastructure against potential exploits."
    },
    {
        company: "INeuBytes & Edunet Foundation",
        role: "Artificial Intelligence Intern",
        period: "Mar 2025 – Apr 2025",
        desc: "Built AI-powered solutions using LLMs, RAG pipelines, and NLP techniques. Utilized Torch and TensorFlow for AI model development and data analysis."
    },
    {
        company: "Codotech & VaultOfCodes",
        role: "Python Developer Intern",
        period: "Mar 2025 – Jun 2025",
        desc: "Developed full-stack web applications using Flask and Django. Implemented Machine Learning models and AI Agents using Pandas, NumPy, and NLTK integrated with responsive front-ends."
    },
    {
        company: "Freelancer",
        role: "Web Developer",
        period: "July 2025 – Present",
        desc: "Engineered end-to-end, high-availability full-stack applications and AI automation agents. Deployed cloud-native solutions across AWS, Azure, and GCP using Docker, Kubernetes, and CI/CD pipelines."
    }
];

export const CERTS = [
    { name: "ISO/IEC 20000 IT Service Management Associate", issuer: "Skillfront", type: "Security", link: "https://www.skillfront.com/Badges/72801169455960" },
    { name: "ISO/IEC 27001 Information Security Associate", issuer: "Skillfront", type: "Security", link: "https://www.skillfront.com/Badges/82209813099548" },
    { name: "Gemini Certified University Student", issuer: "Google", type: "AI", link: "https://edu.google.accredible.com/d7f409c5-fc60-442b-b3c1-6f81f96a9817#acc.UcLyBKMz" },
    { name: "Neo4j Certified Professional", issuer: "Neo4j GraphAcademy", type: "Database", link: "https://graphacademy.neo4j.com/c/c1b4933d-7e22-40ac-89cb-1e83eea6c0d6/" },
    { name: "ACCELQ Automation Engineer", issuer: "ACCELQ", type: "Automation", link: "https://my.certifyme.online/static/fileStore/img/255/689/341533_badge_914674.png" },
    { name: "Postman API Fundamentals", issuer: "Postman", type: "API", link: "https://badgr.com/public/assertions/YzERrR-xSS2Mg48dhHqmug?identity__email=mehtahrishi45%40gmail.com" },
    { name: "AWS Databricks Platform Architect", issuer: "Databricks", type: "Cloud", link: "https://credentials.databricks.com/12023c14-6cd8-49f8-9ad5-48ba4fcb655d" },
    { name: "Google Cloud Technical Series", issuer: "Google Cloud", type: "Cloud", link: "https://www.credential.net/ee587f18-d801-43e3-8ec4-435b98ede131#acc.aASqzGlu" },
    { name: "Vaadin 24 Certified Developer", issuer: "Vaadin", type: "Dev", link: "https://vaadin.com/learn/certificate/31cd44a2-5d00-4c67-b958-b94752574196" }
];

export const VOLUNTEER_XP = [
    {
        id: "LOG-AWS-01",
        org: "AWS Community",
        role: "Community Builder",
        period: "2025 – Present",
        priority: "MEDIUM",
        status: "ACTIVE",
        desc: "Drive community engagement by creating in-depth technical content (blog posts, videos, and tutorials) focused on AWS cloud technologies."
    },
    {
        id: "LOG-GCP-02",
        org: "Google Cloud Skills Boost",
        role: "Innovator",
        period: "2025 – Present",
        priority: "CRITICAL",
        status: "ACTIVE",
        desc: "Focusing on personal growth through innovative problem-solving, learning cutting-edge cloud technologies, and fostering tech community engagement."
    },
    {
        id: "LOG-MU-03",
        org: "DLLE, Mumbai University",
        role: "Member – Dept. of Lifelong Learning",
        period: "2024 – 2025",
        priority: "MEDIUM",
        status: "COMPLETED",
        desc: "Supporting lifelong learning programs by mentoring others and advancing educational accessibility and community development."
    }
];

export const CONTACT_OPTIONS = [
    { label: "GMAIL (Official)", url: "mailto:mehtahrishi45@gmail.com?subject=Mission%20Inquiry&body=Greetings%20Hrishi,%0D%0AI%20am%20reaching%20out%20to%20discuss..." },
    { label: "LINKEDIN (Professional)", url: "https://www.linkedin.com/in/hrishi-mehta-889732256/" },
    { label: "GITHUB (Engine)", url: "https://github.com/mehtahrishi" }
];

export const NAV_OPTIONS = [
    { label: "SUMMARY", targetId: "about" },
    { label: "SKILLS", targetId: "skills" },
    { label: "PROJECTS", targetId: "projects" },
    { label: "EXPERIENCE", targetId: "experience" },
    { label: "VOLUNTEER", targetId: "volunteer" },
    { label: "EDUCATION", targetId: "education" },
    { label: "CERTIFICATIONS", targetId: "certs" }
];

export const GAME_SECRETS = [
    "Nice game! By the way, Hrishi is a Google Gen AI Participant and Gemini Certified.",
    "Good job! Did you know Hrishi has 9+ certifications in ISO Security, Neo4j, AWS, and more?",
    "Well played! Hrishi is a Lyzr AI Certified Builder crafting intelligent automation.",
    "Great effort! Hrishi is a Google Cloud Skills Boost Innovator solving cloud-native problems.",
    "Impressive! Hrishi is a Neo4j Certified Professional and graph database architect.",
    "You survived! Fun fact: Hrishi is an AWS Databricks Platform Architect scaling data in the cloud."
];

export const getCertIcon = (type: string) => {
    switch (type) {
        case 'Security': return Shield;
        case 'AI': return Brain;
        case 'Database': return Database;
        case 'Automation': return Zap;
        case 'API': return Code2;
        case 'Cloud': return Cloud;
        default: return Code2;
    }
};
