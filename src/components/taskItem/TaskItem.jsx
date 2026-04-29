import { Button, PriorityIcon } from '@/components';
import styles from "./taskItem.module.css";
import { VARIANTS } from "@/constants";
import { classNames } from "@/utils";
import {useCallback} from "react";

export const TaskItem = (props) => {
  const {
    task,
    onEdit,
    isActive,
  } = props;

  const handleEditClick = useCallback((event) => {
    event.stopPropagation();
    if (onEdit) {
      onEdit(task);
    }
  }, [onEdit, task, onEdit]);

  return (
    <li
      className={classNames(styles.item, isActive && styles.active)}
      data-priority={task.priority}
      tabIndex={0}
    >
      <div className={styles.inner}>
        <PriorityIcon
          priority={task.priority}
        />
        <p className={styles.text}>{task.title}</p>
      </div>
      <Button
        data-close-exclude
        className={classNames(styles.editButton, isActive && styles.editButtonActive)}
        variant={VARIANTS.ICON_SECOND}
        isLabelHidden
        iconName="edit"
        text="Редактировать задачу"
        onClick={handleEditClick}
      />
    </li>
  );
};