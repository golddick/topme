import './index.scss'
import Signup from './pages/Registration/Signup'
import Login from './pages/login/Login'
import AngelProfile from './pages/Angel-profile/Angel';
// import Angel from './pages/Angel-profile/Angel';
import Analytics from './pages/Analytics/Analytics';
import Donor from './pages/Donor-profile/Donor';
import Completed from './pages/Donor-profile/Completed';
import Ongoing from './pages/Donor-profile/Ongoing';
import PostDetails from './pages/PostDetails/PostDetails';
import CreatePost from './components/CreateCampaign/CreatePost';
import LandingPage from './pages/landingPage/LandingPage';
import Impactpage from './pages/ImpactPage/Impactpage';
import HowitWorks from './pages/How-itWorks/HowitWorks';
import Updateprofile from './pages/UpdateProfile/Updateprofile';
import Addprofile from './pages/UpdateProfile/Addprofile'
import About from './pages/AboutTopme/About';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Guarantee from './pages/Guarantee/Guarantee';
import Claim from './pages/Claim-form/Claim';
import Pricing from './pages/pricing/Pricing';
import Forgetpasswoord from './pages/forgetPassword/Forgetpasswoord';
import ResetPassword from './pages/forgetPassword/ResetPassword'
import SuccessPage from './pages/forgetPassword/SuccessPage';
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
            <Route path='/angelProfile' element={<AngelProfile/>}/>
            <Route path='/analytics' element={<Analytics/>}/>
            <Route path='/donor' element={<Donor/>}/>
            <Route path='/Completed' element={<Completed/>}/>
            <Route path='/Ongoing' element={<Ongoing/>}/>
            <Route path='/PostDetails' element={<PostDetails/>}/>
            <Route path='/CreatePost' element={<CreatePost/>}/>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/impact' element={<Impactpage/>}/>
            <Route path='/HowitWorks' element={<HowitWorks/>}/>
            <Route path='/updateProfile' element={<Updateprofile/>}/>
            <Route path='/addProfile' element={<Addprofile/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/guarantee' element={<Guarantee/>}/>
            <Route path='/Claim-form' element={<Claim/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
            <Route path='/RequestLink' element={<Forgetpasswoord/>}/>
            <Route path='/ResetPassword' element={<ResetPassword/>}/>
            <Route path='/SuccessPage' element={<SuccessPage/>}/>
            
          </Routes>
        </BrowserRouter>
      </>
      </div>
  )
}

export default App