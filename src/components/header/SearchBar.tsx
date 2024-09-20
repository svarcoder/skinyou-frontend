import React, { useState, useEffect } from "react";

interface SubItem {
  path: string;
  label: string;
}

interface SearchBarProps {
  data: SubItem[];
  onSearch: (results: SubItem[]) => void;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  handleInputBlur: () => void
}

const SearchBar: React.FC<SearchBarProps> = ({
  data,
  onSearch,
  query,
  setQuery,
  handleInputBlur
}) => {
  useEffect(() => {
    if (query === "") {
      onSearch([]);
    } else {
      const filteredResults = data.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      onSearch(filteredResults);
    }
  }, [query, data, onSearch]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
      className="border rounded p-2 w-full"
      onBlur={handleInputBlur}
    />
  );
};

export default SearchBar;
