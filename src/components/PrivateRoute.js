import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
//   return 
    
        if(!localStorage.getItem('dataForAuth')) 
         return <Navigate to="/login" replace={true} /> // Redirect to login page if not authenticated
        // return children;
        else {
            return children;
        }
 
  
};

export default PrivateRoute;
