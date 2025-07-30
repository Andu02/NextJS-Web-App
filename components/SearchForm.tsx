import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import Image from "next/image";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form
      key={query}
      action="/"
      scroll={false}
      className="search-form custom-shadow"
      autoComplete="off"
    >
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Posts"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}

        <button type="submit">
          <Image src="/search-icon.png" width="40" height="40" alt={""} />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
