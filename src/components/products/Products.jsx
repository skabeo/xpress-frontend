import React from 'react';
import './styles/product.css'
import house from '../../assets/house.jpg'

const Products = () => {
  return (
    <div className='products-home-grid'>
      <div className='product-image-container'>
        <img className='product-image' src={house} alt='house' />
        <span className='product-price'>
          <span className='text-sm'>at</span> 
          <span className='font-bold'> ₵200</span>
        </span>
      </div>
      <div className='product-desc-display'>
        <div>
          <p className='text-sm'>120g</p>
          <p className='font-bold text-sm'>Ladies cup</p>
        </div>
        <div>
          <button className='products-view-deal'>View deal</button>
        </div>
      </div>
    </div>
  )
}

export default Products
