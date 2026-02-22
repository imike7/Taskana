import { Footer, MainContainer } from "@/components"
import styles from './incomingTasks.module.css'

const IncomingTasks = ({tasks, onToggleComplete}) => {

  return (
    <div className={styles.incomingTasks}>
      <MainContainer tasks={tasks} onToggleComplete={onToggleComplete}/>
      <Footer />
    </div>
  )
}

export default IncomingTasks