import React from 'react'

import { useState } from 'react'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/db'

import FormField from '../../components/FormField'
import AuthBtn from '../../components/AuthBtn'

import './AuthAdmin.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

export default function AuthAdmin({ bgColor }) {
  document.body.style.background = bgColor
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const handleChangeEmail = e => {
    setEmail(e.target.value)
  }

  const handleChangePassword = e => {
    setPassword(e.target.value)
  }

  const { dispatch } = useContext(AuthContext)

  const handleLogin = e => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user
        dispatch({ type: 'LOGIN', payload: user })
        navigate('/admin')
      })
      .catch(error => {
        setError(true)
      })
  }

  return (
    <div>
      <form className="auth--admin-content" onSubmit={handleLogin}>
        <h1>ავტორიზაცია (ადმინი)</h1>
        <FormField
          labelfor="ელ-ფოსტა"
          inputType="email"
          fieldType="email"
          handleChange={handleChangeEmail}
          textValue=""
        />

        <FormField
          labelfor="პაროლი"
          inputType="password"
          fieldType="text"
          handleChange={handleChangePassword}
          textValue=""
        />

        <AuthBtn />

        {error && (
          <span className="failed--auth-admin">
            არასწორია პაროლი ან ელ-ფოსტა
          </span>
        )}
      </form>
    </div>
  )
}
