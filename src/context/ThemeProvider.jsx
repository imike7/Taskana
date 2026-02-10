import {DATA_THEME_ATTRIBUTE, THEME} from "@/constants/theme";
import {useEffect, useState} from "react";
import ThemeContext from "./ThemeContext";

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEME.LIGHT);

  const toggleTheme = () => {
    const nextTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    setTheme(nextTheme);
  };
    useEffect(() => {
      document.documentElement.setAttribute(DATA_THEME_ATTRIBUTE, theme);
    }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export default ThemeContextProvider;