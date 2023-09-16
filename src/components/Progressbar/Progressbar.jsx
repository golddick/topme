import './progressbar.scss';
import { motion, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

function VerticalProgressbar({ value }) {
  const progressTextRef = useRef(null);

  useEffect(() => {
    const progressText = progressTextRef.current?.textContent;
    if (progressText != null) {
      animate(parseInt(progressText), value, {
        duration: 2,
        onUpdate: (cv) => {
          progressTextRef.current.textContent = cv.toFixed(0);
        },
      });
    }
  }, [value]);

  return (
  
    <div className="progressbar">
          <div className="vertical-progressbar-text-container">
    <p ref={progressTextRef}>0</p>
    <p>%</p>
  </div>
      <div className="vertical-progressbar-container">

      <div className="rotated-rectangle"/>
  <div className="vertical-progressbar">

        <motion.div
          className="vertical-bar"
          animate={{
            // height: `${value}%`,
            height:"30%"
          }}
          transition={{
            duration: 2,
          }}
        />
      </div> 
  
{/* </svg> */}
      
      
      </div>
    
    </div>
  );
}

export default VerticalProgressbar;
