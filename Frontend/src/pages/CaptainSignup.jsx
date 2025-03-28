import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {

  const navigate = useNavigate()

  const [ email, setEmail ] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [vehicleType, setVehicleType ] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()
    const captainData = {
      fullname: {
        firstName: firstName,
        lastName: lastName
      },

      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setVehicleColor('')
    set
  }
  return (
    <div className='p-7 h-screen flex flex-col'>
      <div>
        <img className = 'w-16 mb-10'src="https://static.vecteezy.com/system/resources/previews/027/127/451/non_2x/uber-logo-uber-icon-transparent-free-png.png" />

        <div>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>

            <h3 className='text-lg w-1/2 font-medium mb-2'>What's your name</h3>

            <div className='flex gap-4 mb-7'>

              <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2  text-lg placeholder:text-base'
               type="text" placeholder='First name' 
               value={firstName}
               onChange={(e) => {
                setFirstName(e.target.value)
               }}
               />
              <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2  text-lg placeholder:text-base' 
                
              type="text" placeholder='Last name'
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              />
            </div>
            <h3 className='text-lg font-medium mb-2'>What's your email</h3>

            <input 
            required
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
            type="text" placeholder='email@example.com'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            />

            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
            
            required
            type="password" placeholder='password' 
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}/>
            
            <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
            <div className='flex gap-4 mb-7'>
              <input 
              required
              type="text" 
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 text-lg placeholder:text-base'
              placeholder='Vehicle color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
              />
              <input 
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 text-lg placeholder:text-base'
              type="text" 
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
              />
            </div>

            <div className='flex gap-4 mb-7'>
              <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 
              text-lg placeholder:text-base'
               type="number" 
               placeholder='Vehicle Capacity'
               value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
               />

               <select
               required
               className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 text-lg placeholder:text-base'
               value={vehicleType}
               onChange={(e) => {
                 setVehicleType(e.target.value)
               }}
               >
                <option value="" disabled>Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">auto</option>
                <option value="moto">Moto</option>
               </select>
            </div>

            <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 placeholder:text-base'
            >Create Captain Account</button>
            
          </form>
          <p className='text-center'>Already have an account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
        </div>
        <div>
          <p className='text-[10px] mt-6 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline text-blue-400'>Google Privacy Policy</span> and <span className='underline text-blue-500'>Terms of Services apply</span>.</p>
        </div>
      </div>

    </div>
  )
}

export default CaptainSignup