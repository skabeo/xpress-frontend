import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Signup from './components/session/Signup'
import Login from './components/session/Login'
import PrivateRoute from './components/routes/PrivateRoute'
import Logout from './components/session/Logout'

function App() {

  return (
    <>
      <Routes>
        <Route 
          path='/' 
          element={(
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          )} 
        />
        <Route 
          path='/signup' 
          element={
              <Signup />
          } 
        />
        <Route 
          path='/login' 
          element={
              <Login />
          } 
        />
        <Route 
          path='/logout'
          element={(
            <PrivateRoute>
              <Logout />
            </PrivateRoute>
          )}
        />
      </Routes>
    </>
  )
}

export default App
