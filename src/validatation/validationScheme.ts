import * as Yup from "yup";

export const regressionValidationSchema = Yup.object().shape({
  yValue: Yup.string()
    .required("independent variable is required")
    .min(3, "independent variable must be at least 3 characters"),
  xValue: Yup.string()
    .required("dependent variable is required")
    .min(6, "dependent variable must be at least 3 characters"),
    file: Yup.mixed().required("File is required"),
});
