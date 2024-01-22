import { useMemo } from "react";
import {
  ItemProps,
  ItemDropdownProps,
} from "../../../types/MultiDropdownSelectTypes";
import { IoMdCheckmark } from "react-icons/io";

function ItemDropdown({
  dropDownState,
  handleSelectedItem,
}: ItemDropdownProps) {
  const dropDownListItem: ItemProps[] = useMemo(() => {
    return dropDownState.dropdownItems;
  }, [dropDownState.dropdownItems]);

  return (
    <div
      className={`${
        dropDownState.isOpenDD ? "items_dropdown" : "items_dropdown_hide"
      }`}
    >
      <ul>
        {dropDownListItem.map((item, index) => (
          <li
            key={index}
            className={`list-item ${
              dropDownState?.selectedItems.includes(item) && "selected"
            }`}
            onClick={() => handleSelectedItem(item)}
          >
            <div>
              {item?.text} <span>{item?.icon}</span>
            </div>
            {dropDownState?.selectedItems.includes(item) && <IoMdCheckmark />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemDropdown;
