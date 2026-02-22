import {Icon} from "@/components";
import {classNames} from "@/utils";
import {PRIORITIES} from "@/constants/priorities";
import styles from './priorityButton.module.css'

/*const priorityIcons = {
  1: <Icon name="minus"/>,
  2: <Icon name="chevron-top"/>,
  3: <Icon name="arrow-two"/>
}*/

const PriorityButton = (props) => {
  const {
    iconName,
    priority,
    selected,
    onClick,
  } = props

  const priorityName = PRIORITIES[priority]

  return (
    <button
      className={classNames(styles.button, styles[priorityName], selected && styles.selected)}
      onClick={onClick}
      aria-label={`${priorityName} priority button`}
      title={`${priorityName} priority button`}
      type="button"
    >
      {/*{priorityIcons[priority]}*/}
      <Icon name={iconName}/>
    </button>
  )
}

export default PriorityButton