import { useEffect, useState } from 'react';
import { DATA_THEME_ATTRIBUTE, THEME } from "@/constants";

export const useThemeSwitcher = () => {

  const [theme, setTheme] = useState(THEME.LIGHT);

  const toggleTheme = () => {
    const nextTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    setTheme(nextTheme);
  };
  useEffect(() => {
    document.documentElement.setAttribute(DATA_THEME_ATTRIBUTE, theme);
  }, [theme]);

  return {
    theme,
    toggleTheme,
  }
};