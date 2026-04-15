import { useCallback, useEffect, useRef, useState } from "react";
import { DROPDOWN_ITEMS } from "@/constants";
import { useTask } from "@/context";

export const useDropdown = () => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(DROPDOWN_ITEMS[4]);
  const { sortingTasks } = useTask()

  const handleOpenDropdown = () => {
    setIsOpen((prev) => !prev);
  }

  const handleSelectItem = ({ icon, label, value }) => {
    setSelectedItem({ icon, label, value});
    sortingTasks(value);
    setIsOpen(false);
    dropdownRef.current?.focus();
  }

  const handleEscapeKey = useCallback((event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  }, []);

  const handleBlur = useCallback((event) => {

    const isClickOnExcluded = event.relatedTarget?.closest?.('[data-close-exclude]');

    if (isClickOnExcluded) {
      return;
    }

    const isBlurInside = dropdownRef.current && !dropdownRef.current?.contains(event.relatedTarget);

    if (isBlurInside && isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    const dropdownElement = dropdownRef.current;
    if (dropdownElement) {
      dropdownElement.addEventListener("blur", handleBlur, true);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);

      if (dropdownElement) {
        dropdownElement.removeEventListener("blur", handleBlur, true);
      }
    };
  }, [isOpen, handleBlur, handleEscapeKey]);

  return {
    dropdownRef,
    isOpen,
    selectedItem,
    handleOpenDropdown,
    handleSelectItem,
  }
}