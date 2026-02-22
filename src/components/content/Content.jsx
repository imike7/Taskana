import { NavBar, SideBar } from "@/components"
import IncomingTasks from "@/pages/incomingTasks";
import styles from './content.module.css'

const Content = ({tasks, onToggleComplete}) => {

  return (
    <div className={styles.content}>
      <NavBar />
      <IncomingTasks tasks={tasks} onToggleComplete={onToggleComplete}/>
      <SideBar />
    </div>
  )
}

export default Content;