import './leftbar.scss'
import React, { useState, useEffect } from 'react';
import {  NavLink, useLocation } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {TbDeviceAnalytics} from 'react-icons/tb'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import {BiChevronDown} from 'react-icons/bi'
import {FaRegEnvelope} from 'react-icons/fa'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { HiOutlineLocationMarker} from 'react-icons/hi'
import {MdDateRange} from 'react-icons/md'
import {BsYoutube} from 'react-icons/bs'
import {FaFacebookF ,FaInstagram, FaTwitter} from 'react-icons/fa'
import {FiGift} from'react-icons/fi'
import Editprofile from '../editProfile/Editprofile';
import Logo from '../../assets/blacklogo.svg'



function Leftbar() {



  const [profilePhoto, setProfilePhoto] = useState ('')
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [registrationDate, setRegistartionDate] = useState('');


  useEffect(() => {
    // Check if data is present in local storage
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      const userData = JSON.parse(storedData);
    //   console.log(userData.user.phoneNumber);
      // Check if each field is not null before setting the state
      if (userData.user.profilePhoto) {
        setProfilePhoto(userData.user.profilePhoto)
        // Handle the image separately (if you have it in the local storage)
      }
      if (userData.user.firstname) {
        setFirstName(userData.user.firstname);
      }
      if (userData.user.lastname) {
        setLastName(userData.user.lastname);
      }
      if (userData.user.description) {
        setDescription(userData.user.description);
      }
      if (userData.user.location) {
        setLocation(userData.user.location);
      }
      if (userData.user.registrationDate) {
        setRegistartionDate(userData.user.registrationDate);
      }

    }
    
    // console.log(localStorage.getItem('userData.user.lastname'))
  }, []);

  const formatDate = (dateString) => {
    // Format the date using Intl.DateTimeFormat API
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };





  const [isHovered, setIsHovered] = useState(false);
  const [btnisHovered, setBtnIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  const handlebtnHover = () => {
    setBtnIsHovered(!btnisHovered);
  };
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const isCurrentPage = (url) => {
    const location = useLocation();
    return location.pathname === url;
  };



  return (
    <div className='Leftbar' >
      <img src={Logo} alt="" className='logoImage'/>
       <div className="top">
      
        <div className='editProfile' >
        <NavLink to='/updateprofile' className='navLink' >
        <span>Edit</span>
        </NavLink>
        </div>
       
        <div className="profileInfo">
            <img src={profilePhoto}
            alt="" className="profileImg"/>
            
               </div> 
               <div className="name">
               <span className='userName'>{firstname} {lastname} &nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="17"  viewBox="0 0 21 17" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.2336 2.20793C17.4295 2.0243 17.7355 2.02823 17.9267 2.21684C18.2703 2.55585 18.7116 3.15607 18.9635 3.89675C18.9869 3.9655 19.0087 4.0357 19.0287 4.10723C19.099 4.02072 19.1978 3.95793 19.3123 3.93344C19.5243 3.88805 19.7415 3.98455 19.8499 4.17237C20.0984 4.6027 20.178 5.27569 20.0484 5.98932C20.121 5.96549 20.1995 5.95814 20.2781 5.96986C20.4732 5.99896 20.6329 6.14 20.6859 6.32996C20.8447 6.89873 20.7647 7.74534 20.4058 8.61766C20.289 8.90152 20.141 9.19275 19.9579 9.48384C20.0547 9.49834 20.1472 9.54118 20.2223 9.61034C20.3716 9.74763 20.4231 9.96144 20.3528 10.1516C20.2921 10.3158 20.1499 10.5213 20.0093 10.7037C19.854 10.9051 19.6523 11.1393 19.424 11.3741C18.9795 11.8312 18.3823 12.3448 17.7934 12.59L17.409 11.6668C17.5689 11.6002 17.7425 11.4967 17.9204 11.3684C17.7684 11.352 17.6266 11.2663 17.5435 11.1261C17.4124 10.9048 17.4706 10.6201 17.6781 10.468C18.6217 9.77642 19.1824 8.96292 19.481 8.23717C19.5621 8.04008 19.6228 7.85244 19.6667 7.67776L19.6313 7.70598C19.5144 7.79899 19.3936 7.89258 19.2828 7.97846L19.2821 7.97899C19.2209 8.02649 19.1626 8.07163 19.1098 8.11299C18.9499 8.23818 18.8413 8.32734 18.7837 8.38404C18.5893 8.57542 18.2774 8.57567 18.0827 8.3846C17.888 8.19353 17.8824 7.88167 18.0701 7.68372C18.4718 7.26007 18.7337 6.82073 18.8941 6.4084C18.8505 6.46728 18.8189 6.51135 18.7977 6.54456C18.6545 6.7687 18.361 6.84158 18.1297 6.71041C17.8983 6.57924 17.8101 6.28993 17.929 6.05202C18.0741 5.76143 18.145 5.47003 18.1606 5.18508C17.8986 6.03145 17.4024 6.9591 16.599 7.85073C15.2498 9.34804 15.4912 10.7884 15.7039 11.2362L14.8007 11.6653C14.4219 10.868 14.2252 8.99126 15.8561 7.18132C16.7298 6.2117 17.1666 5.22256 17.3241 4.42078C17.4031 4.01881 17.4104 3.6716 17.3731 3.40176C17.3346 3.12275 17.2544 2.96575 17.1976 2.90014C17.0218 2.69717 17.0376 2.39156 17.2336 2.20793ZM9.23054 6.23076C9.23054 5.25364 10.0227 4.46153 10.9998 4.46153C11.9769 4.46153 12.769 5.25364 12.769 6.23076C12.769 7.20788 11.9769 7.99999 10.9998 7.99999C10.0227 7.99999 9.23054 7.20788 9.23054 6.23076ZM10.9998 2.46153C8.91808 2.46153 7.23054 4.14907 7.23054 6.23076C7.23054 8.31245 8.91808 9.99999 10.9998 9.99999C13.0815 9.99999 14.769 8.31245 14.769 6.23076C14.769 4.14907 13.0815 2.46153 10.9998 2.46153ZM6.46131 15.9231C6.46131 15.925 6.46176 15.9226 6.463 15.9159C6.47052 15.8753 6.50717 15.6777 6.6496 15.3483C6.80022 15 7.03418 14.5874 7.35729 14.1962C7.99642 13.4225 8.94581 12.7692 10.3075 12.7692H11.6921C13.0537 12.7692 14.0031 13.4225 14.6423 14.1962C14.9654 14.5874 15.1993 15 15.3499 15.3483C15.4924 15.6777 15.529 15.8753 15.5365 15.9159L15.5365 15.9159L15.5365 15.9159C15.5375 15.9213 15.538 15.9239 15.5382 15.9237C15.5382 15.9237 15.5382 15.9235 15.5382 15.9231C15.5382 16.4754 15.9859 16.9231 16.5382 16.9231C17.0905 16.9231 17.5382 16.4754 17.5382 15.9231C17.5382 15.5268 17.3875 15.0213 17.1857 14.5545C16.9685 14.0523 16.64 13.4742 16.1842 12.9225C15.2656 11.8105 13.792 10.7692 11.6921 10.7692H10.3075C8.20757 10.7692 6.73389 11.8105 5.81533 12.9225C5.35959 13.4742 5.03105 14.0523 4.81388 14.5545C4.61203 15.0213 4.46131 15.5268 4.46131 15.9231C4.46131 16.4754 4.90902 16.9231 5.46131 16.9231C6.01359 16.9231 6.46131 16.4754 6.46131 15.9231ZM3.61338 2.21684C3.80454 2.02823 4.11053 2.0243 4.30647 2.20793C4.50241 2.39156 4.5183 2.69717 4.34248 2.90014C4.28564 2.96575 4.2055 3.12275 4.16696 3.40176C4.12969 3.6716 4.137 4.01881 4.21596 4.42078C4.37344 5.22256 4.81026 6.2117 5.68397 7.18132C7.31489 8.99126 7.1182 10.868 6.7394 11.6653L5.83615 11.2362C6.0489 10.7884 6.29028 9.34804 4.94108 7.85073C4.13764 6.9591 3.64141 6.03145 3.3795 5.18508C3.39505 5.47003 3.46593 5.76143 3.61109 6.05202C3.72993 6.28993 3.64175 6.57924 3.4104 6.71041C3.17906 6.84158 2.88552 6.7687 2.74239 6.54456C2.72118 6.51135 2.68952 6.46728 2.64591 6.4084C2.80639 6.82073 3.06826 7.26007 3.46994 7.68372C3.65763 7.88167 3.65201 8.19353 3.45732 8.3846C3.26262 8.57567 2.95071 8.57542 2.75632 8.38404C2.69873 8.32734 2.59019 8.23818 2.43027 8.11299C2.37723 8.07148 2.31876 8.02616 2.25722 7.97846C2.14644 7.89258 2.02569 7.79899 1.90876 7.70598L1.87337 7.67776C1.91728 7.85244 1.97796 8.04008 2.05905 8.23717C2.35765 8.96292 2.9184 9.77642 3.86195 10.468C4.06946 10.6201 4.12769 10.9048 3.99655 11.1261C3.91351 11.2663 3.7717 11.352 3.61967 11.3684C3.79752 11.4967 3.9712 11.6002 4.13101 11.6668L3.74664 12.59C3.15773 12.3448 2.56053 11.8312 2.11609 11.3741C1.88773 11.1393 1.68601 10.9051 1.53073 10.7037C1.39014 10.5213 1.24793 10.3158 1.18725 10.1516C1.11696 9.96144 1.16849 9.74763 1.31772 9.61034C1.39289 9.54118 1.48537 9.49834 1.58211 9.48384C1.3991 9.19275 1.25106 8.90152 1.13427 8.61766C0.775362 7.74534 0.695357 6.89873 0.854136 6.32996C0.907165 6.14 1.06691 5.99896 1.26197 5.96987C1.3406 5.95814 1.41904 5.96549 1.49163 5.98932C1.36204 5.27569 1.44168 4.6027 1.69013 4.17237C1.79857 3.98455 2.01572 3.88805 2.22779 3.93344C2.34221 3.95793 2.44108 4.02072 2.51133 4.10724C2.53132 4.0357 2.55314 3.9655 2.57652 3.89675C2.82847 3.15607 3.2698 2.55585 3.61338 2.21684Z" fill="#43C4B2"/>
                    </svg> 
                </span>
                <p>{description}</p>
                <div className='info'>
               <span className='address'>  <HiOutlineLocationMarker className='Icon'/> {location}, Nigeria</span>
                <span className='date'> <MdDateRange className='Icon'/>JOINED {formatDate(registrationDate)}</span>
                </div>
                <div className='icons'>
                <BsYoutube className='ICON'/>
                <FaFacebookF className='ICON'/>
                <FaInstagram className='ICON'/>
                <FaTwitter className='ICON'/>
                </div>
                </div>

                <div className="engagements">
                    <div className="engagement">
                        <span>10k</span>
                        <p>VIEWS</p>
                    </div>
                    &nbsp;&nbsp;
                    <div className="vertical-line"></div>
                    <div className="engagement">
                        <span>10+</span>
                        <p>CAMPAIGNS</p>
                    </div>
                </div>
                <NavLink to='/CreateSupport' className='navLink'>
                <div onMouseEnter={handlebtnHover} onMouseLeave={handlebtnHover} className='CASbtn' >
                {btnisHovered && <FiGift className="icon" />}CREATE ANGEL SUPPORT
                </div>
                </NavLink>
                
       </div>
       {/* <div className="horizontal-line"></div> */}
       
       <div className="center">
       <NavLink to='/profile' className='navLink'>
       <div    className={`nav ${isCurrentPage('/profile') ? 'active' : ''}`}
          onClick={() => handleLinkClick('/profile')}>
            <PersonOutlineIcon className='icon'/>
            <span >Profile</span>
            <div className="activeLine"></div>
          </div>
          </NavLink>
          <NavLink to='/analytics' className='navLink' >
         <div    className={`nav ${isCurrentPage('/analytics') ? 'active' : ''}`}
          onClick={() => handleLinkClick('/analytics')}>
        <TbDeviceAnalytics className='icon'/>
        <span> Analytics</span>
        </div>
        </NavLink>

        <div className="nav">
        <FaRegEnvelope className='icon'/>
        <span>Message</span>
              <div className="messageNot">6</div>
        </div>
        <div className="nav">
        <SendOutlinedIcon className='icon'/>
        <span>Email</span>
        </div>
          <NavLink to='/CreatePost' className='navLink' >
        <button onMouseEnter={handleHover} onMouseLeave={handleHover} >
        {isHovered && <FiGift className="icon" />}Create a CAUSE
        </button>
        </NavLink>
        </div>
        
        <div className="logout">
            <LogoutOutlinedIcon className='icon'/> &nbsp;&nbsp; <span>Logout</span>
        </div>
     
        </div>
        
  )
}

export default Leftbar