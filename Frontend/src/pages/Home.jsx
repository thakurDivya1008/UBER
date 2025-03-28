import React from 'react'
import uberLogo from './uberLogo.png'
import bgImg from './traffic.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className="h-screen w-full pt-8 flex justify-between flex-col bg-red-400"style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}>
            <img src={uberLogo} className='w-16 ml-8' />
            <div className='bg-white py-4 px-4'>
                <h2 className='text-4xl font-bold'>Get Started with Uber</h2>
                <Link to='/login'className='flex items-center justify-center  w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home