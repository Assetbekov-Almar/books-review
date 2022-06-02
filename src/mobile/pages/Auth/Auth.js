import React, {useState} from 'react'
import styles from './Auth.module.css'
import img from '../../../assets/images/Bibliophile.gif'
import SignInForm from "./UI/SignInForm";
import SignUpForm from "./UI/SignUpForm";

const Auth = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const [isNameModified, setIsNameModified] = useState(false)
  const [isLastNameModified, setIsLastNameModified] = useState(false)
  const [isEmailModified, setIsEmailModified] = useState(false)
  const [isPasswordModified, setIsPasswordModified] = useState(false)

  const [isSignIn, setIsSignIn] = useState(false)

  const handleChange = (value, field, setFieldModified) => {
    setFieldModified(true)
    setForm(prevState => ({...prevState, [field]: value}))
  }

  return (
    <div className={styles.Auth}>
      <img src={img} alt="books" className={styles.Auth__image}/>
      {isSignIn
        ? <SignInForm
            {...{ form, isEmailModified, setIsEmailModified, isPasswordModified,
                  setIsPasswordModified, setIsSignIn, handleChange }}
        />

        : <SignUpForm
            {...{ form, isNameModified, setIsNameModified, isLastNameModified,
                  setIsLastNameModified, isEmailModified, setIsEmailModified, isPasswordModified,
                  setIsPasswordModified, setIsSignIn, handleChange }}
        />}
    </div>
  )
}

export default Auth