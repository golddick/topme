import './option.scss'
import { NavLink } from 'react-router-dom'
import Frame from '../../assets/Frame.svg'
import Frame2 from '../../assets/Frame.png'
import React, { useState } from 'react';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {AiFillCaretRight} from 'react-icons/ai'

function Optiontab() {
  return (
   <div className="optionWrapper">
    <div className="_optionBox">
    <div className="option">
       
       
       <div className="selectTab"  >
       <span>1</span> 
       {/* <NavLink to='/signup' className='navlink'>  */}
       
          <div className="wing-innerbox"   > 
          <div className="topcorners" >
             <div className="cornerLeft"></div>
             <div className="cornerRight"></div> 
           </div> 
           <div className="svgWings">
           <div className="svgImgleft" >
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="300" viewBox="0 0 210 179" fill="url(#myGradient)" className='svgLeft'>
          <linearGradient id="myGradient" gradientTransform="rotate(90)">
               <stop offset="0%" stopColor="#43C4B2" />
               <stop offset="10%" stopColor="#43C4B2" />
               <stop offset="15%" stopColor="white" />
               <stop offset="100%" stopColor="white" />
             </linearGradient>
          <path d="M13.5055 34.6475C16.7149 60.6286 36.9302 66.082 36.9302 66.082C48.4812 86.6142 64.528 86.2916 70.624 92.3903C86.0299 107.792 101.108 104.579 101.108 104.579C109.127 115.163 122.928 114.204 122.928 114.204C130.947 123.184 142.18 119.976 142.18 119.976C147.958 127.997 159.827 124.148 159.827 124.148C165.928 132.809 174.91 129.601 174.91 129.601C179.724 136.336 189.352 132.809 189.352 132.809C189.993 152.378 206.84 179 206.84 179C206.84 166.489 209.727 147.243 209.245 134.25C205.199 25.0313 96.6171 14.438 51.0496 8.90274C5.4821 3.3675 0.6726 0 0.6726 0C-1.25484 27.908 13.5055 34.6475 13.5055 34.6475ZM7.08678 8.90274C17.3558 12.352 43.0262 13.7927 85.7071 20.5322C128.383 27.2672 167.805 46.745 187.102 77.3116C206.404 107.878 202.508 154.328 202.508 154.328C202.508 154.328 198.335 146.925 195.448 130.883C192.603 115.095 187.27 97.4393 187.107 96.894C193.312 134.832 178.442 127.997 178.442 127.997C182.611 107.465 180.688 84.0466 180.688 84.0466C181.329 128.315 166.246 122.543 166.246 122.543C174.269 97.8438 173.628 78.275 173.628 78.275C167.532 127.674 151.808 116.126 151.808 116.126C165.605 91.745 167.532 71.5355 167.532 71.5355C167.532 71.5355 158.222 102.011 150.844 108.751C143.462 115.486 133.838 112.277 133.838 112.277C150.076 93.1811 163.155 68.3997 163.355 68.0135C155.272 77.4297 143.462 96.8803 133.838 104.579C124.21 112.277 110.414 102.652 110.414 102.652C132.916 92.9675 156.636 63.5053 157.85 61.9783C156.736 63.2462 138.612 83.7466 117.473 94.3127C95.6534 105.22 78.6474 89.5 78.6474 89.5C113.982 84.7691 150.249 57.7065 151.454 56.7976C150.144 57.5656 108.077 82.1379 82.175 83.0877C55.8637 84.0466 47.522 69.2905 47.522 69.2905C114.264 65.4413 142.503 51.3259 142.503 51.3259C114.582 58.3836 59.714 65.7639 41.4215 60.6286C23.1336 55.4978 23.1336 41.3825 23.1336 41.3825L131.27 44.2683C131.27 44.2683 57.4683 39.7783 32.4389 35.9291C7.40954 32.0798 7.08678 8.90274 7.08678 8.90274Z"  />
        </svg>
          </div>
          <div className="svgImgright"  >
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="300" viewBox="0 0 210 179" fill="url(#myGradient)" className='svgRight'>
          <path d="M209.327 0C209.327 0 204.518 3.3675 158.95 8.90274C113.383 14.438 4.80073 25.0313 0.754934 134.25C0.273075 147.243 3.15969 166.489 3.15969 179C3.15969 179 20.0066 152.378 20.6475 132.809C20.6475 132.809 30.2756 136.336 35.0897 129.601C35.0897 129.601 44.0723 132.809 50.1728 124.148C50.1728 124.148 62.042 127.997 67.8197 119.976C67.8197 119.976 79.0525 123.184 87.0714 114.204C87.0714 114.204 100.873 115.163 108.891 104.579C108.891 104.579 123.97 107.792 139.376 92.3903C145.472 86.2916 161.519 86.6142 173.07 66.082C173.07 66.082 193.285 60.6286 196.494 34.6475C196.494 34.6475 211.255 27.908 209.327 0ZM177.561 35.9291C152.531 39.7783 78.7298 44.2683 78.7298 44.2683L186.866 41.3825C186.866 41.3825 186.866 55.4978 168.578 60.6286C150.286 65.7639 95.4175 58.3836 67.497 51.3259C67.497 51.3259 95.7358 65.4413 162.478 69.2905C162.478 69.2905 154.136 84.0466 127.825 83.0877C101.923 82.1379 59.8554 57.5656 58.5462 56.7976C59.7509 57.7065 96.0176 84.7691 131.352 89.5C131.352 89.5 114.346 105.22 92.5264 94.3127C70.7063 83.4058 53.2639 63.2462 52.1502 61.9783C53.364 63.5053 77.0842 92.9675 99.5861 102.652C99.5861 102.652 85.7894 112.277 76.1614 104.579C66.5378 96.8803 54.7277 77.4297 46.6452 68.0135C46.8452 68.3997 59.9236 93.1811 76.1614 112.277C76.1614 112.277 66.5378 115.486 59.1554 108.751C51.7775 102.011 42.4676 71.5355 42.4676 71.5355C42.4676 71.5355 44.395 91.745 58.1916 116.126C58.1916 116.126 42.4676 127.674 36.3716 78.275C36.3716 78.275 35.7307 97.8438 43.7541 122.543C43.7541 122.543 28.6709 128.315 29.3119 84.0466C29.3119 84.0466 27.389 107.465 31.5576 127.997C31.5576 127.997 16.6881 134.832 22.8932 96.894C22.7295 97.4393 17.3973 115.095 14.5516 130.883C11.665 146.925 7.49187 154.328 7.49187 154.328C7.49187 154.328 3.59609 107.878 22.8977 77.3116C42.1948 46.745 81.6164 27.2672 124.293 20.5322C166.974 13.7927 192.644 12.352 202.913 8.90274C202.913 8.90274 202.59 32.0798 177.561 35.9291Z" />
          </svg>
          </div>
           </div>
         
          </div>
          <h3>SIGN UP TO BECOME AN ANGEL</h3>
          {/* </NavLink> */}
          <div className="downtext">
         <p> <MdOutlineKeyboardArrowRight className='textIcon'/>Click the “Become anAngel” button</p>
         <p> <MdOutlineKeyboardArrowRight  className='textIcon'/>Fill in your personal information and create an account.</p>
         <p> <MdOutlineKeyboardArrowRight className='textIcon'/>Wait for approval</p>
         <p> <MdOutlineKeyboardArrowRight  className='textIcon'/>Gain access to your dashboard</p>
         </div>
        
        </div>
     
   
   
        <div className="selectTab">
          <span>2</span>
          <div className="innerbox" >
           <div className="topcorners">
             <div className="cornerLeft"></div>
             <div className="cornerRight"></div>
           </div>
           <div className="humanIcon">
           <img src={Frame2}alt="" />
           </div>
          </div>
          <h3>CREATE AN IMPACT STORY</h3>
          <div className="downtext">
          <p> <MdOutlineKeyboardArrowRight className='textIcon'/>Identify a cause that requires funding and support</p>
         <p> <MdOutlineKeyboardArrowRight  className='textIcon'/>Find a reputable institution that can carry out the aid effectively</p>
         <p> <MdOutlineKeyboardArrowRight className='textIcon'/>Determine the total cost of the cause</p>
         <p> <MdOutlineKeyboardArrowRight  className='textIcon'/>Proceed to create a cause by providing all the necessary details</p>
         </div>
        </div>
   
    
        <div className="selectTab">
          <span>3</span>
          <div className="innerbox" >
          <div className="topcorners">
             <div className="cornerLeft"></div>
             <div className="cornerRight"></div>
           </div>
           <div className="humanIcon">
           <img src={Frame} alt="" />
           </div>
          
          </div>
          <h3>SHARE WITH FRIENDS & FAMILY</h3>
          <div className="downtext">
          <p> <MdOutlineKeyboardArrowRight className='textIcon'/>Click the “Become anAngel” button</p>
         <p> <MdOutlineKeyboardArrowRight  className='textIcon'/>Fill in your personal information and create an account.</p>
         <p> <MdOutlineKeyboardArrowRight className='textIcon'/>Wait for approval; Gain access to your dashboard</p>
 
         </div>
        </div>
 
 
 
       </div>
 
 
 
 
       <NavLink to='/signup' className='navLink'>
             <button className='logBtn'>Become an Angel <AiFillCaretRight /> </button>
           </NavLink>
    </div>
   </div>
  )
}

export default Optiontab