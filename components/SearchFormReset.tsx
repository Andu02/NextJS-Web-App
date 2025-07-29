"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) {
      form.reset();
    }
  };

  return (
    <button type="reset" className="search-button" onClick={reset}>
      <Link href="/">
        <Image
          src="/x-icon.png"
          width="20"
          height="20"
          alt={""}
          className="mr-2"
        />
      </Link>
    </button>
  );
};

export default SearchFormReset;
