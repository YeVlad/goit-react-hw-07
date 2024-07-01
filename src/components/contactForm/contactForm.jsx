import css from "./contactForm.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contactsOps";

export default function ContactForm() {
  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  function handleSubmit(values, actions) {
    dispatch(
      addContacts({
        id: nanoid(),
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  }
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.addContact}>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" className={css.formField}></Field>
        <ErrorMessage name="name" component="span" />

        <label htmlFor="number">Number</label>
        <Field type="text" name="number" className={css.formField}></Field>
        <ErrorMessage name="number" component="span" />

        <button className={css.addBut} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
