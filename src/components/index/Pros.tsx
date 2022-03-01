import React, { FC } from "react";
import prosArr from "../../constants/prosArr";

const Pros: FC = () => {
  return (
    <div className="pros">
      {prosArr.map((item) => (
        <div className="pros__item" key={item.id}>
          <p className="pros__text">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Pros;
