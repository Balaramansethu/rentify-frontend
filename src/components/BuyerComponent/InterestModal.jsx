import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    border: '1px solid #007BFF',
    borderRadius: '10px',
    padding: '20px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

Modal.setAppElement('#root');

const InterestModal = ({ isOpen, onRequestClose, mobileNumber, errorMessage }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Contact Information"
    >
      <h2 style={{ color: '#007BFF' }}>Contact Information</h2>
      {mobileNumber ? (
        <p>Kindly contact the owner at Mobile Number: <strong>{mobileNumber}</strong></p>
      ) : (
        <p>Error: {errorMessage}</p>
      )}
      <button onClick={onRequestClose} style={{ backgroundColor: '#007BFF', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Close</button>
    </Modal>
  );
};

export default InterestModal;
