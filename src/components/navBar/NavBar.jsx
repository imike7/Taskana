  import styles from './navBar.module.css'
  import { Button } from "@/components";

  const NAV_ITEMS = [
    {
      id: '1',
      href: '#',
      text: 'Входящие',
      name: 'storage',
    }
  ]

  const NavBar = () => {

    return (
      <nav className={styles.navBar}>
        <ul className={styles.list}>
          {NAV_ITEMS.map((item) => (
            <li>
              <Button
                key={item.id}
                {...item}
                isLink
              />
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  export default NavBar