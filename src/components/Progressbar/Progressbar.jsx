//<ProgressBar percentage =50 />
import "./progressbar.scss";
import React from 'react'

const ProgressBar = (props) => {
    const TextSize =
                  props.percentage === "100"
                    ? "text-[14px]"
                    : "text-[16px]";
    let half = Math.floor(props.percentage/2);
    let percentage= `${props.percentage}%`
    let pbars= `h-[${half}px]`
    let pbars2= "h-22"

    console.log(pbars);
  return (
    <div className=' inline-flex flex-col border-[1.5px] border-[#9747FF] p-3 w-[64px] h-[150px] items-center justify-between rounded-[12px] bg-white '>

        <div className={`w-[38px] rounded-full h-[38px] bg-[#9747FF] text-white font-bold flex justify-center items-center ${TextSize}`}>
            <span>{percentage}</span>
        </div>
         <div className="containe">
          <div className={`centered-image w-[24px]`}    style={{ height: `${half}px` }}
>
          </div>
        </div>
    </div>
  )
}

export default ProgressBar