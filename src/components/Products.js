import React, { useState, useRef } from 'react';
import '../css/dragdrop.css';
import DragDropFile from './DragDropFile';

const Products = () => {
  const [name, setName] = useState('');
  const [authToken, setAuthToken] = useState('');
  const [key, setKey] = useState('');
  const [storeName, setStoreName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission or data processing here
    // You can access the form values in the state variables (name, authToken, key, storeName)

    // Reset form fields
    setName('');
    setAuthToken('');
    setKey('');
    setStoreName('');
    console.log(JSON.stringify())
    // Reset file input
  }

  return (
    <div className="form-container">
      <h2>DragDropFile</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-field">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Auth Token:</label>
          <input type="text" value={authToken} onChange={(e) => setAuthToken(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Key:</label>
          <input type="text" value={key} onChange={(e) => setKey(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Store Name:</label>
          <input type="text" value={storeName} onChange={(e) => setStoreName(e.target.value)} />
        </div>

        <DragDropFile id={1} name={"file"}/>
   
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Products;
