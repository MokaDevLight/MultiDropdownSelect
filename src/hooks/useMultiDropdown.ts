import { useState } from "react";
import {
  DropDownStateProps,
  ItemProps,
  UseDropdownType,
} from "../types/MultiDropdownSelectTypes";

export const useMultiDropdown = (items: ItemProps[]): UseDropdownType => {
  const [dropDownState, setDropdownState] = useState<
    DropDownStateProps<ItemProps>
  >({
    dropdownItems: items,
    isOpenDD: false,
    selectedItems: [],
  });

  const handleToggle = () => {
    setDropdownState((prevDropState) => ({
      ...prevDropState,
      isOpenDD: !prevDropState.isOpenDD,
    }));
  };

  const handleAddNewItem = (newItem: string) => {
    setDropdownState((prevDropState) => ({
      ...prevDropState,
      dropdownItems: [
        ...prevDropState.dropdownItems,
        {
          value: 1,
          text: newItem,
          icon: "",
        },
      ],
    }));
  };

  const handleSelectedItem = (item: ItemProps) => {
    setDropdownState((prevDropState) => ({
      ...prevDropState,
      selectedItems: [...prevDropState.selectedItems, item],
    }));
  };

  return {
    handleToggle,
    dropDownState,
    setDropdownState,
    handleAddNewItem,
    handleSelectedItem,
  };
};
