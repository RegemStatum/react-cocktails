import React, { FC } from "react";
import InfoLabel from "./InfoLabel";
import likeBtn from "../assets/images/likeBtn.svg";

interface CocktailCardProps {
  name: string;
  isAlcoholic: boolean;
  ingredientsArr: Array<string>;
  image: string;
  cardClassName?: string;
}

const CocktailCard: FC<CocktailCardProps> = ({
  name,
  isAlcoholic,
  ingredientsArr,
  image,
  cardClassName = "",
}) => {
  return (
    <div className={`cocktail-card ${cardClassName}`}>
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
            <img src={likeBtn} alt="like" className="cocktail-card__like-btn" />
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
