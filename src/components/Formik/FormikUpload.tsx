import React from "react";
import { useField, useFormikContext } from "formik";

interface FormikUploadProps {
  name: string;
  label: string;
}

const FormikUpload: React.FC<FormikUploadProps> = ({ name, label }) => {
  const [field, , helpers] = useField(name);
  const { setFieldValue } = useFormikContext();

  return (
    <div className="formik-upload-container">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="custom-file-upload">
        <input
          type="file"
          id={name}
          name={name}
          className="file-input"
          onChange={(event) => {
            const file = event.currentTarget.files ? event.currentTarget.files[0] : null;
            setFieldValue(name, file);
          }}
        />
        <label htmlFor={name} className="custom-file-upload-label">
          Choose File
        </label>
      </div>
    </div>
  );
};

export default FormikUpload;
