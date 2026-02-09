import {classNames} from "@/utils";
import { Note, WellDone } from "./illustrations"
import styles from "./lllustration.module.css"

const allImages = {
  wellDone: WellDone,
  note: Note,
}

const Illustration = (props) => {
  const {
    className,
    name,
  } = props

  const ImageComponent = allImages[name]

  if (!ImageComponent) {
    console.warn(`Изображение "${name}" не найдено.`);
    return null;
  }

  return (
    <span className={classNames(styles.illustration, className)}>
      <ImageComponent />
    </span>
  )
}

export default Illustration;