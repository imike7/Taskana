import styles from './header.module.css'

import { Button, Logo } from "@/components";

const Header = () => {

  return (
    <header className={styles.header}>
      <Logo className={styles.logo}/>
      <Button iconName="plus">
        Создать
      </Button>
    </header>
  )
}

export default Header