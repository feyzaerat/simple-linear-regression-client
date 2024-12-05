import React from "react";
import { Field, ErrorMessage } from "formik";

interface FormikInputProps {
  name: string;
  id?: string;
  type?: string;
  placeholder?: string;
  label?: string;
}

const FormikInput: React.FC<FormikInputProps> = ({
  name,
  id,
  type = "text",
  placeholder,
  label,
}) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={id || name}>{label}</label>}
      <Field
        id={id || name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="form-input"
      />
      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
};

export default FormikInput;
