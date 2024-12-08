import * as Yup from "yup";

export const regressionValidationSchema = Yup.object().shape({
  yValue: Yup.string().required("Independent Value gerekli.")
    .required("independent variable is required")
    .min(3, "independent variable must be at least 3 characters"),
  xValue: Yup.string().required("Dependent Value gerekli.")
    .min(6, "dependent variable must be at least 3 characters"),
    file: Yup.mixed().required("File is required"),
});
