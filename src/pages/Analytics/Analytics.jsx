import './analytics.scss'
import Topbar from '../../components/Topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Feed from '../../components/feeds/Feed'
import Table from '../../components/Table/Table'
import Widget from '../../components/widgets/Widget'
import Stats from '../../components/stats/Stats'
import Atable from '../../components/analytic-Table/Atable'



function Analytics() {
  return (
    <div className='A_profile'>
        < Topbar/>
        <div className="profileWrapper">
        <div className="profileLeft">
          <Leftbar/></div>
          <div className="profileCenter">
          <div className="widget" >  <Widget/></div>
           
           <div className="stats"> <Stats/></div>
            <Atable/>
            </div>
        </div>
    </div>
  )
}

export default Analytics