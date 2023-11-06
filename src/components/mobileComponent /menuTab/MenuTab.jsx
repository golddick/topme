import React, { useState ,useEffect, useRef } from 'react';
import './Menutab.scss'
import BlackLogo from '../../../assets/blacklogo.svg'
import {AiOutlineCloseCircle}  from 'react-icons/ai'
import {MdKeyboardArrowDown , MdKeyboardArrowUp} from 'react-icons/md'
import {  NavLink } from 'react-router-dom';

function MenuTab({closeMobilemenu}) {

  const [extraopen, setExtraopen] = useState(false);
  const [howitworks, setHowitworks] = useState()
  const popupRef = useRef(null);
  
    const openHow =() =>{
      setHowitworks(!howitworks);
    }
  
    const openExtra =() =>{
      setExtraopen(!extraopen);
    }






// const handleOutsideClick = (event) => {
//   if (popupRef.current && !popupRef.current.contains(event.target)) {
//     setExtraopen(false);
//     setHowitworks(false);
//   }
// }; 

// useEffect(() => {
//   if (extraopen || howitworks) {
//     document.addEventListener('mousedown', handleOutsideClick);
//   } else {
//     document.removeEventListener('mousedown', handleOutsideClick);
//   }

//   return () => {
//     document.removeEventListener('mousedown', handleOutsideClick);
//   };
// }, [extraopen, howitworks]);





  return (
    <div className='ManuTab'>

        <div className="menuTop">
        <img src={BlackLogo} alt=""  className='menuLogo'/>
        <AiOutlineCloseCircle className='closeTab' onClick={closeMobilemenu} />
        </div>
        <div className="menuCenter">
          <NavLink to="/About" className='navLink'>
        <span>about</span>
        </NavLink>

        <NavLink to="/Angels" className='navLink'>
        <span>angels</span>
        </NavLink>
        <div className="menuText" onClick={openExtra}>
          <span>extras</span>
          {/* {extraopen && <MdKeyboardArrowDown className='arrow'/> || <MdKeyboardArrowUp className='arrow'/>} */}
          {extraopen ? <MdKeyboardArrowUp className='arrow' /> : <MdKeyboardArrowDown className='arrow' />}
          </div>
          {
            extraopen && (
             <div  className="extraPopup">
             {/* <div ref={popupRef}  className="extraPopup"> */}
              <NavLink to='/Contact' className='navlink'>
               <div className="contact">
                <div className="span">Contact</div>
                <img src={BlackLogo} alt="" />
              </div>
              </NavLink>
              <NavLink to='/Blog' className='navLink'>
              <div className="blog">
              <div className="span">Blog</div>
              </div>
              </NavLink>
             </div>
            )
          }

          <div className="menuText" onClick={openHow}>
          <span>how it works</span>
          {howitworks ? <MdKeyboardArrowUp className='arrow' /> : <MdKeyboardArrowDown className='arrow' />}
          </div>
          {
            howitworks && (
             <div ref={popupRef}  className="extraPopup">
               <NavLink to='/How-it-Works' className='navlink'>
               <div   className="contact">
                <div className="span">how</div>
                <img src={BlackLogo} alt="" />
                <div className="span">works</div>
              </div>
              </NavLink>
              <NavLink to='/Pricing' className='navlink'>
              <div className="blog">
              <div className="span">pricing and fees</div>
              </div>
              </NavLink>
              <NavLink to='/Guarantee' className='navlink'>
              <div className="blog">
              <div className="span">guarantees page</div>
              </div>
              </NavLink>
             </div>
            )
          }
        </div>
        <div className="menuBottom">
          <NavLink to='/Sign-up' className='regBtn'>
              <div >become an angel</div>
              </NavLink>
              <NavLink to='/Login' className='loginBtn'>
              <div >user login </div>
              </NavLink>
        </div>
    </div>
  )
}

export default MenuTab