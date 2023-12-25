import { useEffect } from "react";
import './styles/home.css'
import Sidebar from "../components/sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/products/productSlice";
import Products from "../components/products/Products";

const Home = () => {
  const dispatch = useDispatch();

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
        <Products />
      </div>
    </div>  
  )
}

export default Home
