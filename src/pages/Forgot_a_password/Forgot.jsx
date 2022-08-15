import React from 'react'

// Comps
import Form from '../../components/Form'
import FormField from '../../components/FormField'
import AuthBtn from '../../components/AuthBtn'

// Style
import './Forgot.css'
import { useState } from 'react'

export default function Forgot() {
  const initialValues = { email: '' }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})

  const handleSubmit = e => {
    e.preventDefault()
    setFormErrors(validate(formValues))
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const validate = values => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    if (!values.email) {
      errors.email = 'აუცილებელია ელ-ფოსტის ველის შევსება!'
    } else if (!regex.test(values.email)) {
      errors.email = 'ეს არ არის სწორი ელ-ფოსტის ფორმატი!'
    }

    return errors
  }

  return (
    <Form handleSubmit={handleSubmit}>
      {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
      <h1 className="forgot--pass-title">პაროლის აღდგენა</h1>
      <FormField
        labelfor="ელ. ფოსტა"
        inputType="text"
        textValue=""
        fieldType="email"
        handleChange={handleChange}
      ></FormField>
      <p className="error--msg">{formErrors.email}</p>
      {/* ერრორ */}
      <AuthBtn />
      <p className="forgot--pass-paragraph">
        პაროლის აღსადგენი ლინკი გამოიგზავნება თქვენს მიერ მითითებულ ელექტრონულ
        ფოსტაზე.
      </p>
    </Form>
  )
}
