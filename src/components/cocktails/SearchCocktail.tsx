import React, { FC, useEffect, useRef } from "react";

interface SearchCocktailProps {
  cocktailName: string;
  handleSearch: (e: React.SyntheticEvent) => void;
}

const SearchCocktail: FC<SearchCocktailProps> = ({
  cocktailName,
  handleSearch,
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  // change label position if there is some value in the input
  useEffect(() => {
    if (searchInputRef.current?.value !== "") {
      searchInputRef.current?.classList.add("input_active");
    } else {
      searchInputRef.current?.classList.remove("input_active");
    }
  }, [searchInputRef.current?.value]);

  return (
    <div className="search-cocktail">
      <form
        className="search-cocktail__form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="search-cocktail__input-container input-container">
          <input
            type="text"
            className="input search-cocktail__input"
            value={cocktailName}
            onChange={handleSearch}
            id="search-query"
            name="search-query"
            ref={searchInputRef}
          />
          <label
            htmlFor="search-query"
            className="search-cocktail__label label"
          >
            Enter cocktail name here
          </label>
        </div>
      </form>
    </div>
  );
};

export default SearchCocktail;
