import React, { useState, useRef } from 'react';
import '../css/dragdrop.css';



const DragDropFile = ({ name, id,selectedFile,setSelectedFile }) => {
  // 
  const fileInputRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    // Handle the file change
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragOver(false);

    const file = event.dataTransfer.files[0];
    setSelectedFile(file);

    // Set file input value
    fileInputRef.current.files = event.dataTransfer.files;
    // Handle the dropped file
  };

  return (
    <div
      className={`drop-zone ${dragOver ? 'drag-over' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}>

      <label htmlFor={id}>File Upload:</label>
      <input type="file" id={id} name={name} ref={fileInputRef} onChange={handleFileInputChange} />
      <p>Drag and drop file here</p>
    </div>
  );
};
export default DragDropFile;