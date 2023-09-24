import React, {useState,  useEffect, useRef} from 'react'
import './filterTab.scss'



function FilterTab() {

    const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
    const filterPopupRef = useRef(null);
  
    const toggleFilterPopup = () => {
      setIsFilterPopupOpen(!isFilterPopupOpen);
    };

    const handleClosePopup = () => {
        setIsFilterPopupOpen(false);
      };
  
    // const closeFilterPopup = (e) => {
    //   // Check if the click target is outside the popup
    //   if (filterPopupRef.current && !filterPopupRef.current.contains(e.target)) {
    //     setIsFilterPopupOpen(false);
    //   }
    // };
  
    // useEffect(() => {
    //   // Add a click event listener to the entire document
    //   document.addEventListener('click', closeFilterPopup);
  
    //   return () => {
    //     // Remove the click event listener when the component unmounts
    //     document.removeEventListener('click', closeFilterPopup);
    //   };
    // }, []);

  return (
    <div className="mobileFilterBar">
    <div className="filterBar" onClick={toggleFilterPopup} >
    <span>filter</span>
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
       <path d="M6.4 11.8H17.2M4 7H19.6M10 16.6H13.6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
     </svg>
    </div>
    {isFilterPopupOpen && (
        <div className="filterPopup" >
         
        

          <input type="text" placeholder='search for an angel' />
          <div className="closeBtn" > 
          <button className="closePopupButton" onClick={handleClosePopup}>
            Close
          </button>
          </div>
          
          <div className="filterBody">
          <div className="filterCities">
            <h3>city(12)</h3>

            <div className="city">
                <span>umuahia</span>
                <p>4</p>
            </div>
            <div className="city">
                <span>umuahia</span>
                <p>4</p>
            </div>
            <div className="city">
                <span>umuahia</span>
                <p>4</p>
            </div>
            <div className="city">
                <span>umuahia</span>
                <p>4</p>
            </div>
            <div className="city">
                <span>umuahia</span>
                <p>4</p>
            </div>
            <div className="city">
                <span>umuahia</span>
                <p>4</p>
            </div>
            <div className="city">
                <span>umuahia</span>
                <p>4</p>
            </div>
            <div className="city">
                <span>umuahia</span>
                <p>4</p>
            </div>
            <div className="city">
                <span>umuahia</span>
                <p>4</p>
            </div>
          </div>
          <div className="filterSearch">
            <h3>search(4)</h3>

            <div className="filterSearchHistory">
                <span>latest cause</span>
                <p>15</p>
            </div>
            <div className="filterSearchHistory">
                <span>recent angels</span>
                <p>15</p>
            </div>
            <div className="filterSearchHistory">
                <span>all angels</span>
                <p>15</p>
            </div>

          </div>        
          </div>

          <button>search</button>
        </div>
      )}
   </div>
  )
}

export default FilterTab