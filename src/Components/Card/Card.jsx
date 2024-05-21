import React from "react";
import { Link } from "react-router-dom";
import useTranslate from "../../hooks/use-translate";

const Card = ({ card }) => {

  const { title, acf, slug, _embedded } = card;

  const { oT } = useTranslate();

  return (
    <li className="card">
      <Link to={`/project/${slug}`} className="card__link">
        <div className="image-block">
            <img
              className="card__image"
              src={_embedded["wp:featuredmedia"]["0"]["source_url"]}
              alt={title.rendered}
            />
        </div>
        <div className="card__info">
          <h3 className="card__title">{oT(title.rendered)}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24.901"
            height="20.369"
          >
            <g
              fill="none"
              stroke="#231f20"
              strokeLinecap="round"
              strokeMiterlimit="10"
              data-name="Сгруппировать 141"
            >
              <path d="M.5 10.184h22.761" data-name="Линия 16" />
              <path
                d="m14.716.707 9.478 9.478-9.478 9.478"
                data-name="Контур 174"
              />
            </g>
          </svg>
          <p className="card__category">{oT(_embedded["wp:term"]["0"]["0"]["name"])}</p>
        </div>
      </Link>
    </li>
  );
};

export default Card;
