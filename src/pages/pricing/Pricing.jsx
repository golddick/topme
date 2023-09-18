import './pricing.scss'
import Hometop from '../../components/homepage/HomeTop/Hometop'
import AngelFooter from '../../components/homepage/footer/AngelFooter'
import Optiontab from '../../components/Option/Option'
import {AiFillCaretRight} from 'react-icons/ai'

function Pricing() {
  return (
    <div className='Pricing'>
        <Hometop/>
        
        <div className="Pricingcont">
            <div className="pricingHeader">
            <div className="header">
                <svg xmlns="http://www.w3.org/2000/svg" width="73" height="21" viewBox="0 0 73 21" fill="none">
                    <path d="M17.2074 20.0004C13.3576 20.0004 10.2285 16.8798 10.2285 13.0471C10.2285 9.21432 13.3605 6.09375 17.2074 6.09375C21.0542 6.09375 24.1862 9.21432 24.1862 13.0471C24.1862 16.8798 21.0542 20.0004 17.2074 20.0004ZM17.2074 8.64695C14.7723 8.64695 12.7911 10.6209 12.7911 13.0471C12.7911 15.4732 14.7723 17.4472 17.2074 17.4472C19.6424 17.4472 21.6236 15.4732 21.6236 13.0471C21.6236 10.6209 19.6424 8.64695 17.2074 8.64695Z" fill="black"/>
                    <path d="M34.6204 13.9066C30.7707 13.9066 27.6416 10.7861 27.6416 6.95331C27.6416 3.12057 30.7736 0 34.6204 0C38.4673 0 41.5993 3.12057 41.5993 6.95331C41.5993 10.7861 38.4673 13.9066 34.6204 13.9066ZM34.6204 2.5532C32.1854 2.5532 30.2042 4.52719 30.2042 6.95331C30.2042 9.37943 32.1854 11.3534 34.6204 11.3534C37.0555 11.3534 39.0367 9.37943 39.0367 6.95331C39.0367 4.52719 37.0555 2.5532 34.6204 2.5532Z" fill="black"/>
                    <path d="M30.2042 7.23438H27.6416V20.0003H30.2042V7.23438Z" fill="black"/>
                    <path d="M57.0815 20.0004H54.2105L51.1111 13.8213L48.7858 16.6464L46.4635 13.8213L43.3611 20.0004H40.502L45.9415 9.1582L48.7858 12.6216L51.639 9.1582L57.0815 20.0004Z" fill="black"/>
                    <path d="M5.05864 19.9998C4.11548 19.9998 2.76598 19.8255 1.75756 18.9773C1.18513 18.4957 0.5 17.5973 0.5 16.0695V0.59082H3.06257V16.0695C3.06257 16.6635 3.25832 16.8999 3.40662 17.024C3.96421 17.4998 5.21584 17.4821 5.73191 17.3993L6.15307 19.9171C6.04927 19.9348 5.6281 19.9998 5.05568 19.9998H5.05864Z" fill="black"/>
                    <path d="M7.21753 6.54883H1.4043V9.10202H7.21753V6.54883Z" fill="black"/>
                    <path d="M48.8123 9.14956C46.576 9.14956 44.7549 7.33514 44.7549 5.107C44.7549 2.87887 46.576 1.06445 48.8123 1.06445C51.0486 1.06445 52.8697 2.87887 52.8697 5.107C52.8697 7.33514 51.0486 9.14956 48.8123 9.14956ZM48.8123 1.48999C46.8103 1.48999 45.182 3.11232 45.182 5.107C45.182 7.10169 46.8103 8.72402 48.8123 8.72402C50.8143 8.72402 52.4426 7.10169 52.4426 5.107C52.4426 3.11232 50.8143 1.48999 48.8123 1.48999Z" fill="#0B6623"/>
                    <path d="M52.6565 5.74506C52.3035 5.74506 52.0158 5.45841 52.0158 5.10676C52.0158 3.34553 50.5803 1.91527 48.8126 1.91527C47.0449 1.91527 45.6094 3.34553 45.6094 5.10676C45.6094 5.45841 45.3217 5.74506 44.9688 5.74506C44.6158 5.74506 44.3281 5.45841 44.3281 5.10676C44.3281 2.64222 46.339 0.638672 48.8126 0.638672C51.2862 0.638672 53.2971 2.64222 53.2971 5.10676C53.2971 5.45841 53.0094 5.74506 52.6565 5.74506Z" fill="#0B6623"/>
                    <path d="M71.4779 12.2696C71.0627 9.06625 68.3044 6.58398 64.9766 6.58398C61.3611 6.58398 58.4219 9.51543 58.4219 13.1147C58.4219 16.714 61.3611 19.6455 64.9766 19.6455C66.5663 19.6455 68.0997 19.0722 69.295 18.029L68.2213 16.8086C67.3227 17.5917 66.1719 18.0231 64.9766 18.0231C62.5267 18.0231 60.4891 16.2323 60.1125 13.8949H71.4839C71.5165 13.6378 71.5313 13.3777 71.5313 13.1177C71.5313 12.831 71.5135 12.5503 71.475 12.2725L71.4779 12.2696ZM60.1273 12.2696C60.5307 9.9646 62.5534 8.20928 64.9796 8.20928C67.4057 8.20928 69.4285 9.96755 69.8318 12.2696H60.1273Z" fill="black" stroke="black" stroke-miterlimit="10"/>
                    </svg>
                <h4>pricing</h4></div>

                <h3>As we embark on this journey together, transparency and honesty are at the heart of our mission.</h3>
            </div>

           
            <div className="pricingCard">
                <div className="cardTop"></div>
                <div className="cardBody">
                    <div className="bodyleft">
                        <h4>No fee to create an Impact Story</h4>
                        <p>$0.00</p>
                        <h6>There’s no fees charged to charged to Angels on the TOPMe platform</h6>
                    </div>
                    <div className="horzontalLine"></div>
                    <div className="bodyright">
                    <h4>One-time Transaction fee PER DONATION</h4>
                        <p>2.9%</p>
                        <h6>Automated deductions cover payment gateway fees and operational costs from each donation.</h6>
                    </div>
                </div>

                <div className="cardbuttom"></div>

            </div> 

           <div className="pricingBody">

           <div className="paymentTrans">

            <div className="leftP">
                <h4>Transparent Donations with Nominal Fees</h4>
            </div>
            <div className="rightp">
                <h5>At Topme, we're dedicated to optimizing the impact of your donations while upholding the
                    platform's sustainability.
                    <br/> 
                    <br/> When you donate to a cause, your contribution directly 
                    benefits the Angel's project. Our commitment to efficiency and user-friendliness ensures
                    your support reaches those in need.
                    <br/> 
                    <br/> To strike this balance, a minimal fee of 2.9% is deducted per
                    donation, covering transaction expenses from payment processors like Paystack, with the remaining 
                    amount contributing to server maintenance for seamless operations.
                    </h5>
            </div>

            <div className="paystackLogo">
            <svg xmlns="http://www.w3.org/2000/svg" width="146" height="24" viewBox="0 0 146 24" fill="none">
                    <g clip-path="url(#clip0_1701_10458)">
                        <path d="M20.3633 0.0488281H0.708635C0.0485893 0.0488281 -0.513672 0.612087 -0.513672 1.2978V3.52637C-0.513672 4.21209 0.0485893 4.77536 0.708635 4.77536H20.3633C21.0478 4.77536 21.5856 4.21209 21.6101 3.52637V1.32229C21.6101 0.612089 21.0478 0.0488281 20.3633 0.0488281ZM20.3633 12.4162H0.708635C0.390835 12.4162 0.0730355 12.5386 -0.14698 12.7835C-0.391441 13.0284 -0.513672 13.3223 -0.513672 13.6651V15.8937C-0.513672 16.5794 0.0485893 17.1427 0.708635 17.1427H20.3633C21.0478 17.1427 21.5856 16.6039 21.6101 15.8937V13.6651C21.5856 12.9549 21.0478 12.4162 20.3633 12.4162ZM11.7827 18.5876H0.708635C0.390835 18.5876 0.0730355 18.71 -0.14698 18.9549C-0.366995 19.1998 -0.513672 19.4937 -0.513672 19.8366V22.0652C-0.513672 22.7509 0.0485893 23.3141 0.708635 23.3141H11.7583C12.4428 23.3141 12.9806 22.7509 12.9806 22.0896V19.8611C13.005 19.1264 12.4672 18.5876 11.7827 18.5876ZM21.6101 6.22025H0.708635C0.390835 6.22025 0.0730355 6.3427 -0.14698 6.5876C-0.366995 6.8325 -0.513672 7.12638 -0.513672 7.46923V9.69781C-0.513672 10.3835 0.0485893 10.9468 0.708635 10.9468H21.5856C22.2701 10.9468 22.8079 10.3835 22.8079 9.69781V7.46923C22.8324 6.80801 22.2701 6.24474 21.6101 6.22025Z" fill="#2DBDEF"/>
                        <path d="M44.4675 5.04458C43.8564 4.40785 43.1474 3.91805 42.3407 3.5752C41.534 3.23234 40.6784 3.06091 39.7983 3.06091C38.9427 3.03642 38.1115 3.23234 37.3293 3.59969C36.8159 3.84458 36.3514 4.18744 35.9603 4.60376V4.21193C35.9603 4.01601 35.8869 3.82009 35.7647 3.67315C35.6425 3.52621 35.4469 3.42826 35.2269 3.42826H32.5134C32.3178 3.42826 32.1222 3.50172 32 3.67315C31.8533 3.82009 31.78 4.01601 31.8044 4.21193V22.5303C31.8044 22.7262 31.8778 22.9221 32 23.0691C32.1467 23.216 32.3178 23.2895 32.5134 23.2895H35.3002C35.4958 23.2895 35.6669 23.216 35.8136 23.0691C35.9603 22.9466 36.0581 22.7507 36.0336 22.5303V16.2609C36.4248 16.7017 36.9381 17.0201 37.5004 17.216C38.2338 17.4854 38.9916 17.6323 39.7739 17.6323C40.6539 17.6323 41.534 17.4609 42.3407 17.118C43.1474 16.7752 43.8808 16.2854 44.492 15.6487C45.1276 14.9874 45.6165 14.2038 45.9588 13.3466C46.3499 12.3915 46.521 11.363 46.4966 10.3344C46.521 9.30581 46.3254 8.27723 45.9588 7.29764C45.5921 6.48948 45.1031 5.70581 44.4675 5.04458ZM41.974 11.6813C41.8274 12.0732 41.6073 12.416 41.314 12.7344C40.7517 13.3466 39.945 13.6895 39.1138 13.6895C38.6982 13.6895 38.2827 13.616 37.8915 13.4201C37.5248 13.2487 37.1826 13.0283 36.8892 12.7344C36.5959 12.4405 36.3759 12.0732 36.2292 11.6813C35.9114 10.8487 35.9114 9.94254 36.2292 9.10989C36.3759 8.71805 36.6203 8.37519 36.8892 8.08132C37.1826 7.78744 37.5248 7.54254 37.8915 7.37111C38.2827 7.19969 38.6982 7.10172 39.1138 7.10172C39.5539 7.10172 39.945 7.1752 40.3606 7.37111C40.7273 7.54254 41.0695 7.76295 41.3384 8.05682C41.6318 8.3507 41.8274 8.69356 41.9985 9.0854C42.2918 9.94254 42.2674 10.8487 41.974 11.6813ZM61.4332 3.45275H58.6707C58.4752 3.45275 58.2796 3.52621 58.1574 3.67315C58.0107 3.82009 57.9374 4.01601 57.9374 4.23642V4.57928C57.5951 4.16295 57.1551 3.84458 56.6906 3.62417C55.9328 3.25682 55.1016 3.0854 54.2704 3.0854C52.4859 3.0854 50.7991 3.7956 49.5279 5.04458C48.8678 5.70581 48.3545 6.48948 48.0122 7.34662C47.6211 8.30172 47.4255 9.33029 47.45 10.3834C47.4255 11.4119 47.6211 12.4405 48.0122 13.4201C48.3789 14.2772 48.8678 15.0609 49.5279 15.7221C50.7746 16.9956 52.4859 17.7058 54.246 17.7058C55.0772 17.7303 55.9083 17.5344 56.6662 17.167C57.1306 16.9221 57.5951 16.6038 57.9374 16.2119V16.5793C57.9374 16.7752 58.0107 16.9711 58.1574 17.118C58.3041 17.2405 58.4752 17.3385 58.6707 17.3385H61.4332C61.6287 17.3385 61.8243 17.265 61.9465 17.118C62.0932 16.9711 62.1665 16.7752 62.1665 16.5793V4.26091C62.1665 4.06499 62.0932 3.86907 61.971 3.72214C61.8243 3.55071 61.6287 3.45275 61.4332 3.45275ZM57.6929 11.6813C57.5462 12.0732 57.3262 12.416 57.0329 12.7344C56.7395 13.0283 56.4217 13.2732 56.055 13.4446C55.2727 13.8119 54.3682 13.8119 53.5859 13.4446C53.2193 13.2732 52.877 13.0283 52.5837 12.7344C52.2903 12.4405 52.0703 12.0732 51.9236 11.6813C51.6303 10.8487 51.6303 9.94254 51.9236 9.10989C52.0703 8.71805 52.2903 8.39968 52.5837 8.08132C52.877 7.78744 53.1948 7.54254 53.5859 7.37111C54.3682 7.00377 55.2727 7.00377 56.0306 7.37111C56.3973 7.54254 56.7395 7.76295 57.0084 8.05682C57.2773 8.3507 57.4973 8.69356 57.6685 9.0854C58.0107 9.94254 58.0107 10.8487 57.6929 11.6813ZM88.9595 10.016C88.5684 9.67315 88.1039 9.37928 87.615 9.18336C87.1016 8.96295 86.5393 8.81601 86.0015 8.69356L83.8992 8.27723C83.3614 8.17927 82.9702 8.03234 82.7746 7.86091C82.6035 7.73846 82.4813 7.54254 82.4813 7.32213C82.4813 7.10172 82.6035 6.90581 82.8724 6.73438C83.2391 6.53846 83.6303 6.4405 84.0458 6.46499C84.5837 6.46499 85.1215 6.58744 85.6104 6.78336C86.0993 7.00377 86.5638 7.22418 87.0038 7.51805C87.615 7.90989 88.1528 7.83642 88.5195 7.39561L89.5218 6.24458C89.7174 6.04866 89.8151 5.80377 89.8396 5.53438C89.8151 5.2405 89.6685 4.9956 89.4484 4.79969C89.0329 4.43234 88.3484 4.0405 87.4439 3.64866C86.5393 3.25682 85.3904 3.06091 84.0458 3.06091C83.2147 3.03642 82.4079 3.15887 81.6257 3.40376C80.9656 3.62417 80.33 3.94254 79.7678 4.35886C79.2544 4.7507 78.8633 5.2405 78.5699 5.82825C78.301 6.39152 78.1543 7.00377 78.1543 7.61601C78.1543 8.76703 78.4966 9.69764 79.1811 10.3834C79.8656 11.0691 80.7701 11.5344 81.8946 11.7548L84.0947 12.2446C84.5592 12.3181 85.0481 12.465 85.4882 12.6854C85.7326 12.7834 85.8793 13.0283 85.8793 13.2976C85.8793 13.5425 85.7571 13.7629 85.4882 13.9589C85.2193 14.1548 84.7792 14.2772 84.1925 14.2772C83.6058 14.2772 82.9947 14.1548 82.4568 13.8854C81.9435 13.6405 81.479 13.3221 81.039 12.9548C80.8434 12.8078 80.6478 12.6854 80.4034 12.5874C80.1589 12.514 79.8411 12.5874 79.5233 12.8568L78.3254 13.763C77.9832 14.0079 77.8121 14.4242 77.9099 14.816C77.9832 15.2323 78.301 15.6242 78.9121 16.0895C80.4278 17.1181 82.2368 17.6568 84.0703 17.6078C84.9259 17.6078 85.7815 17.5099 86.5882 17.265C87.2972 17.0446 87.9572 16.7262 88.5439 16.2854C89.0817 15.8936 89.5218 15.3793 89.8151 14.767C90.1085 14.1793 90.2552 13.5425 90.2552 12.8813C90.2796 12.2936 90.1574 11.7058 89.9129 11.167C89.6684 10.7752 89.3507 10.3589 88.9595 10.016ZM101.036 13.3711C100.914 13.1507 100.694 13.0038 100.425 12.9548C100.18 12.9548 99.9114 13.0283 99.7158 13.1752C99.3736 13.3956 98.9824 13.518 98.5913 13.5425C98.4691 13.5425 98.3224 13.5181 98.2002 13.4936C98.0535 13.4691 97.9313 13.3956 97.8335 13.2976C97.7112 13.1752 97.6134 13.0283 97.5401 12.8813C97.4423 12.6364 97.3934 12.3915 97.4179 12.1466V7.12622H100.987C101.207 7.12622 101.403 7.02826 101.549 6.88132C101.696 6.73438 101.794 6.56295 101.794 6.34254V4.21193C101.794 3.99152 101.72 3.7956 101.549 3.67315C101.403 3.52621 101.207 3.45275 101.011 3.45275H97.4179V0.0241749C97.4179 -0.171743 97.3445 -0.392155 97.1979 -0.514604C97.0512 -0.637053 96.8801 -0.710521 96.6845 -0.73501H93.8976C93.7021 -0.73501 93.5065 -0.661542 93.3598 -0.514604C93.2131 -0.367665 93.1154 -0.171743 93.1154 0.0241749V3.45275H91.5264C91.3308 3.45275 91.1352 3.52622 90.9885 3.69764C90.8663 3.84458 90.793 4.0405 90.793 4.23642V6.36703C90.793 6.56295 90.8663 6.75887 90.9885 6.90581C91.1108 7.07724 91.3063 7.15071 91.5264 7.15071H93.1154V13.1262C93.0909 13.8364 93.2376 14.5466 93.5309 15.1834C93.7999 15.7221 94.1421 16.1874 94.6066 16.5793C95.0466 16.9466 95.56 17.216 96.1222 17.3629C96.6845 17.5344 97.2712 17.6323 97.8579 17.6323C98.6157 17.6323 99.398 17.5099 100.131 17.265C100.816 17.0446 101.427 16.6527 101.916 16.1385C102.234 15.8201 102.258 15.3058 102.014 14.9385L101.036 13.3711ZM116.144 3.45275H113.381C113.186 3.45275 113.015 3.52621 112.868 3.67315C112.721 3.82009 112.648 4.01601 112.648 4.23642V4.57928C112.306 4.16295 111.89 3.84458 111.401 3.62417C110.643 3.25682 109.812 3.0854 108.981 3.0854C107.196 3.0854 105.51 3.7956 104.238 5.04458C103.578 5.70581 103.065 6.48948 102.723 7.34662C102.332 8.30172 102.136 9.33029 102.16 10.3589C102.136 11.3874 102.332 12.416 102.723 13.3956C103.065 14.2527 103.603 15.0364 104.238 15.6976C105.485 16.9711 107.172 17.6813 108.956 17.6813C109.788 17.7058 110.619 17.5099 111.377 17.167C111.866 16.9221 112.306 16.6038 112.648 16.2119V16.5793C112.648 16.7752 112.721 16.9711 112.868 17.0936C113.015 17.2405 113.186 17.314 113.381 17.314H116.144C116.559 17.314 116.877 16.9956 116.877 16.5793V4.26091C116.877 4.06499 116.804 3.86907 116.681 3.72214C116.559 3.55071 116.364 3.45275 116.144 3.45275ZM112.428 11.7058C112.281 12.0976 112.061 12.4405 111.768 12.7589C111.474 13.0527 111.157 13.2976 110.79 13.4691C110.399 13.6405 109.983 13.7385 109.543 13.7385C109.103 13.7385 108.712 13.6405 108.321 13.4691C107.954 13.2976 107.612 13.0527 107.319 12.7589C107.025 12.465 106.805 12.0976 106.683 11.7058C106.39 10.8731 106.39 9.96703 106.683 9.13437C106.83 8.74254 107.05 8.39968 107.319 8.10581C107.612 7.81193 107.954 7.56703 108.321 7.39561C108.712 7.22418 109.128 7.12622 109.543 7.12622C109.959 7.12622 110.374 7.19969 110.79 7.39561C111.157 7.56703 111.474 7.78744 111.768 8.08132C112.061 8.37519 112.281 8.71805 112.428 9.10989C112.746 9.91805 112.746 10.8731 112.428 11.7058ZM131.3 13.1997L129.711 11.9752C129.418 11.7303 129.125 11.6568 128.88 11.7548C128.66 11.8527 128.464 11.9997 128.293 12.1711C127.951 12.5874 127.536 12.9548 127.096 13.2732C126.607 13.5425 126.093 13.6895 125.555 13.6405C124.92 13.6405 124.333 13.4691 123.82 13.1017C123.306 12.7344 122.915 12.2446 122.72 11.6323C122.573 11.216 122.5 10.7997 122.5 10.3834C122.5 9.94254 122.573 9.52622 122.72 9.0854C122.866 8.69356 123.062 8.3507 123.355 8.05682C123.649 7.76295 123.966 7.51805 124.333 7.37111C124.724 7.19969 125.14 7.10172 125.58 7.10172C126.118 7.07723 126.655 7.22418 127.12 7.49356C127.584 7.78744 127.976 8.15479 128.318 8.5956C128.464 8.76703 128.66 8.91397 128.88 9.01193C129.125 9.10989 129.418 9.03642 129.711 8.79152L131.3 7.59152C131.496 7.46907 131.642 7.27315 131.716 7.05274C131.814 6.80784 131.789 6.53846 131.642 6.31805C131.031 5.36295 130.2 4.57927 129.198 4.01601C128.147 3.42825 126.9 3.10989 125.507 3.10989C124.529 3.10989 123.551 3.30581 122.622 3.67315C121.742 4.0405 120.96 4.55478 120.299 5.21601C119.639 5.87723 119.102 6.6609 118.735 7.54254C117.977 9.37927 117.977 11.4364 118.735 13.2732C119.102 14.1303 119.615 14.9385 120.299 15.5752C121.693 16.9466 123.551 17.6813 125.507 17.6813C126.9 17.6813 128.147 17.3629 129.198 16.7752C130.2 16.2119 131.056 15.4283 131.667 14.4487C131.789 14.2283 131.814 13.9589 131.74 13.7385C131.642 13.5425 131.496 13.3466 131.3 13.1997ZM146.017 16.065L141.641 9.64866L145.381 4.70173C145.552 4.48132 145.626 4.16295 145.528 3.89356C145.455 3.69764 145.283 3.50172 144.819 3.50172H141.861C141.69 3.50172 141.519 3.5507 141.372 3.62417C141.176 3.72213 141.03 3.86907 140.932 4.0405L137.95 8.22826H137.241V-1.66562C137.241 -1.86154 137.167 -2.05746 137.021 -2.2044C136.874 -2.35134 136.703 -2.4248 136.507 -2.4248H133.745C133.549 -2.4248 133.354 -2.35134 133.207 -2.2044C133.06 -2.05746 132.987 -1.88603 132.987 -1.66562V16.5793C132.987 16.7997 133.06 16.9711 133.207 17.118C133.354 17.265 133.549 17.3385 133.745 17.3385H136.507C136.703 17.3385 136.898 17.265 137.021 17.118C137.167 16.9711 137.241 16.7752 137.241 16.5793V11.7548H138.023L141.274 16.7507C141.47 17.118 141.837 17.3385 142.228 17.3385H145.332C145.797 17.3385 145.992 17.1181 146.09 16.9221C146.212 16.6038 146.188 16.2854 146.017 16.065ZM77.1276 3.47724H74.0229C73.7785 3.47724 73.5584 3.55071 73.3873 3.72214C73.2407 3.86907 73.1429 4.0405 73.094 4.23642L70.796 12.7589H70.2338L67.7892 4.23642C67.7403 4.06499 67.6669 3.89356 67.5447 3.72214C67.398 3.55071 67.2024 3.45275 66.9824 3.45275H63.8289C63.4133 3.45275 63.1688 3.57519 63.0466 3.86907C62.9733 4.11397 62.9733 4.38336 63.0466 4.62825L66.958 16.6283C67.0313 16.7997 67.1047 16.9956 67.2513 17.118C67.398 17.265 67.618 17.3385 67.8381 17.3385H69.5004L69.3537 17.7303L68.987 18.8323C68.8648 19.1752 68.6692 19.4691 68.3759 19.6895C68.107 19.8854 67.7892 20.0078 67.4469 19.9834C67.1536 19.9834 66.8847 19.9099 66.6157 19.8119C66.3468 19.6895 66.1024 19.5425 65.8824 19.3711C65.6868 19.2242 65.4423 19.1507 65.1734 19.1507H65.149C64.8556 19.1752 64.5867 19.3221 64.44 19.5915L63.4622 21.0364C63.0711 21.6732 63.2911 22.065 63.5355 22.2854C64.0733 22.7752 64.6845 23.1425 65.369 23.3629C66.1268 23.6323 66.9091 23.7548 67.6914 23.7548C69.1092 23.7548 70.2827 23.3629 71.1872 22.6038C72.1161 21.7711 72.8251 20.6936 73.1673 19.4691L77.7143 4.62825C77.8121 4.35887 77.8365 4.08948 77.7387 3.84458C77.7143 3.67316 77.5432 3.45275 77.1276 3.47724Z" fill="#131E32"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1701_10458">
                        <rect width="145.455" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                    </svg>
            </div>
            </div>
            <div className="mobilePaymentTrans">
            <div className="topTrans">
                <h3>Transparent Donations with Nominal Fees</h3>
                <p>At Topme, we're dedicated to optimizing the impact of your donations while upholding the platform's sustainability. <br/><br/>
                When you donate to a cause, your contribution directly benefits the Angel's project. Our commitment to efficiency and user-friendliness ensures your support reaches those in need.<br/><br/>
                To strike this balance, a minimal fee of 2.9% is deducted per donation, covering transaction expenses from payment processors like Paystack, with the remaining amount contributing to server maintenance for seamless operations.</p>
            </div>
            <div className="bottomTrans">
                <h3>Empower Angels: Direct Support for Their Impactful Work</h3>
                <p>On the Topme platform, raised donations are sent directly to those in need. You have the option to donate directly to our Angels as well, supporting their efforts in aiding the needy.<br/><br/>
                Your contribution can help cover their expenses as they work tirelessly to assist others, ensuring their impactful work continues even when personal resources may be limited.</p>
            </div>
            </div>

            <div className="transCont">
            <div className="TLeft">
                <h6>On the Topme platform, raised donations are sent directly to those in need. You have the option to donate directly to our Angels as well, supporting their efforts in aiding the needy.
                    <br/>
                    <br/>
                Your contribution can help cover their expenses as they work tirelessly to assist others,
                ensuring their impactful work continues even when personal resources may be limited.</h6>
            </div>
            <div className="TRight"><h3>Empower Angels: Direct Support for Their Impactful Work</h3></div>
            </div>
            <div className="optionTop">
            <div className="leftTop">
            <h2>Everything you need to be an Angel</h2>
            </div>
            <div className="rightTop">
                <h4>You can become an Angel and create an impact in your community today</h4>
                <div className="topBtn">
                    <div className="reg">Become an angel<AiFillCaretRight/></div>
                    <div className="conSup">Contact support<AiFillCaretRight/></div>
                </div>
            </div>
            </div>
          <div className="optionHeader">
            <h3>Unleash your inner Angel & make a difference today!</h3>
          </div>
           </div>
           <Optiontab/>
        </div>
        
            <AngelFooter/>
        </div>
  )
}

export default Pricing