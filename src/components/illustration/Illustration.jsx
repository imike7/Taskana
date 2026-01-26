import {classNames} from "@/utils/index.js";
import { Note, WellDone } from "./illustrations"

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
  }

  return (
    <span className={classNames(className, 'illustration')}>
      <ImageComponent />
    </span>
  )
}

export default Illustration;