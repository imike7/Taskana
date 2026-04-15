import { useEditor } from '@/context';
import { Button, Logo, ThemeSwitcher } from '@/components';
import styles from './header.module.css';

export const Header = () => {
  const { handleOpenCreateEditor } = useEditor()

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.actions}>
        <Button
          variant="iconAccent"
          iconName="plus"
          text="Создать"
          onClick={handleOpenCreateEditor}
        />
        <ThemeSwitcher />
      </div>
    </header>
  )
};

