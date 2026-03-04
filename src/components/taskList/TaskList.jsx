import { useTask } from '@/hooks';
import { Illustration, TaskItem } from '@/components';
import styles from './taskList.module.css';

const TaskList = () => {

  const { tasks, handleToggleComplete  } = useTask();

  if (!tasks || tasks.length === 0) {
    return (
      <div className={styles.list}>
        <section className={styles.section}>
            <div className={styles.description}>
              <h3>Все&nbsp;твои задачи организованы как&nbsp;надо</h3>
              <p>Отличная работа! Ты большой молодец!</p>
            </div>
            <Illustration name="wellDone" />
        </section>
      </div>
    );
  }

  return (
    <main>
      <section className={styles.section}>
        <ul className={styles.list}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={handleToggleComplete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default TaskList;