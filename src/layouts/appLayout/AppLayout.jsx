import { useEditor } from '@/hooks';
import { Header, Content, TaskEditor } from '@/components';
import styles from './appLayout.module.css';

const AppLayout = () => {

  const {
    editorRef,
  } = useEditor();

  return (
    <div className={styles.appLayout}>
      <h1 className="visuallyHidden">
        TaskanaApp — трекер задач
      </h1>
      <Header />
      <Content />
      <TaskEditor ref={editorRef} />
    </div>
  );
};

export default AppLayout;