import React, { useEffect, useState } from "react";

import FormikInput from "../../components/Formik/FormikInput";
import FormikUpload from "../../components/Formik/FormikUpload";
import { FormikHandler } from "../../components/Formik/FormikHandkler";

import { regressionValidationSchema } from "../../validatation/validationScheme";
import variableService from "../../services/variableService";

import { RegressionModel } from "../../models/AddRegressionRequest";
import "./uploadPage.css";

interface FormValues {
  yValue: string;
  xValue: string;
  file: File | null;
}

const UploadPage: React.FC = () => {
  const [regressionResult, setRegressionResult] =
    useState<RegressionModel | null>(null);

  const initialValues: FormValues = {
    yValue: "",
    xValue: "",
    file: null,
  };

  const handleSubmit = async (values: FormValues) => {
    try {
      if (!values.file) {
        alert("Lütfen xlsx Dosyanızı yükleyin !");
        return;
      }

      const formData = new FormData();
      formData.append("file", values.file);
      formData.append("xVariableName", values.xValue);
      formData.append("yVariableName", values.yValue);

      const response = await variableService.addVariable(formData);

      setRegressionResult(response.data);
    } catch (error) {
      console.error("Hata Oluştu :", error);
      setRegressionResult(null);
    }
  };
  const handleClear = () => {
    setRegressionResult(null);
  };

  return (
    <div className="regression-layout d-flex f-direction-column justify-center align-i-center">
      <div className="regression-layout__title__container">
        <p className="sub-head text-center header-light-mode">
          Calculate Regression
        </p>
      </div>
      <div className="regression-layout__content__container d-flex f-direction-column justify-center align-i-center">
        <div className="regression-layout__content__container__description__container d-flex f-direction-column justify-center align-i-center">
          <p className="text text-dark-mode">
            You can calculate the regression by uploading your own Excel file.
          </p>
        </div>
        <div className="regression-layout__content__container__action__container d-grid grid-row-percent-40 justify-space-around align-i-f-end">
          {/* Form */}
          <div className="regression-layout__content__container__form__container d-flex f-direction-row align-i-f-end ">
            <FormikHandler
              initialValues={initialValues}
              validationSchema={regressionValidationSchema}
              onSubmit={handleSubmit}
            >
              <div className="form-input-container d-flex f-direction-row justify-center align-i-f-start gap-1">
                <FormikInput
                  name="yValue"
                  label="Dependent Variable"
                  placeholder="Enter dependent variable"
                />
                <FormikInput
                  name="xValue"
                  label="Independent Variable"
                  placeholder="Enter independent variable"
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
                  onClick={handleClear}
                >
                  Clear
                </button>
              </div>
            </FormikHandler>
          </div>

          {/* Result */}
          <div className="regression-layout__content__container__result__container d-flex f-direction-column padding-0-05">
            {regressionResult ? (
              <>
                <p className="text text-dark-mode">
                  <b>Kesişim (m):</b> {regressionResult.m.toFixed(4)}
                </p>
                <p className="text text-dark-mode">
                  <b>Eğim (b):</b> {regressionResult.b.toFixed(4)}
                </p>
                <p className="text text-dark-mode">
                  <b>Regresyon Modeliniz :</b> {regressionResult.equation}
                </p>
                <p className="text text-dark-mode">
                  <b>R-Squared (R²):</b> {regressionResult.rsquared.toFixed(6)}
                </p>
                <p className="text text-dark-mode">
                  <b>Standart Hata:</b>{" "}
                  {regressionResult.standardError.toFixed(4)}
                </p>
                <p className="text text-dark-mode">
                  <b>Ekonomik Yorum : </b>
                  {regressionResult.economicInterpretation}
                </p>
              </>
            ) : (
              <p className="text text-dark-mode">
                Sonuçlarınız ve yorumunuz buraya gelecek.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
