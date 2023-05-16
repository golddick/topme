import './leftbar.scss'
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function Leftbar() {
  return (
    <div className='Leftbar'>
       <div className="top">
        <div className="profileInfo">
        <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-36703721.jpg" 
        alt=""  className='coverImg'/>

            <img src="https://media.istockphoto.com/id/1040308104/photo/mature-handsome-business-man.jpg?s=612x612&w=0&k=20&c=QbyH3XFmLOoy8NESjLQC8PYsm6g3UBL6COFaF-Qnnbk=" 
            alt="" className="profileImg"/>
               </div>
               <div className="name">
                <span>Theresa Ubong  <Person4OutlinedIcon className='icon'/></span>
                <p>@theNGO_theresa</p>
                </div>
                <div className="engagements">
                    <div className="engagement">
                        <span>2k</span>
                        <p>LIKES</p>
                    </div>
                    &nbsp;&nbsp;
                    <div className="vertical-line"></div>
                    <div className="line"></div>
                    <div className="engagement">
                        <span>10k</span>
                        <p>VIEWS</p>
                    </div>
                    &nbsp;&nbsp;
                    <div className="vertical-line"></div>
                    <div className="line"></div>
                    <div className="engagement">
                        <span>10+</span>
                        <p>CAMPAIGNS</p>
                    </div>
                </div>
       </div>
       <div className="horizontal-line"></div>
       <div className="center">
        <div className="nav">
        <PersonOutlineIcon className='icon'/> 
        <span>Profile</span>
        </div>
        <div className="nav">
        <VolunteerActivismOutlinedIcon className='icon'/>
        <span>ALL Campaign</span>
        </div>
        <div className="nav">
        <NotificationsNoneOutlinedIcon className='icon'/>
               <span>Notification</span>
               <p>4</p>
        </div>
        <div className="nav">
    <SendOutlinedIcon className='icon'/>
        <span>Email</span>
        </div>
        <div className="nav">
        <TurnedInNotOutlinedIcon className='icon'/>
        <span>Wishlist</span>
        </div>
        </div>
       <div className="bottom">
        <div className="logout">
            <LogoutOutlinedIcon className='icon'/> &nbsp;&nbsp; <span>Logout</span>
        </div>
       </div>
        </div>
  )
}

export default Leftbar