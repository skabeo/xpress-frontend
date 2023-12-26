import React from 'react';
import slips from '../../assets/slips.jpg';
import './styles/product-details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import heart from '../../assets/heart-regular.svg'

const ProductMain = ({ specificProduct }) => {

  const originalTime = specificProduct.created_at;
  const dateObject = new Date(originalTime);

  const options = { day: 'numeric', month: 'short', year: '2-digit' };
  const formattedDate = dateObject.toLocaleDateString('en-UK', options);

  return (
    <div className='main-product-container'>
      <div className='two-section-container'>
        <div className='product-main-img-container'>
          <img className='product-main-img' src={slips} alt='product' />
        </div>
        <div className='second-main-section'>
          <p className='main-home-ref'>Home REF: {specificProduct.id}</p>
          <div className='second-inner-section'>
            <span className='save-box'>
              <img src={heart} />
              <p>Save</p>
            </span>
            <span className='price-box'>
              <p className='font-bold text-sm'>Price</p>
              <p>at <span className='font-bold text-xl'>GH₵{specificProduct.price}</span></p>
            </span>
            <span className='date-box'>
              <p>Added on</p>
              <p>{formattedDate}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductMain