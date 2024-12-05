import React from "react";

interface FormikUploadProps {
  name: string;
  id?: string;
  label?: string;
}

const FormikUpload: React.FC<FormikUploadProps> = ({ name, id, label }) => {
  return (
    <div className="formik-upload-container">
      {label && <label htmlFor={id || name}>{label}</label>}
      <div className="custom-file-upload">
        <input type="file" id={id || name} name={name} className="file-input" />
        <label htmlFor={id || name} className="custom-file-upload-label">
          Choose File
        </label>
      </div>
    </div>
  );
};

export default FormikUpload;
