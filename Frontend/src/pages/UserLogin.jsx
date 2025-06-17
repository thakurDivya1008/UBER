import React, { useState,useContext } from 'react'
import  uberLogo from './uberLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'

import axios from 'axios'

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('')
    const [userData, setUserData] = useState({})

    const { user, setUser } = useContext(UserDataContext)
    const navigate = useNavigate();
    const submitHandler = async (e) => {
       e.preventDefault();

       const userData = {
        email:email,
        password: password
       }

       const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/Login`, userData)

       if(response.status === 200){
        const data = response.data
        setUser(data.user)
        navigate('/home')
       }
       setEmail('')
       setPassword('')
    }
  return (
    <div className='h-screen p-7 flex flex-col justify-between'>
        <div>
        <img src={uberLogo} className='w-16 mb-8' />
        <form onSubmit={(e) => {
            submitHandler(e)
        }}>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input required 
        value={email}
        onChange={(e)=>{
            setEmail(e.target.value)
        }}
        type="email" className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'placeholder="email@example.com" />
        <h3 className='text-lg font-medium mb-2'
        
        >Enter Password</h3>
        <input
        className='bg-[#eeeeee] mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base'
         required 
         value={password}
        onChange={(e)=>{
            setPassword(e.target.value)
        }}
         type="password" placeholder="password" />
        <button className='bg-black text-white p-3 rounded mt-5 w-full'>Login</button>

        
        </form>
        <p className='mt-4 text-center'>New here? <Link to='/signup' className='text-blue-600  '>Create new Account</Link></p>
        </div>
        
        <div>
            <Link 
            to='/captain-login'
            className='bg-[#10b461] text-white flex items-center justify-center font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base mt-4'>Sign in as Captain</Link>
        </div>
    </div>
  )
}

export default UserLogin