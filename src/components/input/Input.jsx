import { Icon } from '@/components';
import styles from './input.module.css';

export const Input = (props) => {
  const {
    value,
    inputRef,
    onKeyDown,
    onChange,
    disabled,
    required,
  } = props;

  const handleReset = (event) => {
    event.preventDefault()
    event.stopPropagation()
    onChange("")
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  }

  const showResetButton = value && value.trim() && !disabled;

  return (
    <div className={styles.container} >
      <label className={styles.label} htmlFor={"input"}>
        Название {required && <span className={styles.star}>*</span>}
      </label>
      <input
        id="input"
        className={styles.input}
        value={value ?? ""}
        onChange={event => onChange(event.target.value)}
        ref={inputRef}
        placeholder="Название задачи"
        type="text"
        onKeyDown={onKeyDown}
        disabled={disabled}
        required
      />
      {showResetButton && (
          <button
            className={styles.button}
            type="reset"
            onClick={handleReset}
            aria-label="Очистить поле ввода"
          >
            <Icon name="xMark"/>
          </button>
      )}
    </div>
  )
}