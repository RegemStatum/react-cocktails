import React, { FC, useEffect, useState } from "react";
import CocktailCards from "../components/cocktails/CocktailCards";
import SearchCocktail from "../components/cocktails/SearchCocktail";
import cocktailCard from "../types/cocktailCard";
import { useAppContext } from "../context/AppProvider";

const Cocktails: FC = () => {
  const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const [cocktails, setCocktails] = useState<Array<cocktailCard>>([]);
  const [cocktailName, setCocktailName] = useState("");
  const { checkIsCocktailLiked } = useAppContext();

  useEffect(() => {
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

          const isLiked = checkIsCocktailLiked(id);

          return { name, isAlcoholic, ingredientsArr, image, id, isLiked };
        });

        setCocktails(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchCocktails(URL + cocktailName);
  }, [cocktailName, checkIsCocktailLiked]);

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
      <div className="container">
        <SearchCocktail
          cocktailName={cocktailName}
          handleSearch={handleSearch}
        />
      </div>
      <div className="container cocktails-page__container">
        <CocktailCards cocktails={cocktails} />
      </div>
    </div>
  );
};

export default Cocktails;
