import { PersonalInfo, Skill, ExperienceItem, ProjectItem, EducationItem, CertificationItem, SocialLink, AchievementItem, TechStackItem, GalleryItem } from '../types';

export const personalInfo: PersonalInfo = {
  fullName: "Raymond A. Culas",
  title: "Information Technology Student",

  avatar: "/assets/profile.jpg",

  bio: "I’m an Information Technology student passionate about web and mobile application development, with experience building academic, freelance, and personal projects using modern technologies.",

  experience: "zero corporate experience but have hands-on experience in freelancing, academic projects, and personal applications",
  email: "raymondculas38@gmail.com",
  phone: "+639167711759",
  location: "Saguise Getafe, Bohol",
  resumeUrl: "#" // Triggers browser print-to-PDF
};

export const skillsData: Skill[] = [
  // Frontend
  { name: "TypeScript", level: 80, category: "Frontend Development" },
  { name: "JavaScript", level: 78, category: "Frontend Development" },
  { name: "React", level: 75, category: "Frontend Development" },
  { name: "Tailwind CSS", level: 77, category: "Frontend Development" },

  // Backend
  { name: "Express.js", level: 68, category: "Backend Development" },
  { name: "NestJS", level: 55, category: "Backend Development" },
  { name: "Python", level: 65, category: "Backend Development" },
  { name: "PHP", level: 70, category: "Backend Development" },

  // Mobile
  { name: "Flutter", level: 58, category: "Mobile Development" },

  // Database
  { name: "PostgreSQL", level: 72, category: "Database Management" },
  { name: "MySQL", level: 75, category: "Database Management" },
  { name: "MongoDB", level: 60, category: "Database Management" },
  { name: "Firebase", level: 68, category: "Database Management" },

  // DevOps
  { name: "Docker", level: 58, category: "DevOps" },

  // UI/UX & VCS
  { name: "Figma UI Design", level: 65, category: "UI/UX Design" },
  { name: "Git & GitHub", level: 80, category: "Version Control" }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp1",
    position: "First Line of Code",
    company: "Personal Journey",
    duration: "2023",
    description: [
      'WRITE THE FIRST LINE OF CODE System.out.print("HELLO BOLD");'
    ],
    type: "Personal",
    technologies: [
      "Java"
    ]
  },

  {
    id: "exp2",
    position: "Capstone Project Development",
    company: "Academic Project",
    duration: "2025 - 2026",
    image: "/assets/capstone_bg.jpg",
    description: [
      "Developed a GPS and Selfie-Based On-the-Job Training Monitoring System with overtime tracking and automated report generation.",
      "Implemented user authentication, attendance monitoring, messaging features, and report management modules.",
      "Designed and managed the database structure while ensuring accurate data recording and retrieval."
    ],
    type: "Academic",
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "XAMPP",
      "InfinityFree"
    ],
    demoLinks: [
      {
        role: "Student",
        email: "student1@gmail.com",
        password: "password",
        loginUrl: "https://bccojtattendance.infy.click/user_login.php"
      },
      {
        role: "Admin",
        email: "admin@gmail.com",
        password: "password",
        loginUrl: "https://bccojtattendance.infy.click/admin_login.php"
      }
    ]
  },

  {
    id: "exp3",
    position: "Mobile App Developer",
    company: "Personal Project",
    duration: "2025",
    description: [
      "Building a mobile app using Dart and Flutter called Expense Easy.",
      "Integrated Firebase as the database for storing and managing user data."
    ],
    type: "Personal",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase"
    ],
    video: "/assets/mobileapp.mp4"
  },

  {
    id: "exp4",
    position: "Machine Learning Engineer",
    company: "Academic Project",
    duration: "2026",
    description: [
      "Building a Machine Learning plant disease detection system in Python.",
      "Developing a model capable of detecting if a plant is normal, has rust, or has dust."
    ],
    type: "Academic",
    technologies: [
      "Python",
      "Machine Learning",
      "Jupyter Notebook"
    ],
    images: [
      "/assets/ml1.jpg",
      "/assets/ml2.jpg"
    ]
  },

  {
    id: "exp5",
    position: "Walang Magawa sa Buhay",
    company: "Personal Project",
    duration: "2026",
    description: [
      "A personal portfolio landing page built for fun and creative expression.",
      "Designed for desktop and laptop viewing."
    ],
    type: "Personal",
    technologies: [
      "TypeScript",
      "React",
      "Vite",
      "HTML",
      "Tailwind CSS"
    ],
    image: "/assets/walang_magawa.png",
    demoLinks: [
      {
        role: "Live Site",
        email: "No login required",
        password: "N/A",
        loginUrl: "https://culasportfolio.vercel.app/"
      }
    ]
  },

  {
    id: "exp6",
    position: "CVGM Enterprise POS System",
    company: "Freelance Project",
    duration: "2026",
    images: [
      "/assets/pos_system.jpg"
    ],
    description: [
      "Developed a Progressive Web App (PWA) Point of Sale system with multi-branch management.",
      "Features automated statement tracking, branch-specific inventory, and real-time SMS alerts via the Semaphore API."
    ],
    type: "Freelance",
    technologies: [
      "React",
      "TypeScript",
      "Express.js",
      "PWA",
      "Semaphore SMS API",
      "Tailwind CSS",
      "PostgreSQL"
    ]
  }
];

export const projectsData: ProjectItem[] = [
  // Beginner Projects
  {
    id: "p_beg_1",
    name: "Hello World Application",
    description: "An elegant interactive starter project showcasing modern developer profile landing elements, greeting configurations, and responsive UI foundations.",
    difficulty: "Beginner",
    type: "Personal Projects",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/dev/hello-world",
    demo: "#",
    status: "Completed",
    date: "Jan 2020",
    image: "/assets/project_demo.png"
  },
  {
    id: "p_beg_2",
    name: "Glassmorphic Calculator App",
    description: "A fully responsive calculator featuring premium glassmorphism layouts, dual dark/light styling, calculations history, and keyboard listener triggers.",
    difficulty: "Beginner",
    type: "Personal Projects",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com/dev/glass-calculator",
    demo: "#",
    status: "Completed",
    date: "Mar 2020",
    image: "/assets/project_demo.png"
  },
  {
    id: "p_beg_3",
    name: "Dynamic To-Do List Tracker",
    description: "Interactive task management utility supporting custom tags, priority sorting, statistics, search, and localStorage persistence.",
    difficulty: "Beginner",
    type: "Personal Projects",
    technologies: ["React", "CSS Modules"],
    github: "https://github.com/dev/todo-list",
    demo: "#",
    status: "Completed",
    date: "Jun 2020",
    image: "/assets/project_demo.png"
  },
  {
    id: "p_beg_4",
    name: "Real-Time Weather App",
    description: "Vibrant weather application integrating OpenWeather API to retrieve geographical current conditions, hourly forecasts, and responsive visual alerts.",
    difficulty: "Beginner",
    type: "Personal Projects",
    technologies: ["JavaScript", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com/dev/weather-app",
    demo: "#",
    status: "Completed",
    date: "Oct 2020",
    image: "/assets/project_demo.png"
  },
  {
    id: "p_beg_5",
    name: "Secure Portal Login Form",
    description: "Frontend login portal featuring client-side password strength rules, error tracking, glass visual templates, and loading animation transitions.",
    difficulty: "Beginner",
    type: "Personal Projects",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/dev/login-form",
    demo: "#",
    status: "Completed",
    date: "Nov 2020",
    image: "/assets/project_demo.png"
  },
  {
    id: "p_beg_6",
    name: "Static Portfolio Website",
    description: "Initial personal developer webpage built using standard responsive styling, flexible grid systems, contact mailto links, and hover micro-animations.",
    difficulty: "Beginner",
    type: "Personal Projects",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/dev/static-portfolio",
    demo: "#",
    status: "Completed",
    date: "Dec 2020",
    image: "/assets/project_demo.png"
  },

  // Intermediate Projects
  {
    id: "p_int_1",
    name: "Vibrant E-Commerce Webstore",
    description: "Full e-commerce showcase application with dynamic product catalogs, search queries, filter toggles, product cart management, and mock Stripe checkouts.",
    difficulty: "Intermediate",
    type: "Freelance",
    technologies: ["React", "Tailwind CSS", "Context API", "Stripe SDK"],
    github: "https://github.com/dev/vibrant-cart",
    demo: "#",
    status: "Completed",
    date: "Jun 2022",
    image: "/assets/project_demo.png"
  },
  {
    id: "p_int_2",
    name: "Inventory Management System",
    description: "Professional database dashboard to track stocks, manage vendors, generate low-stock reports, and map bulk product CSV import processing.",
    difficulty: "Intermediate",
    type: "Personal Projects",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/dev/inventory-manager",
    demo: "#",
    status: "Maintained",
    date: "Nov 2022",
    image: "/assets/project_demo.png"
  },
  {
    id: "p_int_3",
    name: "Co-Working Space Booking System",
    description: "Comprehensive scheduler allowing customers to book rooms, select dates, execute seat selections, and receive automated email receipts.",
    difficulty: "Intermediate",
    type: "Freelance",
    technologies: ["Next.js", "Node.js", "Firebase Auth", "Tailwind CSS"],
    github: "https://github.com/dev/coworking-booking",
    demo: "#",
    status: "Completed",
    date: "Jan 2023",
    image: "/assets/project_demo.png"
  },
  {
    id: "p_int_4",
    name: "OJT Attendance Monitoring Portal",
    description: "Highly secure attendance checking hub allowing students to log in, register daily check-ins with camera captures, and export monthly hour sheets.",
    difficulty: "Intermediate",
    type: "Capstone",
    technologies: ["React", "PHP", "MySQL", "Webcam API", "Tailwind CSS"],
    github: "https://github.com/dev/ojt-attendance",
    demo: "https://bccojtattendance.infy.click/user_login.php",
    status: "Completed",
    date: "May 2023",
    image: "/assets/project_demo.png",
    credentials: [
      {
        role: "Student",
        email: "student1@gmail.com",
        password: "password",
        loginUrl: "https://bccojtattendance.infy.click/user_login.php"
      },
      {
        role: "Admin",
        email: "admin@gmail.com",
        password: "password",
        loginUrl: "https://bccojtattendance.infy.click/admin_login.php"
      }
    ]
  },
  {
    id: "p_int_5",
    name: "Real-Time Encrypted Chat App",
    description: "Desktop chat application featuring instant message exchanges via WebSockets, password-locked chatrooms, and status notifications.",
    difficulty: "Intermediate",
    type: "Personal Projects",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "CryptoJS"],
    github: "https://github.com/dev/encrypted-chat",
    demo: "#",
    status: "In Progress",
    date: "Aug 2023",
    image: "/assets/project_demo.png"
  },

  // Advanced Projects
  {
    id: "p_adv_1",
    name: "Autonomous Fleet Capstone Dispatcher",
    description: "State-of-the-art control hub designed to dispatch and map mock delivery drones. Features real-time GPS telemetry, Leaflet Map tracking, and pathing algorithms.",
    difficulty: "Advanced",
    type: "Capstone",
    technologies: ["React", "TypeScript", "Node.js", "Socket.io", "Leaflet Maps", "Docker"],
    github: "https://github.com/dev/drone-dispatch-capstone",
    demo: "#",
    status: "Completed",
    date: "Dec 2023",
    image: "/assets/project_demo.png"
  },
  {
    id: "p_adv_2",
    name: "Apex Logistics Enterprise ERP",
    description: "Massive scale corporate management software integrating truck routing schedules, automated invoicing, payroll processing, and multi-user roles.",
    difficulty: "Advanced",
    type: "Freelance",
    technologies: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "AWS S3", "Docker"],
    github: "https://github.com/dev/apex-logistics-erp",
    demo: "#",
    status: "Maintained",
    date: "Mar 2024",
    image: "/assets/project_demo.png"
  },
  {
    id: "p_adv_3",
    name: "HealthSync Mobile Fitness Tracker",
    description: "Advanced cross-platform health application integrating Bluetooth wearables, heart-rate analytics, daily calorie calculation charts, and automated workout notifications.",
    difficulty: "Advanced",
    type: "Mobile Development",
    technologies: ["React Native", "TypeScript", "Redux Toolkit", "Reanimated", "HealthKit API"],
    github: "https://github.com/dev/healthsync-mobile",
    demo: "#",
    status: "Beta",
    date: "Sep 2024",
    image: "/assets/project_demo.png"
  },
  {
    id: "p_adv_4",
    name: "CollabDoc Real-Time Collaborative Workspace",
    description: "Cloud-native visual rich text editor allowing real-time collaboration. Incorporates conflict-free replicated data types (Yjs) and AWS WebSockets.",
    difficulty: "Advanced",
    type: "Web Development",
    technologies: ["React", "TypeScript", "Node.js", "WebSockets", "Yjs", "Redis", "AWS Lambda"],
    github: "https://github.com/dev/collab-doc-workspace",
    demo: "#",
    status: "Completed",
    date: "Dec 2024",
    image: "/assets/project_demo.png"
  },
  {
    id: "p_adv_5",
    name: "CVGM Enterprise POS with PWA",
    description: "A Progressive Web App (PWA) Point of Sale system with multi-branch management. Features automated statement tracking, branch-specific inventory, and real-time SMS alerts via the Semaphore API.",
    difficulty: "Advanced",
    type: "Freelance",
    technologies: ["React", "TypeScript", "Express.js", "PWA", "Semaphore SMS API", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/raymondculas38-hub/cvgm-pos",
    demo: "#",
    status: "Completed",
    date: "Jul 2026",
    image: "/assets/pos_system.jpg"
  }
];

export const educationData: EducationItem[] = [
  {
  id: "edu1",
  school: "Buenavista Community College",
  degree: "Bachelor of Science in Information Technology",
  year: "2026 - Present",
  achievements: [
    "Currently a 4th Year BSIT student.",
    "Sto Niño Institute of Getafe Bohol Inc.,Junior Highschool Batch (2017-2020)",
    "Sto Niño Institute of Getafe Bohol Inc.,Senior Highschool Batch (2021-2022)",
    "Getafe,Central,Elementary School, Primary Batch (2010-2016)"
  ]
}
];  

export const certificationsData: CertificationItem[] = [
  {
    id: "cert1",
    title: "SQL Server Foundations Course",
    organization: "ScholarHat",
    date: "Sep 2025",
    image: "/assets/sql_server_cert.png"
  },
  {
    id: "cert2",
    title: "Introduction to Cybersecurity",
    organization: "Cisco Networking Academy",
    date: "Sep 2025",
    image: "/assets/cybersecurity_cert.png"
  },
  {
    id: "cert3",
    title: "Introduction to Modern AI",
    organization: "Cisco Networking Academy",
    date: "Apr 2026",
    image: "/assets/modern_ai_cert.png"
  }
];

export const socialLinks: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/raymond-culas-592a97374" },
  { platform: "GitHub", url: "https://github.com/raymondculas38-hub" },
  { platform: "Facebook", url: "https://web.facebook.com/gmraymondculas.culas/" },
  { platform: "Instagram", url: "https://instagram.com/prito__itik" },
  { platform: "Email", url: "mailto:raymondculas38@gmail.com" }
];

export const achievementsData: AchievementItem[] = [
  {
    id: "ach1",
    title: "1st Place Winner - SF Tech Hackathon",
    category: "Hackathon",
    date: "Oct 2023",
    organization: "Bay Area Tech Council",
    description: "Built an AI-powered emergency logistics dispatcher in 36 hours, securing first place out of 120 participating teams."
  },
  {
    id: "ach2",
    title: "Innovator of the Year Award",
    category: "Award",
    date: "Dec 2023",
    organization: "Innovate Tech Labs",
    description: "Awarded for exceptional leadership in migrating the company's core platform to modern serverless infrastructure, saving over $40,000 annually in server costs."
  },
  {
    id: "ach3",
    title: "Outstanding Software Engineering Capstone",
    category: "Academic",
    date: "Jun 2022",
    organization: "Stanford Computer Science Department",
    description: "Recognized for building an autonomous drone pathfinding grid simulation, evaluated and approved by Stanford's faculty board."
  },
  {
    id: "ach4",
    title: "Incredibly Professional and Detailed Developer",
    category: "Client Testimonial",
    date: "Apr 2024",
    organization: "Apex Enterprise Logistics",
    description: "Alex took our outdated inventory management flow and delivered a gorgeous, lightning-fast dashboard. His communication was outstanding, and the product exceeded expectations.",
    authorName: "Sarah Jenkins",
    authorTitle: "CEO & Co-founder, Apex Logistics"
  }
];

export const techStackGrid: TechStackItem[] = [
  { name: "Antigravity", category: "Tools", iconName: "FaRocket" },
  { name: "VS Code", category: "Tools", iconName: "SiVisualstudiocode" },
  { name: "Java", category: "Languages", iconName: "FaJava" },
  { name: "Python", category: "Languages", iconName: "SiPython" },
  { name: "Jupyter", category: "Tools", iconName: "SiJupyter" },
  { name: "PHP", category: "Languages", iconName: "SiPhp" },
  { name: "TypeScript", category: "Languages", iconName: "SiTypescript" },
  { name: "JavaScript", category: "Languages", iconName: "SiJavascript" },
  { name: "HTML", category: "Frontend", iconName: "SiHtml5" },
  { name: "Tailwind CSS", category: "Frontend Frameworks", iconName: "SiTailwindcss" },
  { name: "Dart", category: "Languages", iconName: "SiDart" },
  { name: "Flutter", category: "Mobile Frameworks", iconName: "SiFlutter" },
  { name: "MySQL", category: "Databases", iconName: "SiMysql" },
  { name: "PostgreSQL", category: "Databases", iconName: "SiPostgresql" },
  { name: "Firebase", category: "Databases", iconName: "SiFirebase" },
  { name: "GitHub", category: "Version Control", iconName: "SiGithub" },
  { name: "Git", category: "Version Control", iconName: "SiGit" },
  { name: "Figma", category: "UI/UX Design", iconName: "SiFigma" }
];

export const galleryData: GalleryItem[] = [
  {
    id: "g1",
    type: "video",
    url: "/assets/ae190778-ebdd-42f4-8a29-3bb7ab13a000.mp4",
    title: "Cinematic Reel"
  },
  {
    id: "g2",
    type: "image",
    url: "/assets/1fda4a2e-3673-4df0-a5a0-7c6a2d5f1f19.jpg",
    title: "Photography Capture"
  },
  {
    id: "g3",
    type: "image",
    url: "/assets/25ee33c1-9f97-4edc-8ea1-565a11f06098.jpg",
    title: "Vibrant View"
  },
  {
    id: "g4",
    type: "image",
    url: "/assets/306e703f-e653-4dcf-ae25-3263fd7cbc72.jpg",
    title: "Landscape Focus"
  },
  {
    id: "g5",
    type: "image",
    url: "/assets/3adf930e-a2b7-42a6-aeb5-a471d0f26b8e.jpg",
    title: "Daily Snap"
  },
  {
    id: "g6",
    type: "image",
    url: "/assets/43d1e9f8-f0ee-4af7-8f87-7ceecdf02e6a.jpg",
    title: "Scenic Shot"
  },
  {
    id: "g7",
    type: "image",
    url: "/assets/6e9bab58-429d-4a08-9818-76e36cff11f3.jpg",
    title: "Creative Concept"
  },
  {
    id: "g8",
    type: "image",
    url: "/assets/93bf395a-2837-422d-807f-7301d564c7e7.jpg",
    title: "Unique Viewport"
  },
  {
    id: "g9",
    type: "image",
    url: "/assets/a871b9c3-6856-4ce5-9698-5173d691cd40.jpg",
    title: "Final Frame"
  }
];
