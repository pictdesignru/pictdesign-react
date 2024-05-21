import React from "react";
import { NavLink } from "react-router-dom";
import StyledNavLinkArrow from "./NavLinkArrow.styled";

const NavLinkArrow = (props) => {

  const alignSelf = props.alignSelf;

  return (
    <StyledNavLinkArrow align={alignSelf}>
      <NavLink to={props.link} download="">
        {props.title}
        <svg xmlns="http://www.w3.org/2000/svg" width="31.25" height="26.794">
          <g
            fill="none"
            stroke="#231f20"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="4"
            data-name="Сгруппировать 12"
          >
            <path d="M2 13.398h25.382" data-name="Линия 1" />
            <path
              d="m17.852 2.829 10.569 10.569-10.569 10.569"
              data-name="Контур 5"
            />
          </g>
        </svg>
      </NavLink>
    </StyledNavLinkArrow>
  );
};

export default NavLinkArrow;
