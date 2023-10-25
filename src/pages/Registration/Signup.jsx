
// import './signup.scss';
// import GreenLogo from '../../assets/greenLogo.png'
// import BlackLogo from '../../assets/blacklogo.svg'
// import Footer from '../../components/footer/Footer';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
// import { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Signup() {
//   const navigate = useNavigate();

//   const [isRegistered, setIsRegistered] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     password: '',
//     confirmpassword: '',
//     usertypeid: '1',
//   });

//   const [errors, setErrors] = useState({
//     firstname: '',
//     lastname: '',
//     email: '', 
//     password: '',
//     confirmpassword: '',
//     errorMessage: '',
//   });

//   const handleInputChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validation checks for all input fields
//     const { firstname, lastname, email, password, confirmpassword } = formData;
//     const newErrors = {};

//     if (!firstname) {
//       newErrors.firstname = 'First name is required';
//     }

//     if (!lastname) {
//       newErrors.lastname = 'Last name is required';
//     }

//     if (!email) {
//       newErrors.email = 'Email is required';
//     } else if (!isValidEmail(email)) {
//       newErrors.email = 'Invalid email format';
//     }

//     if (!password) {
//       newErrors.password = 'Password is required';
//     }

//     if (password !== confirmpassword) {
//       newErrors.confirmpassword = 'Passwords do not match';
//     }

//     // Check if there are any validation errors
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     // Reset the errors if there are no validation errors
//     setErrors({
//       firstname: '',
//       lastname: '',
//       email: '',
//       password: '',
//       confirmpassword: '',
//       errorMessage: '',
//     });

//     const timeout = 100000;

//     const timeoutPromise = new Promise((_, reject) => {
//       setTimeout(() => {
//         reject(new Error('Request timed out'));
//       }, timeout);
//     });

//     // Log the form data before making the request
//     console.log('Form Data:', formData);

//     axios
//       .post('http://162.255.87.139:5034/api/v1/Auth/register', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         timeout: timeout,
//       })
//       .then((response) => {
//         if (!response.data) {
//           throw new Error('Registration failed');
//         }
//         return response.data;
//       })
//       .then((data) => {
//         console.log('Registration response:', data);
//         // setIsRegistered(true);
//         console.log('Registration successful', data);
//          navigate('/login');
//       })
//       .catch((error) => {
//         console.error('Registration failed', error);
//         setErrors({ errorMessage: 'An error occurred during registration: ' + error.message });
//       });
//   };

 

//   // Function to validate email format
//   const isValidEmail = (email) => {
//     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//     return emailRegex.test(email);
//   };

//     // Toggle password visibility
//     const togglePasswordVisibility = () => {
//       setShowPassword(!showPassword);
//     };
//     const toggleConfirmPasswordVisibility = () => {
//       setShowConfirmPassword(!showConfirmPassword);
//     };

//   return (
//     <div className="signup">
//     <img src={BlackLogo} alt=""  className='mobileLogo'/>
//       <div className="formContainer">
//         <h1>
//           Become a <img src={GreenLogo} alt="" /> Angel{' '}
          
//           <span className='dot'>.</span>{' '}
//         </h1>

//         <h2>
//           Already a user? &nbsp;
//           <NavLink to="/login" className="navLink">
//             Log in
//           </NavLink>
//         </h2>
//         <form>
//           <div className="Names">
//             <input
//               type="text"
//               placeholder="First Name"
//               className={`fName ${errors.firstname ? 'error' : ''}`}
//               name="firstname"
//               value={formData.firstname}
//               onChange={handleInputChange}
//               required
//             />
           
//             <input
//               type="text"
//               placeholder="Last Name"
//               className={`lName ${errors.lastname ? 'error' : ''}`}
//               name="lastname"
//               value={formData.lastname}
//               onChange={handleInputChange}
//               required
//             />
           
//           </div>

//           <div className="Auth">
//             <div className="email">
//               <input
//                 type="text"
//                 placeholder="Email"
//                 className={`email ${errors.email ? 'error' : ''}`}
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//               />
              
//             </div>
//             <div className="password">
//               <input
//                 type={showPassword ? 'text' : 'password'} 
//                 placeholder="Password"
//                 className={`password ${errors.password ? 'error' : ''}`}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 required
//               />
             
//              {showPassword ? (
//                 <AiOutlineEye 
//                   className={`viewPassword ${showPassword ? 'active' : ''}`}
//                   onClick={togglePasswordVisibility}
//                 />
//               ) : (
//                 <AiOutlineEyeInvisible 
//                   className={`viewPassword ${showPassword ? 'active' : ''}`}
//                   onClick={togglePasswordVisibility}
//                 />
//               )}
//             </div>
//             <div className="password">
//               <input
//                 type={showConfirmPassword ? 'text' : 'password'} 
//                 placeholder="Confirm Password"
//                 className={`cpsw ${errors.confirmpassword ? 'error' : ''}`}
//                 name="confirmpassword"
//                 value={formData.confirmpassword}
//                 onChange={handleInputChange}
//                 required
//               />

//                 {showConfirmPassword ? (
//                 <AiOutlineEye 
//                   className={`viewPassword ${showConfirmPassword ? 'active' : ''}`}
//                   onClick={toggleConfirmPasswordVisibility}
//                 />
//               ) : (
//                 <AiOutlineEyeInvisible 
//                   className={`viewPassword ${showConfirmPassword ? 'active' : ''}`}
//                   onClick={toggleConfirmPasswordVisibility}
//                 />
//               )}
              
//             </div>
//           </div>

//           <br />
//           {/* {errors.firstname && <span className="error-message">{errors.firstname}</span>}
//           {errors.lastname && <span className="error-message">{errors.lastname}</span>} */}
//           {errors.email && <span className="error-message">{errors.email}</span>}
//           {/* {errors.password && <span className="error-message">{errors.password}</span>} */}
//           {errors.confirmpassword && <span className="error-message">{errors.confirmpassword}</span>}
//           {errors.errorMessage && <span className="error-message">{errors.errorMessage}</span>}
//           <br />

//           <div className="bottomText"><h5>By continuing, you agree to the terms of service and privacy notice</h5></div>
//           <button onClick={handleSubmit}>SIGN UP</button>
//         </form>
//         <div className="footer">
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;




import './signup.scss';
import GreenLogo from '../../assets/greenLogo.png';
import BlackLogo from '../../assets/blacklogo.svg';
import Footer from '../../components/footer/Footer';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();

  const [isRegistered, setIsRegistered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    usertypeid: '1',
  });

  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    errorMessage: '',
  });

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks for all input fields
    const { firstname, lastname, email, password, confirmpassword } = formData;
    const newErrors = {};

    if (!firstname) {
      newErrors.firstname = 'First name is required';
    }

    if (!lastname) {
      newErrors.lastname = 'Last name is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    if (password !== confirmpassword) {
      newErrors.confirmpassword = 'Passwords do not match';
    }

    // Check if there are any validation errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Reset the errors if there are no validation errors
    setErrors({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmpassword: '',
      errorMessage: '',
    });

    const timeout = 100000;

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('Request timed out'));
      }, timeout);
    });

    // Log the form data before making the request
    console.log('Form Data:', formData);

    axios
      .post('http://162.255.87.139:5034/api/v1/Auth/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: timeout,
      })
     
      .then((response) => {
        if (response.data && response.data.error === "false") {
          // Registration was successful
          setIsRegistered(true);
          console.log('Registration successful', response.data);
          // You can redirect to the login page here, as registration is successful
          navigate('/login');
        } else {
          // Registration failed due to an error returned by the API
          console.error('Registration failed', response.data.message);
          setErrors({ errorMessage: response.data.message });
        }
      })
      .catch((error) => {
        console.error('An error occurred during registration:', error);
        setErrors({ errorMessage: 'An error occurred during registration: ' + error.message });
      });
      
      
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="signup-wrapper">
      <img src={BlackLogo} alt="" className="mobileLogo" />
      <div className="formContainer">
        <h1>
          Become a <img src={GreenLogo} alt="" /> Angel
          <span className="dot">.</span>
        </h1>

        <h2>
          Already a user? &nbsp;
          <NavLink to="/login" className="navLink">
            Log in
          </NavLink>
        </h2>
        {!isRegistered ? (
          <form>
            <div className="Names">
              <input
                type="text"
                placeholder="First Name"
                className={`fName ${errors.firstname ? 'error' : ''}`}
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                required
              />

              <input
                type="text"
                placeholder="Last Name"
                className={`lName ${errors.lastname ? 'error' : ''}`}
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="Auth">
              <div className="email">
                <input
                  type="text"
                  placeholder="Email"
                  className={`email ${errors.email ? 'error' : ''}`}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="password">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className={`password ${errors.password ? 'error' : ''}`}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
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
              <div className="password">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  className={`cpsw ${errors.confirmpassword ? 'error' : ''}`}
                  name="confirmpassword"
                  value={formData.confirmpassword}
                  onChange={handleInputChange}
                  required
                />

                {showConfirmPassword ? (
                  <AiOutlineEye
                    className={`viewPassword ${showConfirmPassword ? 'active' : ''}`}
                    onClick={toggleConfirmPasswordVisibility}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className={`viewPassword ${showConfirmPassword ? 'active' : ''}`}
                    onClick={toggleConfirmPasswordVisibility}
                  />
                )}
              </div>
            </div>

            <br />
            {errors.email && <span className="error-message">{errors.email}</span>}
            {errors.confirmpassword && <span className="error-message">{errors.confirmpassword}</span>}
            {errors.errorMessage && <span className="error-message">{errors.errorMessage}</span>}
            <br />

            <div className="bottomText">
              <h5>By continuing, you agree to the terms of service and privacy notice</h5>
            </div>
            <button onClick={handleSubmit}>SIGN UP</button>
          </form>
        ) : (
          // Render a success message when registration is successful
          <div className="success-message">Registration successful! You can now log in.</div>
        )}
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Signup;
