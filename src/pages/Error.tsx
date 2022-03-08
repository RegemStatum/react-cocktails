import React, { FC } from "react";
import { Link } from "react-router-dom";

const Error: FC = () => {
  return (
    <div className="container page-min-height error-page">
      <div className="error-page__inner-container">
        <span className="error-page__error">Error 404</span>
        <Link to="/" className="btn1 error-page__btn">
          Back home
        </Link>
      </div>
    </div>
  );
};

export default Error;
