import { useEffect, useState } from 'react'
import SessionHeader from './SessionHeader'
import './styles/login.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../redux/session/sessionSlice'

const Login = () => {

  useEffect(() => {
    document.title = 'Login | Xpress'
  }, [])

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.session)

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      user: {
        email: formData.email,
        password: formData.password,
      }
    }

    try {
      const response = await dispatch(loginUser(payload));
      
      if(response.error) {
        return
      } else {
        navigate('/')
      }
    } catch(error) {
      return 'An error occured'
    }
  }

  return (
    <section>
      <SessionHeader />
      <div className='login-container'>
        <h4 className='font-bold text-xl mb-4'>Sign into your account</h4>
        {error && <li className='list-disc pl-2 mb-4 signup-error-message'>{error}</li>}
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

          <button 
            type='submit' 
            className='login-button font-bold'
            disabled={isLoading} 
            style={{
              cursor: isLoading ? 'not-allowed' : 'pointer',
              opacity: isLoading ? 0.7 : 1,
            }}
          >{isLoading ? 'Signing in...' : 'Sign in'}
          </button>
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
