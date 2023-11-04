import { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './signup.css'
import SessionHeader from '../../components/session/SessionHeader';
import back from '../../assets/back.png'

const Signup = () => {

  useEffect(() => {
    document.title = 'Signup | Register'
  }, [])

  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
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

  const errorMessages = () => {
    const specialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

    if (formData.password !== formData.passwordConfirmation) {
      setErrorMessage('Password do not match')
    } else if (!specialChar.test(formData.password)) {
      setErrorMessage('Password must contain at least one special character')
    } else if (formData.email === formData.password) {
      setErrorMessage('Password should not be the same as email')
    } else if (formData.password.length < 6 ) {
      setErrorMessage('Password should have at least 6 characters')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    errorMessages()
  }
  

  return (
    <section>
      <SessionHeader />
      <form onSubmit={handleSubmit} className='signup-form'>
        <span className='signup-back-button-container'>
          <img className='signup-back-button' src={back} alt='back-button' />
        </span>
        <p className='font-bold text-xl'>Registration</p>
        {errorMessage && <p className='signup-error-message'>{errorMessage}</p>}
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

        <div className='signup-password-container'>
          <label htmlFor='password'></label>
          <input 
            id='password'
            type={ showPassword ? 'text' : 'password' }
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleInputChange}
            required 
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className='signup-password-icon'
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span> 
        </div>

        <div className='signup-password-container'>
          <label htmlFor='passwordConfirmation'></label>
          <input 
            id='passwordConfirmation'
            type={showPasswordConfirmation ? 'text' : 'password'}
            name='passwordConfirmation'
            placeholder='Confirm password'
            value={formData.passwordConfirmation}
            onChange={handleInputChange}
            required 
          />
          <span
            onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
            className='signup-password-icon'
          >
            {showPasswordConfirmation ? <FaEye /> : <FaEyeSlash />}
          </span> 
        </div>

        <div className='password-guide'>
          <h5 className='text-xs font-bold mb-1'>Your password must:</h5>
          <ul className="list-disc pl-4">
            <li className='text-xs'>Have between 6 and 20 charcters</li>
            <li className='text-xs'>Contain at least 1 special charcter</li>
            <li className='text-xs'>Be different from your email address</li>
          </ul>
        </div>

        <button className='signup-submit-button' type='submit'>Sign Up</button>
      </form>
    </section>
  )
}

export default Signup
