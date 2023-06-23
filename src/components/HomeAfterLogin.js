import React from 'react'
import NavbarAfterLogin from "./NavbarAfterLogin"
import { Outlet } from 'react-router-dom'
export default function HomeAfterLogin() {
  return (
    <div>
      <NavbarAfterLogin name={props.data.user.name} token={props.data.authorisation.token}/>
      <Outlet context={[props.data.authorisation.token]}/>
      

    </div>
  )
}
