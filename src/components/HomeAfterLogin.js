import React from 'react'
import NavbarAfterLogin from "./NavbarAfterLogin"
import { Outlet } from 'react-router-dom'
import styles from '../css/Home.module.css';
import {  Navigate } from 'react-router-dom';
export default function HomeAfterLogin(props) {

  const datas = JSON.parse(localStorage.getItem('dataForAuth'));
  const data={
    token:datas.authorisation.token,
    url:process.env.REACT_APP_URL
  }
  console.log(data)

  return (
    datas &&
    <div className={styles["background"]} styles={{width:"100vw",margin:0}}>
      <NavbarAfterLogin name={datas.user.name} token={datas.authorisation.token}/>
     
      <Outlet context={[data]}/>
      

    </div>
  )
}
