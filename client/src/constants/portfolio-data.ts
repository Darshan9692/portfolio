import { Code2, Layers, Database, Palette, Wrench } from "lucide-react";
import { Education, SkillGroup, Experience, Project } from "@/types/portfolio";

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
    year: "2017-2028",
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
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    title: "Pulse Analytics",
    category: "SaaS · Dashboard",
    year: "2025",
    description: "Real-time analytics platform with collaborative dashboards, AI-generated insights and a custom charting engine.",
    tags: ["Next.js", "tRPC", "Postgres", "D3"],
    gradient: "from-[hsl(217,100%,55%)] via-[hsl(200,100%,60%)] to-[hsl(180,100%,55%)]",
    image: "/images/projects/pulse.png",
  },
  {
    title: "Northstar Studio",
    category: "Brand · Site",
    year: "2024",
    description: "Immersive marketing site for a creative studio with WebGL transitions and a fully editable CMS.",
    tags: ["Next.js", "Three.js", "GSAP", "Sanity"],
    gradient: "from-[hsl(240,80%,60%)] via-[hsl(217,100%,55%)] to-[hsl(190,90%,55%)]",
    image: "/images/projects/northstar.png",
  },
  {
    title: "Cobalt Banking",
    category: "Fintech · Mobile",
    year: "2024",
    description: "Designed and built the web companion for a neobank — onboarding, ledgers, and animated insights.",
    tags: ["React", "Framer Motion", "Tailwind"],
    gradient: "from-[hsl(220,100%,50%)] to-[hsl(195,100%,55%)]",
    image: "/images/projects/cobalt.png",
  },
  {
    title: "Atlas Routes",
    category: "Logistics · Web App",
    year: "2023",
    description: "Route-planning interface for fleet operators. Map-first UI, offline-first sync, complex permissions.",
    tags: ["React", "Mapbox", "Supabase"],
    gradient: "from-[hsl(210,100%,45%)] via-[hsl(220,100%,55%)] to-[hsl(260,80%,55%)]",
    image: "/images/projects/atlas.png",
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
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const footerSocials = [
  { label: "GitHub", href: "https://github.com/Darshan9692" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/darshan-panchal-9735a8251" },
];
