import styles from './content.module.css'

import NavBar from "../navBar";
import IncomingTasks from "../../pages/incomingTasks";
import SideBar from "../sideBar";

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