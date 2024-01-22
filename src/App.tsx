import MultiDropdownSelect from "./components/MultiDropdownSelect/MultiDropdownSelect";
import { useMultiDropdown } from "./hooks/useMultiDropdown";
import { FaCarAlt, FaTrain } from "react-icons/fa";

function App() {
  const items = [
    {
      value: 1,
      text: "Car",
      icon: <FaCarAlt />,
    },
    {
      value: 2,
      text: "Train",
      icon: <FaTrain />,
    },
  ];
  const {
    dropDownState,
    handleToggle,
    handleAddNewItem,
    handleSelectedItem,
    setDropdownState,
  } = useMultiDropdown(items);
  return (
    <div className="App">
      <MultiDropdownSelect
        {...{
          dropDownState,
          handleSelectedItem,
          handleToggle,
          handleAddNewItem,
          setDropdownState,
        }}
      />
    </div>
  );
}

export default App;
