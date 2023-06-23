import React from 'react'
import styles from '../css/navBar.module.css';
import { Link, NavLink } from 'react-router-dom';
export default function NavbarAfterLogin() {
  return (
   <>

<header className={styles.header}>
      <h1 className={styles.logo}>
        <Link to="/user">MagTosho</Link>
      </h1>
      <ul className={styles['main-nav']}>
        <li  >
          <NavLink to="/products" className={({ isActive }) => (isActive ? styles['active'] : {})}>products</NavLink>
        </li>
        <li  >
          <NavLink to="/orders" className={({ isActive }) => (isActive ? styles['active'] : {})}>orders</NavLink>
        </li>
        <li  >
          <NavLink to="/customers" className={({ isActive }) => (isActive ? styles['active'] : {})}>customers</NavLink>
        </li>
       <li> 
        <NavLink to="/about" className={({ isActive }) => (isActive ? styles['active'] : {})}>About</NavLink>
        </li>
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



