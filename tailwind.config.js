@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply min-h-screen bg-slate-950 text-slate-50 antialiased;
}

/* nav hover style */
.nav-link {
  @apply rounded-full px-3 py-1 text-xs transition hover:bg-white/5 hover:text-sky-200;
}

/* glowing animation when AI is active */
@keyframes pulse-glow {
  0% {
    box-shadow: 0 0 60px rgba(56, 189, 248, 0.35);
  }
  50% {
    box-shadow: 0 0 95px rgba(129, 140, 248, 0.9);
  }
  100% {
    box-shadow: 0 0 60px rgba(56, 189, 248, 0.35);
  }
}

.ai-active-glow {
  animation: pulse-glow 3.2s ease-in-out infinite;
}
