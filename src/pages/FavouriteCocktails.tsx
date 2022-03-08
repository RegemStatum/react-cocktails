import React, { FC } from "react";
import CocktailCard from "../components/CocktailCard";
import { useAppContext } from "../context/AppProvider";

const FavouriteCocktails: FC = () => {
  const { favourites: cocktails } = useAppContext();

  return (
    <div className="container favourites-page page-min-height">
      {cocktails.map((cocktail) => (
        <CocktailCard
          {...cocktail}
          key={cocktail.id}
          cardClassName="cocktails-page__cocktail-card"
        />
      ))}
    </div>
  );
};

export default FavouriteCocktails;
