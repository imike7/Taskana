import { useEditor, useTask } from '@/hooks';
import { Header, Content, TaskEditor } from '@/components';
import styles from './appLayout.module.css';

const AppLayout = () => {
  const {
    handleCreateTask,
    handleUpdateTask,
    handleDeleteTask,
  } = useTask();

  const {
    isEditorOpen,
    editingTask,
    handleCloseEditor,
  } = useEditor();

  return (
    <div className={styles.appLayout}>
      <h1 className={styles.visuallyHidden}>
        TaskanaApp — трекер задач
      </h1>
      <Header />
      <Content />
      <TaskEditor
        isOpen={isEditorOpen}
        onCloseEditor={handleCloseEditor}
        onCreate={handleCreateTask}
        onUpdate={handleUpdateTask}
        onDelete={handleDeleteTask}
        editingTask={editingTask}
      />
    </div>
  );
};

export default AppLayout;