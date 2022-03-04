import React, { FC, useEffect, useState } from "react";
import CocktailCard from "../components/CocktailCard";
import cocktailCard from "../types/cocktailCard";

const Cocktails: FC = () => {
  const [cocktails, setCocktails] = useState<Array<cocktailCard>>([]);

  const fetchCocktails = async () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
    try {
      const response = await fetch(url);
      let data = await response.json();
      data = data.drinks.map((item: any) => {
        const {
          idDrink: id,
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = item;

        const isAlcoholic = strAlcoholic === "Alcoholic" ? true : false;
        let ingredientsArr = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        ingredientsArr = ingredientsArr.filter(
          (ingredient) => ingredient !== null
        );
        return { name, isAlcoholic, ingredientsArr, image, id };
      });
      setCocktails(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  if (cocktails.length === 0) {
    return (
      <div className="cocktails-page page-min-height container">
        <div className="big-loader cocktails-page__big-loader"></div>
      </div>
    );
  }

  return (
    <div className="cocktails-page">
      <div className=" container cocktails-page__container">
        {cocktails.map((cocktail) => (
          <CocktailCard
            {...cocktail}
            key={cocktail.id}
            cardClassName="cocktails-page__cocktail-card"
          />
        ))}
      </div>
    </div>
  );
};

export default Cocktails;
