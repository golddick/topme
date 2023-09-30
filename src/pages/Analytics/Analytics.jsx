import './analytics.scss'
import Topbar from '../../components/Topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Table from '../../components/Table/Table'
import Widget from '../../components/widgets/Widget'
import Stats from '../../components/stats/Stats'
import Atable from '../../components/analytic-Table/Atable'



function Analytics() {
  return (

    <div className='Analytics_profile'> 
    <div className="Analytics_profile-mobileHeader">
      < Topbar/>
    </div>
   
    <div className="Analytics_Containerleft">
      <Leftbar/>
      </div>
      <div className="Analytics_ContainerRight">
       <div className="Analytics_topBar">
       <div className="widget"><Widget/></div>
        <div className="stat"><Stats/></div>
       </div>
       <div className="AnalyticsBody" style={{overflowY: 'scroll'}}>
       <Atable/>
       </div>
       
        </div>
    
</div>
  )
}

export default Analytics