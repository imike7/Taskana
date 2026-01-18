import styles from "./mainContainer.module.css";
import TaskList from "../taskList";

const MainContainer = () => {

  return (
    <div className={styles.mainContainer}>
      <header className={styles.mainContainer__header}>
        <h1>Входящие</h1>
      </header>
      <TaskList />
    </div>
  )
}

export default MainContainer;