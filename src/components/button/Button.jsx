import { Icon } from '@/components';
import { classNames } from '@/utils';
import styles from './button.module.css';

const Button = (props) => {

  const {
    className = "",
    type = "button",
    isDisabled = false,
    isLoading = false,
    isActive = false,
    isLabelHidden = false,
    onClick,
    text,
    textPrimary,
    textSecondary,
    textIconAccent,
    iconNegative,
    iconSecond,
    iconName = "",
    hasChevron,
    children,
    extraAttrs,
  } = props;

  const title = isLabelHidden ? text : undefined;

  return (
    <button
      className={classNames(
        className,
        styles.base,
        isLoading && styles.loading,
        textIconAccent && styles.textIconAccent,
        textPrimary && styles.textPrimary,
        textSecondary && styles.textSecondary,
        iconNegative && styles.iconNegative,
        iconSecond && styles.iconSecond,
        isLabelHidden && styles.square
      )}
      type={type}
      disabled={isDisabled}
      title={title}
      aria-label={title}
      onClick={onClick}
      {...extraAttrs}
    >
      {isLoading ? (
        <Icon name="loading" />
      ) : (
        <>
          {iconName && <Icon name={iconName} />}
          {!isLabelHidden && text && <span>{text}</span>}
          {children}
          {hasChevron && (
            <Icon
              name="chevronTop"
              className={classNames(
                styles.chevron,
                isActive && styles.chevronRotated
              )}
            />
          )}
        </>
      )}
    </button>
  )
}

export default Button;