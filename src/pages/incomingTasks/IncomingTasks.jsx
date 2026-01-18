import styles from './incomingTasks.module.css'
import Footer from "../../components/footer";
import MainContainer from "../../components/mainContainer";

const IncomingTasks = () => {

  return (
    <div className={styles.incomingTasks}>
      <MainContainer />
      <Footer />
    </div>
  )
}

export default IncomingTasks