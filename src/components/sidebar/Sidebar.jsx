import React from 'react'
import './styles/sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar-main-container'>
      {/* On sidebar links available to normal user will be different and that of an admin
      when the user is an admin we show a different set of links
      do otherwise for a normal user
      
      */}
      {/* design side bar */}
      <div>
        <p>Spencer</p>
      </div>
    </div>
  )
}

export default Sidebar