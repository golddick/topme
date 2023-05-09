import './login.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';




function HeaderLogin() {
  return (
    <div className='loginHeader'>
        <div className="left">
            <ArrowBackIosIcon/>
        </div>
        <div className="right">
            <span className="txt">Not an Angel?</span>
            <button>sign up</button>
        </div>
    </div>
  )
}

export default HeaderLogin