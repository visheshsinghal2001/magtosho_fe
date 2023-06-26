import React, { useState, useRef } from 'react';
import myGif2 from '../resources/loading.gif';
import '../css/dragdrop.css';
import DragDropFile from './DragDropFile';
import Alert from './AlertBox';
import { useOutletContext } from "react-router-dom";
const Order = () => {
  const [data] = useOutletContext();
  //common for all
  const [name, setName] = useState('');
  const [authToken, setAuthToken] = useState('');
  const [key, setKey] = useState('');
  const [storeName, setStoreName] = useState('');
  const [load,setLoad]=useState(false)
  
 
//file uploads
  const [address, setAddress] = useState(null);
  const [order, setOrder] = useState(null);
  const [history, setHistory] = useState(null);
  const [shipment, setShipment] = useState(null);
  const [item, setItem] = useState(null);
  const [payment, setPayment] = useState(null);
 
  const [showAlert, setShowAlert] = useState(false);
  const [message,setMessage]=useState("product Addition failed." );
  const [success,setSuccess]=useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoad(true)
    const formData = new FormData();
    const prod="orders";
    // Append form data
    formData.append('name', name);
    formData.append('authKey', authToken);
    formData.append('key', key);
    formData.append('storeName', storeName);
    formData.append('type', prod);
    // Append the selected file, if any
   
    if (address) {
      formData.append('Orders', order);
    }
    if (address) {
      formData.append('OrderHistory', history);
    }
    if (address) {
      formData.append('OrderItems', item);
    }
    if (address) {
      formData.append('OrderShipment', shipment);
    }
    if (address) {
      formData.append('OrderPayments', payment);
    }
    if (address) {
      formData.append('OrderAddress', address);
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
      throw new Error('Order Addition failed');
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
      <h1>Add Order </h1>
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
   
   
        <div className="form-field">
          <label>Add order CSV:</label>
          <DragDropFile id={1} name={"Orders"} selectedFile={order} setSelectedFile={setOrder}/>
          <br />
        </div>
        <div className="form-field">
          <label>Add order History CSV:</label>
          <DragDropFile id={2} name={"OrderHistory"} selectedFile={history} setSelectedFile={setHistory}/>
          <br />
        </div>
        <div className="form-field">
          <label>Add order item CSV:</label>
          <DragDropFile id={3} name={"OrderItems"} selectedFile={item} setSelectedFile={setItem}/>
          <br />
        </div>
        <div className="form-field">
          <label>Add order shipment CSV:</label>
          <DragDropFile id={4} name={"OrderShipment"} selectedFile={shipment} setSelectedFile={setShipment}/>
          <br />
        </div>
        <div className="form-field">
          <label>Add order payment CSV:</label>
          <DragDropFile id={5} name={"OrderPayments"} selectedFile={payment} setSelectedFile={setPayment}/>
          <br />
        </div>
        <div className="form-field">
          <label>Add address CSV:</label>
          <DragDropFile id={6} name={"OrderAddress"} selectedFile={address} setSelectedFile={setAddress}/>
          <br />
        </div>
        <div>

        </div>
        <button type="submit" disabled={load}>Submit</button>
      </form>

  <div style={{height:"50px", alignItems: "center",justifyContent: "center",display:(load?"flex":"none")}} >
        <span style={{paddingBottom:"10px"}}>Uploading</span>  
        <img src={myGif2} style={{width:"50px" }} />

</div>
      <Alert message={message} showAlert={showAlert} success={success}/>
    </div>
  );
};

export default Order;
