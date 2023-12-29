import './styles/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome,
  faShoppingCart 
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div className='sidebar-links'>
      <ul>
        <Link to='/'>
          <li className='first-side-link first-fr'>
            <FontAwesomeIcon icon={faHome} />
            <span className='sidebar-home'>Home</span>
          </li>
        </Link>
        <li className='first-side-link'>
          <FontAwesomeIcon className='side-order-icon' icon={faShoppingCart} />
          <span className='side-orders'>My orders</span>
        </li>
      </ul>
    </div>
  )
}

export default User