import './login.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {  NavLink } from 'react-router-dom';



function HeaderLogin() {
  return (
    <div className='loginHeader'>
       
        <NavLink to='/Sign-up' className='navlink' style={{color:'black'}} >
        <div className="left">
            <ArrowBackIosIcon/>
            </div>
            </NavLink>
        
        <div className="right">
            <span className="txt">Not an Angel?</span>
            <NavLink to='/Sign-up' className='sign_up' >
            <div >Sign up</div>
            </NavLink>
        </div>
    </div>
  )
}

export default HeaderLogin