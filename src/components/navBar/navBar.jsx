import styles from './navBar.module.css'
import Button from "../button/Button.jsx";

const NavBar = (props) => {
  const {} = props

  return (
    <nav className={styles.navBar}>
      <ul className={styles.navBar__list}>
        <li>
          <Button iconName="storage" href="/" text="Входящие" isDark >
            Входящие
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar