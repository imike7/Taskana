import { TaskList } from '@/components';
import styles from './mainContainer.module.css';

const MainContainer = () => {

  return (
    <div className={styles.mainContainer}>
      <header className={styles.header}>
        <h2>Входящие</h2>
      </header>
      <TaskList />
    </div>
  );
}

export default MainContainer;