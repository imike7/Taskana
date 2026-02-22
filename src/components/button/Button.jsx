import {classNames} from "@/utils";
import {Icon} from "@/components";
import styles from './button.module.css'

const Button = (props) => {

  const {
    className = '',
    type = 'button',
    isDisabled = false,
    isLoading = false,
    onClick,
    text,
    submitButton,
    cancelButton,
    accentButton,
    iconName = '',
    extraAttrs,
  } = props

  return (
    <button
      className={classNames(
        className,
        styles.base,
        isLoading && styles.loading,
        accentButton && styles.accentButton,
        submitButton && styles.submitButton,
        cancelButton && styles.cancelButton,
      )}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      {...extraAttrs}
    >
      {isLoading ? (
          <Icon name="loading" />
      ) : (
        <>
          {iconName && <Icon name={iconName} />}
          <span>
            {text}
          </span>
        </>
        )}
    </button>

  )
}

export default Button