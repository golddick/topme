import './login.scss'
import body1 from '../../assets/Hand.png'
import body2 from '../../assets/Hand1.png'
import Footer from '../../components/footer/Footer'
import Checkbox from '@mui/material/Checkbox';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import HeaderLogin from './HeaderLogin';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function Login() {
  return (
    <div className="wrapper">
        <div className="header">
      <HeaderLogin/>
      </div>
      <img src={body1} alt="" className='backGroundImgtop' />
    <div className='login'>
    
        <div className="formContainer">
        <h1>
        Angel Login{' '}
        <span style={{color:' rgba(104, 237, 203, 1)', backgroundColor: 'white', fontSize: '4rem'}}>.</span>{' '}
      </h1>
        <form>
          <div className="Auth">
          <input type='email' placeholder='Email/Username' className='email'/>
          <input type='password' placeholder='Password'className='psw'/>
          </div>
          <div className="setLogin">
          <div className="check">      
          <Checkbox {...label} className="checkbox"/>
          <span className='rm'>Remenber me</span>
          </div>
          <span className='fmp'>Forgot my Password </span>
          </div>
          <button>Continue on TOPME</button>
          <div className="loginIcons">
            <FacebookIcon className='loginIcon'/>
            <GoogleIcon className='loginIcon'/>
            <TwitterIcon className='loginIcon'/>
          </div>
        </form>
        
        </div>
        </div>
        <img src={body2} alt="" className='backGroundImgbuttom' />
        <div className="footer"><Footer/></div>
        </div>
  )
}

export default Login