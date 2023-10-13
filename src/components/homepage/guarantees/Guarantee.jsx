import './guarantee.scss'
import  {BiChevronRight} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

function Guarantee() {
  return (
    <div className='Guarantee'>
        <div className="GuaranteeContent">
            <div className="topLeft">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M10.3 11.5751L12.1 13.3751L15.7 9.77508M5.5 6.17508L11.09 3.38006C12.1035 2.87331 13.2965 2.87331 14.31 3.38006L19.9 6.17508C19.9 6.17508 19.9 11.4311 19.9 14.2031C19.9 16.9751 17.3376 18.8463 12.7 21.7751C8.0624 18.8463 5.5 16.3751 5.5 14.2031V6.17508Z" stroke="#68EDCB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>
                <span>OUR GUARANTEE</span>
            </div>
            <h4>Everything is guaranteed </h4>
            <p>Our priority is that contributions get to the intended beneficiaries.</p>
            <div className="Guaranteebuttom">
              <NavLink to='/guarantee' style={{textDecoration:'none'}}>
            <span>EXPLORE OUR GUARANTEE PAGE <BiChevronRight className='icon'/> </span>
            </NavLink>
        </div>
      
        </div>
        </div>
  ) 
}

export default Guarantee