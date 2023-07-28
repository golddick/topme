import './index.scss'
import Signup from './pages/Registration/Signup'
import Login from './pages/login/Login'
import Angel from './pages/Angel-profile/Angel';
import Analytics from './pages/Analytics/Analytics';
import Donor from './pages/Donor-profile/Donor';
import Completed from './pages/Donor-profile/Completed';
import Ongoing from './pages/Donor-profile/Ongoing';
import PostDetails from './pages/PostDetails/PostDetails';
import CreatePost from './components/CreateCampaign/CreatePost';
import LandingPage from './pages/landingPage/LandingPage';
import Impactpage from './pages/ImpactPage/Impactpage';
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
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/profile' element={<Angel/>}/>
            <Route path='/analytics' element={<Analytics/>}/>
            <Route path='/donor' element={<Donor/>}/>
            <Route path='/Completed' element={<Completed/>}/>
            <Route path='/Ongoing' element={<Ongoing/>}/>
            <Route path='/PostDetails' element={<PostDetails/>}/>
            <Route path='/CreatePost' element={<CreatePost/>}/>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/impact' element={<Impactpage/>}/>
          </Routes>
        </BrowserRouter>
      </>
      </div>
  )
}

export default App