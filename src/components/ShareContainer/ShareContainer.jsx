import React from 'react'
import './ShareContainer.scss'

function ShareContainer({closeshareConterner}) {
  return (
    <div className='ShareContainer'ref={closeshareConterner}>
      <div className="shareBox">
        <span>share</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21.0002 11.359L11.4002 5L11.4002 8.6C3 10.4 3 18.8 3 18.8C3 18.8 6.6 14 11.4002 14.6L11.4002 18.32L21.0002 11.359Z" stroke="#808080" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="shareBox">
        <span>make featured post</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17.1102 8.38372L10.0103 15.4836C9.16607 16.3278 7.79727 16.3278 6.95302 15.4836C6.107 14.6376 6.10903 13.2653 6.95755 12.4217L12.4633 6.94852L13.846 5.56585C15.5283 3.88351 18.2559 3.88351 19.9382 5.56585C21.6206 7.24819 21.6206 9.97579 19.9382 11.6581L18.5764 13.02L13.4149 18.1815C10.7449 20.9627 6.69931 21.3859 3.8707 18.6704C1.07673 15.9882 1.5503 11.967 4.3753 9.14196L9.51647 4" stroke="#808080" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="shareBox">
        <span>ADD TO CAUSE</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 4V20M4 12H20" stroke="#808080" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      </div>
      <div className="shareBox">
        <span>ADOPT ME LINK</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9.6116 7L6.45301 7C5.27337 7 4.13165 7.46336 3.2944 8.313C2.45715 9.16265 1.98148 10.3018 2.00056 11.5184C1.98143 12.7349 2.45728 13.8743 3.2944 14.7238C4.15061 15.5927 5.25422 16.0561 6.43392 16.0561H9.5925M13.5884 16.0947H16.747C17.9266 16.0947 19.0684 15.6314 19.9056 14.7817C20.7429 13.9321 21.2185 12.7929 21.1994 11.5764C21.1994 10.3792 20.7238 9.23999 19.8865 8.39034C19.0493 7.5407 17.9267 7.05798 16.747 7.05797H13.5884M6.85244 11.5051L16.3282 11.5051" stroke="#808080" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      </div>
  )
}

export default ShareContainer