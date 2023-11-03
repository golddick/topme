import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './forgetPassword.scss'
import {IoIosArrowBack} from 'react-icons/io'
import Footer from '../../components/footer/Footer';
import BlackLogo from '../../assets/blacklogo.svg';
import body1 from '../../assets/Hand.png';
import body2 from '../../assets/Hand1.png';


function Forgetpasswoord() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendLink = (e) => {
    e.preventDefault();

    // Here, you can implement the logic to send a reset password link to the provided email.
    // You might want to make an API call or trigger the password reset process based on your backend setup.
    // For now, let's just log the email value to the console.

    console.log('Sending reset password link to:', email);
  };

  return (
    <div className="wrapper">
      {/* <div className="header">
        <HeaderLogin />
      </div> */}
      <img src={BlackLogo} alt="" className="mobileLogo" />
      <NavLink to='/login' className='BackLink'>
      <div className="back"> <IoIosArrowBack/> Back</div>
      </NavLink>
      <img src={body1} alt="" className="backGroundImgtop" />
      <div className="login">
        <div className="formContainer">
          <h1>
            Forgot Password
            <span className="dot">.</span>
          </h1>
          <h6>Get a link to reset password</h6>
          <form>
            <div className="Auth">
              {/* <div className="email">  
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div> */}
                <div class="form__group field">
            <input type="input" class='form__field' placeholder="Email" required="" />
            <label for="name" class="form__label">Email</label>
         {/* {
          error && (
            <MdOutlineErrorOutline className='ErrorIcon'/>
          )
         } */}
  
            </div>
            </div>
            <br />

            <button onClick={handleSendLink}>Send Reset Link</button>
          </form>

          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
      <img src={body2} alt="" className="backGroundImgbuttom" />
    </div>
  );
}

export default Forgetpasswoord;
