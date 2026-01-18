import Icon from "../icon/icon";
import styles from './button.module.css'
import {classNames} from "../../utils";

const Button = (props) => {
  const {
    className,
    iconName,
    children,
    isDark,
    href,
    type = 'button',
    extraAttrs,
  } = props

  const {
    button,
    'button--dark': buttonDark,
    button__text
  } = styles

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'

  return (
    <Component
      className={classNames(className, button, isDark && buttonDark)}
      type={type}
      {...extraAttrs}
    >
      <Icon name={iconName}/>
      <span className={button__text}>
        {children}
      </span>
    </Component>
  )
}

export default Button