import React from 'react';
import Products from './Products';
import { useSelector } from 'react-redux';

const ProductsHome = () => {
  const actualProducts = useSelector((state) => state.product.products);
  // console.log(actualProducts)
  return (
    <>
      <h1>Products</h1>
      <div>
        {Array.from({ length: actualProducts.length }).map((_, index) => (
          <Products key={index} />
        ))}
      </div>
    </>
  )
}

export default ProductsHome