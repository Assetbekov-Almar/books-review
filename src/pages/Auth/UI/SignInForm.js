import {emailValidator, passwordValidator} from "../../../infrastructure/utils/authValidation";
import React from "react";

const SignInForm = (props) => {
  const { form, isEmailModified, setIsEmailModified, isPasswordModified, setIsPasswordModified, setIsSignIn, handleChange } = props

  return (
    <form className="w-full max-w-sm flex flex-col justify-center items-center bg-gray-100 ">
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

      <div className="md:flex md:items-center">
        <div className="mb-8">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button">
            Sign Up
          </button>
        </div>
      </div>

      <ul className="list-none">
        <li>Not a member?{' '}
          <a className="text-blue-500 hover:text-blue-800 cursor-pointer"
             onClick={() => setIsSignIn(false)}>
            Sign Up
          </a>
        </li>
      </ul>
    </form>
  )
}

export default SignInForm