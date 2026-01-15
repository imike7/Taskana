import styles from './appLayout.module.css'
import Header from "../../components/header/Header.jsx";
import Content from "../../components/content/Content.jsx";

const AppLayout = (props) => {
  const {} = props

  return (
    <div className={styles.appLayout}>
      <Header />
      <Content />
    </div>
  )
}

export default AppLayout