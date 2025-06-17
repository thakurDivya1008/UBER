import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const UserProtectWrapper = ({children}) => {
    // This component is used to protect the routes that require user authentication
    // It checks if the user is logged in by checking if the user object has an email property
    const { user } = useContext(UserDataContext)
    const navigate = useNavigate()
    
    if(!user.email){
        navigate('/login')
    }


   

  return (
    <div>UserProtectWrapper</div>
  )
}

export default UserProtectWrapper