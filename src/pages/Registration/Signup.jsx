import './signup.scss'
import body1 from '../../assets/body1.png'
import body2 from '../../assets/body2.png'
import Footer from '../../components/footer/Footer'
import { useState } from 'react';

 


function Signup() {

  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);

  //   if (event.target.value !== confirmPassword) {
  //     setErrorMessage('Passwords do not match');
  //   } else {
  //     setErrorMessage('');
  //   }
  // };

  // const handleConfirmPasswordChange = (event) => {
  //   setConfirmPassword(event.target.value);

  //   if (event.target.value !== password) {
  //     setErrorMessage('Passwords do not match');
  //   } else {
  //     setErrorMessage('');
  //   }
  // };



  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (confirmPassword && e.target.value !== confirmPassword) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password && e.target.value !== password) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form
  };

  // const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  // const isPasswordValid = passwordPattern.test(password);

  return (
    <div className='signup'>
      <div className="wrapper"></div>
        <div className="formContainer">
        <h1>
        Become an Angel{' '}
        <span style={{color:' rgba(104, 237, 203, 1)', backgroundColor: 'white', fontSize: '4rem'}}>.</span>{' '}
      </h1>
        <h2>Already a user? &nbsp;Log in</h2>
        <form  onSubmit={handleSubmit}>
          <div className='Names'>         
          <input type='text' placeholder='First Name' className="fName" />          
          <input type='text' placeholder='Last Name' className="lName"/>
          </div>
          <div className="Auth">
          <input type='email' placeholder='Email/Username' className='email'/>
          <input type='password' placeholder='Password'className='psw'  value={password} onChange={handlePasswordChange}/>
          <input type='password' placeholder='Confirm Password' className='cpsw' value={confirmPassword} onChange={handleConfirmPasswordChange}/>
          </div>
          <br />
      {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
      <br />
      {/* {!isPasswordValid && <span style={{ color: 'red' }}>Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long.</span>}
      <br /> */}
          {/* <button disabled={password !== confirmPassword || !isPasswordValid}>Next</button> */}
          <button >Next</button>
        </form>
        <div className="footer">
        <Footer/>
        </div>
        </div>
        <div className="bgImg">
      <img src={body2} alt="" className='backGroundImg' />
      <img src={body1} alt="" className='backGroundImg' />
      </div>
        </div>
  )
}

export default Signup