import styles from './content.module.css'

import { NavBar, SideBar } from "@/components"
import IncomingTasks from "@/pages/incomingTasks";

const Content = () => {

  return (
    <div className={styles.content}>
      <NavBar />
      <IncomingTasks />
      <SideBar className="content"/>
    </div>
  )
}

export default Content;