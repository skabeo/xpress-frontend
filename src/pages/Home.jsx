import { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/products/productSlice";

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
    </div>  
  )
}

export default Home
