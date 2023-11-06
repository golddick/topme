import './claim.scss'
import HomeTop from '../../components/homepage/HomeTop/Hometop'
import {BiChevronDown} from 'react-icons/bi'
import RadioButtons from '../../components/radionBtn/Radiobtn'
import AngleFooter from '../../components/homepage/footer/AngelFooter'
import {IoChevronBackCircle} from 'react-icons/io5'

function Claim() { 
  return (
    <div className='Claim'>
        <HomeTop/>
        <div className="claimWrapper">
            <div className="back">
                <IoChevronBackCircle className='backArrow'/>
            </div>

            <div className="claimCont">
            <div className="submitHeader">
                <h2>SUBMIT AN ANGEL CLAIM</h2>
                <h5>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                 Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus 
                 et magnis dis parturient montes, nascetur ridiculus mus. 
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
                Nulla consequat massa quis enim.
                </h5>
            </div>
            <>
               <form action="" className="claimForm">
               <input type="text" placeholder='FULL NAME' />
                <div className="inputRoll">
                    <div className="nation">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1200px-Flag_of_Nigeria.svg.png" alt="" />
                    <input type="text"  placeholder='Country' /> 
                    <BiChevronDown className='dropdownIcon'/>
                    </div>
                   
                    <input type="text"placeholder='PHONE NUMBER'className='nation' />
                </div>
                <input type="text" placeholder='EMAIL ADDRESS' />
                <input type="text" placeholder='IMPACT STORY URL/LINK' />
                <input type="text" placeholder='CAN YOU TELL US MORE ABOUT YOUR CONCERNS?'/>
                <div className="bollen">
                    <h5>DO YOU WANT A REFUND?</h5>
                    <div className="radioBtn">
                        <RadioButtons/>
                    </div>
                </div>

                <div className="uploadFile">
                    <h4>UPLOAD ANY EVIDENCE YOU MAY HAVE</h4>
                    <input type="file" />
                </div>

                <button>SUBMIT A CLAIM</button>
               </form>

                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    Aenean massa. Cum sociis natoque penatibus et magnis 
                    dis parturient montes, nascetur ridiculus mus.</p>
            </>
        </div>

        <div className="claimRight"> </div>
        </div>
        
        <AngleFooter/>
        </div>
  )
}

export default Claim