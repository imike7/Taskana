import { classNames } from "@/utils/index.js";
import styles from "./icon.module.css";
import { Loading, Moon, Plus, Storage, Sun } from "./icons";

const allIcons = {
  plus: Plus,
  storage: Storage,
  sun: Sun,
  moon: Moon,
  loading: Loading
}

const Icon = (props) => {
  const {
    className,
    name,
  } = props

  const IconComponent = allIcons[name]

  if (!IconComponent) {
    console.warn(`Иконка "${name}" не найдена.`);
  }

  return (
    <span className={classNames(styles.icon, className)}>
      <IconComponent />
    </span>
    )
}

export default Icon