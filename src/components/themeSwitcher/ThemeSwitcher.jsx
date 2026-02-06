import styles from './themeSwitcher.module.css'
import { useState } from "react";
import {Icon} from "@/components";
import {classNames} from "@/utils";
import {THEME} from "@/constants/theme.js";

const ThemeSwitcher = () => {

  const [ theme, setTheme ] = useState(THEME.LIGHT);

  const handleTheme = () => {
    const nextTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    document.documentElement.setAttribute('data-theme', nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      className={classNames(styles.themeSwitcher)}
      type="button"
      onClick={handleTheme}
      aria-label='Переключить тему'
      role="tab"
    >
      <span className={classNames(styles.button, theme === THEME.LIGHT && styles.active)}>
        <Icon name="sun" />
      </span>
      <span className={classNames(styles.button, theme === THEME.DARK && styles.active)}>
        <Icon name="moon" />
      </span>
    </button>
  )
}

export default ThemeSwitcher;