import React from 'react'
import Sidebar from '../sidebar/Sidebar';
import './styles/product-details.css'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className='product-details-container'>
      <Sidebar />
      ProductDetails {id}
    </div>
  )
}

export default ProductDetails;
