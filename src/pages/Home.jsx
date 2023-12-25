import { useEffect } from "react";
import './styles/home.css'
import Sidebar from "../components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/products/productSlice";
import ProductsHome from "../components/products/ProductsHome";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.product)

  useEffect(() => {
    document.title = 'Home | Xpress';
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  
  return (
    <div>
      <Sidebar />
      <div className="products-grid">
        {isLoading ? 
          <div className="custom-loader-container">
            <div className="custom-loader"></div> 
          </div> : <ProductsHome />}
      </div>
    </div>  
  )
}

export default Home
