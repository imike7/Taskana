import { useTask } from '@/hooks';
import { Header, Content, TaskEditor } from '@/components';
import styles from './appLayout.module.css';

const AppLayout = () => {
  const {
    isEditorOpen,
    handleCloseEditor,
    handleCreateTask,
    handleOpenEditor,
  } = useTask();

  return (
    <div className={styles.appLayout}>
      <h1 className={styles.visuallyHidden}>
        TaskanaApp — трекер задач
      </h1>
      <Header onOpenEditor={handleOpenEditor}/>
      <Content />
      <TaskEditor
        isOpen={isEditorOpen}
        onCloseEditor={handleCloseEditor}
        onCreate={handleCreateTask}
      />
    </div>
  );
};

export default AppLayout;