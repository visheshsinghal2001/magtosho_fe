import React, { useState, useRef } from 'react';
import '../css/dragdrop.css';
import DragDropFile from './DragDropFile';
import { useOutletContext } from "react-router-dom";
const Order = () => {
  const [data] = useOutletContext();
  //common for all
  const [name, setName] = useState('');
  const [authToken, setAuthToken] = useState('');
  const [key, setKey] = useState('');
  const [storeName, setStoreName] = useState('');
  
 
//file uploads
  const [address, setAddress] = useState(null);
  const [order, setOrder] = useState(null);
  const [history, setHistory] = useState(null);
  const [shipment, setShipment] = useState(null);
  const [item, setItem] = useState(null);
  const [payment, setPayment] = useState(null);
 
  const handleSubmit = (event) => {
    event.preventDefault();


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
  }).then((response)=>{

  }).catch((error)=>{
 
  });
  };
  return (
    <div className="form-container">
      <h1>Add Order </h1>
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
  
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Order;
