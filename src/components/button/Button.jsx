import styles from './button.module.css'
import {classNames} from "@/utils";
import {Icon} from "@/components";

const Button = (props) => {
  const {
    className = '',
    href,
    target,
    type = 'button',
    isDisabled = false,
    isLoading = false,
    onClick,
    text,
    iconName = '',
    extraAttrs,
  } = props

  const isLink = Boolean(href)
  const Component = isLink ? 'a' : 'button'
  const linkProps = { href, target }
  const buttonProps = { type, disabled: isDisabled || isLoading}
  const specificProps = isLink ? linkProps : buttonProps

  return (
    <Component
      className={classNames(className, styles.base, isLink ? styles.link : styles.button, !isLink && isLoading && styles.loading)}
      {...specificProps}
      {...extraAttrs}
      disabled={!isLink && isLoading}
      onClick={onClick}
    >
      {!isLink && isLoading ? (
        <div className={styles.spinnerWrapper}>
          <Icon name="loading" />
        </div>
      ) : (
        <>
          <Icon name={iconName} />
          <span className={styles.text}>
            {text}
          </span>
        </>
        )}
    </Component>

  )
}

export default Button