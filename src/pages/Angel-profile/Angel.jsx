import './angel.scss'
import Topbar from '../../components/Topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Widget from '../../components/widgets/Widget'
import Stats from '../../components/stats/Stats'
import Post from '../../components/post/Post'
import MobilePost from '../../components/mobileComponent /mobilePostCont/MobilePost'
import Notifiction from '../../components/notification/Notifiction'
import PostStatus from '../../components/postLink/PostStatus'
import NavStatus from '../../components/mobileComponent /Nav_Status/NavStatus'

function AngelProfile() {
  return (
    <div className='profile'> 
        <div className="mobileHeader"> 
          < NavStatus/> 
         
        </div>
        
        <div className="profile_Containerleft">
          <Leftbar/>
          </div>
          <div className="Profile-ContainerRight">
           <div className="Profile-topBar">
           <div className="widget"><Widget/></div>
            <div className="stat"><Stats/></div>
           </div>
           <div className="Profile_ContainerBody" >
           <div className="postContainer">
             <Post/>
             </div>
             <div className="mobileCont">
              <MobilePost/>
              <MobilePost/>
              <MobilePost/>
             </div>
             <div className="notificationContainer">
              <Notifiction/>
             </div>
           </div>
           
            </div>
        
    </div>
  )
}

export default AngelProfile