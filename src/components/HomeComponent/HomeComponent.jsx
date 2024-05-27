import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomeComponent.css';  

const HomeComponent = () => {
  const [fetched, setFetched] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 10;

  useEffect(() => {
    axios.get('http://localhost:3500/api/v1/seller/get')
      .then((response) => {
        setFetched(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3500/api/v1/seller/delete/${id}`)
      .then((response) => {
        setFetched(fetched.filter(property => property._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Pagination logic
  const lastIndex = currentPage * propertiesPerPage;
  const firstIndex = lastIndex - propertiesPerPage;
  const currentProperties = fetched.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(fetched.length / propertiesPerPage);
  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
    <div className='Card-container'>
      {currentProperties.map((result, index) => (
        <div className='Card-items' key={index}>
          <p>Place : {result.place}</p>
          <p>Area : {result.area}</p>
          <p>BHK : {result.bhk}</p>
          <p>Building Life : {result.buildingLife} years</p>
          <p>Bathroom : {result.bathroom}</p>
          <p>Hospital Nearby : {result.hospitalNearby}</p>
          <p>College Nearby : {result.collegeNearby}</p>
          <button className='delete-btn' style={{backgroundColor:'red', color:'white'}} onClick={() => handleDelete(result._id)}>Delete</button>
        </div>
      ))}

      
    </div>
    <footer>
        <div>
          <ul className='pagination'>
            <p>
              <button onClick={previousPage} disabled={currentPage === 1}>Previous</button>
            </p>
            {pageNumbers.map((number) => (
              <p key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                <button onClick={() => changePage(number)}>{number}</button>
              </p>
            ))}
            <p>
              <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
            </p>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default HomeComponent;
