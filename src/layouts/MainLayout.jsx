import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../assets/components/Navbar'

const MainLayout = () => {
  return (
    <>
    <Navbar/>
      <Outlet />
    </>
  )
}

export default MainLayout
