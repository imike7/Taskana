import { PriorityIcon } from '@/components';
import styles from "./taskItem.module.css";

const TaskItem = (props) => {
  const {task, onToggleComplete} = props;

  const handleToggle = () => {
    if (onToggleComplete) {
      onToggleComplete(task.id);
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
    </li>
  );
};

export default TaskItem;