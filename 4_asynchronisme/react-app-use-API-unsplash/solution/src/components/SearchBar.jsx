import { useState } from "react";

export const SearchBar = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(keyword);
  };
  return (
    <div className="my-5">
      <form onSubmit={handleFormSubmit}>
        <input
          value={keyword}
          onChange={handleChange}
          type="text"
          name="price"
          id="price"
          className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="un mot"
        />
      </form>
    </div>
  );
};
