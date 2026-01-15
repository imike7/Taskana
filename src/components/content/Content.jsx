import styles from './content.module.css'

import NavBar from "../navBar/navBar.jsx";
import IncomingTasks from "../../pages/incomingTasks/IncomingTasks.jsx";
import SideBar from "../sideBar/SideBar.jsx";

const Content = (props) => {
  const {} = props

  return (
    <div className={styles.content}>
      <NavBar />
      <IncomingTasks />
      <SideBar className="taskana__help"/>
    </div>
  )
}

export default Content;