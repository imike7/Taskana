import { Button, Icon, Input, PriorityButton } from '@/components';
import { useTaskEditor } from "./useTaskEditor";
import { classNames } from '@/utils';
import { PRIORITY_BUTTONS } from "@/constants";
import styles from './taskEditor.module.css';

export const TaskEditor = () => {

  const {
    isEditorOpen,
    isEditMode,
    inputValue,
    currentPriority,
    isSubmitDisabled,
    editorRef,
    inputRef,
    handleInputChange,
    handlePriorityClick,
    handleSubmit,
    handleDelete,
    handleCloseEditor
  } = useTaskEditor()

  return (
    <div
      ref={editorRef}
      className={classNames(styles.taskEditor, isEditorOpen && styles.open)}
      inert={!isEditorOpen || undefined}
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
                {PRIORITY_BUTTONS.map(button => (
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
              variant="textPrimary"
              isDisabled={isSubmitDisabled}
              type="submit"
            />
            <Button
              text="Отмена"
              variant="textSecondary"
              onClick={handleCloseEditor}
              type="reset"
            />
          </div>
          {isEditMode && (
            <Button
              isLabelHidden
              variant="iconNegative"
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