import React, { useEffect } from 'react'
import Sidebar from '../sidebar/Sidebar';
import './styles/product-details.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/products/productSlice';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const specificProduct = Array.isArray(products) ? products.find(product => product.id === parseInt(id)) : null;

  return (
    <div className='product-details-container'>
      <Sidebar />
      ProductDetails {id}
    </div>
  )
}

export default ProductDetails;
