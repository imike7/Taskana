import {classNames} from "@/utils";
import styles from './navBarLink.module.css';
import {Icon} from "@/components";

const NavBarLink = (props) => {
  const {
    className,
    href,
    target,
    text,
    iconName
  } = props

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
  )
}

export default NavBarLink;