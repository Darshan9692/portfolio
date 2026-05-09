import { Achievement, Education, Experience, Project, SkillGroup } from "@/types/portfolio";
import { Briefcase, Cloud, Code2, Cpu, Database, FolderCode, GraduationCap, Home, Layers, Mail, MapPin, Newspaper, Palette, Phone, Trophy, Wrench } from "lucide-react";

export const contactInfo = [
  { icon: Mail, label: "Email", value: "dpinfo9692@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9054849692" },
  {
    icon: MapPin,
    label: "Based in",
    value: "Ahmedabad, Gujarat, India",
    showQR: true,
  },
];

export const MAP_QUERY = "R9P8+9QP, B-55, Dholka Rd, Badrinath Society, Bavla, Gujarat 382220";
export const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;
export const QR_CODE_API = (data: string) => `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(data)}`;

export const education: Education[] = [
  {
    year: "2020 — 2024",
    degree: "B.E, Information Technology",
    school: "L.D College Of Engineering",
    grade: "8.62 CGPA",
  },
  {
    year: "2019 — 2020",
    degree: "Higher Secondary Certificate — Science",
    school: "A.K Patel Vidhyamandir",
    grade: "80%",
  },
  {
    year: "2017 — 2018",
    degree: "Secondary School Certificate",
    school: "S.M Patel Vidhyamandir",
    grade: "94%",
  },
];

export const skillsGroups: SkillGroup[] = [
  {
    icon: Code2,
    title: "Core & Languages",
    items: ["C Programming", "Java Programming", "Object Oriented Programming", "Data Structures & Algorithms"],
  },
  {
    icon: Palette,
    title: "Frontend",
    items: ["React.js", "Next.js", "Redux", "Redux Toolkit", "React Router", "Vite", "Bootstrap", "Tailwind CSS", "shadcn/ui"],
  },
  {
    icon: Layers,
    title: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "Spring Boot",
      "Socket.io",
      "NextAuth",
      "REST APIs",
      "GraphQL",
      "tRPC",
      "Hasura",
      "CQRS",
      "Microservices",
      "JWT Authentication",
      "Auth0",
    ],
  },
  {
    icon: Database,
    title: "Databases & Infrastructure",
    items: ["PostgreSQL", "MySQL", "MongoDB (Mongoose)", "Sequelize", "TypeORM", "Redis", "RabbitMQ", "Docker"],
  },
  {
    icon: Wrench,
    title: "Tools, Automation & AI",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Swagger",
      "Grafana",
      "Zod",
      "ESLint",
      "Prettier",
      "n8n",
      "Windmill",
      "T3 Stack",
      "Agentic AI Tools",
      "Antigravity",
      "Cursor",
      "Claude Code",
      "Codex",
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "eSparkBiz Technologies",
    period: "2024 — Present",
    location: "On Site · Ahmedabad",
    summary:
      "Architecting scalable backend microservices using Nest.js and Postgres. Implementing real-time data pipelines with RabbitMQ and Redis, while managing complex data layers through TypeORM and Hasura GraphQL. Leading the frontend migration to Next.js and shadcn/ui for high-performance analytics dashboards.",
    stack: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "tRPC",
      "React.js",
      "Next.js",
      "NextAuth",
      "PostgreSQL",
      "Hasura",
      "Docker",
      "Tailwind",
      "ShadCN",
      "TypeORM",
      "Redis",
      "RabbitMQ",
      "GraphQL",
      "Git",
      "GitHub",
      "BitBucket",
    ],
    url: "https://www.esparkinfo.com/",
  },
  {
    role: "Full Stack Developer",
    company: "Luffy Digital",
    period: "2023 — 2024",
    location: "Remote · Ahmedabad",
    summary:
      "Developed full-stack MVPs and high-performance web products using the MERN stack and Next.js. Engineered robust RESTful APIs and real-time features with Socket.io. Optimized database schemas in PostgreSQL and MongoDB for early-stage startup launches.",
    stack: ["Node.js", "Express.js", "React.js", "Tailwind", "Mongoose"],
    url: "https://www.luffy.digital/",
  },
];

export const navLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Skills", href: "#skills", icon: Cpu },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderCode },
  { label: "Achievements", href: "#achievements", icon: Trophy },
];

export const projects: Project[] = [
  {
    title: "ChainIT®  - Black Ink Tech",
    year: "2025",
    description: "ChainIT® is a digital platform that connects the physical world with the digital, keeping your products, services, and events secure and easy to verify.",
    tags: [
      "Nest.js",
      "TypeORM",
      "Postgres",
      "Redis",
      "RabbitMQ",
      "Docker",
      "CQRS",
      "Microservice",
      "AWS Recognization",
      "Auth0",
      "Swagger",
      "Grafana",
      "Pino",
      "Passport",
      "Multer",
      "ID Scan",
      "Nx",
      "Centrifugo",
      "Web3",
    ],
    gradient: "from-[hsl(217,100%,55%)] via-[hsl(200,100%,60%)] to-[hsl(180,100%,55%)]",
    image: "/images/projects/chainit.jpeg",
  },
  {
    title: "Cost Tool - MMR Research",
    year: "2024",
    description:
      "Cost-Tool is an advanced, high-efficiency solution crafted to help MMR Staff precisely calculate the costs tied to their projects or cost sheets. Featuring an intuitive interface and a robust set of tools, Cost-Tool simplifies the cost estimation process, ensuring accuracy and reliability to support informed, strategic decision-making.",
    tags: ["Next.js", "NextAuth", "GraphQL", "Hasura", "tRPC", "Tailwind", "Docker", "uRQL", "n8n", "ACRM"],
    gradient: "from-[hsl(240,80%,60%)] via-[hsl(217,100%,55%)] to-[hsl(190,90%,55%)]",
    image: "/images/projects/cost-tool.png",
  },
  {
    title: "Medical Scheduling System",
    year: "2024",
    description:
      "Medical Scheduling System is a web-based medical appointment and practice management system for patients, doctors, and admins. It enables online doctor discovery, appointment booking, patient history management, and prescription generation.The platform focuses on improving clinic efficiency and patient experience through centralized scheduling and records.",
    tags: ["Node.js", "Express.js", "MySQL", "JWT Authentication", "Socket.io", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "EJS (Server-Side Rendering)"],
    gradient: "from-[hsl(220,100%,50%)] to-[hsl(195,100%,55%)]",
    image: "/images/projects/medical-scheduling.png",
  },
  {
    title: "Chat Communication System",
    year: "2024",
    description:
      "A high-performance real-time messaging platform enabling secure private and group communication with seamless media sharing across all devices. Built on an event-driven architecture for low-latency delivery, it integrates real-time notifications, status tracking, and robust data management.",
    tags: [
      "Node.js",
      "Express",
      "React",
      "Socket.io",
      "Redux Toolkit",
      "MySQL",
      "Sequelize ORM",
      "Tailwind CSS",
      "JWT (JSON Web Tokens)",
      "Vite",
      "React Router DOM",
      "Zod",
      "Axios",
      "React Hook Form",
      "Nodemailer",
      "Cloudinary",
      "Multer",
      "Pino",
      "SweetAlert2",
      "React Hot Toast",
      "React Icons",
      "ESLint",
      "Prettier",
      "PostCSS",
      "Autoprefixer",
    ],
    gradient: "from-[hsl(210,100%,45%)] via-[hsl(220,100%,55%)] to-[hsl(260,80%,55%)]",
    image: "/images/projects/chat-communication.png",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Digital Ideathon Winner",
    description:
      "Secured 3rd Rank in the Digital Ideathon held by eInfochips. Resolved challenges for landless farmers through a collaborative resource-sharing platform and a scalable technology solution.",
    date: "2022",
    icon: Trophy,
    image: "/images/achievements/ideathon.png",
  },
  {
    title: "Smart India Hackathon",
    description:
      "Developed a sign language learning app during the Smart India Hackathon after direct research at special schools. Our efforts were featured in the regional newspaper for bridging the gap for the speech-impaired community.",
    date: "2023",
    icon: Newspaper,
    image: "/images/achievements/sign-base.png",
  },
  {
    title: "Microsoft AZ-900 Certified",
    description:
      "Cleared the Microsoft AZ-900 global exam, validating foundational expertise in Azure cloud architecture, security, and compliance. Mastered core cloud principles to stay ahead of modern industry standards.",
    date: "2023",
    icon: Cloud,
    image: "/images/achievements/az900.png",
  },
];

export const marqueeItems = [
  "Software Architecture",
  "Node.js",
  "Nest.js",
  "Java Programming",
  "Spring Boot",
  "React.js",
  "Next.js",
  "System Design",
  "Scalable Systems",
  "RESTful APIs",
  "PostgreSQL",
  "Docker",
  "Agentic AI",
];

export const footerSitemap = [
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const footerSocials = [
  { label: "GitHub", href: "https://github.com/Darshan9692" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/darshan-panchal-9735a8251" },
];
