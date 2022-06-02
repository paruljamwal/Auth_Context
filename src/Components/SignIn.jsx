import React from 'react'
import vdo from '../assets/sad.gif'
import './Style.css'
const SignIn = () => {
  return (
    <div>
        <h1>You have to sign in first...</h1>
        <img className='vdo' src={vdo} ></img>
    </div>
  )
}

export default SignIn