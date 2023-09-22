import './angel.scss'
import Topbar from '../../components/Topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Widget from '../../components/widgets/Widget'
import Stats from '../../components/stats/Stats'
import Post from '../../components/post/Post'
import Notifiction from '../../components/notification/Notifiction'


function AngelProfile() {
  return (
    <div className='profile'> 
        <div className="mobileHeader">
          < Topbar/>
        </div>
       
        <div className="profile_Containerleft">
          <Leftbar/>
          </div>
          <div className="Profile-ContainerRight">
           <div className="Profile-topBar">
           <div className="widget"><Widget/></div>
            <div className="stat"><Stats/></div>
           </div>
           <div className="Profile_ContainerBody" style={{overflowY: 'scroll'}}>
           <div className="postContainer">
             <Post/>
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