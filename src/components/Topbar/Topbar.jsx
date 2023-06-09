import './topbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import {FiFilter} from 'react-icons/fi'


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
       
        <div className="topLeft">
          <TurnedInNotOutlinedIcon className="Icon" />
          <div>
          <div className="icons">
            <NotificationsNoneOutlinedIcon className="Icon" />
            <span className="topbarIconBadge">8</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Topbar