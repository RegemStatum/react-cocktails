import React, { FC, useEffect, useState } from "react";
import CocktailCards from "../components/cocktails/CocktailCards";
import SearchCocktail from "../components/cocktails/SearchCocktail";
import cocktailCard from "../types/cocktailCard";

const Cocktails: FC = () => {
  const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const [cocktails, setCocktails] = useState<Array<cocktailCard>>([]);
  const [cocktailName, setCocktailName] = useState("");

  const fetchCocktails = async (query: string) => {
    try {
      const response = await fetch(query);
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
    fetchCocktails(URL + cocktailName);
  }, [cocktailName]);

  const handleSearch = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setCocktailName(target.value);
  };

  if (cocktails.length === 0) {
    return (
      <div className="cocktails-page page-min-height container">
        <div className="big-loader cocktails-page__big-loader"></div>
      </div>
    );
  }

  return (
    <div className="cocktails-page">
      <SearchCocktail cocktailName={cocktailName} handleSearch={handleSearch} />
      <div className=" container cocktails-page__container">
        <CocktailCards cocktails={cocktails} />
      </div>
    </div>
  );
};

export default Cocktails;
