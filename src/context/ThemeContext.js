import {createContext, useContext} from "react";

const ThemeContext = createContext(undefined);

export const useTheme = () => {
  const theme = useContext(ThemeContext)
    if (!theme) {
      throw new Error('useTheme должен использоваться внутри ThemeProvider')
    }
    return theme
}

export default ThemeContext;