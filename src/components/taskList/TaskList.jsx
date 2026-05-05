import { useTask, useEditor } from '@/context';
import { Illustration, TaskItem } from '@/components';
import styles from './taskList.module.css';

export const TaskList = () => {

  const { tasks } = useTask();
  const { handleOpenEditEditor, editingTask } = useEditor();

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
    <div>
      <section className={styles.section}>
        <h3 className="visuallyHidden">Список задач</h3>
        <ul className={styles.list}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onEdit={() => handleOpenEditEditor(task)}
              isActive={editingTask?.id === task.id}
              {...task}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};