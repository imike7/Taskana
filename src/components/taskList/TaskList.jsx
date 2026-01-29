import styles from './taskList.module.css'
import Illustration from "@/components/illustration/index.js";

const HEADER = "Все твои задачи организованы как надо"
const DESCRIPTION = "Отличная работа! Ты большой молодец!"

const TaskList = () => {

  return (
    <div className={styles.taskList}>
        <div className={styles.description}>
          <h2>{HEADER}</h2>
          <p>{DESCRIPTION}</p>
        </div>
        <Illustration name="wellDone" />
    </div>
  )
}

export default TaskList