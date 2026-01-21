import styles from "./mainContainer.module.css";
import { TaskList } from "@/components";

const MainContainer = () => {

  return (
    <div className={styles.mainContainer}>
      <header className={styles.header}>
        <h1>Входящие</h1>
      </header>
      <TaskList />
    </div>
  )
}

export default MainContainer;