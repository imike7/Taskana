import { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import { useEditor, useTask } from "@/hooks";

export const useTaskEditor = () => {
  const {
    handleCreateTask,
    handleUpdateTask,
    handleDeleteTask,
  } = useTask();

  const {
    isEditorOpen,
    editingTask,
    handleCloseEditor,
  } = useEditor();

  const [inputValue, setInputValue] = useState("");
  const [currentPriority, setCurrentPriority] = useState(1);
  const prevIsOpenRef = useRef(isEditorOpen);
  const inputRef = useRef(null);

  const isEditMode = !!editingTask;

  const isInputValid = useMemo(() => {
    return inputValue.trim() !== '';
  }, [inputValue]);

  const hasChanges = useMemo(() => {
    if (!isEditMode || !editingTask) return true;

    const isTitleChanged = inputValue.trim() !== editingTask.title;
    const isPriorityChanged = currentPriority !== editingTask.priority;

    return isTitleChanged || isPriorityChanged;
  }, [isEditMode, editingTask, inputValue, currentPriority]);

  const isSubmitDisabled = useMemo(() => {
    return !isInputValid || (isEditMode && !hasChanges);
  }, [isInputValid, isEditMode, hasChanges]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isEditorOpen) {
        handleCloseEditor();
      }
    };

    if (isEditorOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isEditorOpen, handleCloseEditor]);

  useEffect(() => {
    if (isEditorOpen && editingTask) {
      setInputValue(editingTask.title);
      setCurrentPriority(editingTask.priority);
    }
  }, [isEditorOpen, editingTask]);

  useEffect(() => {
    if (isEditorOpen && inputRef.current) {
      const timer = setTimeout(() => {
        inputRef.current.focus();
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [isEditorOpen, editingTask]);

  useEffect(() => {
    if (prevIsOpenRef.current === true && isEditorOpen === false) {
      setInputValue("");
      setCurrentPriority(1);

      if (inputRef.current) {
        inputRef.current.blur();
      }
    }
    prevIsOpenRef.current = isEditorOpen;
  }, [isEditorOpen]);

  useEffect(() => {
    if (isEditorOpen && editingTask === null) {
      setInputValue("");
      setCurrentPriority(1);
    }
  }, [isEditorOpen, editingTask]);

  const handleInputChange = useCallback((value) => {
    setInputValue(value);
  }, []);

  const handlePriorityClick = useCallback((priority) => {
    setCurrentPriority(priority);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!isSubmitDisabled) {
      if (isEditMode && handleUpdateTask) {
        handleUpdateTask(editingTask.id, inputValue, currentPriority);
        handleCloseEditor();
      } else if (handleCreateTask) {
        handleCreateTask(inputValue, currentPriority);
        handleCloseEditor();
      }
    }
  }, [isEditMode, handleUpdateTask, handleCreateTask, editingTask, inputValue, currentPriority, isSubmitDisabled, handleCloseEditor]);

  const handleDelete = useCallback(() => {
    if (isEditMode && handleDeleteTask) {
      handleDeleteTask(editingTask.id);
      handleCloseEditor();
    }
  }, [isEditMode, handleDeleteTask, editingTask, handleCloseEditor]);

  return {
    isEditorOpen,
    isEditMode,
    inputValue,
    currentPriority,
    isSubmitDisabled,
    inputRef,
    handleInputChange,
    handlePriorityClick,
    handleSubmit,
    handleDelete,
    handleCloseEditor
  };
};