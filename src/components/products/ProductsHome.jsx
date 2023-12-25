import React from 'react';
import Products from './Products';
import { useSelector } from 'react-redux';
import './styles/product.css'

const ProductsHome = () => {
  const actualProducts = useSelector((state) => state.product.products);

  return (
    <div className='products-home-container'>
      <h1 className='products-title'>Products</h1>
      <div className='products-cards'>
        {actualProducts.length > 0 && actualProducts.map((product, index) => (
          <Products key={index} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductsHome