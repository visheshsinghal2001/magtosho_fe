import React, { useState, useRef } from 'react';
import '../css/dragdrop.css';
import DragDropFile from './DragDropFile';
import { useOutletContext } from "react-router-dom";
const Products = () => {
  const [token] = useOutletContext();

  const [name, setName] = useState('');
  const [authToken, setAuthToken] = useState('');
  const [key, setKey] = useState('');
  const [storeName, setStoreName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
 
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission or data processing here
    // You can access the form values in the state variables (name, authToken, key, storeName)

    // Reset form fields
    const formData = new FormData();
    const prod="products";
    // Append form data
    formData.append('name', name);
    formData.append('authKey', authToken);
    formData.append('key', key);
    formData.append('storeName', storeName);
    formData.append('type', prod);
    formData.append('shippingRequired', "FALSE");
    
    
  
    // Append the selected file, if any
    if (selectedFile) {
      formData.append('file', selectedFile);
    }

    fetch('http://157.230.14.52:9089/api/upload', {
  method: 'POST',
  headers: {
    // 'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
  body: formData 
  }).then((response)=>{
    console.log(response)
  }).catch((error)=>{
    console.log(error)
  });
  };
  return (
    <div className="form-container">
      <h2>Products </h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-field">
          <label>Name:</label>
          <br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Auth Token:</label>
          <br />
          <input type="text" value={authToken} onChange={(e) => setAuthToken(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Key:</label>
          <br />
          <input type="text" value={key} onChange={(e) => setKey(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Store Name:</label>
          <br />
          <input type="text" value={storeName} onChange={(e) => setStoreName(e.target.value)} />
        </div>

        <hr />
        <br />
          <label for="shippingRequired" class="radio">Products need shipping ?</label>
        <input type="checkbox" value="none" id="shippingRequired" name="gender" />
        {/* <br /> */}
  
          <hr />
    <br></br>
        <DragDropFile id={1} name={"file"} selectedFile={selectedFile} setSelectedFile={setSelectedFile}/>


        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Products;
