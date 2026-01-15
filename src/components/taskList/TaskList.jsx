import styles from './taskList.module.css'

const TaskList = (props) => {
  const {} = props

  const {
    taskList__body,
    taskList__body_wrapper,
    taskList__description,
    taskList__image
  } = styles

  return (
    <div className={taskList__body}>
      <div className={taskList__body_wrapper}>
        <div className={taskList__description}>
          <h2>Все твои задачи организованы как надо</h2>
          <p>Отличная работа! Ты большой молодец!</p>
        </div>
        <div className={taskList__image}>
        </div>
      </div>
    </div>
  )
}

export default TaskList