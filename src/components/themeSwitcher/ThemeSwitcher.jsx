import styles from './themeSwitcher.module.css'
import {useEffect, useState, useRef} from "react";
import {Icon} from "@/components";
import {classNames} from "@/utils";

const ThemeSwitcher = () => {

  const [activeTheme, setActiveTheme] = useState("light");
  const [activeIndex, setActiveIndex] = useState(0);

  const themes = [
    { id: 'light', aria: 'светлую', className: 'theme-light', icon: 'sun'},
    { id: 'dark', aria: 'темную', className: 'theme-dark', icon: 'moon'},
  ]

  useEffect(() => {
    const isPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = isPrefersDark ? "dark" : "light";

    setActiveTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme);

    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${initialTheme}`);

    const initialIndex = themes.findIndex(theme => theme.id === initialTheme);
    setActiveIndex(Math.max(initialIndex, 0));
  }, []);

  const handleChangeTheme = (themeId, index) => {
    setActiveTheme(themeId)
    setActiveIndex(index);

    document.documentElement.setAttribute('data-theme', themeId);

    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${themeId}`);
  }

  const handleContainerKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (activeIndex + 1) % themes.length;
      handleChangeTheme(themes[nextIndex].id, nextIndex);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (activeIndex - 1 + themes.length) % themes.length;
      handleChangeTheme(themes[prevIndex].id, prevIndex);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const nextIndex = (activeIndex + 1) % themes.length;
      handleChangeTheme(themes[nextIndex].id, nextIndex);
    } else if (e.key === 'Home') {
      e.preventDefault();
      handleChangeTheme(themes[0].id, 0);
    } else if (e.key === 'End') {
      e.preventDefault();
      handleChangeTheme(themes[themes.length - 1].id, themes.length - 1);
    }
  }

  const handleButtonClick = (themeId, index) => {
    handleChangeTheme(themeId, index);
  }

  return (
    <div
      className={styles.themeSwitcher}
      role="radiogroup"
      aria-label="Выбор темы оформления"
      tabIndex={0}
      onKeyDown={handleContainerKeyDown}
    >
      {themes.map((theme, index) => (
        <button
          key={theme.id}
          className={classNames(styles.tabButtons, activeTheme === theme.id && styles.active)}
          onClick={() => handleButtonClick(theme.id, index)}
          aria-label={`Переключить на ${theme.aria} тему`}
          role="radio"
          aria-checked={activeTheme === theme.id}
          tabIndex={-1}
        >
          <Icon name={theme.icon} />
        </button>
      ))}
    </div>
  )
}

export default ThemeSwitcher;