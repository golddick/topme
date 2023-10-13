import './upprofile.scss'
import ProfileUpdate from '../../components/profileUpdate/ProfileUpdate'
import BlackLogo from '../../assets/blacklogo.svg'

function Updateprofile() {
  return (
    <div className='Updateprofile'> 
   <div className="homTop">
    <img src={BlackLogo} alt="" />
   </div>
   <ProfileUpdate/>
    </div>
  )
}

export default Updateprofile




