
// import { NavLink, useNavigate } from 'react-router-dom';
// import './login.scss';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Checkbox from '@mui/material/Checkbox';
// import {BiLogoFacebook} from 'react-icons/bi'
// import GoogleIcon from '@mui/icons-material/Google';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import HeaderLogin from './HeaderLogin';
// import Footer from '../../components/footer/Footer';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
// import BlackLogo from '../../assets/blacklogo.svg';
// import body1 from '../../assets/Hand.png';
// import body2 from '../../assets/Hand1.png';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// function Login() {
//   const [userData, setUserData] = useState(null);
//   const navigate = useNavigate();
//   const [userType, setUserType] = useState(null);

//   const [isLoading, setIsLoading] = useState(false); 
//   const [backgroundColor, setBackgroundColor] = useState(''); 

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginSuccess, setLoginSuccess] = useState(false);
//   const [loginError, setLoginError] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   // Validation errors state
//   const [errors, setErrors] = useState({
//     email: '',
//     password: '',
//     errorMessage: '',
//   });

//   // Define a function to check for a valid email format
//   const isValidEmail = (email) => {
//     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//     return emailRegex.test(email);
//   };

//   // Define a function to toggle password visibility
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   // const handleLogin = (e) => {
//   //   e.preventDefault();

//   //   // Clear previous validation errors
//   //   setErrors({
//   //     email: '',
//   //     password: '',
//   //     errorMessage: '',
//   //   });

//   //   // Validate inputs
//   //   if (!email) {
//   //     setErrors({ ...errors, email: 'Email is required' });
//   //     return;
//   //   } else if (!isValidEmail(email)) {
//   //     setErrors({ ...errors, email: 'Invalid email format' });
//   //     return;
//   //   }

//   //   if (!password) {
//   //     setErrors({ ...errors, password: 'Password is required' });
//   //     return;
//   //   }

//   //   // Continue with the login process
//   //   const requestOptions = {
//   //     method: 'POST',
//   //     headers: { 'Content-Type': 'application/json' },
//   //     body: JSON.stringify({ email, password }),
//   //   };

//   //   // Login endpoint
//   //   fetch('http://162.255.87.139:5034/api/v1/Login', requestOptions)
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       if (data) {
//   //         // Handle successful login
//   //         setLoginSuccess(true);
//   //         setLoginError(false);
//   //         console.log('Login successful!');
//   //         console.log(data.message);

//   //         // Store the complete user data in state
//   //         setUserData(data);
//   //         localStorage.setItem('userData', JSON.stringify(data));

//   //         // Fetch the user type using the token
//   //         fetchUserType();
//   //       } else {
//   //         // Handle login error
//   //         setLoginSuccess(false);
//   //         setLoginError(true);
//   //         console.log(data.error);
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       // Handle login error
//   //       console.error(error);
//   //       setLoginSuccess(false);
//   //       setLoginError(true);
//   //     });
//   // };

//   const handleLogin = (e) => {
//     e.preventDefault();
  
//     // Clear previous validation errors and set loading state
//     setErrors({
//       email: '',
//       password: '',
//       errorMessage: '',
//     });
//     setIsLoading(true);
//      if (!email) {
//       setErrors({ ...errors, email: 'Email is required' });
//       return;
//     } else if (!isValidEmail(email)) {
//       setErrors({ ...errors, email: 'Invalid email format' });
//       return;
//     }

//     if (!password) {
//       setErrors({ ...errors, password: 'Password is required' });
//       return;
//     }
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     };
  
//     // Login endpoint
//     fetch('http://162.255.87.139:5034/api/v1/Login', requestOptions)
//       // .then((response) => response.json())
//       .then(response => {
//         if (response.status === 200) {
//           // Successful login
//           return response.json();
//         } else if (response.status === 404) {
//           // User not found error
//           throw new Error('User not found');
//         } else {
//           // Handle other error cases
//           throw new Error('Login failed');
//         }
//       })
//       .then((data) => {
//         if (data) {
//           // Handle successful login
//           setLoginSuccess(true);
//           setLoginError(false);
//           console.log('Login successful!');
//           console.log(data.message);
  
//           // Store the complete user data in state
//           setUserData(data);
//           localStorage.setItem('userData', JSON.stringify(data));
  
//           // Fetch the user type using the token
//           fetchUserType();
//         } else {
//           // Handle login error
//           setLoginSuccess(false);
//           setLoginError(true);
//           setBackgroundColor('red'); // Change the background color to red on error
//           console.log(data.error);
//         }
//       })
//       .catch((error) => {
//         // Handle login error
//         console.error(error);
//         setLoginSuccess(false);
//         setLoginError(true);
//         setBackgroundColor('red'); // Change the background color to red on error
//       })
//       .finally(() => {
//         // Reset loading state after request is complete
//         setIsLoading(false);
//       });
//   };
  

//   useEffect(() => {
//     if (userData) {
//       fetchUserType();
//     }
//   }, [userData]);

//   const isUserDataIncomplete = (userData) => {
//     return !userData?.user?.phoneNumber || !userData?.user?.location;
//   };

//   const fetchUserType = () => {
//     const userType = userData?.user?.usertype;

//     if (userType) {
//       setUserType(userType);
//       console.log('user type is', userType);

//       if (userType === 'Angel') {
//         if (isUserDataIncomplete(userData)) {
//           navigate('/addProfile');
//         } else {
//           navigate('/profile');
//         }
//       } else if (userType === 'admin') {
//         navigate('/');
//       }
//     }
//   };

//   return (
//     <div className="wrapper">
//       <div className="header">
//         <HeaderLogin />
//       </div>
//       <img src={BlackLogo} alt="" className="mobileLogo" />
//       <img src={body1} alt="" className="backGroundImgtop" />
//       <div className="login">
//         <div className="formContainer">
//           <h1>
//             User Login
//             <span className="dot">.</span>
//           </h1>
//           <h6>Don’t have an account? &nbsp;
//           <NavLink to="/signup" className="navLink">
//             Sign up
//           </NavLink></h6>
//           <form>
//             <div className="Auth">
//               <div className="email">
//                 <input
//                   type="text"
//                   placeholder="Email"
//                   className={`email ${errors.email ? 'error' : ''}`}
//                   name="email"
//                   value={email}
//                   onChange={handleEmailChange}
//                   required
//                 />
              
//               </div>
//               <div className="password">
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   placeholder="Password"
//                   className={`password ${errors.password ? 'error' : ''}`}
//                   name="password"
//                   value={password}
//                   onChange={handlePasswordChange}
//                   required
//                 />
//                 {showPassword ? (
//                   <AiOutlineEye
//                     className={`viewPassword ${showPassword ? 'active' : ''}`}
//                     onClick={togglePasswordVisibility}
//                   />
//                 ) : (
//                   <AiOutlineEyeInvisible
//                     className={`viewPassword ${showPassword ? 'active' : ''}`}
//                     onClick={togglePasswordVisibility}
//                   />
//                 )}
               
//               </div>
//             </div>
//             <div className="setLogin">
//               <div className="check">
//                 <Checkbox {...label} className="checkbox" />
//                 <span className="rm">Remember me</span>
//               </div>
//               <span className="fmp">Forgot your password?</span>
//             </div>
//             <br/>

//             {loginSuccess && <p className="error-message">Login successful!</p>}
//           {loginError && (
//             <p className="error-message">Login failed. Please check your credentials and try again.</p>
//           )}
//               {errors.email && (
//                               <span className="error-message">{errors.email}</span>
//                             )}
//             {errors.password && (
//                               <span className="error-message">{errors.password}</span>
//                             )}
//              <div className="bottomText">
//               <h5>By continuing, you agree to the terms of service and privacy notice</h5>
//             </div>
//              <button
//               onClick={handleLogin}
//               disabled={isLoading}
//               style={{ color: backgroundColor }}
//               className={loginError ? 'button-transition' : ''}
//             >
//               {isLoading ? 'Logging In...' : loginError ? 'Error' : loginSuccess? ' Logged In' : errors ? 'Error':'Continue on TOPME'}
//             </button>

//             <div className="loginIcons">
//               <BiLogoFacebook className="loginIcon" />
//               <GoogleIcon className="loginIcon" />
//               <TwitterIcon className="loginIcon" />
//             </div>
//           </form>
          
//           <div className="footer">
//             <Footer />
//           </div>
//         </div>
//       </div>
//       <img src={body2} alt="" className="backGroundImgbuttom" />
//     </div>
//   );
// }

// export default Login;




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
import BlackLogo from '../../assets/blacklogo.svg';
import body1 from '../../assets/Hand.png';
import body2 from '../../assets/Hand1.png';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Login() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const [userType, setUserType] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Combined error state
  const [showPassword, setShowPassword] = useState(false);

  // Define a function to check for a valid email format
  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  // Define a function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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

  return (
    <div className="loginwrapper" >
      <div className="header">
        <HeaderLogin />
      </div>
      <img src={BlackLogo} alt="" className="mobileLogo" />
      <img src={body1} alt="" className="GroundImgtop" />
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
            <div className="Auth">
              <div className="email">
                <input
                  type="text"
                  placeholder="Email"
                  className={`email ${error ? 'error' : ''}`}
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="password">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className={`password ${error ? 'error' : ''}`}
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                {showPassword ? (
                  <AiOutlineEye
                    className={`viewPassword ${showPassword ? 'active' : ''}`}
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className={`viewPassword ${showPassword ? 'active' : ''}`}
                    onClick={togglePasswordVisibility}
                  />
                )}
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

            {error && <p className="error-message">{error}</p>}
            <div className="bottomText">
              <h5>By continuing, you agree to the terms of service and privacy notice</h5>
            </div>
            <button
              onClick={handleLogin}
              disabled={isLoading}
              // style={{ color: backgroundColor }}
              className={error ? 'button-transition' : ''}
            >
              {isLoading ? 'Logging In...' : error ? 'Error' : 'Continue on TOPME'}
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
      <img src={body2} alt="" className="GroundImgbuttom" />
    </div>
  );
}

export default Login;


