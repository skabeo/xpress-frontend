import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
