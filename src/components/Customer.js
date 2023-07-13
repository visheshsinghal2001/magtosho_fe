import React, { useState, useRef ,useEffect} from 'react';
import '../css/dragdrop.css';
import myGif2 from '../resources/loading.gif';
import DragDropFile from './DragDropFile';
import Alert from './AlertBox';
import { useOutletContext } from "react-router-dom";
const Customer = () => {
  const [data] = useOutletContext();

  //common for all
  const [name, setName] = useState('');
  const [authToken, setAuthToken] = useState('');
  const [key, setKey] = useState('');
  const [storeName, setStoreName] = useState('');
  const [load, setLoad] = useState(false);
  const nameField=useRef(null)
  const authTokenField=useRef(null)
  const keyField=useRef(null)
  const storeNameField=useRef(null)
  useEffect(() => {
    let interval = setInterval(() => {
     
      if (nameField.current) {
        setName(nameField.current.value)
        clearInterval(interval)
      }
      if (authTokenField.current) {
        setAuthToken(authTokenField.current.value)
        clearInterval(interval)
      }
      if (keyField.current) {
        setKey(keyField.current.value)
        clearInterval(interval)
      }
      if (storeNameField.current) {
        setStoreName(storeNameField.current.value)
        clearInterval(interval)
      }
   
    }, 100)
  })

  // arguments
  const [email_marketing, setEmail_marketing] = useState(false);
  const [tax_exempt, setTax_exempt] = useState(false);
  const [sms_marketing, setSms_marketing] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [message,setMessage]=useState("product Addition failed." );
  const [success,setSuccess]=useState(false)

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
    setLoad(true)

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
  }).then((response) => {
    if (!response.ok) {
      setLoad(false)
      throw new Error('Customer Addition failed');
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
    setLoad(false)
    let errorMessage = error.message;

 

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
      <h1>Add Customers </h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-field">
          <label>Name:</label>
          <br />
          <input ref={nameField} type="text" value={name} onPaste={(e) => setStoreName(e.target.value)} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Auth Token:</label>
          <br />
          <input ref={authTokenField} type="text" value={authToken} onPaste={(e) => setStoreName(e.target.value)} onChange={(e) => setAuthToken(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Key:</label>
          <br />
          <input ref={keyField} type="text" value={key} onPaste={(e) => setStoreName(e.target.value)} onChange={(e) => setKey(e.target.value)} />
        </div>
        <div className="form-field">
          <label>Store Name:</label>
          <br />
          <input ref={storeNameField} type="text" value={storeName} onPaste={(e) => setStoreName(e.target.value)} onChange={(e) => setStoreName(e.target.value)} />
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

export default Customer;
