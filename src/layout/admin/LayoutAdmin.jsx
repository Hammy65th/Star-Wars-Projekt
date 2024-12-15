import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNav from './AdminNav'

const LayoutAdmin = () => {
  return (
    <section className="container p-4 mx-auto">
        {/* header rummer også Navbar */}
      <div className="flex">
        <AdminNav />

        <main className="container px-2 m-5">
            <Outlet />
        </main>
      </div>
    </section>
  )
}

export default LayoutAdmin