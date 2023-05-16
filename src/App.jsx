import './index.scss'
import Signup from './pages/Registration/Signup'
import Login from './pages/login/Login'
import Angel from './pages/Angel-profile/Angel';
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
            <Route path='/angel' element={<Angel/>}/>
          </Routes>
        </BrowserRouter>
      </>
      </div>
  )
}

export default App