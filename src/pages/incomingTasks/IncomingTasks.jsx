import styles from './incomingTasks.module.css'
import Footer from "../../components/footer/Footer.jsx";
import MainContainer from "../../components/mainContainer/MainContainer.jsx";

const IncomingTasks = (props) => {
  const {
  } = props

  return (
    <div className={styles.incomingTasks}>
      <MainContainer />
      <Footer />
    </div>
  )
}

export default IncomingTasks