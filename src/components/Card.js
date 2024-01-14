import React from "react";

const Card = (props) => {
  const {
    cardBackgroundColor,
    cardContentColor,
    cardMainImage,
    cardHeading,
    cardSubHeading,
    cardContent,
  } = props;
  return (
    <>
      <div
        className={`flex m-auto w-[100%] lg:w-[47%] lg:min-h-[580px] ${cardBackgroundColor} ${cardContentColor} flex-col items-center justify-between gap-5 rounded-[56px] p-10 text-left`}
      >
        <img src={cardMainImage} className="h-[190px] md:h-[260px]" alt="" />
        <h3 className="text-left">{cardHeading}</h3>
        <p>{cardContent}</p>
      </div>
    </>
  );
};

export default Card;
