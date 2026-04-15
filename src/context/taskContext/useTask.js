import { use } from 'react';
import { TaskContext } from '@/context';

export const useTask = () => {
  const task = use(TaskContext);
  if (!task) {
    throw new Error('useTask должен использоваться внутри TaskProvider')
  }
  return task
};