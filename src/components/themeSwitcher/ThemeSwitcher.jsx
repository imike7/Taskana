import { useTheme } from "@/hooks/useTheme.js";
import {Icon} from "@/components";
import {classNames} from "@/utils";
import {THEME} from "@/constants/theme";
import styles from './themeSwitcher.module.css'

const ThemeSwitcher = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={classNames(styles.themeSwitcher)}
      type="button"
      onClick={toggleTheme}
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