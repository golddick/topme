import './Selectoption.scss'
import {  NavLink } from 'react-router-dom';
import Option from '../../Option/Option'

 

function Selectoption(  { selectTabColor, innerBoxColor }) {
  const svgColor = selectTabColor === 'red' ? 'white' : 'blue';

  
    
  return (
    <div className='select'>
    <div className="selectBody">
        <div className="selecttext">
      <h2>Unleash your inner Angel and make a  difference today!</h2>
   
      </div>
   
      {/* <Option/>  */}
    </div>
    {/* <Option/> */}
    </div>
  )
}

export default Selectoption
