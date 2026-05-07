import { Box, Braces, Code2, Cpu, Globe, LucideIcon, Rocket, Terminal } from "lucide-react";

export const genericIcons: Record<string, LucideIcon> = {
  "Object Oriented Programming": Code2,
  "Data Structures & Algorithms": Cpu,
  "REST APIs": Globe,
  "Agentic AI Tools": Terminal,
  "T3 Stack": Box,
  Antigravity: Rocket,
  Windmill: Terminal,
  "Claude Code": Cpu,
  Codex: Braces,
  // Conceptual / architecture skills that don't have SimpleIcons
  "Redux Toolkit": Code2,
  Microservices: Box,
  "JWT Authentication": Globe,
  "JWT (JSON Web Tokens)": Globe,
  CQRS: Braces,
};

export const slugMapping: Record<string, string> = {
  C: "c",
  "C Programming": "c",
  Java: "openjdk",
  "Java Programming": "openjdk",
  "React.js": "react",
  "Next.js": "nextdotjs",
  "Node.js": "nodedotjs",
  "Express.js": "express",
  "Nest.js": "nestjs",
  PostgreSQL: "postgresql",
  "MongoDB (Mongoose)": "mongodb",
  "Tailwind CSS": "tailwindcss",
  "shadcn/ui": "shadcnui",
  "Spring Boot": "springboot",
  "Socket.io": "socketdotio",
  NextAuth: "nextdotjs",
  Redux: "redux",
  Bootstrap: "bootstrap",
  GraphQL: "graphql",
  tRPC: "trpc",
  Hasura: "hasura",
  MySQL: "mysql",
  Sequelize: "sequelize",
  TypeORM: "typeorm",
  Redis: "redis",
  RabbitMQ: "rabbitmq",
  Docker: "docker",
  Git: "git",
  GitHub: "github",
  Postman: "postman",
  Swagger: "swagger",
  n8n: "n8n",
  Cursor: "cursor",
};

export const getTechIcon = (name: string) => {
  const GenericIcon = genericIcons[name];
  const slug = slugMapping[name] || name.toLowerCase().split(" (")[0].replace(".js", "dotjs").replace("/", "").replace(" ", "");

  return { GenericIcon, slug };
};
