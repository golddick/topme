import './upprofile.scss'
import ProfileUpdate from '../../components/profileUpdate/ProfileUpdate'
import Leftbar from '../../components/leftbar/Leftbar'
import Topbar from '../../components/Topbar/Topbar'

function Updateprofile() {
  return (
    <div className='Updateprofile'> 

   <div className="updateContainerLeft">
          <Leftbar/>
    </div>

    <div className="updateContainercenter ">
    <ProfileUpdate/>
    </div>
   </div>

  )
}

export default Updateprofile




