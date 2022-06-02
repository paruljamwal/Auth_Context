import React, { useContext } from 'react'
import { AuthCreate } from '../Context/AuthContext'
import "./Style.css"
import login from '../assets/login.png'
import logout from '../assets/switch.png'
import dp from '../assets/avatar.png'

const Navbar = () => {
  const {isAuth,authtoggle}=useContext(AuthCreate)
  const handelchange=()=>{
      authtoggle()
  }
    return (
    <div className='nav'>
         <img className='dp' src={dp} />
        <button className='login' onClick={handelchange} >{isAuth?<img className='logo' src={logout} />: <img className='logo' src={login}  />}</button>
    </div>
  )
}

export default Navbar