import React, { useState } from 'react';
import './radiobtn.scss'

function RadioButtons() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="radioBtn">
      <div className={`yesBtn ${selectedOption === 'yes' ? 'active' : ''}`} onClick={() => handleOptionChange('yes')}>
        <div className="circle">
          <div className={`innerCircle ${selectedOption === 'yes' ? 'active' : ''}`}></div>
        </div>
        <span>Yes</span>
      </div>
      <div className={`no ${selectedOption === 'no' ? 'active' : ''}`} onClick={() => handleOptionChange('no')}>
        <div className="circle">
          <div className={`innerCircle ${selectedOption === 'no' ? 'active' : ''}`}></div>
        </div>
        <span>No</span>
      </div>
    </div>
  );
}

export default RadioButtons;
