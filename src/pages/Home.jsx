import { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  useEffect(() => {
    document.title = 'Home | Xpress';
  }, []);
  
  return (
    <div>
      <Sidebar />
    </div>  
  )
}

export default Home
