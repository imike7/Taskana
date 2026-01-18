import styles from './appLayout.module.css'
import Header from "../../components/header";
import Content from "../../components/content";

const AppLayout = () => {

  return (
    <div className={styles.appLayout}>
      <Header />
      <Content />
    </div>
  )
}

export default AppLayout