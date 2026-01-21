import styles from './appLayout.module.css'

import { Header, Content } from "@/components"

const AppLayout = () => {

  return (
    <div className={styles.appLayout}>
      <Header />
      <Content />
    </div>
  )
}

export default AppLayout