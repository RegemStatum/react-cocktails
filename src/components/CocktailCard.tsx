import React, { FC, useState } from "react";
import InfoLabel from "./InfoLabel";
import likeBtn from "../assets/images/likeBtn.svg";
import cocktailCard from "../types/cocktailCard";
import { useAppContext } from "../context/AppProvider";

interface CocktailCardProps extends cocktailCard {
  cardClassName?: string;
}

const CocktailCard: FC<CocktailCardProps> = ({
  name,
  isAlcoholic,
  ingredientsArr,
  image,
  cardClassName = "",
  id,
  isLiked,
}) => {
  const [isLikedCur, setIsLikedCur] = useState(isLiked);

  const { addToFavourites, removeFromFavourites, checkIsCocktailLiked } =
    useAppContext();

  const handleLikeClick = () => {
    const isLiked = checkIsCocktailLiked(id);
    setIsLikedCur(!isLiked);

    if (!isLiked) {
      addToFavourites({
        name,
        isAlcoholic,
        ingredientsArr,
        image,
        id,
        isLiked,
      });
    } else {
      removeFromFavourites(id);
    }
  };

  return (
    <div className={`cocktail-card ${cardClassName}`} key={id}>
      <header className="cocktail-card__header">
        <div className="cocktail-card__header-inner-container">
          <h5 className="cocktail-card__name">{name}</h5>
          <div className="cocktail-card__label-like-container">
            <InfoLabel
              text={isAlcoholic ? "alcoholic" : "non-alcoholic"}
              containerClassName={`cocktail-card__label-container ${
                isAlcoholic
                  ? "cocktail-card__label-container_alcoholic"
                  : "cocktail-card__label-container_non-alcoholic"
              }`}
              textClassName={`cocktail-card__label ${
                isAlcoholic
                  ? "cocktail-card__label_alcoholic"
                  : "cocktail-card__label_non-alcoholic"
              }`}
            />
            <img
              src={likeBtn}
              alt="like"
              className={`cocktail-card__like-btn ${
                isLikedCur ? "cocktail-card__like-btn_liked" : ""
              }`}
              onClick={handleLikeClick}
            />
          </div>
        </div>
      </header>
      <div className="cocktail-card__ingredients">
        <p className="cocktail-card__ingredient-title">Ingredients: </p>
        {ingredientsArr.map((ingredient, index) => (
          <p className="cocktail-card__ingredient" key={index}>
            · {ingredient}
          </p>
        ))}
      </div>
      <img
        src={image}
        alt={`cocktail-${name}`}
        className="cocktail-card__image"
      />
    </div>
  );
};

export default CocktailCard;
