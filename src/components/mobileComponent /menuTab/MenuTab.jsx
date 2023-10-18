import React, { useState ,useEffect, useRef } from 'react';
import './Menutab.scss'
import BlackLogo from '../../../assets/blacklogo.svg'
import {AiOutlineCloseCircle}  from 'react-icons/ai'
import {BsChevronDown} from 'react-icons/bs'
import {  NavLink } from 'react-router-dom';

function MenuTab({closeMobilemenu}) {

  const [extraopen, setExtraopen] = useState();
  const [howitworks, setHowitworks] = useState()
  const popupRef = useRef(null);
  
    const openHow =() =>{
      setHowitworks(!howitworks);
    }
  
    const openExtra =() =>{
      setExtraopen(!extraopen);
    }


const handleOutsideClick = (event) => {
  if (popupRef.current && !popupRef.current.contains(event.target)) {
    setExtraopen(false);
    setHowitworks(false);
  }
};

useEffect(() => {
  if (extraopen || howitworks) {
    document.addEventListener('mousedown', handleOutsideClick);
  } else {
    document.removeEventListener('mousedown', handleOutsideClick);
  }

  return () => {
    document.removeEventListener('mousedown', handleOutsideClick);
  };
}, [extraopen, howitworks]);





  return (
    <div className='ManuTab'>

        <div className="menuTop">
        <img src={BlackLogo} alt=""  className='menuLogo'/>
        <AiOutlineCloseCircle className='closeTab' onClick={closeMobilemenu} />
        </div>
        <div className="menuCenter">
          <NavLink to="/about" className='navLink'>
        <span>about</span>
        </NavLink>

        <NavLink to="/impact" className='navLink'>
        <span>angels</span>
        </NavLink>
        <div className="menuText" onClick={openExtra}>
          <span>extras</span>
          <BsChevronDown/>
          </div>
          {
            extraopen && (
             <div ref={popupRef}  className="extraPopup">
              <NavLink to='/contact' className='navlink'>
               <div className="contact">
                <div className="span">Contact</div>
                <img src={BlackLogo} alt="" />
              </div>
              </NavLink>
              <NavLink to='/blog' className='navLink'>
              <div className="blog">
              <div className="span">Blog</div>
              </div>
              </NavLink>
             </div>
            )
          }

          <div className="menuText" onClick={openHow}>
          <span>how it works</span>
          <BsChevronDown/>
          </div>
          {
            howitworks && (
             <div ref={popupRef}  className="extraPopup">
               <NavLink to='/HowitWorks' className='navlink'>
               <div   className="contact">
                <div className="span">how</div>
                <img src={BlackLogo} alt="" />
                <div className="span">works</div>
              </div>
              </NavLink>
              <NavLink to='/pricing' className='navlink'>
              <div className="blog">
              <div className="span">pricing and fees</div>
              </div>
              </NavLink>
              <NavLink to='/guarantee' className='navlink'>
              <div className="blog">
              <div className="span">guarantees page</div>
              </div>
              </NavLink>
             </div>
            )
          }
        </div>
        <div className="menuBottom">
              <div className="regBtn">become an angel</div>
              <div className="loginBtn">user login </div>
        </div>
    </div>
  )
}

export default MenuTab