# Portfolio Website

A premium, high-performance portfolio website built with modern web technologies, focusing on clean design, advanced animations, and accessibility.

## 🚀 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI (Radix UI primitives)
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **State/Data Fetching**: React Query
- **Icons**: Lucide React
- **Code Quality**: ESLint, Prettier, TypeScript Strict Mode

## 🏗 Architecture & Project Structure

```text
├── src/
│   ├── components/      # Reusable UI and layout components
│   │   ├── portfolio/   # Domain-specific components (Hero, Projects, etc.)
│   │   └── ui/          # Shadcn UI primitives
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions (e.g., tailwind-merge)
│   ├── pages/           # Route components (Index, NotFound)
│   ├── App.tsx          # Application root and routing setup
│   └── main.tsx         # Entry point and global providers
├── public/              # Static assets
└── .agents/             # AI agent configuration and rules
```

## ✨ Key Features

- **Responsive Design**: Mobile-first approach ensuring a seamless experience across all devices.
- **Theming**: Built-in Light and Dark mode with seamless transition.
- **Accessibility (a11y)**: Semantic HTML, ARIA attributes, keyboard navigation support, and a "Skip to main content" link.
- **Motion Preference**: Support for `prefers-reduced-motion` to disable animations for users who prefer static interfaces.
- **Performance**: Optimized builds with Vite, lazy loading where appropriate, and lightweight UI components.

## 💻 Setup & Development

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Run the development server**: `npm run dev`
4. **Build for production**: `npm run build`
5. **Preview production build**: `npm run preview`
6. **Linting**: `npm run lint`

## 🤖 AI Agent Context

This repository includes `.agents/rules/coding-rules.md` to ensure any agentic AI tools interacting with the codebase adhere strictly to our production-grade coding standards, architecture principles, and styling guidelines.

## 📄 License

This project is licensed under the MIT License.
