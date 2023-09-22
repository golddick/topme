import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './forgetPassword.scss'
import HeaderLogin from '../login/HeaderLogin';
import Footer from '../../components/footer/Footer';
import BlackLogo from '../../assets/blacklogo.svg';
import body1 from '../../assets/Hand.png';
import body2 from '../../assets/Hand1.png';


function ResetPassword() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();

    // Here, you can implement the logic to reset the password.
    // You should send a request to your server to update the password with the new one.
    // You might want to add validation for the new password and confirmation.

    // Example validation:
    if (formData.password !== formData.confirmPassword) {
      console.error('Passwords do not match.');
      return;
    }

    // You can send a request to your backend here to update the password.
    // You can access the new password with formData.password.

    console.log('Resetting password with new password:', formData.password);
  };

  return (
    <div className="wrapper">
      {/* Add your header component here */}
      {/* <div className="header">
        <HeaderLogin />
      </div> */}
      {/* Add your logo and background images here */}
      <img src={BlackLogo} alt="" className="mobileLogo" />
      {/* Add your background images here */}
      <img src={body1} alt="" className="backGroundImgtop" />
      <div className="login">
        <div className="formContainer">
          <h1>
            Reset Password
            <span className="dot">.</span>
          </h1>
          <h6>Get a link to reset your password</h6>
          <form>
            <div className="Auth">
              <div className="password">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="New Password"
                //   className={`password ${errors.password ? 'error' : ''}`}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />

                {/* Add your password visibility toggle here */}
              </div>
              <div className="password">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                //   className={`cpsw ${errors.confirmPassword ? 'error' : ''}`}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />

                {/* Add your password visibility toggle here */}
              </div>
            </div>
            <br />

            <button onClick={handleResetPassword}>Reset Password</button>
          </form>

          {/* Add your footer component here */}
          {/* <div className="footer">
            <Footer />
          </div> */}
        </div>
      </div>
      {/* Add your background images here */}
      <img src={body2} alt="" className="backGroundImgbuttom" />
    </div>
  );
}

export default ResetPassword;
