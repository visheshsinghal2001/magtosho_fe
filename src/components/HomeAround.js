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
      <Products token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTU3LjIzMC4xNC41Mjo5MDg5L2FwaS9sb2dpbiIsImlhdCI6MTY4NzUyMDU0OCwiZXhwIjoxNjg3NTI0MTQ4LCJuYmYiOjE2ODc1MjA1NDgsImp0aSI6ImtwSFZXeFJ2aDRoOWprQWQiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.h9LaFC57XMQs64PT_3HPgXXcxtF6uLG36yFBVJQPrmM"></Products>
    {/* <Outlet /> */}
    </div>
    </div>
    </>
  )
}
