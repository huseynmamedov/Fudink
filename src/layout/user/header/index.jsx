import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='container'>
        <div className="d-flex align-items-center justify-content-between">
         <img src="https://fudink.myshopify.com/cdn/shop/files/000555_201ee5c1-c2ed-4540-ba3c-5e5823cacb9f_300x300.png?v=1613754519" alt=""  className='logo'/>
          <ul className='menu d-flex'>
            <li>
            <Link to={"/login"}><i class="fa-solid fa-user"></i>Register or Sign in</Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Header