import React, { useState } from "react";
import JsonInput from "./components/JsonInput";
import MultiSelect from "./components/MultiSelect";
import FilteredResponse from "./components/FilteredResponse";
import "./BajajFinservTest.css";

function BajajFinservTest() {
  const [apiResponse, setApiResponse] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleApiResponse = (response) => {
    setApiResponse(response);
  };

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  return (
    <div className="BajajFinservTest">
      <h1>21BCE10223</h1>
      <JsonInput onApiResponse={handleApiResponse} />
      {apiResponse && (
        <>
          <MultiSelect onChange={handleFilterChange} />
          <FilteredResponse response={apiResponse} filters={selectedFilters} />
        </>
      )}
    </div>
  );
}

export default BajajFinservTest;
