import './donor.scss'
import Sidebar from '../../components/leftbar/Sidebar'
import Hometop from '../../components/homepage/HomeTop/Hometop'
import {  NavLink } from 'react-router-dom';
import {IoIosArrowDropleftCircle} from 'react-icons/io'
import Join from '../../components/homepage/join/Join';
import Post from '../../components/post/Post'
import AngelFooter from '../../components/homepage/footer/AngelFooter';
import {FaEnvelope} from 'react-icons/fa'



function Donor() {
  return (
    <div className='campPage'>
          <Hometop/>

        <div className="campPageBody">
          
        <div className="PageContainerleft">

        {/* <NavLink to='/' className='navLink'>
        <IoIosArrowDropleftCircle className="back" style={{fontSize:'35px'}}/> 
        </NavLink> */}
        <div className="back">
        <IoIosArrowDropleftCircle />
        </div>

          <Sidebar/>
        </div>


          <div className="PageContainerRight">
            <Post/>
            </div>
            

        </div>
           <div className="joinTab" > <Join /></div>

           <div className="tabFooter"> <AngelFooter/></div>
    </div>
  )
}

export default Donor