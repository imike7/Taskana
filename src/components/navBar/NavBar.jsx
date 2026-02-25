  import { NavBarLink } from '@/components';
  import styles from './navBar.module.css';

  const NAV_ITEMS = [
    {
      id: '1',
      href: '#',
      text: 'Входящие',
      iconName: 'storage',
    }
  ];

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