import { classNames } from '@/utils';
import { PRIORITIES } from '@/constants';
import styles from './priorityIcon.module.css';

export const PriorityIcon = (props) => {
  const {
    priority,
  } = props;

  const priorityName = PRIORITIES[priority];

  return (
    <label className={styles.container}>
      <input
        id="priorityIcon"
        className={classNames(styles.hiddenCheckbox, styles[PRIORITIES[priority]])}
        type="checkbox"
        tabIndex={-1}
        aria-label={`${priorityName} priority checkbox`}
      />
      <span
        className={classNames(
          styles.customCheckbox,
          styles[priorityName],
        )}
        role="checkbox"
        tabIndex={0}
      />
    </label>
  );
};