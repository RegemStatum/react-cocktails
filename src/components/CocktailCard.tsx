import React, { FC } from "react";
import InfoLabel from "./InfoLabel";
import likeBtn from "../assets/images/likeBtn.svg";

interface CocktailCardProps {
  name: string;
  isAlcoholic: boolean;
  ingredientsArr: Array<string>;
  image: string;
}

const CocktailCard: FC<CocktailCardProps> = ({
  name,
  isAlcoholic,
  ingredientsArr,
  image,
}) => {
  return (
    <div className="cocktail-card">
      <header className="cocktail-card__header">
        <div className="cocktail-card__header-inner-container">
          <h5 className="cocktail-card__name">{name}</h5>
          {isAlcoholic && (
            <InfoLabel
              text="alcoholic"
              containerClassName="cocktail-card__label-container"
              textClassName="cocktail-card__label"
            />
          )}
          <img src={likeBtn} alt="like" className="cocktail-card__like-btn" />
        </div>
      </header>
      <div className="cocktail-card__ingredients">
        {ingredientsArr.map((ingredient, index) => (
          <div className="cocktail-card__ingredient" key={index}>
            {ingredient}
          </div>
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
