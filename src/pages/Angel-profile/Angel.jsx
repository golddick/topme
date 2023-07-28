import './angel.scss'
import Topbar from '../../components/Topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Widget from '../../components/widgets/Widget'
import Stats from '../../components/stats/Stats'
import Post from '../../components/post/Post'


function Angel() {
  return (
    <div className='A_profile'>
        < Topbar/>
        <div className="profileWrapper">
        <div className="profileLeft">
          <Leftbar/></div>
          <div className="profileCenter">
           <div className="topBar">
           <div className="widget"><Widget/></div>
            <div className="stat"><Stats/></div>
           </div>
           <div className="postContent">
           <div className="postedCampaign"> <Post/></div>
           </div>
           
            </div>
        </div>
    </div>
  )
}

export default Angel