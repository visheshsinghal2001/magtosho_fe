import React from 'react'
import { saveAs } from 'file-saver';
export default function Name() {
    const handleDownload = () => {
    
        fetch('http://157.230.14.52:9089/api/getResponse', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name:"customer_tral"}),
        })
        .then(res => res.blob())
                    .then(blob => saveAs(blob, 'Auto Photos.zip')) // saveAs is a function from the file-saver package. 
              .catch((err) => {
                console.log(err.message);
              });
      };
      
      // Usage:
      
      return (
          <div>
        <button onClick={handleDownload}>Download File</button>
      
    </div>
  )
}
