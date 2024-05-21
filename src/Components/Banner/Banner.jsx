import React, { useContext } from "react";
import StyledBanner from "./Banner.styled";
import NavLinkArrow from "../NavLinkArrow/NavLinkArrow";

const Banner = ({ title, image, link, color }) => {
  const titleColor = color;

  return (
    <StyledBanner color={titleColor}>
      <img src={image} alt={title} />
      <div>
        <div className="banner__info">
          <NavLinkArrow title={'посмотреть'} link={link} />
          <h2>
          {title.ru}
          </h2>
        </div>
      </div>
    </StyledBanner>
  );
};

export default Banner;
