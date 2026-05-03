import { Achievement, Education, Experience, Project, SkillGroup } from "@/types/portfolio";
import { Briefcase, Cloud, Code2, Cpu, Database, FolderCode, GraduationCap, Home, Layers, Newspaper, Palette, Trophy, Wrench } from "lucide-react";

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
    items: ["C", "Java", "Object Oriented Programming", "Data Structures & Algorithms"],
  },
  {
    icon: Palette,
    title: "Frontend",
    items: ["React.js", "Next.js", "Redux", "Bootstrap", "Tailwind CSS", "shadcn/ui"],
  },
  {
    icon: Layers,
    title: "Backend & APIs",
    items: ["Node.js", "Express.js", "Nest.js", "Spring Boot", "Socket.io", "NextAuth", "REST APIs", "GraphQL", "tRPC", "Hasura"],
  },
  {
    icon: Database,
    title: "Databases & Infrastructure",
    items: ["PostgreSQL", "MySQL", "MongoDB (Mongoose)", "Sequelize", "TypeORM", "Redis", "RabbitMQ", "Docker"],
  },
  {
    icon: Wrench,
    title: "Tools, Automation & AI",
    items: ["Git", "GitHub", "Postman", "Swagger", "n8n", "Windmill", "T3 Stack", "Agentic AI Tools", "Antigravity", "Cursor", "Claude Code", "Codex"],
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
    title: "Pulse Analytics",
    category: "SaaS · Dashboard",
    year: "2025",
    description:
      "A high-performance real-time analytics platform featuring collaborative live dashboards, AI-generated business insights, and a custom-built charting engine optimized for large datasets. Built with a type-safe tRPC backend and a responsive Next.js frontend.",
    tags: ["Next.js", "tRPC", "Postgres", "D3.js", "Tailwind"],
    gradient: "from-[hsl(217,100%,55%)] via-[hsl(200,100%,60%)] to-[hsl(180,100%,55%)]",
    image: "/images/projects/pulse.png",
    href: "https://pulse-analytics.demo",
  },
  {
    title: "Northstar Studio",
    category: "Brand · Site",
    year: "2024",
    description:
      "An immersive digital marketing site for a creative agency, featuring seamless WebGL transitions, smooth GSAP animations, and a fully customizable headless CMS architecture using Sanity.io for dynamic content management.",
    tags: ["Next.js", "Three.js", "GSAP", "Sanity", "Framer Motion"],
    gradient: "from-[hsl(240,80%,60%)] via-[hsl(217,100%,55%)] to-[hsl(190,90%,55%)]",
    image: "/images/projects/northstar.png",
    github: "https://github.com/Darshan9692/northstar",
  },
  {
    title: "Cobalt Banking",
    category: "Fintech · Mobile",
    year: "2024",
    description:
      "A comprehensive web companion for a digital neobank. Includes secure user onboarding flows, real-time transaction ledgers, and interactive animated financial insights designed with a mobile-first philosophy and premium aesthetics.",
    tags: ["React", "Framer Motion", "Tailwind", "Radix UI"],
    gradient: "from-[hsl(220,100%,50%)] to-[hsl(195,100%,55%)]",
    image: "/images/projects/cobalt.png",
    href: "https://cobalt-banking.demo",
  },
  {
    title: "Atlas Routes",
    category: "Logistics · Web App",
    year: "2023",
    description:
      "Advanced route-planning and fleet management interface. Features a map-first UI with Mapbox integration, offline-first data synchronization, and a granular RBAC permission system for complex logistical operations.",
    tags: ["React", "Mapbox", "Supabase", "TanStack Query"],
    gradient: "from-[hsl(210,100%,45%)] via-[hsl(220,100%,55%)] to-[hsl(260,80%,55%)]",
    image: "/images/projects/atlas.png",
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
  "Java",
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
