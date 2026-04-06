import { useMemo, memo } from "react";
import { useDropdown } from "./useDropdown";
import { Button, Icon } from "@/components";
import { DROPDOWN_ITEMS } from "@/constants";
import { classNames } from "@/utils";
import styles from './dropdown.module.css'

export const Dropdown = memo(() => {
  const {
    dropdownRef,
    isOpen,
    selectedItem,
    handleOpenDropdown,
    handleSelectItem,
  } = useDropdown()

  const renderedItems = useMemo(() => {
    return DROPDOWN_ITEMS.map((item) => {
      const isSelected = selectedItem.value === item.value && item.value !== 'header';

      return (
        <li key={item.value} className={styles.menuItem}>
          <Button
            text={item.label}
            iconName={item.icon}
            className={classNames(styles.menuButton)}
            onClick={() => handleSelectItem(item)}
            disableLoading
          >
            {isSelected && (
              <Icon name='check' className={styles.checkIcon}/>
            )}
          </Button>
        </li>
      );
    });
  }, [selectedItem.value, handleSelectItem]);

  return (
    <div className={styles.dropdownWrapper} ref={dropdownRef}>
      <Button
        className={classNames(styles.dropdownButton, isOpen && styles.activeDropdown)}
        text={`По ${selectedItem?.label.toLowerCase() ?? ''}`}
        iconName={selectedItem?.icon ?? DROPDOWN_ITEMS.icon}
        hasChevron
        isActive={isOpen}
        onClick={handleOpenDropdown}
        disableLoading
      />
      <div
        className={classNames(styles.dropdownMenu, isOpen && styles.isOpen)}
      >
        <div className={styles.dropdownHeader}>
          <Icon name="filter" />
          <span className={styles.title}>
            Сортировка по:
          </span>
        </div>
        <ul className={styles.dropdownList}>
          {renderedItems}
        </ul>
      </div>
    </div>
  );
})