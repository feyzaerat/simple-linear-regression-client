import React from "react";
import { LuArrowRightCircle } from "react-icons/lu";
import { Link } from "react-router-dom";

type CategoryCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  src: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  imageUrl,
  src
}) => {
  return (
    <div className="card__category card card__light card__sharp padding-1 d-flex f-direction-column justify-center">
      <div className="card__category__row__img  d-flex justify-center">
        <img src={imageUrl} alt={title} className="card__category__img w64" />
      </div>
      <div className="card__category__row__title  d-flex justify-center">
        <h3 className="card__category__title text-success">{title}</h3>
      </div>
      <div className="card__category__row__description  d-flex justify-flex-start align-c-flex-start">
        <p className="card__category__description text-dark-mode">{description}</p>
      </div>
      <div className="card__category__row__action  d-flex justify-flex-end margin-05">
        <Link className="card__category__action button button-large transparent-btn circle-btn large-btn" to={src}><LuArrowRightCircle /></Link>
      </div>
    </div>
  );
};

export default CategoryCard;
