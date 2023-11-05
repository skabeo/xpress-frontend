import { useEffect, useState } from 'react'
import SessionHeader from './SessionHeader'
import './styles/login.css'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash} from 'react-icons/fa'

// show 'incorect email or password when sign in button is clicked'

const Login = () => {

  useEffect(() => {
    document.title = 'Login | Log into your account'
  }, [])

  const [errorMessages, setErrorMessages] = useState('')
  const [showPasword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessages('Invalid Email or password')
  }

  return (
    <section>
      <SessionHeader />
      <div className='login-container'>
        <h4 className='font-bold text-xl mb-4'>Sign into your account</h4>
        {errorMessages && <li className='list-disc pl-2 mb-4 signup-error-message'>{errorMessages}</li>}
        <form className='login-form-container' onSubmit={handleSubmit}>
          <div className=''>
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

          <div className='login-password-container'>
            <label htmlFor='password'></label>
            <input 
              id='password'
              type={showPasword ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleInputChange}
              required 
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPasword)}
              className='login-password-icon'
            >
              {showPasword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

          <button type='submit' className='login-button font-bold'>Sign in</button>
        </form>
        <div className="horizontal-line-container">
          <hr className="horizontal-line" />
          <span className="or-text">or</span>
          <hr className="horizontal-line" />
        </div>
        <div className="optional-container">
          <h4 className='font-bold text-xl mb-4'>Sign up to create new account</h4>
          <Link to="/signup">
            <button className="sign-up" type="button">Sign up</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Login
