import { TaskContext } from '@/context';
import { useContext } from 'react';

export const useTask = () => {
  const task = useContext(TaskContext);
  if (!task) {
    throw new Error('useTask должен использоваться внутри ThemeProvider')
  }
  return task
}