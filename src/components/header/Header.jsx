import { useTask } from '@/hooks';
import { Button, Logo, ThemeSwitcher } from '@/components';
import styles from './header.module.css';

const Header = () => {
  const { handleOpenEditor  } = useTask()

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.actions}>
        <Button
          iconName="plus"
          text="Создать"
          onClick={handleOpenEditor}
          accentButton
        />
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default Header;