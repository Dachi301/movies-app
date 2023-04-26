// styles
import "./Registration.css";

import Form from "../../components/Form";
import FormField from "../../components/FormField";
import AuthBtn from "../../components/AuthBtn";
import { useState } from "react";

export default function Registration() {
  const initialValues = {
    username: "",
    surname: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = "სახელის ველის შევსება აუცილებელია!";
    }
    if (!values.surname) {
      errors.surname = "გვარის ველის შევსება აუცილებელია!";
    }
    if (!values.email) {
      errors.email = "ელ-ფოსტის ველის შევსება აუცილებელია!";
    } else if (!regex.test(values.email)) {
      errors.email = "ეს არ არის სწორი ელ-ფოსტის ფორმატი!";
    }
    if (!values.password) {
      errors.password = "პაროლის ველის შევსება აუცილებელია!";
    } else if (values.password.length < 5) {
      errors.password = "პაროლი უნდა შედგებოდეს არანაკლებ 5 ასოსგან!";
    } else if (values.password.length > 10) {
      errors.password = "პაროლი უნდა შედგებოდეს არაუმეტეს 10 ასოსგან!";
    }
    if (!values.repeatPassword) {
      errors.repeatPassword = `'გაიმეორეთ პაროლი'ს ველის შევსება აუცილებელია!`;
    } else if (values.repeatPassword !== values.password) {
      errors.repeatPassword = "პაროლები ერთმანეთს არ ემთხვევა!";
    }
    return errors;
  };

  return (
    <>
      <Form handleSubmit={handleSubmit}>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="register--success">
            რეგისტრაცია წარმატებით დასრულდა
          </div>
        ) : null}
        <h1>რეგისტრაცია</h1>
        <FormField
          labelfor="სახელი"
          inputType="text"
          handleChange={handleChange}
          fieldType="username"
          textValue={formValues.username}
        ></FormField>
        <p className="error--msg">{formErrors.username}</p>

        <FormField
          labelfor="გვარი"
          inputType="text"
          handleChange={handleChange}
          fieldType="surname"
          textValue={formValues.surname}
        ></FormField>
        <p className="error--msg">{formErrors.surname}</p>

        <FormField
          labelfor="ელ. ფოსტა"
          inputType="text"
          handleChange={handleChange}
          fieldType="email"
          textValue={formValues.email}
        ></FormField>
        <p className="error--msg">{formErrors.email}</p>

        <FormField
          labelfor="პაროლი"
          inputType="password"
          handleChange={handleChange}
          fieldType="password"
          textValue={formValues.password}
        ></FormField>
        <p className="error--msg">{formErrors.password}</p>

        <FormField
          labelfor="გაიმეორეთ პაროლი"
          inputType="password"
          handleChange={handleChange}
          fieldType="repeatPassword"
          textValue={formValues.repeatPassword}
        ></FormField>
        <p className="error--msg">{formErrors.repeatPassword}</p>

        <AuthBtn />
      </Form>
    </>
  );
}
