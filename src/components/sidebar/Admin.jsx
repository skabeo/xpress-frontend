import React from 'react';
import './styles/sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome,
  faShoppingCart,
  faChartBar,
  faShoppingBag,
  faUsers 
} from '@fortawesome/free-solid-svg-icons';

const Admin = () => {
  return (
    <div className='sidebar-links'>
      <ul>
        <li className='first-side-link'>
          <FontAwesomeIcon icon={faHome} />
          <span className='sidebar-home'>Home</span>
        </li>
        <li className='first-side-link'>
          <FontAwesomeIcon className='side-order-icon' icon={faShoppingBag} />
          <span className='side-orders'>Products</span>
        </li>
        <li className='first-side-link'>
          <FontAwesomeIcon className='side-order-icon' icon={faShoppingCart} />
          <span className='side-orders'>Orders</span>
        </li>
        <li className='first-side-link'>
          <FontAwesomeIcon className='side-order-icon' icon={faUsers} />
          <span className='side-orders'>Customers</span>
        </li>
      </ul>
    </div>
  )
}

export default Admin