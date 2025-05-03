import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, options) => {
    onAdd({
      name: values.newName,
      number: values.newNumber,
      id: nanoid(),
    });

    options.resetForm();
  };

  const initialValues = {
    newName: "",
    newNumber: "",
  };

  const contactsSchema = Yup.object().shape({
    newName: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),
    newNumber: Yup.string()
      .matches(/^\+?[0-9\s\-()]{7,20}$/, "Invalid phone number")
      .required("Phone number is required"),
  });

  return (
    <div className={s.formWrapper}>
      <Formik
        validationSchema={contactsSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.addContactFofm}>
          <label className={s.formField}>
            <span>Name</span>
            <Field name="newName" type="text" />
            <ErrorMessage className={s.error} name="newName" component="div" />
          </label>
          <label className={s.formField}>
            <span>Number</span>
            <Field name="newNumber" type="text" />
            <ErrorMessage
              className={s.error}
              name="newNumber"
              component="div"
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
