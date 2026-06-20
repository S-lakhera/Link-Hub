import React from 'react'
import { Outlet } from 'react-router'

const DashBoardLayout = () => {
  return (
    <div>
      Dashboard 
      <Outlet/>
    </div>
  )
}

export default DashBoardLayout
