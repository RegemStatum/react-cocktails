import React, { FC } from "react";
import { useAppContext } from "../../context/AppProvider";

const Search: FC = () => {
  const { favouriteCocktails } = useAppContext();
  console.log(favouriteCocktails);

  return <div>Search: {favouriteCocktails}</div>;
};

export default Search;
