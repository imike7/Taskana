import { Icon } from '@/components';
import { classNames } from '@/utils';
import styles from './navBarLink.module.css';

const NavBarLink = (props) => {
  const {
    className,
    href,
    target,
    text,
    iconName
  } = props;

  return (
    <a
      className={classNames(className, styles.link)}
      href={href}
      target={target}
    >
      <Icon name={iconName} />
      <span className={styles.text}>
        {text}
      </span>
    </a>
  );
};

export default NavBarLink;