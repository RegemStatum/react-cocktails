import React, { FC } from "react";

const HeroInfo: FC = () => {
  return (
    <div className="hero-info">
      <h1 className="hero-info__heading">
        Find your
        <br />
        <span className="hero-info__highlight">Perfect Cocktail</span>
      </h1>
      <p className="hero-info__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi cras
        eu imperdiet lacus morbi porttitor rhoncus, nibh.
      </p>
    </div>
  );
};

export default HeroInfo;
