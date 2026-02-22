import { TaskList } from "@/components";
import styles from "./mainContainer.module.css";

const MainContainer = ({tasks, onToggleComplete}) => {

  return (
    <div className={styles.mainContainer}>
      <header className={styles.header}>
        <h1>Входящие</h1>
      </header>
      <TaskList tasks={tasks} onToggleComplete={onToggleComplete}/>
    </div>
  )
}

export default MainContainer;