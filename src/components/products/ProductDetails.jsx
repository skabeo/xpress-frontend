import React, { useEffect } from 'react'
import Sidebar from '../sidebar/Sidebar';
import './styles/product-details.css'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/products/productSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import ProductMain from './ProductMain';

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
      <div>
        <div className='details-heading'>
          <Link to='/'>
            <p className='details-home-link'>Home</p>
          </Link>
          <FontAwesomeIcon className='angle-right' icon={faAngleRight} />
          {specificProduct && <p>{specificProduct.name}</p>}
        </div>
        <hr />
        <div className='pro-details-section-containers'>
          {specificProduct && <ProductMain specificProduct={specificProduct} />}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;
