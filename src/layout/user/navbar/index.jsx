import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
      <div className="container">
        <div className="d-flex">
          <ul className="section d-flex justify-content-center align-items-center">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
              </li>
            <li>
              <Link to={"/product"}>Product</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar