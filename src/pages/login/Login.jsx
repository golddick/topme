import { NavLink, useNavigate } from 'react-router-dom';
import './login.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
import {BiLogoFacebook} from 'react-icons/bi'
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import HeaderLogin from './HeaderLogin';
import Footer from '../../components/footer/Footer';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import {MdOutlineErrorOutline} from 'react-icons/md'
import BlackLogo from '../../assets/blacklogo.svg';
import body1 from '../../assets/Hand.png';
import body2 from '../../assets/Hand1.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Login() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const [userType, setUserType] = useState(null);
 // const [isValidEmail, setIsValidEmail] = useState ()
  const [isLoading, setIsLoading] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Combined error state
  const [showPassword, setShowPassword] = useState(false);

  // Define a function to check for a valid email format
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(!/^\S+@\S+\.\S+$/.test(e.target.value));
    setError(null);
    //setIsValidEmail(true)
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(null);
    // Check password validation here and set passwordError accordingly
    // setError(e.target.value.length < 6);
  };


  // Define a function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);

  };


  const handleLogin = (e) => {
    e.preventDefault();

    // Clear previous validation errors and set loading state
    setError(null);
    setIsLoading(true);

    if (!email) {
      setError('Email is required');
      setIsLoading(false);
      return;
    } else if (!isValidEmail(email)) {
      setError('Invalid email format');
      setIsLoading(false);
      return;
    }

    if (!password) {
      setError('Password is required');
      setIsLoading(false);
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    };

    // Login endpoint
    fetch('http://162.255.87.139:5034/api/v1/Login', requestOptions)
      .then((response) => {
        if (response.status === 200) {
          // Successful login
          return response.json();
        } else if (response.status === 404) {
          // User not found error
          throw new Error('User not found');
        } else {
          // Handle other error cases
          throw new Error('Login failed');
        }
      })
      .then((data) => {
        if (data) {
          // Handle successful login
          setUserData(data);
          localStorage.setItem('userData', JSON.stringify(data));
          // Fetch the user type using the token
          fetchUserType();
        } else {
          // Handle login error
          setError('Login failed. Please check your credentials and try again.');
          setBackgroundColor('red'); // Change the background color to red on error
        }
      })
      .catch((error) => {
        // Handle login error
        console.error(error);
        setError('Login failed. Please check your credentials and try again.');
        setBackgroundColor('red'); // Change the background color to red on error
      })
      .finally(() => {
        // Reset loading state after request is complete
        setIsLoading(false);
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

  function isValidEmail(email) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }


  return (
    <div className="loginwrapper" >
    
      <img src={BlackLogo} alt="" className="mobileLogo" />
      <div className="top-img">
      <img src={body1} alt="" className="GroundImgtop" />
      </div>
      <div className="header_">
        <HeaderLogin />
      </div>
      <div className="login">
        <div className="formContainer">
          <h1>
            User Login
            <span className="dot">.</span>
          </h1>
          <h6>
            Don’t have an account? &nbsp;
            <NavLink to="/signup" className="navLink">
              Sign up
            </NavLink>
          </h6>
          <form>
           <div className="form_Box">
            {/* <div className="groupedform"> */}
            <div class="form__group field">
            <input type="input" class={`form__field ${error ? 'error' : ''}`} placeholder="Email" required="" onChange={handleEmailChange}  value={email}/>
            <label for="name" class="form__label">Email</label>
         {
          error && (
            <MdOutlineErrorOutline className='ErrorIcon'/>
          )
         }
  
            </div>
          
        <div class="form__group field">
            <input type={showPassword ? 'text' : 'password'} class={`form__field ${error ? 'error' : ''}`} placeholder="Password" required="" value={password} onChange={handlePasswordChange}/>
            <label for="name" class="form__label">Password</label>
       {
        ! error && (
          showPassword ? (
            <AiOutlineEye
              className={`viewPassword ${showPassword ? 'active' : ''}`}
              onClick={togglePasswordVisibility}
            />
          ) : (
            <AiOutlineEyeInvisible
              className={`viewPassword ${showPassword ? 'active' : ''}`}
              onClick={togglePasswordVisibility}
            />
          )
        )
        }
             {
    error && (
      <MdOutlineErrorOutline className='ErrorIcon'/>
    )
    }
   
      
      
        </div>
           </div>
            <div className="setLogin">
              <div className="check">
                <Checkbox {...label} className="checkbox" />
                <span className="rm">Remember me</span>
              </div>
              <NavLink to='/RequestLink' className='navLink'>
              <span className="fmp">Forgot your password?</span>
              </NavLink>
            </div>
            <br />
            <div className="bottomText">
              <div className="innerButtomtext">
              <h5>By continuing, you agree to the terms of service and privacy notice</h5>
              </div>
            </div>
            <button
              onClick={handleLogin}
              disabled={isLoading}
              // style={{ color: backgroundColor }}
              className={error ? 'button-transition' : ''}
            >
              {isLoading ? 'Logging In...' : error ? 'Error' : 'Continue on TOPME' }
            </button>

            <div className="loginIcons">
              <BiLogoFacebook className="loginIcon" />
              <GoogleIcon className="loginIcon" />
              <TwitterIcon className="loginIcon" />
            </div>
          </form>
          

          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
      <div className="bottom_img">
      <img src={body2} alt="" className="GroundImgbuttom" />
      </div>
    
    </div>
  );
}

export default Login;


