import { memo } from 'react';
import { useEditor } from '@/hooks';
import { Button, Logo, ThemeSwitcher } from '@/components';
import styles from './header.module.css';

const Header = () => {
  const { handleOpenCreateEditor } = useEditor()

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.actions}>
        <Button
          iconName="plus"
          text="Создать"
          onClick={handleOpenCreateEditor}
          textIconAccent
        />
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default memo(Header);