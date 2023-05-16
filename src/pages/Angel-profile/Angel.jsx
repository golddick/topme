import './angel.scss'
import Topbar from '../../components/Topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Feed from '../../components/feeds/Feed'



function Angel() {
  return (
    <div className='A_profile'>
        < Topbar/>
        <div className="profileWrapper">
        <div className="profileLeft">
          <Leftbar/></div>
          <div className="profileCenter">
            <Feed/></div>
        </div>
    </div>
  )
}

export default Angel