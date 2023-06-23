import React, { useState, useRef } from 'react';
import '../css/dragdrop.css';

const DragDropFile = () => {
  const [name, setName] = useState('');
  const [authToken, setAuthToken] = useState('');
  const [key, setKey] = useState('');
  const [storeName, setStoreName] = useState('');
  const fileInputRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission or data processing here
    // You can access the form values in the state variables (name, authToken, key, storeName)

    // Reset form fields
    setName('');
    setAuthToken('');
    setKey('');
    setStoreName('');

    // Reset file input
    fileInputRef.current.value = null;
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragOver(false);

    const file = event.dataTransfer.files[0];
    setSelectedFile(file);

    // Set file input value
    fileInputRef.current.files = event.dataTransfer.files;
  };

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
        <div
          className={`form-field drop-zone ${dragOver ? 'drag-over' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <label>File Upload:</label>
          <input type="file" ref={fileInputRef} onChange={handleFileInputChange} />
          <p>Drag and drop file here</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DragDropFile;
