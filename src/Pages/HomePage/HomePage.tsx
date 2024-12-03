import React from "react";
import "./homePage.css";
import { CategoryCard } from "../../components";
import { categories } from "../../data/categoriesData";
type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="home-layout d-flex justify-center align-i-center gap-1">
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          title={category.title}
          description={category.description}
          imageUrl={category.imageUrl}
        />
      ))}
    </div>
  );
};

export default HomePage;
