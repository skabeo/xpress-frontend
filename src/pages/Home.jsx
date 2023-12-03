import { useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  useEffect(() => {
    document.title = 'Home | Xpress';
  }, []);
  
  return (
    <div>
      <Sidebar />

      {/* <Link to='/logout'>
        <button>Logout</button>
      </Link> */}
    </div>  
  )
}

export default Home
