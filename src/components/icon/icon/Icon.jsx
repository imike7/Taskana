import Plus from "../icons/plus";
import Storage from "../icons/storage";
import { classNames } from "@/utils";
import styles from "./icon.module.css";
import Sun from "@/components/icon/icons/sun/index.js";
import Moon from "@/components/icon/icons/moon/index.js";

const allIcons = {
  plus: Plus,
  storage: Storage,
  sun: Sun,
  moon: Moon
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