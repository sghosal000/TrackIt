import React from 'react'
import { Outlet } from 'react-router-dom'
// import Navbar from './Navbar'
// import Navbar from './Footer'

const Layout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="container py-1">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
