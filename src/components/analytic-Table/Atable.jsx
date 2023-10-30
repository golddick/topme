import React, { useState } from 'react';
import './atable.scss';
import {IoIosArrowForward} from 'react-icons/io'
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkbox from '@mui/material/Checkbox';

function Atable() {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [checkedItems, setCheckedItems] = useState({});

  const data = [
    {
      title: 'Help build a legacy',
      status: 'featured post',
      dateCreated: '19/04/2023',
      dueDate: '23/04/2023',
      location: 'lagos',
      donationExpected: '$10,000',
      donationReceived: '$25,000',
      receivingOrganization: 'kings college',
    },
    {
      title: 'Help build a school for your state and become a boss',
      status: 'Ongoing',
      dateCreated: '19/04/2023',
      dueDate: '23/04/2023',
      location: 'lagos',
      donationExpected: '$10,000',
      donationReceived: '$25,000',
      receivingOrganization: 'kings college lagos',
    },
    {
      title: 'Help build a legacy',
      status: 'Completed',
      dateCreated: '19/04/2023',
      dueDate: '23/04/2023',
      location: 'lagos',
      donationExpected: '$10,000',
      donationReceived: '$25,000',
      receivingOrganization: 'kings college',
    },
  ];

  const handleCheckboxChange = (event, index) => {
    setCheckedItems({ ...checkedItems, [index]: event.target.checked });
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr> 
          <th scope="col"></th>
          <th scope="col" className='TableHeaderText'>title</th>
          <th scope="col" className='TableHeaderText'>status</th>
          <th scope="col" className='TableHeaderText'>date created</th>
          <th scope="col" className='TableHeaderText'>due date</th>
          <th scope="col" className='TableHeaderText'>location</th>
          <th scope="col" className='TableHeaderText'>donation expected</th>
          <th scope="col" className='TableHeaderText'>donation received</th>
          <th scope="col" className='TableHeaderText'>receiving organisation</th>
          <th scope="col"></th> 
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>
            <Checkbox {...label} className="checkbox"/>
            </td>
           {/* <div className="tbBox"> <td className='tb'>{item.title}</td></div> */}
           <td className='tb' style={{ height:'100%'}}>{item.title}</td>
        <td>
              <div className={`status-${item.status.toLowerCase().replace(' ', '-')}`}>{item.status}</div>
            </td>
            <td className='tb'>{item.dateCreated}</td>
            <td className='tb'>{item.dueDate}</td>
            <td className='tb'>{item.location}</td>
            <td className='tb'>{item.donationExpected}</td>
            <td className='tb'>{item.donationReceived}</td>
            <td className='tb'> {item.receivingOrganization}</td>
            <td className='tb'>
              <div className='btn'>View More <IoIosArrowForward/></div>
            </td>
            {/* <td>dd</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Atable;
