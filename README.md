# 🚀 React Animation Showcase

A collection of interactive animations built with React, TypeScript, and Framer Motion. Features a typewriter effect, animated starfield background, and a sleek rocket ship design.

## ✨ Features

- **🎯 Typewriter Effect**: Dynamic text animation that types and deletes phrases in a loop
- **⭐ Animated Stars**: Twinkling starfield background with random positioning and timing
- **🚀 Rocket Ship**: Multi-component rocket design with smooth animations
- **🎨 Modern UI**: Clean design with Tailwind CSS styling
- **📱 Responsive**: Works beautifully on all screen sizes

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **TypeScript** - Type safety and better development experience
- **Framer Motion** - Smooth animations and transitions
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AmandaCiliberto/toinfinity.git
   cd toinfinity
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Stars.tsx           # Animated starfield background
│   ├── Typewriter.tsx      # Dynamic typewriter effect
│   ├── Ship.tsx           # Main rocket ship container
│   └── index.ts           # Component exports
├── utils/
│   └── cn.ts              # Class name utility function
├── App.tsx                # Main application component
└── main.tsx               # Application entry point
```

## 🎮 Components

### Typewriter Component
- Cycles through space-themed phrases
- Customizable typing and deleting speeds
- Built with React hooks and reducers

### Stars Component
- 100 randomly positioned stars
- Individual twinkling animations
- Non-intrusive background effect

### Rocket Ship
- Single unified rocket design
- Clean and responsive styling


## 🎨 Customization

### Typewriter Phrases
Edit the phrases in `src/components/Typewriter.tsx`:
```tsx
const phrases = [
  "Your custom phrase...",
  "Another phrase...",
  // Add more phrases
];
```

### Animation Speeds
Adjust timing constants:
```tsx
const TYPING_SPEED = 100;    // milliseconds per character
const DELETING_SPEED = 50;   // milliseconds per deletion
const PAUSE_AT_END = 2000;   // pause after completing phrase
```

### Star Count
Modify star quantity in `src/components/Stars.tsx`:
```tsx
// Change the loop condition
for (let i = 0; i < 150; i++) { // Increase for more stars
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for amazing animation capabilities
- [Tailwind CSS](https://tailwindcss.com/) for rapid UI development
- [Vite](https://vitejs.dev/) for lightning-fast development experience

---

Made with ❤️ and lots of ☕
