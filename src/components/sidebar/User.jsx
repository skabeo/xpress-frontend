import React from 'react'
import './styles/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome,
  faShoppingCart 
} from '@fortawesome/free-solid-svg-icons';

const User = () => {
  return (
    <div className='sidebar-links'>
      <ul>
        <li className='first-side-link'>
          <FontAwesomeIcon icon={faHome} />
          <span className='sidebar-home'>Home</span>
        </li>
        <li className='first-side-link'>
          <FontAwesomeIcon className='side-order-icon' icon={faShoppingCart} />
          <span className='side-orders'>My orders</span>
        </li>
      </ul>
    </div>
  )
}

export default User