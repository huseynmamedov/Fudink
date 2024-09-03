import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router'
import Footer from './footer'
import Header from './header'

function UserLayout() {
  return (
    <>
        <header>
          <Header/>
        </header>
        <nav className='d-flex justify-content-center align-items-center'>
        <Navbar/>
        </nav>
        <main>
        <Outlet/>
        </main>
        <footer>
        <Footer/>
        </footer>
    </>
  )
}

export default UserLayout