import React from "react";
import IDropdown from "./IDropdown";

const Dropdown: React.FunctionComponent<IDropdown> = ({ label, onChange, options }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(parseInt(event.target.value));
  };
  return (
    <div className="d-flex flex-column m-3">
      <label>{label}</label>
      <select onChange={handleChange}>
        <option>Options</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
