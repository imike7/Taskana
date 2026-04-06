import { Icon } from '@/components';
import { classNames } from '@/utils';
import { PRIORITIES } from '@/constants';
import styles from './priorityButton.module.css';

export const PriorityButton = (props) => {
  const {
    iconName,
    priority,
    selected,
    onClick,
  } = props;

  const priorityName = PRIORITIES[priority];

  return (
    <button
      className={classNames(styles.button, styles[priorityName], selected && styles.selected)}
      onClick={onClick}
      aria-label={`${priorityName} приоритет`}
      title={`${priorityName} приоритет`}
      type="button"
    >
      <Icon name={iconName}/>
    </button>
  );
};