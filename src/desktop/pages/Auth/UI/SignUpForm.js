import {emailValidator, loginValidator, passwordValidator} from "../../../../infrastructure/utils/authValidation";
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'
import LocalStorageService from "../../../../infrastructure/service/storage/LocalStorageService";
import {EMAIL, FIRST_NAME, LAST_NAME, PASSWORD} from "../../../../infrastructure/service/storage/config";


const SignUpForm = (props) => {
  const { form, isNameModified, setIsNameModified, isLastNameModified,
          setIsLastNameModified, isEmailModified, setIsEmailModified, isPasswordModified,
          setIsPasswordModified, setIsSignIn, handleChange } = props

  const navigate = useNavigate()
  const [isEmptyError, setIsEmptyError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const isEmpty = Object.values(form).some(x => x === '');
    if (isEmpty) {
      setIsEmptyError(true)
      return
    }
    setIsEmptyError(false)

    LocalStorageService.setItem(FIRST_NAME, form.firstName)
    LocalStorageService.setItem(LAST_NAME, form.lastName)
    LocalStorageService.setItem(EMAIL, form.email)
    LocalStorageService.setItem(PASSWORD, form.password)

    navigate('/library')
  }

  return (
    <form className="w-full max-w-md flex flex-col justify-center items-center bg-gray-100" onSubmit={handleSubmit}>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                 htmlFor="inline-first-name">
            First Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className={`bg-gray-200 appearance-none border-2 ${(isNameModified && loginValidator(form.firstName)) ? 'border-red-300 focus:border-red-500': 'border-gray-200 focus:border-purple-500'}
                       rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
            id="inline-first-name" type="text" placeholder="Enter value" value={form.firstName}
            onChange={e => handleChange(e.target.value, 'firstName', setIsNameModified)} />
          {isNameModified && <p className="text-red-500 text-xs italic">{loginValidator(form.firstName)}</p>}
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                 htmlFor="inline-last-name">
            Last Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className={`bg-gray-200 appearance-none border-2 ${(isLastNameModified && loginValidator(form.lastName)) ? 'border-red-300 focus:border-red-500': 'border-gray-200 focus:border-purple-500'}
                       rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
            id="inline-last-name" type="text" placeholder="Enter value" value={form.lastName}
            onChange={e => handleChange(e.target.value, 'lastName', setIsLastNameModified)} />
          {isLastNameModified && <p className="text-red-500 text-xs italic">{loginValidator(form.lastName)}</p>}
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                 htmlFor="email">
            Email
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className={`bg-gray-200 appearance-none border-2 ${(isEmailModified && emailValidator(form.email)) ? 'border-red-300 focus:border-red-500': 'border-gray-200 focus:border-purple-500'}
                       rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
            id="email" type="email" placeholder="Enter value" value={form.email}
            onChange={e => handleChange(e.target.value, 'email', setIsEmailModified)} />
          {isEmailModified && <p className="text-red-500 text-xs italic">{emailValidator(form.email)}</p>}
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                 htmlFor="inline-password">
            Password
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className={`bg-gray-200 appearance-none border-2 ${(isPasswordModified && passwordValidator(form.password)) ? 'border-red-300 focus:border-red-500': 'border-gray-200 focus:border-purple-500'}
                       rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
            id="inline-password" type="password"  placeholder="Enter value" value={form.password}
            onChange={e => handleChange(e.target.value, 'password', setIsPasswordModified)} />
          {isPasswordModified && <p className="text-red-500 text-xs italic">{passwordValidator(form.password)}</p>}
        </div>
      </div>

      <div className="flex items-center flex-col gap-y-3">
        {isEmptyError && <p className="text-red-500">Please fill all the fields.</p>}
        <div className="mb-8">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit">
            Sign Up
          </button>
        </div>
      </div>

      <ul className="list-none">
        <li>Already a member?{' '}
          <span className="text-blue-500 hover:text-blue-800 cursor-pointer"
             onClick={() => setIsSignIn(true)}>
            Sign In
          </span>
        </li>
      </ul>
    </form>
  )
}

export default SignUpForm