import React, { useState } from 'react';
import './signup.css'
import SessionHeader from '../../components/SessionHeader';

/* 
- focus on styling the signup form
- Functionality
*/

const Signup = () => {

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
      <form onSubmit={handleSubmit} className='flex flex-col h-screen items-center'>
        <div>
          <label htmlFor='firstName'></label>
          <input 
            id='firstName'
            type='text'
            name='firstName'
            placeholder='enter your first name'
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
            placeholder='enter your last name'
            value={formData.lastName}
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
            placeholder='enter a 6 character password'
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
            placeholder='confirm password'
            value={formData.passwordConfirmation}
            onChange={handleInputChange}
            required 
          />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default Signup
