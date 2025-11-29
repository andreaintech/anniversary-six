# Anniversary Quiz 💕

A fun and interactive quiz app built with React, TypeScript, and Vite to celebrate special moments together.

## Features

- 🎯 Interactive quiz with multiple-choice questions
- 📊 Score tracking and results display
- 🔄 Restart functionality to play again
- 💝 Personalized questions for special occasions
- 🎨 Clean and modern UI

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **ESLint** - Code linting

## Project Structure

```
src/
├── components/
│   ├── Quiz.tsx          # Main quiz component with state management
│   ├── QuestionCard.tsx  # Question display component
│   └── ResultScreen.tsx  # Results display component
├── data/
│   └── questions.ts      # Quiz questions and type definitions
├── App.tsx               # Root component
└── main.tsx              # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd anniversary-six
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

### Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
# or
yarn build
```

### Preview

Preview the production build:
```bash
npm run preview
# or
yarn preview
```

## Customization

### Adding Questions

Edit `src/data/questions.ts` to add, modify, or remove questions:

```typescript
export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Your question here?',
    options: [
      { id: 'a', text: 'Option A' },
      { id: 'b', text: 'Option B' },
      { id: 'c', text: 'Option C' },
      { id: 'd', text: 'Option D' },
    ],
    correctOptionId: 'a', // The correct answer
  },
  // Add more questions...
];
```

### Styling

- Global styles: `src/index.css`
- App-specific styles: `src/App.css`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

Private project - All rights reserved
