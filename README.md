# Otical Digital

Otical Digital is a high-performance web development agency starter kit. It features a modern, visually stunning interface designed for conversion and speed, integrated with Generative AI to enhance user interactions.

## 🚀 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **AI Engine**: [Firebase Genkit](https://firebase.google.com/docs/genkit)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## ✨ Key Features

- **AI-Powered Lead Qualification**: Uses Genkit to analyze contact form messages and generate intelligent follow-up questions in real-time.
- **Modern UI/UX**: A dark-themed, glassmorphic design system using `Space Grotesk` for headlines and `Inter` for body text.
- **Performance Optimized**: Optimized image handling, server components by default, and smooth transitions.
- **Modular Architecture**: Clean separation of concerns between AI flows, UI components, and application logic.

## 📁 Project Structure

- `src/ai/`: Genkit configuration and AI flows (prompts and logic).
- `src/app/`: Next.js App Router pages and global styles.
- `src/components/`: Reusable React components, including the custom Shadcn UI library.
- `src/hooks/`: Custom React hooks for shared logic.
- `src/lib/`: Utility functions and static data (like placeholder image definitions).

## 🛠️ Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Setup**:
   Create a `.env` file and add your `GOOGLE_GENAI_API_KEY` to enable AI features.

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Explore AI Flows**:
   Run the Genkit UI to test and debug prompts:
   ```bash
   npm run genkit:dev
   ```

## 📖 Documentation

- [Architecture Details](./ARCHITECTURE.md) - Deep dive into how the app is built.
- [Screenshots](./SCREENSHOTS.md) - Visual overview of the application.
- YouTube Demo: https://www.youtube.com/watch?v=ShIYBHpEPHQ
