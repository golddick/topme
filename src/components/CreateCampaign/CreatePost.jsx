import './CreatePost.scss';
import React, { useState, createContext, useEffect } from 'react';
import SendIcon from '../../assets/send.png'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Leftbar from '../leftbar/Leftbar';
import Topbar from '../Topbar/Topbar';
import Widget from '../widgets/Widget';
import Stats from '../stats/Stats';
import axios from 'axios';
import {AiFillCaretDown} from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid';




function CreatePost() {

  const endpointUrl = 'http://162.255.87.139:5034/api/v1/Campaign/campaign_categories';

  // // Get the user data from local storage
  // const storedUserData = localStorage.getItem('userData');
  // let UserAccountId;

  // if (storedUserData) {
  //   // If user data exists in local storage, parse it back to a JavaScript object
  //   const userData = JSON.parse(storedUserData);

  //   // Now you can access the 'UserAccountId' property from the userData object
  //   UserAccountId = userData.user.userAccountId;
  //   // console.log('User ID:', UserAccountId);
  // } else {
  //   // Handle the case when user data is not available in local storage
  //   console.log('User data not found in local storage');
  // }
  const storedUserData = localStorage.getItem('userData');
  const userData = storedUserData ? JSON.parse(storedUserData) : null;
  const UserAccountId = userData?.user?.userAccountId;


// console.log(storedUserData)

    const [isActive, setIsActive] = useState(false);
    const [dropdownData, setDropdownData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [value, setValue] = useState('');

    useEffect(() => {
      fetchDataAndPopulateDropdown();
    }, []);
  

    const toggleDropdown = () => {
      setIsActive(!isActive);
  
      // Fetch the data and populate the dropdown content if it's active
      if (!isActive) {
        fetchDataAndPopulateDropdown();
      }
    };

    const fetchDataAndPopulateDropdown = () => {
      setIsLoading(true);
      setErrorMessage('');
  
      axios.get(endpointUrl)
        .then(response => {
          setIsLoading(false);
          const categories = response.data.data;
          setDropdownData(categories);
        })
        .catch(error => {
          setIsLoading(false);
          setErrorMessage('Error fetching data.');
          console.error('Error fetching data:', error);
        });
    };

    const handleCategorySelect = (categoryId) => {
      const selectedCategory = dropdownData.find((category) => category.campaignCategoryId === categoryId);
      setSelectedCategory(selectedCategory);
      setIsActive(false);


      console.log('Selected Category:', selectedCategory);
    };
  
    // const handleChange = (event) => {
    //   setValue(event.target.value);
    // };


    const [selectedFiles, setSelectedFiles] = useState([]);
    const [fileCount, setFileCount] = useState(0);
  
    const handleFileChange = (event) => {
      const files = event.target.files;
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray);
      setFileCount(fileArray.length);
    };
  

 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ExpectedFunds, setExpectedFunds] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [CampaignImage, setCampaignImage] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('')
  //const [CampaignCategoryId, setCampaignCategoryId] = useState('');

  const handleUpdate = ( ) => {
    setIsLoading(true);
    setErrorMessage('');

    if (!selectedCategory) {
      setErrorMessage('Please select a category.');
      return;
    }

    const dataToUpdate = {
      Title: title,
      Description: description,
      ExpectedFunds: ExpectedFunds,
      DueDate: dueDate,
      CampaignImage: CampaignImage,
      UserAccountId : UserAccountId,
      CampaignCategoryId: selectedCategory.campaignCategoryId,
      // isPublished: false
      

    };
   
    


    axios.put(`http://162.255.87.139:5034/api/v1/Campaign/createacampaign?id=${UserAccountId}`, dataToUpdate) 
      .then(response => {
        // Handle the response if needed
        console.log(response.data);
        setIsLoading(false);
        setSuccessMessage('Campaign updated successfully.');
        console.log(dataToUpdate)
      })
      .catch(error => { 
        // Handle errors if any
        console.error(error);
        setIsLoading(false);
        setErrorMessage('Failed to update the resource.');
      });

  
  };
//  console.log(UserAccountId)

  return (
    <div className="CreatePost">
      <Topbar />
      <div className="Wrapper">
        <div className="Left">
          <Leftbar />
        </div>
        <div className="Center">
          <Widget />
          <Stats />


        {/* <form > */}

        <div className="post" >
            <div className="header">
              <h3>create campaign</h3>
              <AiOutlineCloseCircle className="icon" />
            </div>
            <div className="title">
            <span>title:</span>
              <input type="text" id="title" value={title}
                  onChange={e => setTitle(e.target.value)}  />
                  <div className="categoryDropdown">
                    <div className="dropdownBtn" onClick={toggleDropdown}>{selectedCategory ? selectedCategory.category : 'Select Category'} <AiFillCaretDown/></div>
                  {isActive && (
                   <div className="dropdownContent">
                   {isLoading ? (
                     <div>Loading...</div>
                   ) : errorMessage ? (
                     <div>{errorMessage}</div>
                   ) : (
                     dropdownData.map((category) => (
                       <div key={category.campaignCategoryId} className="dropdownItem" onClick={() => handleCategorySelect(category.campaignCategoryId)}>
                         {category.category}
                       </div>
                     ))
                   )}
                 </div>
                  )}
                  </div> 
            </div>
            <div className="horizontal"></div>
            <div className='form'>
              <span>Description</span>
              <textarea id="description" name="description" rows="100" cols="100" className='input' value={description}
                  onChange={e => setDescription(e.target.value)}></textarea>            
            </div>
            <div className="horizontal"></div>
            <div className="postInfo">
              <div className="amount">
                <span className='examount'>expected amount: </span>
                <input type="text" value={ExpectedFunds}
                  onChange={e => setExpectedFunds(e.target.value)} />
              </div>
              <div className="amount">
                <span>due date: </span>
                <input type="text" value={dueDate}
                  onChange={e => setDueDate(e.target.value)} />
              </div>
              <div className="upload">
                <input
                  style={{ display: 'none' }}
                  type="file"
                  id="file"
                  value={CampaignImage}
                  onChange={(e) => {
                    setCampaignImage(e.target.value);
                    handleFileChange(e);
                  }}
                  multiple // Allow multiple file selection
                />
                <label htmlFor="file" className="file">
                  <CameraAltOutlinedIcon className="icon" />
                  <span>Add File</span>
                </label>
          
              </div>
              <div className="sendbtn">
                <div className="send">
                <button  onClick={handleUpdate} disabled={isLoading}>  <img src={SendIcon} alt="" />post</button>
                {/* <button>  <img src={SendIcon} alt="" />post</button> */}
                
                </div>
              </div>
            
            </div>
          </div>
          {errorMessage && <p>{errorMessage}</p>}
          <div className="item">
               {fileCount > 0 && <p>{fileCount} {fileCount === 1 ? 'file' : 'files'} selected</p>}
                {/* You can also display the file names if needed */}
                {selectedFiles.map((file, index) => (
                  <p key={index}>{file.name}</p>
                ))}
               </div>
        {/* </form> */}
          
        </div>
      </div>
    </div>
  );
}

export default CreatePost;


