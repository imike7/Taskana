import styles from './header.module.css'

import {Button, Logo, ThemeSwitcher} from "@/components";

const Header = () => {

  return (
    <header className={styles.header}>
      <Logo className={styles.logo}/>
      <div className={styles.actions}>
        <Button iconName="plus" text="Создать" />
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default Header