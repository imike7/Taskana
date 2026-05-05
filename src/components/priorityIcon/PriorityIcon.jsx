import {useTask} from "@/context";
import {Icon} from "@/components";
import { classNames } from '@/utils';
import { PRIORITIES } from '@/constants';
import styles from './priorityIcon.module.css';

export const PriorityIcon = (props) => {
  const {
    priority,
    isDone = false,
    id
  } = props;

  const priorityName = PRIORITIES[priority];

  const { handleToggleComplete } = useTask()

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggleComplete(id);
    }
  }

  return (
    <label className={styles.container}>
      <input
        id="priorityIcon"
        className={classNames(styles.hiddenCheckbox, styles[PRIORITIES[priority]])}
        type="checkbox"
        tabIndex={-1}
        aria-label={`${priorityName} priority checkbox`}
        checked={isDone}
        onChange={() => {
          handleToggleComplete(id);
        }}
      />
      <span
        className={classNames(
          styles.customCheckbox,
          styles[priorityName],
        )}
        role="checkbox"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-checked={isDone}
      >
        {isDone && <Icon name="check" width="20" height="20"/>}
      </span>
    </label>
  );
};