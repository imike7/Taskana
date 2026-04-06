import { memo } from 'react';
import { NavBar, SideBar } from '@/components';
import IncomingTasks from '@/pages';
import styles from './content.module.css';

export const Content = memo(() => {

  return (
    <div className={styles.content}>
      <NavBar />
      <IncomingTasks />
      <SideBar />
    </div>
  )
});