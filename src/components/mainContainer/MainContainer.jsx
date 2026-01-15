import styles from "./mainContainer.module.css";
import TaskList from "../taskList/TaskList.jsx";

const MainContainer = (props) => {
  const {} = props

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContainer__header}>
        <h1>Входящие</h1>
      </div>
      <TaskList />
    </div>
  )
}

export default MainContainer;