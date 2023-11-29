import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = 'Home | Xpress';
  }, []);
  
  return (
    <div className="bg-blue-500 text-white p-4 d-flex">
      <p>Hello</p>
      <p>Hey</p>

      <Link to='/logout'>
        <button className="text-white bg-black">Logout</button>
      </Link>
    </div>  
  )
}

export default Home
