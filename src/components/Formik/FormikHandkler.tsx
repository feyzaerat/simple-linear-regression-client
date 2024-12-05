import React from "react";
import { Formik, FormikHelpers, Form } from "formik";

interface FormikHandlerProps<T> {
  initialValues: T;
  validationSchema: any;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void;
  children: React.ReactNode;
}

export const FormikHandler = <T extends Record<string, any>>({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: FormikHandlerProps<T>) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <Form>{children}</Form>}
    </Formik>
  );
};
