import React, { FC } from "react";
import { Cocktails, Search } from "../components/cocktails";

const CocktailsPage: FC = () => {
  return (
    <div className="cocktails-page container">
      <Search />
      <Cocktails />
    </div>
  );
};

export default CocktailsPage;
