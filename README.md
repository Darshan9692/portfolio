# Portfolio Monorepo

This repository contains the full-stack code for Darshan Panchal's portfolio.

## 📁 Project Structure

- `client/`: React + Vite + Tailwind CSS (Frontend)
- `server/`: Node.js + Express + TypeScript (Backend)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository.
2. Install dependencies in both folders:

```bash
# Install client dependencies
cd client && npm install

# Install server dependencies
cd ../server && npm install
```

### Environment Setup

Create `.env` files in both `client/` and `server/` based on the provided `.env.example` files.

### Development

Run both projects simultaneously (in separate terminals):

```bash
# Start frontend
cd client && npm run dev

# Start backend
cd server && npm run dev
```

## 🛠️ Tooling & Quality

Both projects are configured with:
- **ESLint**: For code quality and error detection.
- **Prettier**: For consistent code formatting.
- **TypeScript**: For static typing.
- **EditorConfig**: For cross-editor consistency.

### Common Scripts

- `npm run lint`: Run ESLint.
- `npm run format`: Format code with Prettier.
- `npm run lint:fix`: Run ESLint with automatic fixes.
