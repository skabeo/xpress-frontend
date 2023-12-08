import React, { useState } from 'react'
import './styles/sidebar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAngleDown, 
  faAngleUp,
  faHome 
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [angleIcon, setAngleIcon] = useState(false);
  return (
    <div className='sidebar-main-container'>
      {/* On sidebar links available to normal user will be different and that of an admin
      when the user is an admin we show a different set of links
      do otherwise for a normal user
      
      */}
      {/* design side bar */}
      <div className='main-sidebar-user-name'>
        <div className='sidebar-user-name'>
          <p className='font-bold'>Spencer</p>
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
            <FontAwesomeIcon className='icon' icon={faHome} />
            <span className='icon sidebar-home'>Home</span>
          </li>
          <li>My orders</li>
          <li>My orders</li>
          <li>Home</li>
          <li>My orders</li>
          <li>My orders</li>
          <li>Home</li>
          <li>My orders</li>
          <li>My orders</li>
        </ul>
      </div>

    </div>
  )
}

export default Sidebar