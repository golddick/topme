import './share.scss'
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';


function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="top">
            <img src="https://media.istockphoto.com/id/1040308104/photo/mature-handsome-business-man.jpg?s=612x612&w=0&k=20&c=QbyH3XFmLOoy8NESjLQC8PYsm6g3UBL6COFaF-Qnnbk=" 
            alt="" />
            <input type="text" placeholder='TITLE' className='title'/>
            <input type="text" placeholder='DESCRIPTION...' className='desc'/>
        </div>
        <div className="buttom">
            <div className="btn">
            <button><VolunteerActivismOutlinedIcon className='icon'/>amount</button>
            </div>
            <div className="btn">
            <button><CameraAltOutlinedIcon className='icon'/>photo</button>
            </div>
            <div className="btn">
            <button className="ccbtn" style={{width:'290px',  
            backgroundColor: ' #EBFFFA', 
            color: "#68EDCB"}}>create campaign</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Share
