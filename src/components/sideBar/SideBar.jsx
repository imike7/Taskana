import styles from './sideBar.module.css'
import SideBarImage from '../../assets/icons/note.svg'

const SideBar = () => {

  const {
    sideBar,
    sideBar__description
  } = styles

  return (
    <aside className={sideBar}>
        <img
          src={SideBarImage}
          alt=""
          width={231}
          height={168}
        />
        <p className={sideBar__description}>
          Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику и самочувствие.
        </p>
    </aside>
  )
}

export default SideBar