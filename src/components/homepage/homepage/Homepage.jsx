import './homepage.scss'
import React, { useEffect, useState } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import Female from '../../../assets/Female.png';
import Male from '../../../assets/male.png';
import Wing from '../../../assets/TopWing.png'
import Wing2 from '../../../assets/Topwing2.png'
function Homepage() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ['#ffffff', '#000000']; // White and black colors

  useEffect(() => { 
    const intervalId = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 10000);
 
    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, []);   
 

  const isBackgroundWhite = colors[currentColorIndex] === '#ffffff';

  return (
    <div className='Homepage' id='Homepage' style={{ backgroundColor: colors[currentColorIndex] }}>
        <div className="homeleft">
          <div className="wingbody">
          <img src={Wing} alt=""  className='wing Wing1' />
          <img src={Wing2} alt=""  className='wing Wing2'/>
          <img src={Female} alt=""  className='female'/>
          </div>
        </div>
        <div className="homecenter"> 
        
         <div className="textCenter">
         <span>quote</span>
          <h4>Be the Change</h4>
          <h1 style={{ color: isBackgroundWhite ? '#000000' : '#ffffff' }}>Become an Angel &amp; <br />Empower Lives</h1>
          <NavLink to='/signup' className='navLink'>
            <button>Become an Angel <AiFillCaretRight /> </button>
          </NavLink>
         </div>
        </div>
        <div className="homeright"> 
        <div className="wingbody"> 
          <img src={Male} alt=""  className='male'/>
          <img src={Wing} alt=""  className='wing Wing1' />
          <img src={Wing2} alt=""  className='wing Wing2'/>
          </div>
        </div>
      {/* <div className="mobileImg">
      <img src={Male} alt="" />
      <img src={Female} alt="" /> 
      </div> */}
    </div>
  );
}

export default Homepage;
