import {Header, Content, TaskEditor} from "@/components"
import taskList from "@/components/taskList";
import {generateId} from "@/utils";
import styles from './appLayout.module.css'
// import {useTask} from "@/hooks/useTask";
import {useState, useEffect} from "react";

const AppLayout = () => {
  // const { isEditorOpen, handleCloseTaskEditor, addTask } = useTask()
  const [isEditorOpen, setIsEditorOpen] = useState(false)

  const [tasks, setTasks] = useState([])

/*  const handleCreateTask = (title, priority) => {
    setTasks([
        ...taskList,
      {
        id: generateId(),
        title,
        priority,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ])
  }*/

  useEffect(() => {
    document.addEventListener('focusin', (evt) => {
      console.log(evt.target);
    })
  }, [])

  const handleOpenEditor = () => {
    setIsEditorOpen(true);
  }

  const handleCloseEditor = () => {
    setIsEditorOpen(false);
  };

  const handleCreateTask = (title, priority) => {
    const newTask = {
      id: generateId(),
      title,
      priority,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      completed: false,
    };

    setTasks(prevTasks => [...prevTasks, newTask].slice().reverse());
    handleCloseEditor(); // Закрываем редактор после создания
  }

  const handleToggleComplete = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, completed: !task.completed, updatedAt: new Date().toISOString() }
          : task
      )
    );
  }

  return (
    <div className={styles.appLayout}>
      <Header onOpenEditor={handleOpenEditor}/>
      <Content tasks={tasks} onToggleComplete={handleToggleComplete}/>
      <TaskEditor
        // isEditorOpen={isEditorOpen}
        // setIsEditorOpen={handleCloseTaskEditor}
        // onCreate={handleCreate}

        // inputRef={inputRef}
        // editingTask={editingTask}
        isOpen={isEditorOpen}
        onCloseEditor={handleCloseEditor}
        onCreate={handleCreateTask}
      />
    </div>
  )
}

export default AppLayout