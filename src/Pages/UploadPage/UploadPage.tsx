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
        <div className="regression-layout__content__container__form__container d-flex f-direction-column">
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
      </div>
    </div>
  );
};

export default UploadPage;
