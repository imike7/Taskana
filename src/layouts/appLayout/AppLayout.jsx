import { Header, Content, TaskEditor } from '@/components';
import styles from './appLayout.module.css';

const AppLayout = () => {

  return (
    <div className={styles.appLayout}>
      <h1 className="visuallyHidden">
        TaskanaApp — трекер задач
      </h1>
      <Header />
      <Content />
      <TaskEditor />
    </div>
  );
};

export default AppLayout;