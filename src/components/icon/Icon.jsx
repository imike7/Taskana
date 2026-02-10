import { Loading, Moon, Plus, Storage, Sun, Logo } from "./icons";

const icons = {
  plus: Plus,
  storage: Storage,
  sun: Sun,
  moon: Moon,
  loading: Loading,
  logo: Logo,
}

const Icon = (props) => {
  const {
    name,
    color = 'currentColor',
  } = props

  const IconComponent = icons[name]

  if (!IconComponent) {
    console.warn(`Иконка "${name}" не найдена.`);
    return null;
  }

  return (
      <IconComponent color={color} />
    )
}

export default Icon