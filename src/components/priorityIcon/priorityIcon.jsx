import {classNames} from "@/utils";
import {PRIORITIES} from "@/constants/priorities";
import styles from './priorityIcon.module.css';
import {Icon} from "@/components";

const PriorityIcon = (props) => {
  const {
    priority,
    onChange,
    checked = false,
    disabled = false,
    handleToggleComplete,
  } = props

  const priorityName = PRIORITIES[priority];

  const handleChange = (e) => {
    if (onChange && !disabled) {
      onChange(e);
    }
  }

  return (
    <label className={styles.container}>
      <input
        className={classNames(styles.hiddenCheckbox, styles[PRIORITIES[priority]])}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        tabIndex={-1}
      />
      <span
        className={classNames(
          styles.customCheckbox,
          styles[priorityName],
          checked && styles.checked,
          disabled && styles.disabled
        )}
        tabIndex={0}
      >
         {checked && <Icon name="check" className={styles.icon} />}
      </span>
    </label>
  )
}

export default PriorityIcon