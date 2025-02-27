import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>SignUp</h1>
        <div className="loginsignup-fields">
          <input type="text " placeholder='Username' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
      <p className="loginsignup-login">Already have an acoount? <span>Login here</span></p>
      <div className="loginsignup-agree">
        <input type="checkbox" name='' id='' />
        <p>By Continuing , I Agree the terms of use & Privacy Policy.</p>
      </div>
      </div>
      
    </div>
  )
}

export default LoginSignup