import React, { FC } from "react";
import cocktailCard from "../../types/cocktailCard";
import CocktailCard from "../CocktailCard";

interface CocktailCardsProps {
  cocktails: Array<cocktailCard>;
}

const CocktailCards: FC<CocktailCardsProps> = ({ cocktails }) => {
  return (
    <>
      {cocktails.map((cocktail) => (
        <CocktailCard
          {...cocktail}
          key={cocktail.id}
          cardClassName="cocktails-page__cocktail-card"
        />
      ))}
    </>
  );
};

export default CocktailCards;
