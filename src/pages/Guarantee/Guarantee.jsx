import './guarantee.scss'
import { NavLink } from 'react-router-dom'
import HomeTop from '../../components/homepage/HomeTop/Hometop'
import Footer from '../../components/homepage/footer/AngelFooter'

function Guarantee() {
  return (
    <div className='Guarantee-page'>
        <HomeTop/>
        <div className="GuaranteeWrapper">
            <div className="GuaranteetopText">
                <h2>OUR GUARANTEE</h2>
                <p>Our utmost priority is to ensure that generous contributions make the intended meaningful impact on the supported causes.</p>
            </div>
            <div className="wrapperCenterText">
            <div className="textLeft">
                <h5>Verified Angels and Authenticated Causes</h5>
                <span>Rest assured that all the Angels on our platform undergo a 
                    rigorous vetting process. We carefully authenticate each Angel to ensure their 
                    dedication and commitment to championing worthy causes. Angels are mandated to work closely
                     with reputable aid institutions that will carry out the necessary assistance.</span>
            </div>
            <div className="vertical-line"></div>
            <div className="textCenter">
            <h5>Purposeful Campaigns for Real Needs</h5>
                <span>When an Angel creates a campaign, they are required to conduct 
                    thorough research and verify the specific needs of the cause they are 
                    supporting. For example, if a campaign aims to help a sick person, the Angel must 
                    visit a hospital to determine the required financial assistance accurately.
                     Moreover, the Angel must include the name of the aid institution that will directly 
                     receive the funds raised.</span>
            </div>
            <div className="vertical-line"></div>
            <div className="textRight">
            <h5>Funds to Trusted Institutions</h5>
                <span>To maintain transparency and accountability, all donations received on our 
                    platform are not given directly to the Angels. Instead, they are directly 
                    channelled to the verified and trusted aid institutions responsible for 
                    executing the necessary help.This process ensures that your contributions
                     reach the intended beneficiaries promptly and efficiently.</span>
            </div>
            </div>
            <div className="issue">
                <h3>GOT AN ISSUE</h3>
                <h6>Here’s how it works:</h6>

                <div className="issueCont">

                <div className="issueBox">
                    <div className="issueText">
                    <div className="num">1</div>
                    <h5>Submit a claim</h5>
                    </div>
                    <NavLink to='/claim-form ' className='navlink'>
                    <button className='button'>SUBMIT A CLAIM</button>
                    </NavLink>
                </div>

                <div className="issueBox">
                    <div className="issueText">
                    <div className="num">2</div>
                    <h5>Our team will review</h5>
                    </div>
                    {/* <button>SUBMIT A CLAIM</button> */}
                </div>
                
                <div className="issueBox">
                    <div className="issueText">
                    <div className="num">3</div>
                    <h5>Get a feedback</h5>
                    </div>
                    {/* <button>SUBMIT A CLAIM</button> */}
                </div>
                
                </div>
            </div>

            <div className="concern">
                <h4>HAVE ANY CONCERNS?</h4>
                <div className="btn">
                CONTACT US
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M14.93 5.92969L21 11.9997L14.93 18.0697M4 11.9997H20.83" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>
            </div>
          
        </div>
        <Footer/>
        </div>
  )
}

export default Guarantee