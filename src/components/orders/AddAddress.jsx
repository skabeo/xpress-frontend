import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './styles/add-address.css';
import PropTypes from 'prop-types';
import { postUserAddress } from '../../redux/user-address/userAddresSlice';
import { useDispatch } from 'react-redux';

const AddAddress = ({ onClose }) => {
  const dispatch = useDispatch();
  const storedUSerInfo = localStorage.getItem("USER_INFO");
  const parsedData = JSON.parse(storedUSerInfo);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { phoneNumber1, address, city, phoneNumber2 } = formData;
    const data = {
      user_address: {
        user_id: parsedData.id,
        tel_line: phoneNumber1,
        tel_line2: phoneNumber2,
        address,
        city
      }
    };
    await dispatch(postUserAddress(data));
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content text-sm">
        <div className='flex justify-between px-5 py-3 bg-gray-100'>
          <p className='font-semibold'>Enter a new address</p>
          <button className="close-button-container" onClick={onClose}>
            <FontAwesomeIcon className="close-button text-xl" icon={faTimes} />
          </button>
        </div>
        <hr />
        <div className='popup-bottom-half'>
          <h3 className='text-xl font-bold'>Add a new address</h3>
          <form onSubmit={handleSubmit} className='mt-5'>
            <div className="form-group">
              <label htmlFor="phoneNumber1">
                Phone Number <span className='text-red-500'>*</span>
                <input
                  type="tel"
                  id="phoneNumber1"
                  name="phoneNumber1"
                  placeholder='0200123456'
                  value={formData.phoneNumber1}
                  onChange={handleChange}
                  maxLength="10"
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber2">
                Phone Number (Optional)
                <input
                  type="tel"
                  id="phoneNumber2"
                  name="phoneNumber2"
                  value={formData.phoneNumber2}
                  maxLength="10"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="address">
                Address <span className='text-red-500'>*</span>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder='Street address, P.O. box, company name, c/o'
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="city">
                City <span className='text-red-500'>*</span>
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

            <button type="submit" className='submit-address font-bold text-xs'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

AddAddress.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AddAddress
