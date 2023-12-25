import Products from './Products';
import { useSelector } from 'react-redux';
import './styles/product.css'
import { Link } from 'react-router-dom';

const ProductsHome = () => {
  const actualProducts = useSelector((state) => state.product.products);

  return (
    <div className='products-home-container'>
      <h1 className='products-title'>Products</h1>
      <div className='products-cards'>
        {actualProducts.length > 0 && actualProducts.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <Products product={product} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductsHome