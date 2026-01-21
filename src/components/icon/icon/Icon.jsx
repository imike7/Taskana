import Plus from "../icons/plus";
import Storage from "../icons/storage";
import { classNames } from "@/utils";
import styles from "./icon.module.css";

const allIcons = {
  plus: Plus,
  storage: Storage,
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
      <IconComponent />;
    </span>
    )
}

export default Icon