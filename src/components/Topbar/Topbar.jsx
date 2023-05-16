import './topbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Send from '../../assets/send.png'
import Filter from '../../assets/filter.png'


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
        <img src={Filter}alt=""className="Icon" />
        </div>
        <div className="topCenter">
        <button>CREATE CAMPAIGN</button>
        </div>
        <div className="topLeft">
          <div className="icons">
          <img src={Send}alt=""className="Icon" />
            <NotificationsNoneOutlinedIcon className="Icon" />
          </div>
        </div>
    </div>
  )
}

export default Topbar