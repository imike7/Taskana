import styles from './button.module.css'
import {classNames} from "@/utils";
import {Icon} from "@/components";
import {useState} from "react";

const Button = (props) => {
  const {
    className = '',
    isLink,
    href,
    target,
    type = 'button',
    extraAttrs,
    onClick,
    text,
    name = '',
  } = props

  const [isLoading, setIsLoading] = useState(false);

  const Component = isLink ? 'a' : 'button'
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps

  const handleClick = async (event) => {
    if (isLink || isLoading) {
      onClick?.(event);
      return;
    }

    setIsLoading(true);

    try {
      const minDelay = new Promise(resolve => setTimeout(resolve, 1500));

      if (onClick) {
        const clickResult = onClick(event);
        const clickPromise = Promise.resolve(clickResult);
        await Promise.all([clickPromise, minDelay]);
      } else {
        await minDelay;
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Component
      className={classNames(className, styles.base, isLink ? styles.link : styles.button, !isLink && isLoading && styles.loading)}
      {...specificProps}
      {...extraAttrs}
      disabled={!isLink && isLoading}
      onClick={handleClick}
    >
      {!isLink && isLoading ? (
        <div className={styles.spinnerWrapper}>
          <Icon name="loading" />
        </div>
      ) : (
        <>
          <Icon name={name} />
          <span className={styles.text}>
            {text}
          </span>
        </>
        )}
    </Component>

  )
}

export default Button