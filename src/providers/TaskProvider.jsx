import {useState} from "react";
import TaskContext from "@/context/TaskContext";
import {EDITOR_TYPES} from "@/constants/edit";

const TaskProvider = ( {children} ) => {
  const [tasks, setTasks] = useState([])
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  // const [editingTask, setEditingTask] = useState(null)

  // const [type, setType] = useState(EDITOR_TYPES.CREATE)
  // const [editingTask, setEditingTask] = useState(null)

  const handleOpenTaskEditor = (type, id = '') => {
    // const editingTask = tasks.find((el) => el.id === id)
    // setEditingTask(editingTask ? { ...editingTask } : null)
    setIsEditorOpen(true)
    // setType(type)
  }

  const handleCloseTaskEditor = () => {
    setIsEditorOpen(false)
    // setEditingTask(null)
    // setType(EDITOR_TYPES.CREATE)
  }

  const addTask = (task) => {
    setTasks((prev) => {
      return [...prev, task]
    })
  }

  return (
    <TaskContext.Provider
      value={{
      isEditorOpen,
      handleOpenTaskEditor,
      handleCloseTaskEditor,
      tasks,
      addTask,
      // type,
    }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider