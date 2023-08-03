import './signup.scss';
import body1 from '../../assets/body1.png';
import body2 from '../../assets/body2.png';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";

function Signup() {

  const navigate = useNavigate();

  const [isRegistered, setIsRegistered] = useState(false);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    usertypeid: '1',
  });

  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmpassword } = formData;
  
    if (password !== confirmpassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    setPasswordError('');

    const timeout = 100000;

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('Request timed out'));
      }, timeout);
    });

    axios
      .post('http://162.255.87.139:5034/api/v1/Auth/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: timeout,
      })
      .then((response) => {
        if (!response.data) {
          throw new Error('Registration failed');
        }
        return response.data;
      })
      .then((data) => {
        console.log('Registration response:', data);
        setIsRegistered(true);
        console.log('Registration successful', data);
        navigate('/login');
      })
      .catch((error) => {
        console.error('Registration failed', error);
        setErrorMessage('An error occurred during registration: ' + error.message);
      });
  };

  if (isRegistered) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="signup">
      <div className="wrapper"></div>
      <div className="formContainer">
        <h1>
          Become an Angel{' '}
          <span style={{ color: 'rgba(104, 237, 203, 1)', backgroundColor: 'white', fontSize: '4rem' }}>.</span>{' '}
        </h1>

        <h2>
          Already a user? &nbsp;
          <NavLink to="/login" className="navLink">
            Log in
          </NavLink>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="Names">
            <input
              type="text"
              placeholder="First Name"
              className="fName"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="lName"
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
            />
          </div>
          <div className="Auth">
            <input
              type="text"
              placeholder="Email"
              className="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="cpsw"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleInputChange}
            />
          </div>
          <br />
          {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
          {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
          <br />
          <button type="submit">SIGN UP</button>
        </form>
        <div className="footer">
          <Footer />
        </div>
      </div>
      
      <div className="bgImg">
        <img src={body2} alt="" className="backGroundImg" />
        <img src={body1} alt="" className="backGroundImg" />
      </div>
    </div>
  );
}

export default Signup;
