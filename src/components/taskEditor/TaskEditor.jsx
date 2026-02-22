import styles from './taskEditor.module.css';
import {Button, Input, PriorityButton} from "@/components";
import {useEffect, useRef, useState} from "react";
import {PRIORITIES} from "@/constants/priorities";
import {classNames} from "@/utils";

const EDITOR_TYPES = {
  CREATE: 'create',
}

const priorityButtons = [
  {
    iconName: 'minus',
    priority: 1,
  },
  {
    iconName: 'chevronTop',
    priority: 2,
  },
  {
    iconName: 'arrowTwo',
    priority: 3,
  }
]


const TaskEditor = (props) => {
  const {
    type,
    editingTask,
    setEditingTask,
    isEditorOpen,
    setIsEditorOpen,
    onCreate,
    onEdit,
    onDelete,
    value,
    isOpen,
    onCloseEditor,
  } = props

  const [inputValue, setInputValue] = useState("");
  const [currentPriority, setCurrentPriority] = useState(1);

  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 400);
    }
  })

  useEffect(() => {
    if (!isOpen) {
      setInputValue("");
      setCurrentPriority(1);
    }
  }, [isOpen]);

  const handleInputChange = (value) => {
    setInputValue(value);
  }

  const handlePriorityClick = (priority) => {
    setCurrentPriority(priority);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isInputValid() && onCreate) {
      onCreate(inputValue, currentPriority);
    }
  }

  const isInputValid = () => {
    return inputValue.trim() !== '';
  }

  return (
    <div className={classNames(styles.taskEditor, isOpen && styles.open)}>
      <form onSubmit={handleSubmit}>
        <div className={styles.creation}>
          <header className="h1">Создание задачи</header>
          <Input
            value={inputValue}
            inputRef={inputRef}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.priorityContainer}>
          <span className={styles.priorityText}>Приоритет</span>
          <ul className={styles.buttons}>
            {priorityButtons.map(button => (
              <li key={button.priority}>
                <PriorityButton
                  iconName={button.iconName}
                  priority={button.priority}
                  selected={currentPriority === button.priority}
                  onClick={() => handlePriorityClick(button.priority)}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.actions}>
          <Button text="Создать" submitButton isDisabled={!isInputValid()} onClick={handleSubmit}/>
          <Button text="Отмена" cancelButton onClick={onCloseEditor} />
        </div>
      </form>
    </div>
  )
}

export default TaskEditor;