import React from "react";
import "./homePage.css";
import { SiBasicattentiontoken } from "react-icons/si";

import { CategoryCard } from "../../components";
import { categories } from "../../data/categoriesData";
type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="layout__home d-flex justify-center f-direction-column align-i-center gap-1 padding-2">
      <div className="layout__home__row__title padding-05 d-flex justify-center align-i-center gap-1">
        <span className="first-head text-success"><SiBasicattentiontoken /></span>
        <p className="text text-dark-mode">
          Whichever method you want to use to import dependent and independent
          variables, you can choose from the section below.
        </p>
      </div>
      <div className="layout__home__row__content d-flex f-direction-row justify-space-evenly align-i-start gap-1 w-full padding-05-2">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            description={category.description}
            imageUrl={category.imageUrl}
            src={category.src}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
