import Statistic from "@/components/statistic";
import styles from "./sideBar.module.css";

const SideBar = () => {

  return (
    <aside className={styles.sideBar} aria-label="Статистика">
      <Statistic statisticData={[]}/>
    </aside>
  )
}

export default SideBar