import { memo } from 'react'
import { useTheme } from '@/hooks';
import { Icon } from '@/components';
import { classNames } from '@/utils';
import { THEME } from '@/constants';
import styles from './themeSwitcher.module.css';

const ThemeSwitcher = () => {

  const { theme, toggleTheme } = useTheme();

  const handleThemeToggle = (event) => {
    event.stopPropagation();
    toggleTheme();
  }

  return (
    <button
      className={classNames(styles.themeSwitcher)}
      type="button"
      onClick={handleThemeToggle}
      aria-label="Переключить тему"
      title="Переключить тему"
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

export default memo(ThemeSwitcher);