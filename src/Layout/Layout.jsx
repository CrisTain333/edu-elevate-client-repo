import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer'
const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default Layout
