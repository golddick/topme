import './notification.scss'
import {BsPatchCheck} from 'react-icons/bs'



function Notifiction() {

  return (
    <div className="notification">
    <h2>notification</h2>
    <div className="notificationBox">
      <div className="boxTop">
        <BsPatchCheck className='notIcon'/>
        <span>TOP DONATION</span>
      </div>
      <div className="boxBottom">
        <h3><b>Anonymous </b>donated $1,200</h3>
        <div className="notTime">
          <h5>1 hour ago <b>.</b > 08:32 PM</h5>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Notifiction