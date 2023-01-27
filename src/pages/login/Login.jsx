import React from 'react'
import "./login.css"

function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Lamasocial</h3>
                <span className="loginDesc">
                    Connect with friends and world around you on Lamasocial.
                </span>

            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className='loginInput' />
                    <input placeholder="password" className='loginInput' />
                    <button className='loginButton'>Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className='loginRegisterButton'>Create a New Account</button>


                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login