import Icon from "../icon";
import styles from './button.module.css'
import {classNames} from "@/utils";

const Button = (props) => {
  const {
    className,
    iconName,
    children,
    isDark,
    href,
    target,
    type = 'button',
    extraAttrs,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps

  return (
    <Component
      className={classNames(className, styles.button, isDark && styles.dark)}
      {...specificProps}
      {...extraAttrs}
    >
      <Icon name={iconName}/>
      <span className={styles.text}>
        {children}
      </span>
    </Component>
  )
}

export default Button