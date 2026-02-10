import {classNames} from "@/utils";
import styles from "./logo.module.css";
import {Icon} from "@/components";

const Logo = (props) => {
  const {
    className = '',
  } = props

  const title = 'На главную'

  return (
    <a
      className={classNames(className, styles.logo)}
      href="#"
      title={title}
      aria-label={title}
    >
      <Icon name="logo"/>
    </a>
  )
}

export default Logo