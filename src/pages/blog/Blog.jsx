import './blog.scss'
import Hometop from '../../components/homepage/HomeTop/Hometop'
import {BsFillCaretRightFill} from 'react-icons/bs'
import { useState } from 'react';
import Loader from '../../components/loader/Loader';
import AngelFooter from '../../components/homepage/footer/AngelFooter'


function Blog() {

    const [loading ,setIsloading ] = useState(false);
     
          const blogContent = [
            {
              blogImg:
                'https://t3.ftcdn.net/jpg/02/99/97/34/360_F_299973420_Sul5SWPieQyxds20PoMDfwJOS5pQ7FvP.jpg',
              blogheader: '10 Tips to help You write a powerful TopMe Impact story',
              blogBio:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec,pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
            },
            {
                blogImg:
                'https://t3.ftcdn.net/jpg/02/99/97/34/360_F_299973420_Sul5SWPieQyxds20PoMDfwJOS5pQ7FvP.jpg',
              blogheader: '10 Tips to help You write a powerful TopMe Impact story',
              blogBio:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec,pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
            },
            {
            blogImg:
                'https://t3.ftcdn.net/jpg/02/99/97/34/360_F_299973420_Sul5SWPieQyxds20PoMDfwJOS5pQ7FvP.jpg',
              blogheader: '10 Tips to help You write a powerful TopMe Impact story',
              blogBio:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec,pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
            },
      
            {
                blogImg:
                'https://t3.ftcdn.net/jpg/02/99/97/34/360_F_299973420_Sul5SWPieQyxds20PoMDfwJOS5pQ7FvP.jpg',
              blogheader: '10 Tips to help You write a powerful TopMe Impact story',
              blogBio:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec,pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
            },
      
            // {
            //     blogImg:
            //     'https://t3.ftcdn.net/jpg/02/99/97/34/360_F_299973420_Sul5SWPieQyxds20PoMDfwJOS5pQ7FvP.jpg',
            //   blogheader: '10 Tips to help You write a powerful TopMe Impact story',
            //   blogBio:
            //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec,pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
            // },
    
      
            // {
            //     blogImg:
            //     'https://t3.ftcdn.net/jpg/02/99/97/34/360_F_299973420_Sul5SWPieQyxds20PoMDfwJOS5pQ7FvP.jpg',
            //   blogheader: '10 Tips to help You write a powerful TopMe Impact story',
            //   blogBio:
            //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec,pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
            // },
          ];
    
    
    
    


  return (
    <div className='Blog'>
        <Hometop/>

            <div className="blogContent" >
                <div className="containerTop">
                    <div className="blogHeader">
                    <svg xmlns="http://www.w3.org/2000/svg" width="123" height="35" viewBox="0 0 123 35" fill="none">
                        <path d="M28.9762 34.4997C22.4182 34.4997 17.0879 29.1947 17.0879 22.679C17.0879 16.1634 22.4232 10.8584 28.9762 10.8584C35.5292 10.8584 40.8645 16.1634 40.8645 22.679C40.8645 29.1947 35.5292 34.4997 28.9762 34.4997ZM28.9762 15.1988C24.8282 15.1988 21.4532 18.5546 21.4532 22.679C21.4532 26.8034 24.8282 30.1592 28.9762 30.1592C33.1242 30.1592 36.4992 26.8034 36.4992 22.679C36.4992 18.5546 33.1242 15.1988 28.9762 15.1988Z" fill="#68EDCB"/>
                        <path d="M58.6383 24.1413C52.0803 24.1413 46.75 18.8363 46.75 12.3206C46.75 5.80496 52.0853 0.5 58.6383 0.5C65.1913 0.5 70.5266 5.80496 70.5266 12.3206C70.5266 18.8363 65.1913 24.1413 58.6383 24.1413ZM58.6383 4.84043C54.4903 4.84043 51.1153 8.19622 51.1153 12.3206C51.1153 16.445 54.4903 19.8008 58.6383 19.8008C62.7863 19.8008 66.1613 16.445 66.1613 12.3206C66.1613 8.19622 62.7863 4.84043 58.6383 4.84043Z" fill="#68EDCB"/>
                        <path d="M51.1153 12.7979H46.75V34.5H51.1153V12.7979Z" fill="#68EDCB"/>
                        <path d="M96.9011 34.5001H92.0104L86.7307 23.9957L82.7696 28.7983L78.8135 23.9957L73.5287 34.5001H68.6582L77.9243 16.0684L82.7696 21.9561L87.63 16.0684L96.9011 34.5001Z" fill="#68EDCB"/>
                        <path d="M8.28117 34.5002C6.6745 34.5002 4.37566 34.2038 2.65784 32.762C1.68273 31.9431 0.515625 30.4159 0.515625 27.8187V1.50488H4.8809V27.8187C4.8809 28.8285 5.21436 29.2304 5.46698 29.4414C6.41683 30.2502 8.54895 30.22 9.42806 30.0794L10.1455 34.3595C9.96867 34.3896 9.25123 34.5002 8.27612 34.5002H8.28117Z" fill="#68EDCB"/>
                        <path d="M11.9594 11.6328H2.05664V15.9732H11.9594V11.6328Z" fill="#68EDCB"/>
                        <path d="M82.814 16.0528C79.0045 16.0528 75.9023 12.9683 75.9023 9.18044C75.9023 5.39262 79.0045 2.30811 82.814 2.30811C86.6235 2.30811 89.7257 5.39262 89.7257 9.18044C89.7257 12.9683 86.6235 16.0528 82.814 16.0528ZM82.814 3.03151C79.4037 3.03151 76.6299 5.78948 76.6299 9.18044C76.6299 12.5714 79.4037 15.3294 82.814 15.3294C86.2244 15.3294 88.9982 12.5714 88.9982 9.18044C88.9982 5.78948 86.2244 3.03151 82.814 3.03151Z" fill="black"/>
                        <path d="M89.3629 10.2658C88.7617 10.2658 88.2716 9.77852 88.2716 9.1807C88.2716 6.18661 85.8262 3.75518 82.815 3.75518C79.8038 3.75518 77.3584 6.18661 77.3584 9.1807C77.3584 9.77852 76.8683 10.2658 76.2671 10.2658C75.6659 10.2658 75.1758 9.77852 75.1758 9.1807C75.1758 4.99099 78.6013 1.58496 82.815 1.58496C87.0287 1.58496 90.4542 4.99099 90.4542 9.1807C90.4542 9.77852 89.9642 10.2658 89.3629 10.2658Z" fill="black"/>
                        <path d="M121.424 21.3584C120.717 15.9127 116.018 11.6929 110.349 11.6929C104.191 11.6929 99.1836 16.6763 99.1836 22.7951C99.1836 28.9139 104.191 33.8974 110.349 33.8974C113.057 33.8974 115.67 32.9228 117.706 31.1494L115.877 29.0747C114.346 30.4059 112.386 31.1394 110.349 31.1394C106.176 31.1394 102.705 28.0951 102.063 24.1214H121.434C121.49 23.6843 121.515 23.2422 121.515 22.8001C121.515 22.3129 121.485 21.8356 121.419 21.3634L121.424 21.3584ZM102.089 21.3584C102.776 17.4399 106.222 14.4559 110.354 14.4559C114.487 14.4559 117.933 17.4449 118.62 21.3584H102.089Z" fill="#68EDCB" stroke="#68EDCB" stroke-miterlimit="10"/>
                        </svg>
                       <h2>blog</h2>
                    </div>

                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo 
                    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                     magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
                     ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

                    <button>Become an angel <BsFillCaretRightFill/></button>

                </div>

                <div className="containerCenter">
          {loading ? (
            <Loader />
          ) : (
            <>
              {blogContent.map((item, index) => (
                <div className="blogbox" key={index}>
                  <img src={item.blogImg} alt="" />
                  <h5>{item.blogheader}</h5>
                  <p>{item.blogBio}</p>
                  <div className="bottomText">
                    <span>aug 10, 2023 <b>.</b> 10 minutes read</span>
                  </div>
                </div>
              ))}
            </>
          )}
                    </div>

                <div className="containerBottom">
                    <div className="article">
                        <h4>ALL ARTICLES</h4>
                   <div className="articleBody">

                   <div className="articleLeft">
                        <div className="articleText">
                        <span>aug 10, 2023 <b>.</b> 10 minutes read</span>
                        <p>How to choose the Best crowding website for your next fundraising</p>
                        <div className="horizontal-line"></div>
                        </div>

                        <div className="articleText">
                        <span>aug 10, 2023 <b>.</b> 10 minutes read</span>
                        <p>How to choose the Best crowding website for your next fundraising</p>
                        <div className="horizontal-line"></div>
                        </div>

                        <div className="articleText">
                        <span>aug 10, 2023 <b>.</b> 10 minutes read</span>
                        <p>How to choose the Best crowding website for your next fundraising</p>
                        <div className="horizontal-line"></div>
                        </div>
                    </div>

                    <div className="vertical-lines">
                    <div className="vertical-line"></div>
                    <div className="vertical-line"></div>
                    <div className="vertical-line"></div>
                    </div>

                        <div className="articleRight">
                        <div className="articleText" >
                            
                        <span>aug 10, 2023 <b>.</b> 10 minutes read</span>
                        <p>How to choose the Best crowding website for your next fundraising</p>
                        <div className="horizontal-line"></div>
                        </div>

                       

                        <div className="articleText">
                        <span>aug 10, 2023 <b>.</b> 10 minutes read</span>
                        <p>How to choose the Best crowding website for your next fundraising</p>

                        <div className="horizontal-line"></div>
                        </div>

                        <div className="articleText">
                        <span>aug 10, 2023 <b>.</b> 10 minutes read</span>
                        <p>How to choose the Best crowding website for your next fundraising</p>
                        <div className="horizontal-line"></div>
                       
                        </div>
                        </div>
                   </div>

                   <div className="pageNum">
                        <div className="num">1</div>
                        <div className="num">2</div>
                        <div className="num">3</div>
                        <div className="num">4</div>
                        <div className="num">5</div>
                        <div className="num">6</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M14.43 6.42969L20.5 12.4997L14.43 18.5697M3.5 12.4997H20.33" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                    </div>
                    </div>

               
                    </div> 
                    <AngelFooter/>
            </div>
           
        </div>
  )
}

export default Blog