import { Footer, MainContainer } from "@/components"

import styles from './incomingTasks.module.css'

const IncomingTasks = () => {

  return (
    <div className={styles.incomingTasks}>
      <MainContainer />
      <Footer />
    </div>
  )
}

export default IncomingTasks