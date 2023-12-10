import { useState } from 'react'
import './styles/sidebar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAngleDown, 
  faAngleUp,
  faHome,
  faShoppingCart 
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [angleIcon, setAngleIcon] = useState(false);
  const storedUSerInfo = localStorage.getItem("USER_INFO");
  const parsedData = JSON.parse(storedUSerInfo);

  return (
    <div className='sidebar-main-container'>
      <div className='main-sidebar-user-name'>
        <div className='sidebar-user-name'>
          <p className='font-bold'>{parsedData.first_name}</p>
          <span onClick={() => setAngleIcon(!angleIcon)}>
            <FontAwesomeIcon icon={ angleIcon ? faAngleUp : faAngleDown} />
          </span>
        </div>
        { angleIcon && 
        <div className='name-drop-down-options'>
          <p className='text-sm'>Recommend Xpres</p>
          <hr />
          <Link to='/logout' className='text-sm'>
            <button>Log Out</button>
          </Link>
        </div> }
      </div>

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
    </div>
  )
}

export default Sidebar