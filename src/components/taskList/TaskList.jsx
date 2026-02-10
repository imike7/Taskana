import styles from './taskList.module.css'
import {Illustration} from "@/components";

const TaskList = () => {

  return (
    <main className={styles.taskList}>
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

export default TaskList