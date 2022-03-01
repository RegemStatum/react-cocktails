import React, { FC } from "react";

interface InfoLabelProps {
  text: string;
  containerClassName: string;
  textClassName: string;
}

const InfoLabel: FC<InfoLabelProps> = ({
  text,
  containerClassName,
  textClassName,
}) => {
  return (
    <div className={`info-label ${containerClassName}`}>
      <p className={`info-label__text ${textClassName}`}>{text}</p>
    </div>
  );
};

export default InfoLabel;
