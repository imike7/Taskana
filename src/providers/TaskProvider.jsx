import { useState, useMemo } from 'react';
import { TaskContext } from '@/context';
import { generateId } from '@/utils';

export const TaskProvider = ( {children} ) => {
  const [tasks, setTasks] = useState([]);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const handleOpenEditor = () => {
    setIsEditorOpen(true)
  };

  const handleCloseEditor = () => {
    setIsEditorOpen(false)
  };

  const handleCreateTask = (title, priority) => {
    const newTask = {
      id: generateId(),
      title,
      priority,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isDone: false,
    };

    setTasks(prevTasks => [...prevTasks, newTask]);
    handleCloseEditor();
  };

  const handleToggleComplete = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, isDone: !task.isDone, updatedAt: new Date().toISOString() }
          : task
      )
    );
  }

  const sortedTasks = useMemo(() => {
    return tasks.slice().reverse();
  }, [tasks]);

  const value = {
    tasks: sortedTasks,
    isEditorOpen,
    handleOpenEditor,
    handleCloseEditor,
    handleCreateTask,
    handleToggleComplete,
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};