import styles from './sideBar.module.css'
import SideBarImage from '@/assets/icons/note.svg'
import Illustration from "@/components/illustration/index.js";

const DESCRIPTION = "Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику и самочувствие."

const SideBar = () => {

  return (
    <aside className={styles.sideBar}>
      <div className={styles.inner}>
{/*        <img
          src={SideBarImage}
          alt=""
          width={231}
          height={168}
        />*/}
        <Illustration name="note" />
        <p className={styles.description}>
          {DESCRIPTION}
        </p>
      </div>
    </aside>
  )
}

export default SideBar