import { NavLink, useNavigate } from 'react-router-dom';
import './login.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import HeaderLogin from './HeaderLogin';
import Footer from '../../components/footer/Footer';
import body1 from '../../assets/Hand.png';
import body2 from '../../assets/Hand1.png';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Login() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const [userType, setUserType] = useState(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);
  // const [token, setToken] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();


    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    };

    // Login endpoint
    fetch('http://162.255.87.139:5034/api/v1/Login', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data) {
          // Handle successful login
          setLoginSuccess(true);
          setLoginError(false);
          console.log('Login successful!');
          console.log(data.message); 
          // Store the complete user data in state
           setUserData(data); 
           localStorage.setItem('userData', JSON.stringify(data)); 
          //  console.log(data.user.usertype)
                     
    
  
           // Fetch the user type using the token
           fetchUserType();
        } else {
          // Handle login error
          setLoginSuccess(false);
          setLoginError(true);
          console.log(data.error);  
        }
      })
      .catch(error => {
        // Handle login error
        console.error(error);
        setLoginSuccess(false);
        setLoginError(true);
      });
  };

  useEffect(() => {
    if (userData) {
      fetchUserType();
    }
  }, [userData]); 


  const isUserDataIncomplete = (userData) => {
    return !userData?.user?.phoneNumber || !userData?.user?.location;
  };

  const fetchUserType = () => {
    const userType = userData?.user?.usertype;
  
    if (userType) {
      setUserType(userType);
      console.log('user type is', userType);
  
      if (userType === 'Angel') {
        if (isUserDataIncomplete(userData)) {
          navigate('/addProfile');
        } else {
          navigate('/profile');
        }
      } else if (userType === 'admin') {
        navigate('/');
      }
    }
  };


  return (
    <div className="wrapper" >
      <div className="header">
        <HeaderLogin />
      </div>
      <img src={body1} alt="" className="backGroundImgtop" />
      <div className="login">
        <div className="formContainer">
          <h1>
            User Login{' '}
            <span style={{ color: 'rgba(104, 237, 203, 1)', backgroundColor: 'white', fontSize: '4rem' }}>.</span>{' '}
          </h1>
          <form>
            <div className="Auth">
              <input type="text" placeholder="Email" className="email" value={email} onChange={handleEmailChange} />
              <input type="password" placeholder="Password" className="psw" value={password} onChange={handlePasswordChange} />
            </div>
            <div className="setLogin">
              <div className="check">
                <Checkbox {...label} className="checkbox" />
                <span className="rm">Remember me</span>
              </div>
              <span className="fmp">Forgot my Password</span>
            </div>
            <button onClick={handleLogin}>Continue on TOPME</button>
            <div className="loginIcons">
              <FacebookIcon className="loginIcon" />
              <GoogleIcon className="loginIcon" />
              <TwitterIcon className="loginIcon" />
            </div>
          </form>
          {loginSuccess && <p>Login successful!</p>}
          {loginError && <p>Login failed. Please check your credentials and try again.</p>}
          <div className="footer">
        <Footer />
      </div>
        </div>
      </div>
      <img src={body2} alt="" className="backGroundImgbuttom" />
    
    </div>
  );
}

export default Login;
