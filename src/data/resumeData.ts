import { PersonalInfo, Skill, ExperienceItem, ProjectItem, EducationItem, CertificationItem, SocialLink, AchievementItem, TechStackItem } from '../types';

export const personalInfo: PersonalInfo = {
  fullName: "Raymond A. Culas",
  title: "Information Technology Student & Aspiring Full-Stack Developer",

  avatar: "/assets/profile.jpg",

  bio: "Information Technology student with a strong passion for web and mobile application development. Experienced in building academic projects, capstone systems, and personal applications using modern technologies such as TypeScript, React, Next.js, PHP,Dart,Python, MySQL,PosgreSQL,Firebase and Node.js. Continuously learning software engineering best practices, UI/UX design, and cloud technologies while developing real-world solutions.",

  objective: "To gain professional experience as a Full-Stack Developer by applying my technical skills, problem-solving abilities, and passion for software development. I aim to contribute to innovative projects, learn from experienced professionals, and continuously improve my expertise in modern web and mobile technologies.",

  summary: "Dedicated Information Technology student with hands-on experience developing web-based systems, academic projects, and freelance applications. Skilled in frontend and backend development, database management, and responsive user interface design. Passionate about creating practical solutions that improve user experience while continuously expanding technical knowledge and industry-relevant skills.",

  experienceYears: 0,
  email: "raymondculas38@gmail.com",
  phone: "+639167711759",
  location: "Saguise Getafe, Bohol",
  resumeUrl: "#" // Triggers browser print-to-PDF
};

export const skillsData: Skill[] = [
  // Frontend
  { name: "TypeScript", level: 95, category: "Frontend Development" },
  { name: "JavaScript", level: 95, category: "Frontend Development" },
  { name: "React", level: 95, category: "Frontend Development" },
  { name: "Next.js", level: 90, category: "Frontend Development" },
  { name: "Tailwind CSS", level: 95, category: "Frontend Development" },

  // Backend
  { name: "Node.js", level: 90, category: "Backend Development" },
  { name: "Express.js", level: 88, category: "Backend Development" },
  { name: "NestJS", level: 82, category: "Backend Development" },
  { name: "Python", level: 78, category: "Backend Development" },
  { name: "PHP", level: 75, category: "Backend Development" },

  // Mobile
  { name: "React Native", level: 85, category: "Mobile Development" },
  { name: "Flutter", level: 72, category: "Mobile Development" },

  // Database
  { name: "PostgreSQL", level: 88, category: "Database Management" },
  { name: "MySQL", level: 85, category: "Database Management" },
  { name: "MongoDB", level: 82, category: "Database Management" },
  { name: "Firebase", level: 80, category: "Database Management" },

  // Cloud & DevOps
  { name: "AWS (S3/EC2/Lambda)", level: 85, category: "Cloud Technologies" },
  { name: "Azure Services", level: 70, category: "Cloud Technologies" },
  { name: "Docker", level: 80, category: "DevOps" },
  { name: "GitHub Actions CI/CD", level: 82, category: "DevOps" },

  // UI/UX & VCS
  { name: "Figma UI Design", level: 78, category: "UI/UX Design" },
  { name: "Git & GitHub", level: 95, category: "Version Control" }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp1",
    position: "First Line of Code",
    company: "Personal Journey",
    duration: "2023",
    description: [
      "WRITE THE FIRST LINE OF CODE \"HELLO WORD\""
    ],
    type: "Personal",
    technologies: [
      "HTML",
      "JavaScript"
    ]
  },

  {
    id: "exp2",
    position: "Capstone Project Developer",
    company: "Academic Project",
    duration: "2025 - 2026",
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
      "ngrok"
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
    ]
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
      "Machine Learning"
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
    demo: "#",
    status: "Completed",
    date: "May 2023",
    image: "/assets/project_demo.png"
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
  }
];

export const educationData: EducationItem[] = [
  {
  id: "edu1",
  school: "Buenavista Community College",
  degree: "Bachelor of Science in Information Technology",
  year: "2026 - Present",
  achievements: [
    "Currently a 3rd Year BSIT student and incoming 4th Year student.",
    "Developed freelance and personal web application projects for clients and individual learning purposes.",
    "Developed practical skills in programming, database management, and system analysis through coursework and personal projects.",
    "Demonstrates strong teamwork, adaptability, and a commitment to continuous learning."
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
  { name: "PHP", category: "Languages", iconName: "SiPhp" },
  { name: "TypeScript", category: "Languages", iconName: "SiTypescript" },
  { name: "JavaScript", category: "Languages", iconName: "SiJavascript" },
  { name: "HTML", category: "Frontend", iconName: "SiHtml5" },
  { name: "Tailwind CSS", category: "Frontend Frameworks", iconName: "SiTailwindcss" },
  { name: "Next.js", category: "Frontend Frameworks", iconName: "SiNextdotjs" },
  { name: "Node.js", category: "Backend", iconName: "SiNodedotjs" },
  { name: "Dart", category: "Languages", iconName: "SiDart" },
  { name: "Flutter", category: "Mobile Frameworks", iconName: "SiFlutter" },
  { name: "MySQL", category: "Databases", iconName: "SiMysql" },
  { name: "PostgreSQL", category: "Databases", iconName: "SiPostgresql" },
  { name: "Firebase", category: "Databases", iconName: "SiFirebase" },
  { name: "GitHub", category: "Version Control", iconName: "SiGithub" },
  { name: "Git", category: "Version Control", iconName: "SiGit" },
  { name: "AWS", category: "Cloud", iconName: "FaAws" },
  { name: "Figma", category: "UI/UX Design", iconName: "SiFigma" }
];
