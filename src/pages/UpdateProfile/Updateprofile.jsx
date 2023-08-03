import './Updateprofile.scss'
import ProfileUpdate from '../../components/profileUpdate/ProfileUpdate'
import Leftbar from '../../components/leftbar/Leftbar'
import Topbar from '../../components/Topbar/Topbar'

function Updateprofile() {
  return (
    <div className='Updateprofile'> 
    <div className="homtop">
    <Topbar />
    </div>
     
   <div className="updateprofileContainer">
   <div className="updateprofileContainerLeft">
          <Leftbar/>
    </div>

    <div className="updateprofileContainercenter">
    <ProfileUpdate/>
    </div>
   </div>
    </div>
  )
}

export default Updateprofile




