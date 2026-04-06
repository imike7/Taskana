import { Icon } from '@/components';
import { classNames } from '@/utils';
import { VARIANTS } from "@/constants";
import styles from './button.module.css';

export const Button = (props) => {

  const {
    className = "",
    type = "button",
    variant,
    isDisabled = false,
    isLoading = false,
    disableLoading = false,
    isLabelHidden = false,
    onClick,
    text,
    iconName = "",
    hasChevron,
    children,
    extraAttrs,
  } = props;

  const title = isLabelHidden ? text : undefined;

  const variantStyles = {
    [VARIANTS.TEXT_PRIMARY]: styles.textPrimary,
    [VARIANTS.TEXT_SECONDARY]: styles.textSecondary,
    [VARIANTS.ICON_ACCENT]: styles.textIconAccent,
    [VARIANTS.ICON_NEGATIVE]: styles.iconNegative,
    [VARIANTS.ICON_SECOND]: styles.iconSecond,
  };

  return (
    <button
      className={classNames(
        className,
        styles.base,
        variantStyles[variant],
        isLoading && styles.loading,
        isLabelHidden && styles.square,
      )}
      type={type}
      disabled={isDisabled}
      title={title}
      aria-label={title}
      onClick={onClick}
      {...extraAttrs}
    >
      {isLoading && !disableLoading ? (
        <Icon name="loading" />
      ) : (
        <>
          {iconName && <Icon name={iconName} />}
          {!isLabelHidden && text && <span>{text}</span>}
          {children}
          {hasChevron && (
            <Icon name="chevronBottom" />
          )}
        </>
      )}
    </button>
  )
}