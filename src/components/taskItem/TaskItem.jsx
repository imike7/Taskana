import { useCallback } from "react";
import { Button, PriorityIcon } from '@/components';
import { VARIANTS } from "@/constants";
import { classNames } from "@/utils";
import styles from "./taskItem.module.css";

export const TaskItem = (props) => {
  const {
    task,
    onEdit,
    isActive,
    id,
    isDone
  } = props;

  const handleEditClick = useCallback((event) => {
    event.stopPropagation();
    if (onEdit) {
      onEdit(task);
    }
  }, [onEdit, task]);

    return (
    <li
      className={classNames(styles.item, isActive && styles.active)}
      data-priority={task.priority}
      tabIndex={0}
    >
      <div className={styles.inner}>
        <PriorityIcon
          priority={task.priority}
          id={id}
          isDone={isDone}
        />
        <p className={classNames(styles.text, isDone && styles.done)}>{task.title}</p>
      </div>
      <Button
        data-close-exclude
        className={classNames(styles.editButton, isActive && styles.editButtonActive)}
        variant={VARIANTS.ICON_SECOND}
        isLabelHidden
        iconName="edit"
        text="Редактировать задачу"
        onClick={handleEditClick}
        isDisabled={isDone}
      />
    </li>
  );
};