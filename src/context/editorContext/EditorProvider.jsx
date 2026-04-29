import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { EditorContext } from '@/context';

export const EditorProvider = ({ children }) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [isOpening, setIsOpening] = useState(false);
  const editorRef = useRef(null);

  const handleOpenCreateEditor = useCallback(() => {
    setIsOpening(true);
    setEditingTask(null);
    setIsEditorOpen(true);

    setTimeout(() => {
      setIsOpening(false);
    }, 400);
  }, []);

  const handleOpenEditEditor = useCallback((task) => {
    setEditingTask(task);
    setIsEditorOpen(true);
  }, []);

  const handleCloseEditor = useCallback(() => {
    setIsEditorOpen(false);
  }, []);

  useEffect(() => {
    let timer = null;
    if (!isEditorOpen) {
      timer = setTimeout(() => {
        setEditingTask(null);
      }, 300);
    }

    return () => clearTimeout(timer)
  }, [isEditorOpen]);


  const handleClickOverlay = useCallback((event) => {
    if (isOpening) return;

    const isClickOnExcluded = event.target.closest('[data-close-exclude]');

    const isClickOutside =
      editorRef.current &&
      !editorRef.current.contains(event.target) &&
      !isClickOnExcluded;

    if (isClickOutside) {
      setIsEditorOpen(false);
    }
  }, [isOpening]);

  useEffect(() => {
    if (isEditorOpen) {
      document.addEventListener("click", handleClickOverlay);
    }

    return () => {
      document.removeEventListener("click", handleClickOverlay);
    };
  }, [isEditorOpen, handleClickOverlay]);


  const value = useMemo(() => ({
    isEditorOpen,
    editingTask,
    editorRef,
    handleOpenCreateEditor,
    handleOpenEditEditor,
    handleCloseEditor,
  }), [
    isEditorOpen,
    editingTask,
    editorRef,
    handleOpenCreateEditor,
    handleOpenEditEditor,
    handleCloseEditor,
  ]);

  return (
    <EditorContext value={value}>
      {children}
    </EditorContext>
  );
};