import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = 'Home | Xpress';
  }, []);
  
  return (
    <div className="bg-blue-500 text-white p-4 d-flex">
      <p>Hello</p>
      <p>Hey</p>
    </div>  
  )
}

export default Home
