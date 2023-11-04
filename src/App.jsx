import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Signup from './components/session/Signup'
import Login from './components/session/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
