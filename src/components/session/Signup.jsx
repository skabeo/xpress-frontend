import { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './styles/signup.css'
import SessionHeader from './SessionHeader';
import back from '../../assets/back.png'
import { useNavigate,Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../redux/session/sessionSlice';

const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Signup | Register'
  }, [])

  const { isLoading, error } = useSelector((state) => state.session);
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

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
    const errors = []
    const specialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~-]/;

    if (formData.password !== formData.passwordConfirmation) {
      errors.push('Passwords do not match');
    }
  
    if (!specialChar.test(formData.password)) {
      errors.push('Password must contain at least one special character');
    }
  
    if (formData.email === formData.password) {
      errors.push('Password should not be the same as the email');
    }
  
    if (formData.password.length < 6) {
      errors.push('Password should have at least 6 characters');
    }

    return errors;
  }

  const handleSubmit = async (e) => { 
    e.preventDefault();
    const errors = errorMessages();
    setErrorMessage([])

    const payload = {
      user: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
      }
    }

    if (errors.length === 0) {
      try {
        const response = await dispatch(signupUser(payload));
        if (response.error) {
          return
        } else {
          navigate('/');
        }
      } catch(error) {
        return 'Error occurred'
      }
    } else {
      setErrorMessage(errors)
    }
  }

  return (
    <section >
      <SessionHeader />
      <div className='signup-section-container'>
        <span className='signup-back-button-container'>
          <Link to='/login'>
            <img className='signup-back-button' src={back} alt='back-button' />
          </Link>
        </span>
        <p className='font-bold text-xl my-4'>Registration</p>
        <ul className='list-disc pl-4'>
          {errorMessage ? errorMessage.map((error, index) => (
            <li key={index} className='signup-error-message'>{error}</li>
          )) : null}
          {error && <p className='signup-error-message'>{error}</p>}
        </ul>
        <form onSubmit={handleSubmit} className='signup-form'>
          <div className='signup-firstname-container mt-3'>
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

          <button
            className='signup-submit-button' 
            type='submit'
            disabled={isLoading} 
            style={{ cursor: isLoading ? 'not-allowed' : 'pointer' }}
          >
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Signup
