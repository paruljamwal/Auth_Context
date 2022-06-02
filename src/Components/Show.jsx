import React from 'react'
import './Style.css'
const Show = ({user}) => {
  return (
    <div className='box'>
        <img src={user.data.avatar} />
        <h1>First_Name: {user.data.first_name}</h1>
         <h2>Last_Name: {user.data.last_name}</h2>
         <h2>Email: {user.data.email}</h2>
    </div>
  )
}

export default Show