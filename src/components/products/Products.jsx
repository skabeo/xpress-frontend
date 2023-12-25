import './styles/product.css'
import PropTypes from 'prop-types';
import spoon from '../../assets/spoons.jpg';

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

Products.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number.isRequired,
    weight_kg: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Products
