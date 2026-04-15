import { memo } from 'react'
import { Icon } from '@/components';
import { classNames } from '@/utils';
import styles from './logo.module.css';

export const Logo = memo((props) => {
  const {
    className = "",
  } = props;

  const title = "На главную";

  return (
    <a
      className={classNames(className, styles.logo)}
      href="#"
      title={title}
      aria-label={title}
    >
      <Icon name="logo"/>
    </a>
  )
});

Logo.displayName = "Logo";