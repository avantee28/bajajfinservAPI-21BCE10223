import React from "react";

function MultiSelect({ onChange }) {
  const options = ["Alphabets", "Numbers", "Highest lowercase alphabet"];

  const handleChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    onChange(selectedOptions);
  };

  return (
    <select multiple onChange={handleChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default MultiSelect;
