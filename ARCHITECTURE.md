# Architecture Overview

This document describes the technical architecture of Otical Digital.

## 1. Frontend Architecture

The application follows the **Next.js App Router** pattern, leveraging Server Components for performance and Client Components for interactivity.

### UI System
- **Shadcn UI**: Built on top of Radix UI primitives. Components are located in `src/components/ui`.
- **Theming**: Managed via CSS variables in `src/app/globals.css`. The palette is a custom dark theme with primary purple (`#664DDB`) and secondary blue accents.
- **Responsiveness**: Tailwind's mobile-first approach is strictly followed.

## 2. AI Architecture (Genkit)

We use **Firebase Genkit** to handle all Generative AI tasks. This provides a structured way to define prompts and flows.

### AI Flows
Located in `src/ai/flows/`, these are "Server Actions" that the frontend calls.
- **`ai-assist-follow-up-questions.ts`**: Analyzes user messages from the contact form. It uses the `googleai/gemini-2.5-flash` model to return a structured list of questions that help the agency qualify leads faster.

### Prompt Management
Prompts are defined using Genkit's `ai.definePrompt` with Handlebars templating. This ensures type safety and easy testing through the Genkit Developer UI.

## 3. Data Flow

1. **User Input**: A user submits the `ContactForm`.
2. **Persistence**: The data is processed (mocked currently, ready for Firebase Firestore).
3. **AI Enhancement**: Upon success, the `aiAssistFollowUpQuestions` flow is triggered.
4. **Dynamic UI**: The frontend receives the AI response and renders additional context/questions using Framer Motion animations.

## 4. Asset Management
All placeholder images are centralized in `src/lib/placeholder-images.json`. This allows for easy swapping of visual assets across the entire site without hunting through individual components.
