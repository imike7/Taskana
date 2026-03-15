import { memo } from 'react'
import { Footer, MainContainer } from '@/components';
import styles from './incomingTasks.module.css';

const IncomingTasks = () => {

  return (
    <main className={styles.incomingTasks}>
      <MainContainer />
      <Footer />
    </main>
  );
};

export default memo(IncomingTasks);