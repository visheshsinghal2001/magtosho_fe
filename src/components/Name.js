import React, { useEffect } from 'react';
import { useState } from 'react';
import { saveAs } from 'file-saver';
import Alert from './AlertBox';
import '../css/dragdrop.css';
import { useOutletContext } from "react-router-dom";
export default function Name() {
  const [name, setName] = useState('');
  const [message,setMessage]=useState("error encountered");
  const [showAlert,setShowAlert]=useState(false);

  const [data] = useOutletContext();
  // const data={
  //   url:"hello"
  // }
  const EnError=async (res)=>{
    const data=await res.json();
    setMessage(data.status)
        setTimeout(() => {
          setShowAlert(true);
        }, 0);
  
        setTimeout(() => {
          setShowAlert(false);
        }, 1500);
    console.log(data.status)
    return null
  }
    const handleDownload = () => {
     
      const url=data.url
      fetch(url+'getResponse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name }),
      })
        .then((res) => {
          if (res.headers.get('content-type')?.includes('application/json')) {
            return EnError(res);
          } else {
            return res.blob();
          }
        })
        .then((data) => {
        
            // ZIP file response
            if(data)
            saveAs(data, 'converted.zip'); // Assuming you have the saveAs function available from the file-saver package
      
        })
        .catch((err) => {
          console.log(err.message);
        });
      
      };
      
      // Usage:
      
      return (
        <div className="form-container">
        <h1 style={{width:"100%","text-align":"center"}}>Get File </h1>
        <label>Enter Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleDownload}>Download File</button>
        <Alert message={message} showAlert={showAlert} />
        </div>
  )
}
