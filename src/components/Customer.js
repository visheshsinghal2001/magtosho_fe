import React, { useState, useRef } from 'react';
import '../css/dragdrop.css';
import DragDropFile from './DragDropFile';
import { useOutletContext } from "react-router-dom";
const Customer = () => {
  const [data] = useOutletContext();

  //common for all
  const [name, setName] = useState('');
  const [authToken, setAuthToken] = useState('');
  const [key, setKey] = useState('');
  const [storeName, setStoreName] = useState('');
  
  // arguments
  const [email_marketing, setEmail_marketing] = useState('');
  const [tax_exempt, setTax_exempt] = useState('');
  const [sms_marketing, setSms_marketing] = useState('');


  const handleEmailMarketing = (event) => {
    setEmail_marketing(event.target.checked);
 }
  const handleTaxExempt = (event) => {
    setTax_exempt(event.target.checked);
 }
  const handleSMSMarketing = (event) => {
    setSms_marketing(event.target.checked);
 }
 
//file uploads
  const [customer, setCustomer] = useState(null);
  const [address, setAddress] = useState(null);
 
  const handleSubmit = (event) => {
    event.preventDefault();


    const formData = new FormData();
    const prod="customers";
    // Append form data
    formData.append('name', name);
    formData.append('authKey', authToken);
    formData.append('key', key);
    formData.append('storeName', storeName);
    formData.append('type', prod);
    formData.append('email_marketing',email_marketing?"yes":"no");
    formData.append('tax_exempt', tax_exempt?"yes":"no");
    formData.append('sms_marketing', sms_marketing?"yes":"no");
    // Append the selected file, if any
    if (customer) {
      formData.append('customer', customer);
    }
    if (address) {
      formData.append('address', address);
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
      <h1>Add Customers </h1>
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
        <label htmlFor="email_marketing" className="radio">Customer:allows Email Marketing </label>
        <input type="checkbox" value="none" id="email_marketing" name="email_marketing" onChange={handleEmailMarketing}/>
        <br></br>
        <label htmlFor="tax_exempt" className="radio">Customer:allows SMS marketing</label>
        <input type="checkbox" value="none" id="tax_exempt" name="tax_exempt" onChange={handleTaxExempt}/>
        <br></br>
        <label htmlFor="sms_marketing" className="radio">Customer is tex Exempted </label>
        <input type="checkbox" value="none" id="sms_marketing" name="sms_marketing" onChange={handleSMSMarketing}/>
        <br></br>
  
          <hr />
    <br></br>
        <div className="form-field">
          <label>Add customer CSV:</label>
          <DragDropFile id={1} name={"customer"} selectedFile={customer} setSelectedFile={setCustomer}/>
          <br />
        </div>
        <div className="form-field">
          <label>Add order Address CSV:</label>
          <DragDropFile id={1} name={"addressw"} selectedFile={address} setSelectedFile={setAddress}/>
          <br />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Customer;
