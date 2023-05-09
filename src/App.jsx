import React from 'react'
import Signup from './pages/Registration/Signup'
import Login from './pages/login/Login'
import {
  BrowserRouter ,
  Routes,
  Route,
  // Link
} from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </BrowserRouter>
      </>
      </div>
  )
}

export default App