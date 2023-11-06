import './donor.scss'
import Sidebar from '../../components/leftbar/Sidebar'
import Hometop from '../../components/homepage/HomeTop/Hometop'
import {  NavLink } from 'react-router-dom';
import {IoIosArrowDropleftCircle} from 'react-icons/io'
import Join from '../../components/homepage/join/Join';
import MobilePost from '../../components/mobileComponent /mobilePostCont/MobilePost';
import PostStatus from '../../components/postLink/PostStatus';
import Post from '../../components/post/Post'
import AngelFooter from '../../components/homepage/footer/AngelFooter';
import VisitorNavStatus from '../../components/mobileComponent /visitorNavStatus/VisitorNavStatus';
import {FaEnvelope} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';


function Donor() {

  return (
    <div className='campPage'>
        <div className="navheader-">
          <Hometop/>
        </div>

        <div className="campPageBody">
       
        <div className="PageContainerleft">

        <div >
        <NavLink to='/' className='navLink'>
        <IoIosArrowDropleftCircle className='back'/>
        </NavLink>
        </div>
          <Sidebar/>
        </div>


          <div className="PageContainerRight">
          {/* <div className="postStatus"> <PostStatus/></div> */}
          {/* <Post/> */}
           <div className="largeView"> <Post/></div>
           <div className="mobileView">
            <VisitorNavStatus/>
           <div className="mobileViewBody">
           <Sidebar/>
             <MobilePost/>
            <MobilePost/>
           
           </div>
           <AngelFooter/>
            </div>
            </div>

            <div className="exRight"></div>
            

        </div>
           <div className="joinTab" > <Join /></div>

           <div className="tabFooter"> <AngelFooter/></div>
    </div>
  )
}

export default Donor