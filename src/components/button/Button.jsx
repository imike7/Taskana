import styles from './button.module.css'
import {classNames} from "@/utils";
import {Icon} from "@/components";

const Button = (props) => {
  const {
    className,
    iconName,
    children,
    isLink,
    href,
    target,
    type = 'button',
    extraAttrs,
  } = props

  const Component = isLink ? 'a' : 'button'
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps

  return (
    <Component
      className={classNames(className, styles.base, isLink ? styles.link : styles.button)}
      {...specificProps}
      {...extraAttrs}
    >
      <Icon name={iconName} />
      <span className={styles.text}>
        {children}
      </span>
    </Component>
  )
}

export default Button