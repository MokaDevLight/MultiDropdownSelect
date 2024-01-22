import { useEffect, useMemo, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { InputDropdowProps } from "../../../types/MultiDropdownSelectTypes";

function InputDropdow({
  handleToggle,
  dropDownState,
  handleAddNewItem,
}: InputDropdowProps) {
  const inputRef = useRef<any>(null);

  const selectedValues: string = useMemo(() => {
    return dropDownState.selectedItems.map((item) => item.text).join(",");
  }, [dropDownState.selectedItems]);

  useEffect(() => {
    inputRef.current.value = dropDownState.selectedItems
      .map((item) => item.text)
      .join(",");
  }, [selectedValues]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputRef.current?.value.trim() !== "") {
      const newItem = inputRef.current.value.trim();
      if (!dropDownState.dropdownItems.includes(newItem)) {
        handleAddNewItem(newItem);
      }
      inputRef.current.value = dropDownState.selectedItems
        .map((item) => item.text)
        .join(",");
    }
  };

  return (
    <div className="wrap_input">
      <input
        type="text"
        placeholder="Type new item"
        className="multi_dropdown_select_input"
        ref={inputRef}
        defaultValue={inputRef.current}
        onKeyDown={handleKeyDown}
      />
      <IoIosArrowDown
        className={`toggle_icon ${
          dropDownState.isOpenDD ? "openDropdown" : ""
        } `}
        onClick={handleToggle}
      />
    </div>
  );
}

export default InputDropdow;
