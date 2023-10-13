import './homepage.scss'
import React, { useEffect, useState } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import Female from '../../../assets/Female.png';
import Male from '../../../assets/male.png';
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
          <img src={Female} alt="" />
        </div>
        <div className="homecenter"> 
          <span>quote</span>
          <h4>Be the Change</h4>
          <h1 style={{ color: isBackgroundWhite ? '#000000' : '#ffffff' }}>Become an Angel &amp; <br />Empower Lives</h1>
          <NavLink to='/signup' className='navLink'>
            <button>Become an Angel <AiFillCaretRight /> </button>
          </NavLink>
        </div>
        <div className="homeright">
          <img src={Male} alt="" />
        </div>
      <div className="mobileImg">
      <img src={Male} alt="" />
      <img src={Female} alt="" /> 
      </div>
    </div>
  );
}

export default Homepage;
