import InputDropdow from "./components/InputDropdow";
import ItemDropdown from "./components/ItemDropdown";
import { MultiDropdownSelectProps } from "../../types/MultiDropdownSelectTypes";
import { useEffect, useRef } from "react";
import "../../styles/multiDropdownSelect.scss";

function MultiDropdownSelect({
  dropDownState,
  handleToggle,
  handleAddNewItem,
  handleSelectedItem,
  setDropdownState,
}: MultiDropdownSelectProps) {
  const multiDropdownSelectRef = useRef<any>(null);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (
        multiDropdownSelectRef.current &&
        !multiDropdownSelectRef.current.contains(event.target)
      ) {
        setDropdownState((prevDropState) => ({
          ...prevDropState,
          isOpenDD: false,
        }));
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="multi_dropdown_select" ref={multiDropdownSelectRef}>
      <InputDropdow
        {...{
          dropDownState,
          handleToggle,
          handleAddNewItem,
          setDropdownState,
        }}
      />
      <ItemDropdown
        {...{
          dropDownState,
          handleSelectedItem,
          setDropdownState,
        }}
      />
    </div>
  );
}

export default MultiDropdownSelect;
