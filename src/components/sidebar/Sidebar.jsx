import React, { useState } from 'react'
import './styles/sidebar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [angleIcon, setAngleIcon] = useState(false);
  return (
    <div className='sidebar-main-container'>
      {/* On sidebar links available to normal user will be different and that of an admin
      when the user is an admin we show a different set of links
      do otherwise for a normal user
      
      */}
      {/* design side bar */}
      <div className='sidebar-user-name'>
        <p>Spencer</p>
        <span onClick={() => setAngleIcon(!angleIcon)}>
          <FontAwesomeIcon icon={ angleIcon ? faAngleUp : faAngleDown} />
        </span>
      </div>

      <Link to='/logout'>
        <button>Logout</button>
      </Link>
    </div>
  )
}

export default Sidebar