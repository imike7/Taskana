import styles from './header.module.css'

import Button from "../button/Button.jsx";
import Logo from "../logo/Logo.jsx";

const Header = (props) => {
  const {
  } = props

  return (
    <div className={styles.header}>
      <Logo className={styles.header__logo}/>
      <Button iconName="plus">
        Создать
      </Button>
    </div>
  )
}

export default Header