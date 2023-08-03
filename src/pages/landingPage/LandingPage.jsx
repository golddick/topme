import './landingpage.scss'
import Homepage from '../../components/homepage/homepage/Homepage'
import Selectoption from '../../components/homepage/AngelSelect/Selectoption'
import AngelDonate from '../../components/homepage/donate/AngelDonate'
import Impact from '../../components/homepage/angelImpact/Impact'
import AngelFooter from '../../components/homepage/footer/AngelFooter'
import Hometop from '../../components/homepage/HomeTop/Hometop'

function LandingPage() {
  return (
    <div className='landing'> 
    <div className="homtop">
    <Hometop/>
    </div>
    <div className="landingbody">
    <Homepage/>
    <Selectoption/>
    <Impact/>
    <AngelDonate/>
    <AngelFooter/>
    </div>
    </div> 
  )
}

export default LandingPage