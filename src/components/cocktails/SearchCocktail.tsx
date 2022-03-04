import React, { FC } from "react";

interface SearchCocktailProps {
  cocktailName: string;
  handleSearch: (e: React.SyntheticEvent) => void;
}

const SearchCocktail: FC<SearchCocktailProps> = ({
  cocktailName,
  handleSearch,
}) => {
  return (
    <div className="search-cocktail">
      <input type="text" value={cocktailName} onChange={handleSearch} />
    </div>
  );
};

export default SearchCocktail;
