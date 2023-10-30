import './landingpage.scss'
import Homepage from '../../components/homepage/homepage/Homepage'
import Selectoption from '../../components/homepage/AngelSelect/Selectoption'
import AngelDonate from '../../components/homepage/donate/AngelDonate'
import Impact from '../../components/homepage/angelImpact/Impact'
import AngelFooter from '../../components/homepage/footer/AngelFooter'
import Hometop from '../../components/homepage/HomeTop/Hometop'
import Guarantee from '../../components/homepage/guarantees/Guarantee'
import Join from '../../components/homepage/join/Join'
import NewsLetter from '../../components/News-letter/NewsLetter'
import Optiontab from '../../components/Option/Option'

function LandingPage() {
  return (
    <div className='landing'> 
    <div className="homtop">
    <Hometop/>
    </div>
    <div className="landingbody">
    <Homepage/>
    <Selectoption/>
    <Optiontab/>
    <Impact/>
    <AngelDonate/>
     <Guarantee/>
    <Join/>
    <Optiontab/>
    <div className="newLetter">
    <div className="content">
     <NewsLetter/>
    </div>
    </div>
    <AngelFooter/>
    </div>
   
    </div> 
  )
}

export default LandingPage