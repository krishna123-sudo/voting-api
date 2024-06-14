import React from 'react'
import './Login.css'
function LoginForm() {
  return (
    <form className='loginForm'>
       <div>
            <div>Enter Aadhar Number : </div>
            <input type='text'/>
       </div>
       <div>
        <div>Enter Password : </div>
        <input type='password'/>
       </div>
       <div>
            <button  className='login'>Login</button>
       </div>
    </form>
  )
}

export default LoginForm