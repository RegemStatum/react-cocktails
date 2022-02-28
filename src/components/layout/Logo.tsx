import React, { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

interface LogoProps {
  styleName: string;
}

const Logo: FC<LogoProps> = (styleName) => {
  return (
    <Link to="/" className={`logo-container ${styleName}__logo-container`}>
      <img className={`logo ${styleName}__logo`} src={logo} alt="cocktail" />
    </Link>
  );
};

export default Logo;
