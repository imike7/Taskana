import {Illustration, TaskItem} from "@/components";
import styles from './taskList.module.css'
// import {useTask} from "@/hooks/useTask";

const TaskList = (props) => {

  const {
    onTaskEditorShown,
    currentTask,
    tasks,
    onToggleComplete,
  } = props

  // const { tasks } = useTask()

  if (!tasks || tasks.length === 0) {
    return (
      <main className={styles.emptyList}>
        <section className={styles.section}>
            <div className={styles.description}>
              <h2>Все&nbsp;твои задачи организованы как&nbsp;надо</h2>
              <p>Отличная работа! Ты большой молодец!</p>
            </div>
            <Illustration name="wellDone" />
        </section>
      </main>
    )
  }

  return (
    <main className={styles.taskList}>
      <section className={styles.section}>
        <ul className={styles.emptyList}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={onToggleComplete}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default TaskList