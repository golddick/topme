import './landingpage.scss'
import Homepage from '../../components/homepage/homepage/Homepage'
import Selectoption from '../../components/homepage/AngelSelect/Selectoption'
import AngelDonate from '../../components/homepage/donate/AngelDonate'
import Impact from '../../components/homepage/angelImpact/Impact'
import AngelFooter from '../../components/homepage/footer/AngelFooter'
import Hometop from '../../components/homepage/HomeTop/Hometop'
import Guarantee from '../../components/homepage/guarantees/Guarantee'
import Join from '../../components/homepage/join/Join'

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
    <Guarantee/>
    <Join/>
    <div className="newLetter">
    <div className="content">
      <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
      <h2>GET UP-TO-DATE INFORMATION ABOUT TOPME AND ITS SERVICES.</h2>
      <form action="">
        <input type="text"  placeholder='YOUR EMAIL'/>
        <button>SUBSCRIBE</button>
      </form>
    </div>
    </div>
    <AngelFooter/>
    </div>
   
    </div> 
  )
}

export default LandingPage