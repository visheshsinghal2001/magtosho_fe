import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import '../css/Accordion.css';

const Accordion = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);

  };

 
  const EnError=async (res)=>{
    const data=await res.json();
      console.log(data.status)
    return null
  }
    const handleDownload = (names) => {
     
      const url=process.env.REACT_APP_URL
      fetch(url+'/getResponse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: names }),
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
      
      return (
        <div className={`accordion ${expanded ? 'expanded' : ''}`}>
          <div className="accordion-header" onClick={toggleAccordion}>
            <h3>{title}</h3>
          </div>
          <div className="accordion-content-container">
            {content.map((item, index) => (
              <div className={`accordion-content ${expanded ? 'show' : ''}`} key={index}>
                <div>{item.name}</div>
                {item.task_completed ? (
                  <div className="accordion-buttons">
                    <button
                      className="download-button"
                      onClick={() => handleDownload(item.name)}
                    >
                      Download
                    </button>
                  </div>
                ) : (
                  <div className="processing-tag">Processing</div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
};

Accordion.defaultProps = {
  title: 'Accordion Title',
  content: [
    {
      name: 'vishesh',
      task_completed: false,
    },
    {
      name: 'check2',
      task_completed: true,
    },
    {
      name: 'gogetter',
      task_completed: false,
    },
  ],
};

export default Accordion;
