import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import { Outlet } from 'react-router'
import Footer from './footer'

function AdminLayout() {
  return (
    <>
        <Navbar/>
        <Sidebar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default AdminLayout