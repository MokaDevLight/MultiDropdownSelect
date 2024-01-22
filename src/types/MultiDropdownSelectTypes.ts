export interface MultiDropdownSelectProps {
  dropDownState: DropDownStateProps<ItemProps>;
  handleToggle: () => void;
  handleAddNewItem: (newItem: string) => void;
  handleSelectedItem: (selectedItem: ItemProps) => void;
  setDropdownState: React.Dispatch<
    React.SetStateAction<DropDownStateProps<ItemProps>>
  >;
}

export interface DropDownStateProps<T> {
  dropdownItems: Array<T>;
  isOpenDD: boolean;
  selectedItems: ItemProps[];
}

export interface InputDropdowProps {
  dropDownState: DropDownStateProps<ItemProps>;
  handleToggle: () => void;
  handleAddNewItem: (newItem: string) => void;
  setDropdownState: React.Dispatch<
    React.SetStateAction<DropDownStateProps<ItemProps>>
  >;
}

export interface ItemDropdownProps {
  dropDownState: DropDownStateProps<ItemProps>;
  handleSelectedItem: (selectedItem: ItemProps) => void;
  setDropdownState: React.Dispatch<
    React.SetStateAction<DropDownStateProps<ItemProps>>
  >;
}

export interface ItemProps {
  value: number;
  text: string;
  icon: React.ReactNode;
}
export interface UseDropdownType {
  handleToggle: () => void;
  dropDownState: DropDownStateProps<ItemProps>;
  setDropdownState: React.Dispatch<
    React.SetStateAction<DropDownStateProps<ItemProps>>
  >;
  handleAddNewItem: (newItem: string) => void;
  handleSelectedItem: (selectedItem: ItemProps) => void;
}
