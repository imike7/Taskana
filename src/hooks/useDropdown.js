import { useCallback, useEffect, useRef, useState } from "react";
import { dropdownItems } from "@/components/dropdown";
import { useTask } from "@/hooks";

export const useDropdown = () => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const[selectedItem, setSelectedItem] = useState(dropdownItems[4]);
  const { sortingTasks, sortBy } = useTask()

  useEffect(() => {
    const currentItem = dropdownItems.find(item => item.value === sortBy);
    if (currentItem && currentItem.value !== selectedItem.value) {
      setSelectedItem(currentItem);
    }
  }, [sortBy, selectedItem.value]);

  const handleOpenDropdown = () => {
    setIsOpen((prev) => !prev);
  }

  const handleSelectItem = ({ icon, label, value }) => {
    setSelectedItem({ icon, label, value});
    sortingTasks(value);
    setIsOpen(false);
  }

  const handleClickOverlay = useCallback((event) => {
    const isClickOutside = dropdownRef.current && !dropdownRef.current.contains(event.target);

    if (isClickOutside) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOverlay);
    }

    return () => {
      document.removeEventListener("click", handleClickOverlay);
    };
  }, [isOpen, handleClickOverlay]);

  return {
    dropdownRef,
    isOpen,
    selectedItem,
    handleOpenDropdown,
    handleSelectItem,
  }
}