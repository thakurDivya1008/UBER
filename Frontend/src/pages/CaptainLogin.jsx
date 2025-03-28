
import React, { useState } from 'react'

import { Link } from 'react-router-dom'



const CaptainLogin = () => {

  const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('')
    const [captainData, setCaptainData] = useState({})

    const submitHandler = (e) => {
       e.preventDefault();

       setCaptainData({
        email:email,
        password:password
       })
       setEmail('')
       setPassword('')
    }
  return (
    <div className='h-screen p-7 flex flex-col justify-between'>
      <div>
        <img src= "https://static.vecteezy.com/system/resources/previews/027/127/451/non_2x/uber-logo-uber-icon-transparent-free-png.png" className='w-16 mb-8' />
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
        <p className='mt-4 text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600  '>Register as a captain</Link></p>
        </div>
        
        <div>
            <Link 
            to='/login'
            className='bg-[#d5622d] text-white flex items-center justify-center font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base mt-4'>Sign in as User</Link>
        </div>
    </div>
  )
}

export default CaptainLogin