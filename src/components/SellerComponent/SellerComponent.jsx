import React, { useState } from 'react';
import axios from 'axios';
import './SellerComponent.css';

const SellerComponent = () => {
  const [place, setPlace] = useState("");
  const [area, setArea] = useState("");
  const [bhk, setBhk] = useState("");
  const [buildingLife, setBuildingLife] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [hospitalNearby, setHospitalNearby] = useState("");
  const [collegeNearby, setCollegeNearby] = useState("");
  const [mobile, setMobile] = useState('')
  const [responseData, setResponseData] = useState([]);
  const [houseDetails, setHouseDetails] = useState([]);

  const handleInputDetails = async (event) => {
    event.preventDefault();
    const newHouseDetails = { place, area, bhk, buildingLife, bathroom, hospitalNearby, collegeNearby, mobile };
    setHouseDetails([...houseDetails, newHouseDetails]);

    try {
      const response = await axios.post("http://localhost:3500/api/v1/seller/new", newHouseDetails);
      setResponseData(response.data.data);  
      alert('added property checkout');
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleInputDetails}>
      
        <label>
          Enter your place:{" "}
          <input
            type="text" 
            placeholder="place"
            value={place}
            onChange={(event) => setPlace(event.target.value)}
            pattern="^[A-Za-z\s]+$"
            title="Place should contain only letters and spaces."
            required
          />
        </label>
        <label>
          Enter surface area:{" "}
          <input
            type="text"
            placeholder="eg. (10sqft)"
            value={area}
            onChange={(event) => setArea(event.target.value)}
            pattern="^\d+sqft$"
            title="Area should be a number followed by 'sqft' (e.g., 10sqft)."
            required
          />
        </label>
        <label>
          Enter your BHK type:{" "}
          <input
            type="text"
            placeholder="bhk"
            value={bhk}
            onChange={(event) => setBhk(event.target.value)}
            pattern="^\d*[bB][hH][kK]$"
            title="BHK type should be in the format '1BHK', '2BHK', etc."
            required
          />
        </label>
        <label>
          Building Life:{" "}
          <input
            type="text"
            value={buildingLife}
            onChange={(event) => setBuildingLife(event.target.value)}
            pattern="^\d+$"
            title="Building life should be a number in years."
            required
          />
        </label>
        <label>
          Number of bathrooms:{" "}
          <input
            type="text"
            value={bathroom}
            onChange={(event) => setBathroom(event.target.value)}
            pattern="^\d+$"
            title="Number of bathrooms should be a number."
            required
          />
        </label>
        <label>
          Any hospital available nearby:{" "}
          <input
            type="text"
            value={hospitalNearby}
            onChange={(event) => setHospitalNearby(event.target.value)}
            pattern="^(Yes|No|yes|no|YES|NO)$"
            title="Should be 'Yes' or 'No'."
            required
          />
        </label>
        <label>
          Any college available nearby:{" "}
          <input
            type="text"
            value={collegeNearby}
            onChange={(event) => setCollegeNearby(event.target.value)}
            pattern="^(Yes|No|yes|no|YES|NO)$"
            title="Should be 'Yes' or 'No'."
            required
          />
        </label>
        <label>
          Enter your mobile number{" "}
          <input
            type="text"
            value={mobile}
            onChange={(event) => setMobile(event.target.value)}
            pattern="^[1-9]\d{9}$"
            title="Should be valid mobile number"
            required
          />
        </label>
        <button  type="submit">Add Details</button>
      </form>
    </div>
  );
};

export default SellerComponent;
