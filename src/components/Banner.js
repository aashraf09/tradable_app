import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Banner = (props) => {
  const {
    bannerMainImage,
    bannerPrimaryImage,
    bannerBackgroundColor,
    bannerContentColor,
    bannerHeading,
    bannerSubHeading,
    bannerPrimaryContent,
    bannerBulletPoints,
    bannerContent,
    bannerBulletPointIconType,
    bannerMainImagePosition,
  } = props;

  const renderBulletPoints = () => {
    if (!bannerBulletPoints) {
      return null;
    }

    return (
      <ul>
        {bannerBulletPoints.map((bulletPoint, index) => (
          <li
            key={index}
            className={`flex flex-row items-center justify-start gap-5 py-1 text-[${bannerContentColor}] text-lato`}
          >
            {bannerBulletPointIconType === "check" ? (
              <FontAwesomeIcon icon={faCheck} />
            ) : (
              <FontAwesomeIcon icon={faHeart} />
            )}
            {bulletPoint}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section
      className={`w-[90%] m-auto ${
        bannerContentColor === "black" ? "text-black" : "text-white"
      } ${bannerBackgroundColor} flex flex-col lg:flex-row items-center lg:items-start gap-10 justify-between rounded-[56px] px-10 pt-10 md:pt-20 pb-10 md:pb-0`}
    >
      <img
        src={bannerMainImage}
        className={`basis-[40%] ${
          bannerMainImagePosition === "left"
            ? "order-first hidden lg:block"
            : "order-last"
        } h-[500px]`}
        alt=""
      />
      <div className="basis-[10%] hidden lg:block"></div>
      <div
        className={`md:basis-[55%] flex flex-col items-start justify-between gap-5 ${
          bannerMainImagePosition === "left" ? "order-last" : "order-first"
        }`}
      >
        {bannerPrimaryImage && <img src={bannerPrimaryImage} alt="" />}
        <div className="flex flex-col items-start justify-between gap-3">
          <h3>{bannerHeading}</h3>
          {bannerSubHeading && <h4>{bannerSubHeading}</h4>}
          {bannerPrimaryContent && <p>{bannerPrimaryContent}</p>}
        </div>
        {renderBulletPoints()}
        <p className="text-lato">{bannerContent}</p>
      </div>
    </section>
  );
};

export default Banner;
