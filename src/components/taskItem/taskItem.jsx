import styles from "./taskItem.module.css";
import {PriorityIcon} from "@/components";

const TaskItem = (props) => {
  const {task, onToggleComplete} = props

  const handleToggle = () => {
    if (onToggleComplete) {
      onToggleComplete(task.id);
    }
  }

  return (
    <li
      className={styles.item}
      data-priority={task.priority}
      tabIndex={0}
    >
      {/*<form className={styles.task}>*/}
        <PriorityIcon
          priority={task.priority}
          checked={task.completed}
          onChange={handleToggle}
        />
        <p className={styles.text}>{task.title}</p>
      {/*</form>*/}
    </li>
  )
}

export default TaskItem;