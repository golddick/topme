import './donor.scss'
import Sidebar from '../../components/leftbar/Sidebar'
import Donortopbar from '../../components/Topbar/Donortopbar'
import Postlink from '../../components/postLink/PostStatus'
import Post from '../../components/post/Post'
import {FaEnvelope} from 'react-icons/fa'



function Completed() {
  return (
    <div className='D_profile'>
    <Donortopbar/>
        <div className="profileWrapper">
        <div className="profileLeft">
          <Sidebar/></div>
          <div className="profileCenter">
            <Postlink/>
            <Post/>
            </div>
        </div>
        <div className="bottom">
              <FaEnvelope className='icon'/>
            </div>
    </div>
  )
}

export default Completed