import React, { FC } from "react";
import { Link } from "react-router-dom";

const MoreCocktailsBtn: FC = () => {
  return (
    <Link to="/cocktails" className="btn2 more-cocktails-btn">
      Want More Cocktails
    </Link>
  );
};

export default MoreCocktailsBtn;
