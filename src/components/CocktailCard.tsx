import React, { FC } from "react";

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
      {/* develop this */}
      <header className="cocktail-card__header-container">
        <div className="cocktail-card__header">
          <p className="coctail-card__name">{name}</p>
          <div className="cocktail-card__label"></div>
        </div>
      </header>
      {/* end develop this */}
      <div className="cocktail-card__ingredients">
        {ingredientsArr.map((ingredient, index) => (
          <div className="cocktail-card__ingredient" key={index}>
            {ingredient}
          </div>
        ))}
      </div>
      <img src={image} alt={`cocktail-${name}`} />
    </div>
  );
};

export default CocktailCard;
