import React from "react";
import "./uploadPage.css";

import FormikInput from "../../components/Formik/FormikInput";
import FormikUpload from "../../components/Formik/FormikUpload";
import { FormikHandler } from "../../components/Formik/FormikHandkler";
import { regressionValidationSchema } from "../../validatation/validationScheme";

interface FormValues {
  yValue: string;
  xValue: string;
  file: File | null;
}

const UploadPage = () => {
  const initialValues: FormValues = {
    yValue: "",
    xValue: "",
    file: null,
  };

  const handleSubmit = (values: FormValues) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <div className="regression-layout d-flex f-direction-column">
      <div className="regression-layout__title__container">
        <p className="sub-head text-center header-light-mode">
          Calculate Regression
        </p>
      </div>
      <div className="regression-layout__content__container d-flex f-direction-column">
        <div className="regression-layout__content__container__description__container">
          <p className="text text-dark-mode">
            You can calculate the regression by uploading your own Excel file.
            The file must be in xlsx format. Also, the first rows must be empty
            and the independent variable must be in the first column and the
            dependent variable must be in the second column.
          </p>
          <p className="text text-dark-mode">
            You need to enter the names of the variables as dependent and
            independent variables in the fields next to them.
          </p>
        </div>
        <div className="regression-layout__content__container__action__container d-flex f-direction-row justify-space-around align-i-f-end">
          <div className="regression-layout__content__container__form__container d-flex f-direction-column align-i-f-end">
            <FormikHandler
              initialValues={initialValues}
              validationSchema={regressionValidationSchema}
              onSubmit={handleSubmit}
            >
              <div className="form-input-container d-flex f-direction-column justify-center align-i-start">
                <FormikInput
                  name="yValue"
                  label="Independent Value"
                  placeholder="Enter your Independent Value"
                />
                <FormikInput
                  name="xValue"
                  label="Dependent Value"
                  placeholder="Enter your Dependent Value"
                />
                <FormikUpload name="file" label="Upload File" />
              </div>
              <div className="form-submit-container d-flex">
                <button
                  className="button default-btn success-btn borderless-btn middle-btn rounded-btn"
                  type="submit"
                >
                  Submit
                </button>
                <button
                  className="button default-btn danger-btn borderless-btn middle-btn rounded-btn"
                  type="reset"
                >
                  Clear
                </button>
              </div>
            </FormikHandler>
          </div>
          <div className="regression-layout__content__container__result__container d-flex f-direction-column padding-0-05">
            <p className="text text-dark-mode">Eğim: 0.0075 </p>
            <p className="text text-dark-mode">Kesişim: 0.0075 </p>
            <p className="text text-dark-mode">Denklem : yValue = 0.02569*xValue + 0.0075 </p>
            <p className="text text-dark-mode">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              natus excepturi tenetur sunt, esse, est minima voluptate hic
              aliquid officiis aliquam? Amet obcaecati deserunt, fugiat fuga
              similique nesciunt aperiam quod. Maxime voluptatum cumque nostrum,
              numquam dignissimos, fuga sed ipsam saepe, magnam tempore
              exercitationem vitae sapiente consectetur consequatur! Veritatis
              adipisci aspernatur quasi. Hic animi, id quis repellendus alias
              soluta sapiente atque! Qui et, esse est cupiditate reiciendis
              facilis quae odit magni facere deleniti. Dolore autem architecto
              quisquam quod veniam possimus aspernatur dicta ipsum temporibus
              libero! Aut nobis eos quam iusto necessitatibus. Rem ut earum at
              unde culpa. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
