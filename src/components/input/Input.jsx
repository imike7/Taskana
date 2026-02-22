import styles from "./input.module.css";
import {Icon} from "@/components";

const Input = (props) => {
  const {
    value,
    inputRef,
    onKeyDown,
    onChange,
    disabled,
    required,
  } = props

  const handleReset = (event) => {
    event.preventDefault()
    onChange("")
  }

  return (
    <div className={styles.container} >
      <label className={styles.label} htmlFor={"input"}>
        Название {required && <span className={styles.star}>*</span>}
      </label>
      <input
        id="input"
        className={styles.input}
        value={value ?? ""}
        // onChange={onChange}
        onChange={event => onChange(event.target.value)}
        ref={inputRef}
        placeholder="Название задачи"
        type="text"
        onKeyDown={onKeyDown}
        disabled={disabled}
        required
      />
      {value.trim() && (
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

export default Input;