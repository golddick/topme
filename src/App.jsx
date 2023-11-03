import './main.scss'
import './styles.scss'
import Register from './pages/Registration/Register';
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
// import SuccessBox from './pages/PaymentPAge/successBox';
import CampaignDetails from './pages/campaignDetails/CampaignDeatail';
import PaymentPage from './pages/PaymentPAge/PaymentPage';
import CreateSupport from './pages/CreateSupport/CreateSupport';
import {
  BrowserRouter ,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Play from './pages/Play';



function App() {
   
  
  
  return (
    <div className='App'>
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/Sign-up' element={<Register/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Profile' element={<AngelProfile/>}/>
            <Route path='/analytics' element={<Analytics/>}/>
            <Route path='/Single' element={<Donor/>}/>
            <Route path='/Completed' element={<Completed/>}/>
            <Route path='/Ongoing' element={<Ongoing/>}/>
            <Route path='/CampaignDetails' element={<CampaignDetails/>}/>
            <Route path='/CreatePost' element={<CreatePost/>}/>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/Angels' element={<Impactpage/>}/>
            <Route path='/How-it-Works' element={<HowitWorks/>}/>
            <Route path='/updateProfile' element={<Updateprofile/>}/>
            <Route path='/addProfile' element={<Addprofile/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Blog' element={<Blog/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Guarantee' element={<Guarantee/>}/>
            <Route path='/Claim-form' element={<Claim/>}/>
            <Route path='/Pricing' element={<Pricing/>}/>
            <Route path='/RequestLink' element={<Forgetpasswoord/>}/>
            <Route path='/ResetPassword' element={<ResetPassword/>}/>
            <Route path='/SuccessPage' element={<SuccessPage/>}/>
            {/* <Route path='/postDetails' element={<PostDetails/>}/> */}
            <Route path='/Payment' element={<PaymentPage/>}/>
            {/* <Route path='/paymentSuccessful' element={<SuccessBox/>}/> */}
            <Route path='/CreateSupport' element={<CreateSupport/>}/>
            <Route path='/play' element={<Play/>}/>
            {/* <Route path='/Register' element={<Register/>}/> */}
            
          </Routes>
        </BrowserRouter>
      </>

      </div>
  )
}

export default App