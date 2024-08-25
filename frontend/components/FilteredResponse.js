import React from "react";

function FilteredResponse({ response, filters }) {
  const getFilteredData = () => {
    let result = [];

    if (filters.includes("Numbers")) {
      result.push(`Numbers: ${response.numbers.join(",")}`);
    }
    if (filters.includes("Alphabets")) {
      result.push(`Alphabets: ${response.alphabets.join(",")}`);
    }
    if (filters.includes("Highest lowercase alphabet")) {
      result.push(
        `Highest lowercase alphabet: ${response.highest_lowercase_alphabet.join(
          ","
        )}`
      );
    }

    return result;
  };

  return (
    <div>
      <h2>Filtered Response</h2>
      {getFilteredData().map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default FilteredResponse;
