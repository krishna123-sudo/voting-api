import React, { useState } from 'react'
import LoginForm from './Authentication/LoginForm';
import Registration from './Authentication/Registration';

function Switch() {
const [login,setLogin]=useState(true);
  return (
    <>
    <div className='switch'>
    <div>
        <button className='switch-login' onClick={()=>{setLogin(true)}}>Login</button>
    </div>
    <div>
        <button className='switch-register' onClick={()=>{setLogin(false)}}>Register</button>
    </div>
    </div>
    <div className='Form'>
        {login && <LoginForm/>}
        {!login && <Registration/>}
    </div>
    </>
  )
}

export default Switch