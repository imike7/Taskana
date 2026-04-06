import { memo } from "react";
import { Button, PriorityIcon } from '@/components';
import styles from "./taskItem.module.css";
import { VARIANTS } from "@/constants";
import { classNames } from "@/utils";

export const TaskItem = memo((props) => {
  const {
    task,
    onEdit,
    isActive,
  } = props;

  const handleEditClick = (event) => {
    event.stopPropagation();
    if (onEdit) {
      onEdit(task);
    }
  };

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
        <Button
          data-close-exclude
          className={styles.editButton}
          variant={VARIANTS.ICON_SECOND}
          isLabelHidden
          iconName="edit"
          text="Редактировать задачу"
          onClick={handleEditClick}
        />
      </div>
    </li>
  );
})