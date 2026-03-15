import { Icon } from '@/components';
import { classNames } from '@/utils';
import { PRIORITIES } from '@/constants';
import styles from './priorityIcon.module.css';
import {useCallback} from "react";

const PriorityIcon = (props) => {
  const {
    priority,
    onChange,
    isChecked = false,
    disabled: isDisabled = false,
  } = props;

  const priorityName = PRIORITIES[priority];

  const handleChange = useCallback((e) => {
    if (onChange && !isDisabled) {
      onChange(e);
    }
  }, [onChange, isDisabled]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      if (!isDisabled && onChange) {
        onChange({ target: { checked: !isChecked } });
      }
    }
  }, [isDisabled, onChange, isChecked]);

  return (
    <label className={styles.container}>
      <input
        id="priorityIcon"
        className={classNames(styles.hiddenCheckbox, styles[PRIORITIES[priority]])}
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
        onChange={handleChange}
        tabIndex={-1}
        aria-label={`${priorityName} priority ${isChecked ? 'completed' : 'incomplete'}`}
      />
      <span
        className={classNames(
          styles.customCheckbox,
          styles[priorityName],
          isDisabled && styles.disabled
        )}
        role="checkbox"
        aria-checked={isChecked}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
         {isChecked && <Icon name="check" className={styles.icon} />}
      </span>
    </label>
  );
};

export default PriorityIcon;