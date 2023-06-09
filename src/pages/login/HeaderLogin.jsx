import './login.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {  NavLink } from 'react-router-dom';



function HeaderLogin() {
  return (
    <div className='loginHeader'>
        <div className="left">
            <ArrowBackIosIcon/>
        </div>
        <div className="right">
            <span className="txt">Not an Angel?</span>
            <button><NavLink to='/signup' className='navLink' >Sign up</NavLink></button>
        </div>
    </div>
  )
}

export default HeaderLogin