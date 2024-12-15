import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminNav = () => {
  return (
    <nav>
        <menu>
            <li>
                <NavLink to="admin">Admin Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/">Home (public)</NavLink>
            </li>
        </menu>
    </nav>
  )
}

export default AdminNav