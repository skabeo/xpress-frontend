import { useEffect, useState } from 'react';
import './signup.css'
import SessionHeader from '../../components/session/SessionHeader';
import back from '../../assets/back.png'

const Signup = () => {

  useEffect(() => {
    document.title = 'Signup | Register'
  }, [])

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section>
      <SessionHeader />
      <form onSubmit={handleSubmit} className='signup-form'>
        <span className='signup-back-button-container'>
          <img className='signup-back-button' src={back} alt='back-button' />
        </span>
        <p className='font-bold text-xl'>Registration</p>
        <div className='signup-firstname-container'>
          <label htmlFor='firstName'></label>
          <input 
            id='firstName'
            type='text'
            name='firstName'
            placeholder='First name'
            value={formData.firstName}
            onChange={handleInputChange}
            required 
          />
        </div>

        <div>
          <label htmlFor='lastName'></label>
          <input 
            id='lastName'
            type='text'
            name='lastName'
            placeholder='Last name'
            value={formData.lastName}
            onChange={handleInputChange}
            required 
          />
        </div>

        <div>
          <label htmlFor='email'></label>
          <input 
            id='email'
            type='text'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleInputChange}
            required 
          />
        </div>

        <div>
          <label htmlFor='password'></label>
          <input 
            id='password'
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleInputChange}
            required 
          />
        </div>

        <div>
          <label htmlFor='passwordConfirmation'></label>
          <input 
            id='passwordConfirmation'
            type='password'
            name='passwordConfirmation'
            placeholder='Confirm password'
            value={formData.passwordConfirmation}
            onChange={handleInputChange}
            required 
          />
        </div>

        <div className='password-guide'>
          <h5 className='text-xs font-bold mb-1'>Your password must:</h5>
          <ul className="list-disc pl-4">
            <li className='text-xs'>Have between 6 and 56 charcters</li>
            <li className='text-xs'>Contain at least 1 uppercase and 1 lowercase character</li>
            <li className='text-xs'>Be different from your email address</li>
          </ul>
        </div>

        <button className='signup-submit-button' type='submit'>Sign Up</button>
      </form>
    </section>
  )
}

export default Signup
