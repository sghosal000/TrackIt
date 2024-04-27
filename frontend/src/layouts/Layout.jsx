import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = (loggedin) => {
  return (
    <div>
      <Navbar loggedin={loggedin}/>
      <div className="container py-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
