import styles from './themeSwitcher.module.css'
import {useEffect, useState, useRef} from "react";
import {Icon} from "@/components";
import {classNames} from "@/utils";

const ThemeSwitcher = () => {

  const [activeTheme, setActiveTheme] = useState("light");
  const [focusedIndex, setFocusedIndex] = useState(0);
  const containerRef = useRef(null);
  const buttonRefs = useRef([]);

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

    // Устанавливаем начальный focusedIndex в зависимости от активной темы
    const initialIndex = themes.findIndex(theme => theme.id === initialTheme);
    setFocusedIndex(Math.max(initialIndex, 0));
  }, []);

  useEffect(() => {
    // Этот эффект нужен для установки фокуса на активную кнопку
    if (buttonRefs.current[focusedIndex]) {
      buttonRefs.current[focusedIndex].focus();
    }
  }, [focusedIndex]);

  const handleChangeTheme = (themeId, index) => {
    setActiveTheme(themeId)
    setFocusedIndex(index);

    document.documentElement.setAttribute('data-theme', themeId);

    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${themeId}`);
  }

  const handleContainerKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (focusedIndex + 1) % themes.length;
      setFocusedIndex(nextIndex);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (focusedIndex - 1 + themes.length) % themes.length;
      setFocusedIndex(prevIndex);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleChangeTheme(themes[focusedIndex].id, focusedIndex);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setFocusedIndex(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setFocusedIndex(themes.length - 1);
    }
  }

  const handleButtonClick = (themeId, index) => {
    handleChangeTheme(themeId, index);
    // Устанавливаем фокус на контейнер после клика
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }

  return (
    <div
      className={styles.themeSwitcher}
      role="tablist"
      aria-label="Выбор темы оформления"
      tabIndex={0} // Делаем контейнер фокусируемым
      onKeyDown={handleContainerKeyDown}
      onFocus={(e) => {
        // Если фокус пришел не от кнопки, устанавливаем на активную кнопку
        if (!buttonRefs.current.includes(document.activeElement)) {
          setFocusedIndex(themes.findIndex(theme => theme.id === activeTheme));
        }
      }}
    >
      {themes.map((theme, index) => (
        <button
          key={theme.id}
          ref={el => buttonRefs.current[index] = el}
          className={classNames(styles.tabButtons, activeTheme === theme.id && styles.active)}
          onClick={() => handleButtonClick(theme.id, index)}
          aria-label={`Переключить на ${theme.aria} тему`}
          role="tab"
          aria-selected={activeTheme === theme.id}
          tabIndex={-1} // Убираем кнопки из последовательности табуляции
        >
          <Icon name={theme.icon} />
        </button>
      ))}
    </div>
  )
}

export default ThemeSwitcher;