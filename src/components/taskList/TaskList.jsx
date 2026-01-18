import styles from './taskList.module.css'
import taskListImage from '../../assets/icons/well-done.svg'

const TaskList = () => {

  const {
    taskList__body,
    taskList__description,
  } = styles

  return (
    <div className={taskList__body}>
        <div className={taskList__description}>
          <h2>Все твои задачи организованы как надо</h2>
          <p>Отличная работа! Ты большой молодец!</p>
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