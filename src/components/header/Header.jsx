import styles from './header.module.css'

import Button from "../button";
import Logo from "../logo";

const Header = () => {

  return (
    <header className={styles.header}>
      <Logo className={styles.header__logo}/>
      <Button iconName="plus">
        Создать
      </Button>
    </header>
  )
}

export default Header