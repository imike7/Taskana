import Icon from "../icon/icon/Icon.jsx";
import styles from './button.module.css'

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
      className={`${button} ${isDark ? buttonDark : ''} ${className || ''}`}
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