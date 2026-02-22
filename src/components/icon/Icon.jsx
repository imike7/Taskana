import {
  Loading,
  Moon,
  Plus,
  Storage,
  Sun,
  Logo,
  Edit,
  Check,
  XMark,
  ChevronBottom,
  ArrowTwo,
  ChevronTop,
  Minus,
} from "./icons";

const icons = {
  plus: Plus,
  storage: Storage,
  sun: Sun,
  moon: Moon,
  loading: Loading,
  logo: Logo,
  edit: Edit,
  check: Check,
  xMark: XMark,
  chevronBottom: ChevronBottom,
  arrowTwo: ArrowTwo,
  chevronTop: ChevronTop,
  minus: Minus,
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