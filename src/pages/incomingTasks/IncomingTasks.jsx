import styles from './incomingTasks.module.css'

import { Footer, MainContainer } from "@/components"

const IncomingTasks = () => {

  return (
    <div className={styles.incomingTasks}>
      <MainContainer />
      <Footer />
    </div>
  )
}

export default IncomingTasks