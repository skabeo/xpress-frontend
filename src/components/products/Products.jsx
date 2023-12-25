import React from 'react';
import './styles/product.css'
import house from '../../assets/house.jpg'
import slips from '../../assets/slips.jpg'
import spoon from '../../assets/spoons.jpg'

const Products = ({ product }) => {
  return (
    <div className='products-home-grid'>
      <div className='product-image-container'>
        <img className='product-image' src={spoon} alt='house' />
        <span className='product-price'>
          <span className='text-sm'>at</span> 
          <span className='font-bold'> ₵{product.price}</span>
        </span>
      </div>
      <div className='product-desc-display'>
        <div>
          <p className='text-sm'>{product.weight_kg}g</p>
          <p className='font-bold text-sm'>{product.name}</p>
        </div>
        <div>
          <button className='products-view-deal'>View deal</button>
        </div>
      </div>
    </div>
  )
}

export default Products
