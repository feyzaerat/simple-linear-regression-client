import React from "react";

type CategoryCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({title, description, imageUrl}) => {
  return <div className="card__category card card__default card__sharp  padding-05">
    <img src={imageUrl} alt={title} className="card__category__img"/>
    <h3 className="card__category__title">{title}</h3>
    <p className="card__category__description">{description}</p>
  </div>;
};

export default CategoryCard;
