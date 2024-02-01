import React from 'react'
import { Outlet, Link } from "react-router-dom";


function Header() {
  return (
    <>
      <nav>
        <p>
            <Link to="/" style={{padding: 20}}>Home </Link> <Link to="/hello" style={{padding: 20}}>Hello</Link>
            <Link to="/dashboard" style={{padding: 20}}>Dashboard</Link>
            <Link to="/products" style={{padding: 20}}>Products</Link>
        </p>
      </nav>

      {/* <Outlet /> */}
    </>
  )
}


export default Header