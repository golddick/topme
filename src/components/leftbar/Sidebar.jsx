import './leftbar.scss'
import React, { useState } from 'react';
import {  NavLink } from 'react-router-dom';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {TbDeviceAnalytics} from 'react-icons/tb'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import {FaRegEnvelope} from 'react-icons/fa'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { HiOutlineLocationMarker} from 'react-icons/hi'
import {MdDateRange} from 'react-icons/md'
import {BsYoutube} from 'react-icons/bs'
import {FaFacebookF ,FaInstagram, FaTwitter} from 'react-icons/fa'


function Leftbar() {


  const [clickedColor, setClickedColor] = useState('black');
  const [activeColor, setActiveColor] = useState('#68EDCB');
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setClickedColor(' black');
  };

  return (
    <div className='Leftbar' >
       <div className="top">
        <div className="profileInfo">
            <img src="https://media.istockphoto.com/id/1040308104/photo/mature-handsome-business-man.jpg?s=612x612&w=0&k=20&c=QbyH3XFmLOoy8NESjLQC8PYsm6g3UBL6COFaF-Qnnbk=" 
            alt="" className="profileImg"/>
               </div>
               <div className="name">
                <span>Theresa Ubong  <Person4OutlinedIcon className='icon'/></span>
                <p>Live is to be lived now; not yesterday, not tomorrow but today!Let’s help others make this a reality, please.</p>
                <div className='info'>
                <HiOutlineLocationMarker className='Icon'/><span className='address'>Lagos, Nigeria</span>
                <MdDateRange className='Icon'/><span className='date'>JOINED MAY, 2023</span>
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
       </div>
       {/* <div className="horizontal-line"></div> */}
       
      
      
        </div>
  )
}

export default Leftbar