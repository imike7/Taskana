import { memo } from "react";
import { Button, PriorityIcon } from '@/components';
import styles from "./taskItem.module.css";

const TaskItem = (props) => {
  const {
    task,
    onToggleComplete,
    onEdit,
  } = props;

  const handleToggle = () => {
    if (onToggleComplete) {
      onToggleComplete(task.id);
    }
  };

  const handleEditClick = () => {
    if (onEdit) {
      onEdit(task);
    }
  };

  return (
    <li
      className={styles.item}
      data-priority={task.priority}
      tabIndex={0}
    >
      <div className={styles.inner}>
        <PriorityIcon
          priority={task.priority}
          isChecked={task.isDone}
          onChange={handleToggle}
        />
        <p className={styles.text}>{task.title}</p>
      </div>
      <Button
        iconSecond
        isLabelHidden
        iconName="edit"
        onClick={handleEditClick}
      />
    </li>
  );
};

export default memo(TaskItem);