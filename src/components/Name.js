import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { saveAs } from 'file-saver';
import Alert from './AlertBox';
import myGif2 from '../resources/loading.gif';
import Accordion from './Accordion';
import '../css/dragdrop.css';
import { useOutletContext } from "react-router-dom";
export default function Name() {
  const [data] = useOutletContext();
  const [data2, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const url=data.url+"/getStoreDetails";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        });
        const json = await response.json();
        setData(Object.entries(json));
        setLoading(false);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available.</div>;
  }
      return (
        <>
        <div className="name-area">
        <h1 >Add Products </h1>
          {/* {console.log(data)} */}
      {data2.map(([key, value]) => (
        <Accordion key={key} title={key} content={value} />
        ))}
    </div>
        </>
  )
}
