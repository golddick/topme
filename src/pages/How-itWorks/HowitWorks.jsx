import './howitworks.scss'
import '../../components/homepage/AngelSelect/Selectoption.scss'
import Frame from '../../assets/Frame.svg'
import Frame2 from '../../assets/Frame.png'
// import Frame from '../../assets'
import {  NavLink } from 'react-router-dom';
import Hometop from '../../components/homepage/HomeTop/Hometop'
import YouTube from 'react-youtube';
import React, { useState } from 'react';


function getVideoIdFromUrl(url) {
    // Extract the video ID from the YouTube URL
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[7]) ? match[7] : '';
  }

function HowitWorks( { selectTabColor, innerBoxColor }) {
    const svgColor = selectTabColor === 'red' ? 'white' : 'blue';

    const youtubeLinkUrl = 'https://www.youtube.com/watch?v=MhBYWBu9-9Q';
    const videoId = getVideoIdFromUrl(youtubeLinkUrl);

  const opts = {
    height: '384',
    width: '780',
    borderRadius: '10px',
    playerVars: {
    controls: 1,
    autoplay: 0,
    },
  };

  return (
    <div className='HowitWorks'> 
    <div className="homeTop">
        <Hometop/>
    </div>
   <div className="howbody">
    <h4>how 
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="21" viewBox="0 0 72 21" fill="none">
  <path d="M16.7074 19.9999C12.8576 19.9999 9.72852 16.8793 9.72852 13.0466C9.72852 9.21383 12.8605 6.09326 16.7074 6.09326C20.5542 6.09326 23.6862 9.21383 23.6862 13.0466C23.6862 16.8793 20.5542 19.9999 16.7074 19.9999ZM16.7074 8.64646C14.2723 8.64646 12.2911 10.6204 12.2911 13.0466C12.2911 15.4727 14.2723 17.4467 16.7074 17.4467C19.1424 17.4467 21.1236 15.4727 21.1236 13.0466C21.1236 10.6204 19.1424 8.64646 16.7074 8.64646Z" fill="#68EDCB"/>
  <path d="M34.1204 13.9066C30.2707 13.9066 27.1416 10.7861 27.1416 6.95331C27.1416 3.12057 30.2736 0 34.1204 0C37.9673 0 41.0993 3.12057 41.0993 6.95331C41.0993 10.7861 37.9673 13.9066 34.1204 13.9066ZM34.1204 2.5532C31.6854 2.5532 29.7042 4.52719 29.7042 6.95331C29.7042 9.37943 31.6854 11.3534 34.1204 11.3534C36.5555 11.3534 38.5367 9.37943 38.5367 6.95331C38.5367 4.52719 36.5555 2.5532 34.1204 2.5532Z" fill="#68EDCB"/>
  <path d="M29.7042 7.23389H27.1416V19.9998H29.7042V7.23389Z" fill="#68EDCB"/>
  <path d="M56.5815 19.9999H53.7105L50.6111 13.8208L48.2858 16.6459L45.9635 13.8208L42.8611 19.9999H40.002L45.4415 9.15771L48.2858 12.6211L51.139 9.15771L56.5815 19.9999Z" fill="#68EDCB"/>
  <path d="M4.55864 19.9998C3.61548 19.9998 2.26598 19.8255 1.25756 18.9773C0.685131 18.4957 0 17.5973 0 16.0695V0.59082H2.56257V16.0695C2.56257 16.6635 2.75832 16.8999 2.90662 17.024C3.46421 17.4998 4.71584 17.4821 5.23191 17.3993L5.65307 19.9171C5.54927 19.9348 5.1281 19.9998 4.55568 19.9998H4.55864Z" fill="#68EDCB"/>
  <path d="M6.71753 6.54834H0.904297V9.10153H6.71753V6.54834Z" fill="#68EDCB"/>
  <path d="M48.3123 9.14858C46.076 9.14858 44.2549 7.33416 44.2549 5.10603C44.2549 2.8779 46.076 1.06348 48.3123 1.06348C50.5486 1.06348 52.3697 2.8779 52.3697 5.10603C52.3697 7.33416 50.5486 9.14858 48.3123 9.14858ZM48.3123 1.48901C46.3103 1.48901 44.682 3.11135 44.682 5.10603C44.682 7.10071 46.3103 8.72305 48.3123 8.72305C50.3143 8.72305 51.9426 7.10071 51.9426 5.10603C51.9426 3.11135 50.3143 1.48901 48.3123 1.48901Z" fill="black"/>
  <path d="M52.1565 5.74457C51.8035 5.74457 51.5158 5.45792 51.5158 5.10627C51.5158 3.34504 50.0803 1.91478 48.3126 1.91478C46.5449 1.91478 45.1094 3.34504 45.1094 5.10627C45.1094 5.45792 44.8217 5.74457 44.4688 5.74457C44.1158 5.74457 43.8281 5.45792 43.8281 5.10627C43.8281 2.64173 45.839 0.638184 48.3126 0.638184C50.7862 0.638184 52.7971 2.64173 52.7971 5.10627C52.7971 5.45792 52.5094 5.74457 52.1565 5.74457Z" fill="black"/>
  <path d="M70.9779 12.2696C70.5627 9.06625 67.8044 6.58398 64.4766 6.58398C60.8611 6.58398 57.9219 9.51543 57.9219 13.1147C57.9219 16.714 60.8611 19.6455 64.4766 19.6455C66.0663 19.6455 67.5997 19.0722 68.795 18.029L67.7213 16.8086C66.8227 17.5917 65.6719 18.0231 64.4766 18.0231C62.0267 18.0231 59.9891 16.2323 59.6125 13.8949H70.9839C71.0165 13.6378 71.0313 13.3777 71.0313 13.1177C71.0313 12.831 71.0135 12.5503 70.975 12.2725L70.9779 12.2696ZM59.6273 12.2696C60.0307 9.9646 62.0534 8.20928 64.4796 8.20928C66.9057 8.20928 68.9285 9.96755 69.3318 12.2696H59.6273Z" fill="#68EDCB" stroke="#68EDCB" stroke-miterlimit="10"/>
</svg>
 works</h4>


   <div className="aboutVideo">
    <YouTube videoId={videoId} opts={opts} />
    </div>
   </div>
   <div className="option">
      
      <NavLink to='/signup' className='navlink'>
      <div className="selectTab"  >
      
         <span>1</span>
         <div className="innerbox"  style={{ backgroundColor: innerBoxColor }} >
         <div className="svgImgleft" >
         <svg xmlns="http://www.w3.org/2000/svg" width="150" height="179" viewBox="0 0 210 179" fill="url(#myGradient)">
         <linearGradient id="myGradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#68EDCB" />
              <stop offset="50%" stopColor="white" />
              <stop offset="100%" stopColor="white" />
            </linearGradient>
         <path d="M13.5055 34.6475C16.7149 60.6286 36.9302 66.082 36.9302 66.082C48.4812 86.6142 64.528 86.2916 70.624 92.3903C86.0299 107.792 101.108 104.579 101.108 104.579C109.127 115.163 122.928 114.204 122.928 114.204C130.947 123.184 142.18 119.976 142.18 119.976C147.958 127.997 159.827 124.148 159.827 124.148C165.928 132.809 174.91 129.601 174.91 129.601C179.724 136.336 189.352 132.809 189.352 132.809C189.993 152.378 206.84 179 206.84 179C206.84 166.489 209.727 147.243 209.245 134.25C205.199 25.0313 96.6171 14.438 51.0496 8.90274C5.4821 3.3675 0.6726 0 0.6726 0C-1.25484 27.908 13.5055 34.6475 13.5055 34.6475ZM7.08678 8.90274C17.3558 12.352 43.0262 13.7927 85.7071 20.5322C128.383 27.2672 167.805 46.745 187.102 77.3116C206.404 107.878 202.508 154.328 202.508 154.328C202.508 154.328 198.335 146.925 195.448 130.883C192.603 115.095 187.27 97.4393 187.107 96.894C193.312 134.832 178.442 127.997 178.442 127.997C182.611 107.465 180.688 84.0466 180.688 84.0466C181.329 128.315 166.246 122.543 166.246 122.543C174.269 97.8438 173.628 78.275 173.628 78.275C167.532 127.674 151.808 116.126 151.808 116.126C165.605 91.745 167.532 71.5355 167.532 71.5355C167.532 71.5355 158.222 102.011 150.844 108.751C143.462 115.486 133.838 112.277 133.838 112.277C150.076 93.1811 163.155 68.3997 163.355 68.0135C155.272 77.4297 143.462 96.8803 133.838 104.579C124.21 112.277 110.414 102.652 110.414 102.652C132.916 92.9675 156.636 63.5053 157.85 61.9783C156.736 63.2462 138.612 83.7466 117.473 94.3127C95.6534 105.22 78.6474 89.5 78.6474 89.5C113.982 84.7691 150.249 57.7065 151.454 56.7976C150.144 57.5656 108.077 82.1379 82.175 83.0877C55.8637 84.0466 47.522 69.2905 47.522 69.2905C114.264 65.4413 142.503 51.3259 142.503 51.3259C114.582 58.3836 59.714 65.7639 41.4215 60.6286C23.1336 55.4978 23.1336 41.3825 23.1336 41.3825L131.27 44.2683C131.27 44.2683 57.4683 39.7783 32.4389 35.9291C7.40954 32.0798 7.08678 8.90274 7.08678 8.90274Z"  />
       </svg>
         </div>
         <div className="svgImgright"  >
         <svg xmlns="http://www.w3.org/2000/svg" width="150" height="179" viewBox="0 0 210 179" fill="url(#myGradient)">
         <path d="M209.327 0C209.327 0 204.518 3.3675 158.95 8.90274C113.383 14.438 4.80073 25.0313 0.754934 134.25C0.273075 147.243 3.15969 166.489 3.15969 179C3.15969 179 20.0066 152.378 20.6475 132.809C20.6475 132.809 30.2756 136.336 35.0897 129.601C35.0897 129.601 44.0723 132.809 50.1728 124.148C50.1728 124.148 62.042 127.997 67.8197 119.976C67.8197 119.976 79.0525 123.184 87.0714 114.204C87.0714 114.204 100.873 115.163 108.891 104.579C108.891 104.579 123.97 107.792 139.376 92.3903C145.472 86.2916 161.519 86.6142 173.07 66.082C173.07 66.082 193.285 60.6286 196.494 34.6475C196.494 34.6475 211.255 27.908 209.327 0ZM177.561 35.9291C152.531 39.7783 78.7298 44.2683 78.7298 44.2683L186.866 41.3825C186.866 41.3825 186.866 55.4978 168.578 60.6286C150.286 65.7639 95.4175 58.3836 67.497 51.3259C67.497 51.3259 95.7358 65.4413 162.478 69.2905C162.478 69.2905 154.136 84.0466 127.825 83.0877C101.923 82.1379 59.8554 57.5656 58.5462 56.7976C59.7509 57.7065 96.0176 84.7691 131.352 89.5C131.352 89.5 114.346 105.22 92.5264 94.3127C70.7063 83.4058 53.2639 63.2462 52.1502 61.9783C53.364 63.5053 77.0842 92.9675 99.5861 102.652C99.5861 102.652 85.7894 112.277 76.1614 104.579C66.5378 96.8803 54.7277 77.4297 46.6452 68.0135C46.8452 68.3997 59.9236 93.1811 76.1614 112.277C76.1614 112.277 66.5378 115.486 59.1554 108.751C51.7775 102.011 42.4676 71.5355 42.4676 71.5355C42.4676 71.5355 44.395 91.745 58.1916 116.126C58.1916 116.126 42.4676 127.674 36.3716 78.275C36.3716 78.275 35.7307 97.8438 43.7541 122.543C43.7541 122.543 28.6709 128.315 29.3119 84.0466C29.3119 84.0466 27.389 107.465 31.5576 127.997C31.5576 127.997 16.6881 134.832 22.8932 96.894C22.7295 97.4393 17.3973 115.095 14.5516 130.883C11.665 146.925 7.49187 154.328 7.49187 154.328C7.49187 154.328 3.59609 107.878 22.8977 77.3116C42.1948 46.745 81.6164 27.2672 124.293 20.5322C166.974 13.7927 192.644 12.352 202.913 8.90274C202.913 8.90274 202.59 32.0798 177.561 35.9291Z" />
         </svg>
         </div>
         </div>
         <p>SIGN UP TO BECOME AN ANGEL</p>
         <p>hwfa</p>
       
       </div>
       </NavLink>
 
 
       <div className="selectTab">
         <span>2</span>
         <div className="innerbox" >
         <img src={Frame2}alt="" />
         </div>
         <p>CREATE AN IMPACT STORY</p>
       </div>
 
 
       <div className="selectTab">
         <span>3</span>
         <div className="innerbox" >
          <img src={Frame} alt="" />
         </div>
         <p>SHARE WITH FRIENDS & FAMILY</p>
       </div>
 
 
      </div>
    </div>
  )
}

export default HowitWorks