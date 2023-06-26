import React from 'react'
import styles from '../css/navBar.module.css';
import { Link, NavLink } from 'react-router-dom';
export default function NavbarAfterLogin(props) {
  return (
   <>

<header className={styles.header}>
      <h3 className={styles.logo}>
        <Link to="/user"> Hello {props.name}</Link>
      </h3>
      <ul className={styles['main-nav']}>
        <li  >
          <NavLink to="products" className={({ isActive }) => (isActive ? styles['active'] : {})}>products</NavLink>
        </li>
        <li  >
          <NavLink to="orders" className={({ isActive }) => (isActive ? styles['active'] : {})}>orders</NavLink>
        </li>
        <li  >
          <NavLink to="customers" className={({ isActive }) => (isActive ? styles['active'] : {})}>customers</NavLink>
        </li>
        <li  >
          <NavLink to="name" className={({ isActive }) => (isActive ? styles['active'] : {})}>Fetch</NavLink>
        </li>

      </ul>
    </header>
   </>
  )
}



