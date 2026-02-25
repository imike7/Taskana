import { Icon } from '@/components';
import { classNames } from '@/utils';
import { PRIORITIES } from '@/constants';
import styles from './priorityIcon.module.css';

const PriorityIcon = (props) => {
  const {
    priority,
    onChange,
    isChecked = false,
    disabled: isDisabled = false,
  } = props;

  const priorityName = PRIORITIES[priority];

  const handleChange = (e) => {
    if (onChange && !isDisabled) {
      onChange(e);
    }
  };

  return (
    <label className={styles.container}>
      <input
        className={classNames(styles.hiddenCheckbox, styles[PRIORITIES[priority]])}
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
        onChange={handleChange}
        tabIndex={-1}
      />
      <span
        className={classNames(
          styles.customCheckbox,
          styles[priorityName],
          isDisabled && styles.disabled
        )}
        tabIndex={0}
      >
         {isChecked && <Icon name="check" className={styles.icon} />}
      </span>
    </label>
  );
};

export default PriorityIcon;