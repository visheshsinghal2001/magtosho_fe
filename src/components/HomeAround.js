import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Products from './Products';
import styles from '../css/Home.module.css';
export default function HomeAround() {
  return (
    <>
    <div className={styles["background"]} styles={{width:"100vw",margin:0}}>

    <Navbar/>
 
    <div>
      <Products></Products>
    {/* <Outlet /> */}
    </div>
    </div>
    </>
  )
}
