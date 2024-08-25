import React, { useState } from "react";

function JsonInput({ onApiResponse }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const jsonData = JSON.parse(input);

      const response = await fetch("http://localhost:3000/bfhl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();
      onApiResponse(data);
    } catch (err) {
      setError("Invalid JSON input or API error");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter JSON (e.g., {"data": ["A","C","z"]})'
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default JsonInput;
