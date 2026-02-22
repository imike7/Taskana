import {Button, Logo, ThemeSwitcher} from "@/components";
import styles from './header.module.css'
import {useTask} from "@/hooks/useTask";

const Header = ({ onOpenEditor }) => {
  // const { handleOpenTaskEditor } = useTask()

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.actions}>
        <Button
          iconName="plus"
          text="Создать"
          onClick={onOpenEditor}
          accentButton
        />
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default Header