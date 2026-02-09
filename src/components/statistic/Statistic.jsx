import styles from "./statistic.module.css";
import Illustration from "@/components/illustration";

const Statistic = (props) => {
  const {
    statisticData = []
  } = props

  if (statisticData.length === 0) {
    return (
      <div className={styles.statisticEmpty}>
        <Illustration name="note" />
        <p>
          Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику и самочувствие.
        </p>
      </div>
    )
  }
}

export default Statistic