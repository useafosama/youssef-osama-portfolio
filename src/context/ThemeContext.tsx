'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'dark' | 'paper' | 'blue';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  nextTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('youssef-theme') as ThemeMode | null;
    const initialTheme = (savedTheme === 'dark' || savedTheme === 'paper' || savedTheme === 'blue')
      ? savedTheme
      : 'dark';

    setThemeState(initialTheme);
    applyThemeClass(initialTheme);
    setMounted(true);
  }, []);

  const applyThemeClass = (targetTheme: ThemeMode) => {
    const root = document.documentElement;
    root.classList.remove('theme-dark', 'theme-paper', 'theme-blue', 'dark', 'light');

    if (targetTheme === 'paper') {
      root.classList.add('theme-paper', 'light');
    } else if (targetTheme === 'blue') {
      root.classList.add('theme-blue', 'dark');
    } else {
      root.classList.add('theme-dark', 'dark');
    }
  };

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem('youssef-theme', newTheme);
    applyThemeClass(newTheme);
  };

  const nextTheme = () => {
    const sequence: ThemeMode[] = ['dark', 'paper', 'blue'];
    const currentIndex = sequence.indexOf(theme);
    const nextIndex = (currentIndex + 1) % sequence.length;
    setTheme(sequence[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, nextTheme }}>
      <div className={mounted ? '' : 'theme-dark'}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
