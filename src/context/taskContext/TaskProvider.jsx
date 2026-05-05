import { useState, useMemo, useCallback } from 'react';
import { TaskContext } from '@/context';
import { generateId, sortFunctions } from '@/utils';

export const TaskProvider = ( {children} ) => {
  const [tasks, setTasks] = useState([]);
  const [sortBy, setSortBy] = useState('updatedAt:desc')

  const handleCreateTask = useCallback((title, priority) => {
    const newTask = {
      id: generateId(),
      title,
      priority,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isDone: false,
    };
    setTasks(prev => [...prev, newTask]);
    }, []);

  const handleUpdateTask = useCallback((id, title, priority) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? {
            ...task, title, priority, updatedAt: new Date().toISOString()
          }
          : task
      )
    );
  }, []);

  const handleToggleComplete = useCallback((taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, isDone: !task.isDone, updatedAt: new Date().toISOString() }
          : task
      )
    );
  }, []);

  const handleDeleteTask = useCallback((id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }, []);

  const sortingTasks = useCallback((sortValue) => {
    setSortBy(sortValue);
  }, []);

  const sortedTasks = useMemo(() => {
    const sortFunction = sortFunctions[sortBy];
    if (!sortFunction) return tasks;

    return [...tasks].sort(sortFunction);
  }, [tasks, sortBy]);

  const value = useMemo(() => ({
    tasks: sortedTasks,
    sortBy,
    sortingTasks,
    handleCreateTask,
    handleUpdateTask,
    handleDeleteTask,
    handleToggleComplete,
  }), [
    sortedTasks,
    sortBy,
    sortingTasks,
    handleCreateTask,
    handleUpdateTask,
    handleDeleteTask,
    handleToggleComplete,
  ]);

  return (
    <TaskContext value={value}>
      {children}
    </TaskContext>
  );
};