import './topbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import {FiFilter} from 'react-icons/fi'
import {  NavLink } from 'react-router-dom';


function Topbar() {
  return (
    <div className='TopBar'>
        <div className="topRight">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search"
            className="searchInput"
          />
        </div>
        <FiFilter className="Icon" />
        </div>
       
        <div className="DonorRight">
          <p>sign in</p>
          <span> <NavLink to='/signup' className='navLink' >angels sign up</NavLink></span>
        </div>
    </div>
  )
}

export default Topbar