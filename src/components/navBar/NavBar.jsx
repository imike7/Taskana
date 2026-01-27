import styles from './navBar.module.css'
import { Button } from "@/components";

const NAV_ITEMS = [
  {
    id: 'inbox',
    href: '#',
    text: 'Входящие',
    iconName: 'storage',
  }
]

const NavBar = () => {

  return (
    <nav className={styles.navBar}>
      <ul className={styles.list}>
        {NAV_ITEMS.map((item, i) => (
          <li key={item.id}>
            <Button
              iconName={item.iconName}
              href={item.href}
              text={item.text}
              isLink
            >
              {item.text}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar