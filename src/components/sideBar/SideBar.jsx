import styles from './sideBar.module.css'

const SideBar = (props) => {
  const {
  } = props

  const {
    sideBar,
    sideBar__inner,
    sideBar__image,
    sideBar__description
  } = styles

  return (
    <div className={sideBar}>
      <div className={sideBar__inner}>
        <div className={sideBar__image}></div>
        <p className={sideBar__description}>
          Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику и самочувствие.
        </p>
      </div>
    </div>
  )
}

export default SideBar