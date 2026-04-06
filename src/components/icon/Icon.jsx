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
  Filter,
  NewOld,
  OldNew,
  NumBigToLow,
  NumLowToBig,
  Importance,
  Unimportant,
  Az,
  Za,
  Trash,
} from './icons';

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
  filter: Filter,
  newOld: NewOld,
  oldNew: OldNew,
  numBigToLow: NumBigToLow,
  numLowToBig: NumLowToBig,
  importance: Importance,
  unimportant: Unimportant,
  az: Az,
  za: Za,
  trash: Trash,
};

export const Icon = (props) => {
  const {
    name,
    color = "currentColor",
    className
  } = props;

  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Иконка "${name}" не найдена.`);
    return null;
  }

  return (
      <IconComponent color={color} className={className}/>
    )
}