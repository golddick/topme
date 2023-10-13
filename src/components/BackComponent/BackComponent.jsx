import React from 'react'
import { useHistory } from 'react-router-dom';
import {IoChevronBackCircleSharp} from 'react-icons/io5'





function BackComponent() {
    const history = useHistory();

// Function to go back to the previous page
const goBack = () => {
  history.goBack();
};
  return (
    <div className="backComponent" style={{background:'red'}}>
        {/* <IoChevronBackCircleSharp onClick={goBack} /> */}
    ssjjjjjjjjjjjjjj
    </div>
  )
}

export default BackComponent