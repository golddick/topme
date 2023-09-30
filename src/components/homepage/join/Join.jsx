import './join.scss'
import Male from '../../../assets/male.png'
import Female from '../../../assets/Female.png'
import {BiCaretRight} from 'react-icons/bi'

function Join() {
  return (
    <div className='Join'>
        <div className="joinWrapper">
        <div className="left">
            <img src={Male} alt="" />
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
        <img src={Female} alt="" />
        </div>
        </div>
        </div>
  ) 
}

export default Join