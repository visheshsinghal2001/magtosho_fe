import React from 'react'
import styles from '../css/navBar.module.css';
import { Link, NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
   <>

<header className={styles.header}>
      <h1 className={styles.logo}>
        <a href="#">MagTosho</a>
      </h1>
      <ul className={styles['main-nav']}>
        <li  >
          <NavLink to="/register" className={({ isActive }) => (isActive ? styles['active'] : {})}>register</NavLink>
        </li>
       {/* !-- <li> --> */}
        {/* <NavLink to="/about" className={({ isActive }) => (isActive ? styles['active'] : {})}>About</NavLink> */}
        {/* </li> */}
        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? styles['active'] : {})}>login</NavLink>
        </li>
        {/* <li> */}
          {/* <a href="#">Contact</a> */}
        {/* </li> */}
      </ul>
    </header>
   </>
  )
}



