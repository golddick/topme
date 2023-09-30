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
import {FaEnvelope} from 'react-icons/fa'



function Donor() {
  return (
    <div className='campPage'>
          <Hometop/>

        <div className="campPageBody">
        <div className="postStatus"> <PostStatus/></div>
        <div className="PageContainerleft">

        <div className="back">
        <NavLink to='/' className='navLink'>
        <IoIosArrowDropleftCircle />
        </NavLink>
        </div>
          <Sidebar/>
        </div>


          <div className="PageContainerRight">
           <div className="largeView"> <Post/></div>
           <div className="mobileView"> <MobilePost/>
            <MobilePost/></div>
            </div>
            

        </div>
           <div className="joinTab" > <Join /></div>

           <div className="tabFooter"> <AngelFooter/></div>
    </div>
  )
}

export default Donor