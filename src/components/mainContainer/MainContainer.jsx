import { memo } from "react";
import { Dropdown, TaskList } from '@/components';
import styles from './mainContainer.module.css';

const MainContainer = () => {

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerWrapper}>
        <header className={styles.header}>
          <h2>Входящие</h2>
        </header>
        <Dropdown />
      </div>
      <TaskList />
    </div>
  );
}

export default memo(MainContainer);