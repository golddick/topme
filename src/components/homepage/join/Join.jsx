import './join.scss'
import Male from '../../../assets/male.png'
import Female from '../../../assets/Female.png'
import {BiCaretRight} from 'react-icons/bi'
import Wing from '../../../assets/TopWing.png'
import Wing2 from '../../../assets/Topwing2.png'
import { NavLink } from 'react-router-dom'
 
function Join() {
  return (
    <div className='Join'>
        <div className="joinWrapper">
    <div className="wrapper_join">
    <div className="left">
    <div className="wing-body">
          <img src={Wing} alt=""  className='wing Wing1' />
          <img src={Wing2} alt=""  className='wing Wing2'/>
          <img src={Male} alt=""  className='leftmale'/> 
          </div>
            
        </div>
        <div className="center">
            <h1>Ready to get started? Join hundreds of other Angels today.</h1>
            <div className="btnWrapper">
            <NavLink to='/Sign-up' className='signupBtn navlink'>      
                    <div>become an angel</div>
                        <BiCaretRight/> 
                </NavLink>
                <NavLink to='/How-it-Works' className='howBtn navlink'>
                <button className='howBtn'>how it works </button>
                </NavLink>
                
            </div> 
        </div>
        <div className="right">
        <div className="wingbody">
          <img src={Wing} alt=""  className='wing Wing1' />
          <img src={Wing2} alt=""  className='wing Wing2'/>
          <img src={Female} alt=""  className='rightFemale'/>
          </div>
        {/* <img src={Female} alt="" className='rightFemale' /> */}
        </div>
    </div>
        </div>
        </div>
  ) 
}
 
export default Join 