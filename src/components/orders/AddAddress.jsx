import React from 'react';
import './styles/add-address.css';

const AddAddress = ({ isOpen, closePopup }) => {
  return (
    <div className={`popup-container ${isOpen ? 'open' : ''}`}>
      <div className="backdrop" onClick={closePopup}></div>
      <div className="popup-content">
        <button className="close-btn" onClick={closePopup}>
          Close
        </button>
        <p>This is the content of the popup.</p>
      </div>
    </div>
  );
};

export default AddAddress