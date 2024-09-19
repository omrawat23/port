
// components/theme-toggle.tsx
import React from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-600 transition"
    >
      {theme === 'dark' ? '🔅' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
