import { NavBarLink } from '@/components';
import { NAV_ITEMS } from "@/constants";
import styles from './navBar.module.css';

  const NavBar = () => {

    return (
      <nav className={styles.navBar}>
        <ul className={styles.list}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <NavBarLink
                {...item}
              />
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  export default NavBar;