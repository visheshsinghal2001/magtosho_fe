import React, { useState, useRef } from 'react';
import '../css/dragdrop.css';
import myGif2 from '../resources/loading.gif';
import DragDropFile from './DragDropFile';
import Alert from './AlertBox';
import { useOutletContext } from "react-router-dom";
const Products = () => {
  const [data] = useOutletContext();

  const [name, setName] = useState('');
  const [authToken, setAuthToken] = useState('');
  const [key, setKey] = useState('');
  const [storeName, setStoreName] = useState('');
  const [shippingRequired, setShippingRequired] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [message,setMessage]=useState("product Addition failed." );
  const [success,setSuccess]=useState(false)
  const [load,setLoad]=useState(false)
  const handleShipping = (event) => {
    setShippingRequired(event.target.checked);
 }
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoad(true)
    const formData = new FormData();
    const prod="products";
   
    formData.append('name', name);
    formData.append('authKey', authToken);
    formData.append('key', key);
    formData.append('storeName', storeName);
    formData.append('type', prod);
    formData.append('shippingRequired', shippingRequired?"TRUE":"FALSE");
    
    
  
    // Append the selected file, if any
    if (selectedFile) {
      formData.append('file', selectedFile);
    }

    fetch(data.url+'/upload', {
  method: 'POST',
  headers: {
    // 'Content-Type': 'application/json',
    'Authorization': `Bearer ${data.token}`,
  },
  body: formData 
  }).then((response) => {
    if (!response.ok) {
      setLoad(false)
      throw new Error('product Addition failed');
    }
    

      return response.json(); // Parse response as JSON
    
  })
  .then((data) => {
    // Access authorization parameter from the response
    setLoad(false)
    setMessage("successFully Added Record")
    setTimeout(() => {
      setShowAlert(true);
      setSuccess(true)
    }, 0);

    setTimeout(() => {
      setShowAlert(false);
      setSuccess(false)
    }, 1500);
   
  })
  .catch((error) => {
    let errorMessage = error.message;
    setLoad(false)
 

    setMessage(errorMessage)
    setTimeout(() => {
      setShowAlert(true);
    }, 0);

    setTimeout(() => {
      setShowAlert(false);
    }, 1500);

  });
  };
  return (
    <div className="form-container">
      <h1 >Add Products </h1>
 
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-field">
          <label>Name:</label>
          <br />
          <input type="text" value={name} onPaste={(e) => setStoreName(e.target.value)} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Auth Token:</label>
          <br />
          <input type="text" value={authToken} onPaste={(e) => setStoreName(e.target.value)} onChange={(e) => setAuthToken(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Key:</label>
          <br />
          <input type="text" value={key} onPaste={(e) => setStoreName(e.target.value)} onChange={(e) => setKey(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Store Name:</label>
          <br />
          <input type="text" value={storeName} onPaste={(e) => setStoreName(e.target.value)} onChange={(e) => setStoreName(e.target.value)} />
        </div>

        <hr />
        <br />
          <label htmlFor="shippingRequired" className="radio">Products need shipping ?</label>
        <input type="checkbox" value="none" onChange={handleShipping}id="shippingRequired" name="gender" />
        {/* <br /> */}
  
          <hr />
    <br></br>
        <DragDropFile id={1} name={"file"} selectedFile={selectedFile} setSelectedFile={setSelectedFile}/>


        <button type="submit">Submit</button>
      </form>
      <div style={{height:"50px", alignItems: "center",justifyContent: "center",display:(load?"flex":"none")}} >
        <span style={{paddingBottom:"10px"}}>Uploading</span>  
        <img src={myGif2} style={{width:"50px" }} />
</div>
      <Alert message={message} showAlert={showAlert} success={success}/>
    </div>
  );
};

export default Products;
