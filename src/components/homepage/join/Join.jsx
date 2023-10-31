import './join.scss'
import Male from '../../../assets/male.png'
import Female from '../../../assets/Female.png'
import {BiCaretRight} from 'react-icons/bi'
import Wing from '../../../assets/TopWing.png'
import Wing2 from '../../../assets/Topwing2.png'
 
function Join() {
  return (
    <div className='Join'>
        <div className="joinWrapper">
    <div className="wrapper_join">
    <div className="left">
            <img src={Male} alt=""  className='leftmale'/> 
        </div>
        <div className="center">
            <h1>Ready to get started? Join hundreds of other Angels today.</h1>
            <div className="btnWrapper">
                <div className="signupBtn">
                    <span>become an angel</span>
                        <BiCaretRight/> 
                </div>
                <button className='howBtn'>how it works </button>
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