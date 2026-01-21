import styles from './taskList.module.css'
import taskListImage from '@/assets/icons/well-done.svg'

const HEADER = "Все твои задачи организованы как надо"
const DESCRIPTION = "Отличная работа! Ты большой молодец!"

const TaskList = () => {

  return (
    <div className={styles.taskList}>
        <div className={styles.description}>
          <h2>{HEADER}</h2>
          <p>{DESCRIPTION}</p>
        </div>
        <img
          src={taskListImage}
          width={463}
          height={319}
          alt=""
        />
    </div>
  )
}

export default TaskList