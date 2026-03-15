import {useCallback, useEffect, useRef, useState, useMemo} from 'react';
import { Button, Icon, Input, PriorityButton } from '@/components';
import { classNames } from '@/utils';
import styles from './taskEditor.module.css';

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
];

const TaskEditor = (props) => {
  const {
    onCreate,
    onUpdate,
    onDelete,
    isOpen,
    onCloseEditor,
    editingTask = null,
  } = props;

  const [inputValue, setInputValue] = useState("");
  const [currentPriority, setCurrentPriority] = useState(1);
  const prevIsOpenRef = useRef(isOpen);
  const inputRef = useRef(null);

  const isEditMode = !!editingTask;

  const isInputValid = useMemo(() => {
    return inputValue.trim() !== '';
  }, [inputValue]);

  const hasChanges = useMemo(() => {
    if (!isEditMode || !editingTask) return true;

    const titleChanged = inputValue.trim() !== editingTask.title;
    const priorityChanged = currentPriority !== editingTask.priority;

    return titleChanged || priorityChanged;
  }, [isEditMode, editingTask, inputValue, currentPriority]);

  const isSubmitDisabled = useMemo(() => {
    return !isInputValid || (isEditMode && !hasChanges);
  }, [isInputValid, isEditMode, hasChanges]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onCloseEditor();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onCloseEditor]);

  useEffect(() => {
    if (isOpen && editingTask) {
      setInputValue(editingTask.title);
      setCurrentPriority(editingTask.priority);
    }
  }, [isOpen, editingTask]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      const timer = setTimeout(() => {
        inputRef.current.focus();
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (prevIsOpenRef.current === true && isOpen === false) {
      setInputValue("");
      setCurrentPriority(1);

      if (inputRef.current) {
        inputRef.current.blur();
      }
    }
    prevIsOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && editingTask === null) {
      setInputValue("");
      setCurrentPriority(1);
    }
  }, [isOpen, editingTask]);

  const handleInputChange = useCallback((value) => {
    setInputValue(value);
  }, []);

  const handlePriorityClick = useCallback((priority) => {
    setCurrentPriority(priority);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!isSubmitDisabled) {
      if (isEditMode && onUpdate) {
        onUpdate(editingTask.id, inputValue, currentPriority);
        onCloseEditor();
      } else if (onCreate) {
        onCreate(inputValue, currentPriority);
        onCloseEditor();
      }
    }
  }, [isEditMode, onUpdate, onCreate, editingTask?.id, inputValue, currentPriority, isSubmitDisabled, isInputValid, onCloseEditor]);

  const handleDelete = useCallback(() => {
    if (isEditMode && onDelete) {
      onDelete(editingTask.id);
      onCloseEditor();
    }
  }, [isEditMode, onDelete, editingTask?.id, onCloseEditor]);

  return (
    <div
      className={classNames(styles.taskEditor, isOpen && styles.open)}
      inert={!isOpen || undefined}
    >
      <form onSubmit={handleSubmit}>
        <div className={styles.scrollWrapper}>
          <div className={styles.creation}>
            <h2>{isEditMode ? 'Редактирование' : 'Создание задачи'}</h2>
            <Input
              value={inputValue}
              inputRef={inputRef}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.centerActionsWrapper}>
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
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.submitActions}>
            <Button
              text={isEditMode ? "Сохранить" : "Создать"}
              textPrimary
              isDisabled={isSubmitDisabled}
              type="submit"
            />
            <Button
              text="Отмена"
              textSecondary
              onClick={onCloseEditor}
              type="reset"
            />
          </div>
          {isEditMode && (
            <Button
              isLabelHidden
              iconNegative
              text="Удалить"
              onClick={handleDelete}
            >
              <Icon name="trash" />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TaskEditor;