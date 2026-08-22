import { useEffect, useState } from 'react';
import { DATA_THEME_ATTRIBUTE, THEME } from "@/constants";

export const useThemeSwitcher = () => {

  const getUserTheme = () => {
    if (typeof window === "undefined") return THEME.LIGHT;

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? THEME.DARK : THEME.LIGHT;
  };

  const saved = localStorage.getItem(DATA_THEME_ATTRIBUTE);

  const [theme, setTheme] = useState(() => {
    if (saved && Object.values(THEME).includes(saved)) {
      return saved;
    }
    return saved || getUserTheme()
  });

  const toggleTheme = () => {
    const nextTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    setTheme(nextTheme);
    localStorage.setItem(DATA_THEME_ATTRIBUTE, nextTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute(DATA_THEME_ATTRIBUTE, theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const newTheme = e.matches ? THEME.DARK : THEME.LIGHT;
      // Меняем только если нет сохраненной темы
      if (!localStorage.getItem(DATA_THEME_ATTRIBUTE)) {
        setTheme(newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return {
    theme,
    toggleTheme,
  }
};