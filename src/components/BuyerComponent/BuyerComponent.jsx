import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InterestModal from './InterestModal';
import '../BuyerComponent/BuyerComponent.css';

const BuyerComponent = () => {
  const [place, setPlace] = useState('');
  const [responseData, setResponseData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    setPlace(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3500/api/v1/buyer/buyerRoute', { place });
      setResponseData(response.data);
    } catch (error) {
      console.error('Error fetching data', error);
      alert(`Error: ${error.response?.status} - ${error.response?.data?.message}`);
    }
  };

  const handleInterestClick = async (_id) => {
    try {
      const response = await axios.post('http://localhost:3500/api/v1/buyer/buyerInterest', { _id });
      setMobileNumber(response.data.mobile);
      setErrorMessage('');
    } catch (error) {
      console.error('Error fetching mobile number', error);
      setErrorMessage(error.response?.data?.ErrorMessage || 'An unexpected error occurred');
      setMobileNumber('');
    } finally {
      setIsModalOpen(true);
    }
  };


  return (
    <div className='container'>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter place"
          pattern="^[A-Za-z\s]+$"
          value={place}
          onChange={handleInputChange}
          title="Place should contain only letters and spaces."
          required
        />
        <button type="submit">Search</button>
      </form>

      

      <div className="Card-container">
        {
          responseData.map((item, index) => (
            <div key={index} className="Card-items">
              <p>Place: {item.place}</p>
              <p>BHK: {item.bhk}</p>
              <p>Area: {item.area}</p>
              <p>Building Life: {item.buildingLife}</p>
              <p>Bathrooms: {item.bathroom}</p>
              <p>Hospital Nearby: {item.hospitalNearby}</p>
              <p>College Nearby: {item.collegeNearby}</p>
              <button className='intersted-btn' onClick={() => handleInterestClick(item._id)}>I'm Interested</button>
            </div>
          ))
        }
      </div>

      <InterestModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        mobileNumber={mobileNumber}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default BuyerComponent;
