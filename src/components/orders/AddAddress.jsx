import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './styles/add-address.css';

const AddAddress = ({ onClose }) => {
  const [formData, setFormData] = useState({
    phoneNumber1: '',
    address: '',
    city: '',
    phoneNumber2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className='flex justify-between px-5 py-3'>
          <p className='font-bold'>Enter a new address</p>
          <button className="close-button-container" onClick={onClose}>
            <FontAwesomeIcon className="close-button text-xl" icon={faTimes} />
          </button>
        </div>
        <hr />
        <div>
          <h3>Add a new address</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="phoneNumber1">
                Phone Number*:
                <input
                  type="tel"
                  id="phoneNumber1"
                  name="phoneNumber1"
                  value={formData.phoneNumber1}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber2">
                Phone Number:
                <input
                  type="tel"
                  id="phoneNumber2"
                  name="phoneNumber2"
                  value={formData.phoneNumber2}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="address">
                Address*:
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="city">
                City*:
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAddress