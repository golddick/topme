import React, {useState,  useEffect, useRef} from 'react'
import './filterTab.scss'

function FilterBar({closePopup}) {
  
    const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
    const filterPopupRef = useRef(null);
  
    const toggleFilterPopup = () => {
      setIsFilterPopupOpen(!isFilterPopupOpen);
    };

  
      const handleClosePopup = () => {
        setIsFilterPopupOpen(false);
      };
    
      // Handle document click to close the filter popup if clicked outside
      const handleDocumentClick = (event) => {
        if (filterPopupRef.current && !filterPopupRef.current.contains(event.target)) {
          // Clicked outside the popup, so close it
          setIsFilterPopupOpen(false);
        }
      };
    
      useEffect(() => {
        // Add an event listener to the document when the component mounts
        document.addEventListener('click', handleDocumentClick);
    
        // Clean up the event listener when the component unmounts
        return () => {
          document.removeEventListener('click', handleDocumentClick);
        };
      }, []);
 
  return (
    <div className="mobileFilterBar">
    <div className="filterBar" onClick={toggleFilterPopup} >
    <span>filter</span>
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
       <path d="M6.4 11.8H17.2M4 7H19.6M10 16.6H13.6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
     </svg>
    </div>
    {isFilterPopupOpen && (
       <div className="popupBody" ref={filterPopupRef} >

         <div className="filterPopup" >
          <input type="text" placeholder='search for an angel' />
          {/* <div className="closeBtn" > 
          <button className="closePopupButton" onClick={handleClosePopup}>
            Close
          </button>
          </div> */}
          
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
       </div>
      )}
   </div>
  )
}

export default FilterBar