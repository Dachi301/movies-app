// styles
import './Login.css'

// fff
import { Link } from 'react-router-dom'

// Components
import Form from '../../components/Form'
import FormField from '../../components/FormField'
import AuthBtn from '../../components/AuthBtn'
import { useState } from 'react'

export default function Login() {
  const initialValues = { email: '', password: '', checked: false }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
    // console.log()
  }

  const handleCheckboxChange = (e) => {
    setFormValues({ ...formValues, checked: e.target.checked })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
  }

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    if (!values.email) {
      errors.email = 'აუცილებელია ელ-ფოსტის ველის შევსება'
    } else if (!regex.test(values.email)) {
      errors.email = 'ეს არ არის სწორი ელ-ფოსტის ფორმატი!'
    }

    if (!values.password) {
      errors.password = 'აუცილებელია პაროლის ველის შევსება'
    } else if (values.password.length < 5) {
      errors.password = 'პაროლი უნდა შედგებოდეს არანაკლებ 5 ასოსგან!'
    } else if (values.password.length > 10) {
      errors.password = 'პაროლი უნდა შედგებოდეს არაუმეტეს 10 ასოსგან!'
    }

    return errors
  }

  return (
    <Form handleSubmit={handleSubmit}>
      {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
      <h1>შესვლა</h1>
      <FormField
        labelfor="ელ. ფოსტა"
        inputType="text"
        fieldType="email"
        handleChange={handleChange}
        textValue={formValues.email}
      ></FormField>
      <p className="error--msg">{formErrors.email}</p>
      <FormField
        labelfor="პაროლი"
        inputType="password"
        fieldType="password"
        handleChange={handleChange}
        textValue={formValues.password}
      ></FormField>
      <p className="error--msg">{formErrors.password}</p>
      <div className="remember--me-content">
        <p>დამიმახსოვრე</p>
        <input type="checkbox" onChange={handleCheckboxChange} />
      </div>

      <AuthBtn />

      <div className="login--btns">
        <Link to={'/registration'}>
          <button className="register--btn login--page-btn">რეგისტრაცია</button>
        </Link>

        <Link to={'/forgot'}>
          <button className="forgot--pass-btn login--page-btn">
            პაროლის აღდგენა
          </button>
        </Link>
      </div>
    </Form>
  )
}
