import { useState, useEffect, useMemo, useCallback } from 'react';
import { EditorContext } from '@/context';

export const EditorProvider = ({ children }) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleOpenCreateEditor = useCallback(() => {
    setEditingTask(null);
    setIsEditorOpen(true);
  }, []);

  const handleOpenEditEditor = useCallback((task) => {
    setEditingTask(task);
    setIsEditorOpen(true);
  }, []);

  const handleCloseEditor = useCallback(() => {
    setIsEditorOpen(false);
  }, []);

  useEffect(() => {
    if (!isEditorOpen) {
      const timer = setTimeout(() => {
        setEditingTask(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isEditorOpen]);

  const value = useMemo(() => ({
    isEditorOpen,
    editingTask,
    handleOpenCreateEditor,
    handleOpenEditEditor,
    handleCloseEditor,
  }), [
    isEditorOpen,
    editingTask,
    handleOpenCreateEditor,
    handleOpenEditEditor,
    handleCloseEditor,
  ]);

  return (
    <EditorContext.Provider value={value}>
      {children}
    </EditorContext.Provider>
  );
};