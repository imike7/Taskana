import Plus from "../icons/plus";
import Storage from "../icons/storage";

const allIcons = {
  plus: Plus,
  storage: Storage,
}

const Icon = (props) => {
  const {
    name,
    size = 24,
    color = 'currentColor',
    onClick,
    style,
  } = props

  const IconComponent = allIcons[name]

  if (!IconComponent) {
    return <div style={{ color: 'red' }}>Иконка "{name}" не найдена</div>;
  }

  const iconStyle = {
    width: `${size}px`,
    height: `${size}px`,
    color: color,
    cursor: onClick ? 'pointer' : 'default',
    ...style,
  };

  return <IconComponent style={iconStyle} onClick={onClick} />;
}

export default Icon