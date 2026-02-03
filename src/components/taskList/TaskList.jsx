import styles from './taskList.module.css'
import Illustration from "@/components/illustration/index.js";

const TaskList = () => {

  return (
    <div className={styles.taskList}>
        <div className={styles.description}>
          <h2>Все твои задачи организованы как надо</h2>
          <p>Отличная работа! Ты большой молодец!</p>
        </div>
        <Illustration name="wellDone" />
    </div>
  )
}

export default TaskList