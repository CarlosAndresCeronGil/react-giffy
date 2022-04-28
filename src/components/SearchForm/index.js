import React, { useState } from "react";

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = () => {
    onSubmit({ keyword });
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search a gif..."
        onChange={handleChange}
        type="text"
        value={keyword}
      ></input>
    </form>
  );
}

export default React.memo(SearchForm)
