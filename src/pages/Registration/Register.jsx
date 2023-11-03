import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdOutlineErrorOutline } from 'react-icons/md';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import GreenLogo from '../../assets/greenLogo.png';
import BlackLogo from '../../assets/blacklogo.svg';
import Footer from '../../components/footer/Footer';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signup.scss'

function Register() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    errorMessage: '',
  });
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    usertypeid: '1',
  });

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: '',
      errorMessage: '',
    }));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(null);
    setIsLoading(true);

    const { firstname, lastname, email, password, confirmpassword } = formData;
    const newErrors = {};

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

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

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

    console.log('Form Data:', formData);

    axios
      .post('http://162.255.87.139:5034/api/v1/Auth/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: timeout,
      })
      .then((response) => {
        if (response.data && response.data.error === 'false') {
          setIsRegistered(true);
          console.log('Registration successful', response.data);
        } else {
          console.error('Registration failed', response.data.message);
          setErrors({ errorMessage: response.data.message });
        }
      })
      .catch((error) => {
        console.error('An error occurred during registration:', error);
        setErrors({
          errorMessage: 'An error occurred during registration: ' + error.message,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="Register">
      <div className="arrow_top">
        <MdKeyboardArrowLeft className="arrowIcon" />
      </div>
      <div className="mobileLogo"><img src={BlackLogo} alt="" /></div>
      <div className="_formBox">
        <div className="formHeader">
          <h2>
            become a
            <div className="formHeaderLogo">
              <img src={GreenLogo} alt="" />
            </div>
            angel
            <b className="dot">.</b>
          </h2>
        </div>

        <div className="formBody">
          <div className="loginText">
            <h5>Already an Angel? </h5>
            <NavLink to='/Login' className="Link">
            <h2>Log In</h2>
            </NavLink>
        
          </div>
          <div className="form">
            <div className="NameForm">
              <div class="form__group field">
                <input
                  type="input"
                  class={`form__field ${errors.firstname ? 'error' : ''}`}
                  placeholder="First Name"
                  required=""
                  value={formData.firstname}
                  onChange={handleInputChange}
                  name="firstname"
                />
                <label for="name" class="form__label">
                  First Name
                </label>
              </div>

              <div class="form__group field">
                <input
                  type="input"
                  class={`form__field ${errors.lastname ? 'error' : ''}`}
                  placeholder="Last Name"
                  required=""
                  value={formData.lastname}
                  onChange={handleInputChange}
                  name="lastname"
                />
                <label for="name" class="form__label">
                  Last Name
                </label>
              </div>
            </div>

            <div className="detailsForm">
              <div class="form__group field">
                <input
                  type="input"
                  class={`form__field ${errors.email ? 'error' : ''}`}
                  placeholder="Email"
                  required=""
                  value={formData.email}
                  onChange={handleInputChange}
                  name="email"
                />
                <label for="name" class="form__label">
                  Email
                </label>
                {errors.email && (
                  <MdOutlineErrorOutline className='ErrorIcon'/>
                )}
              </div>

              <div class="form__group field">
                <input
                 type={showPassword ? 'text' : 'password'}
                  class={`form__field ${errors.password ? 'error' : ''}`}
                  placeholder="Password"
                  required=""
                  value={formData.password}
                  onChange={handleInputChange}
                  name="password"
                />
                <label for="name" class="form__label">
                  Password
                </label>

                {
                    !errors.password && (
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
                        errors.password && (
                        <MdOutlineErrorOutline className='ErrorIcon'/>
                        )
                        }
            
              </div>
              <div class="form__group field">
                <input
                type={showConfirmPassword ? 'text' : 'password'}
                  class={`form__field ${errors.confirmpassword ? 'error' : ''}`}
                  placeholder="Confirm Password"
                  required=""
                  value={formData.confirmpassword}
                  onChange={handleInputChange}
                  name="confirmpassword"
                />
                <label for="name" class="form__label">
                  Confirm Password
                </label>
                {
                    !errors.confirmpassword && (
                        showConfirmPassword ? (
                            <AiOutlineEye
                              className={`viewPassword ${showConfirmPassword ? 'active' : ''}`}
                              onClick={toggleConfirmPasswordVisibility}
                            />
                          ) : (
                            <AiOutlineEyeInvisible
                              className={`viewPassword ${showConfirmPassword ? 'active' : ''}`}
                              onClick={toggleConfirmPasswordVisibility}
                            />
                          )
                    )
                }

                    {
                        errors.confirmpassword && (
                        <MdOutlineErrorOutline className='ErrorIcon'/>
                        )
                        }
              </div>
            </div>


            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={errors.errorMessage ? 'Sign-button error' : 'Sign-button'}
            >
              {isLoading ? 'Logging In...' : errors.errorMessage ? 'Error' : 'sign up'}
            </button>

            <div className="bottomText">
                <span>By continuing, you agree to the terms of service and privacy notice</span>
            </div>

            <div className="footer_">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
