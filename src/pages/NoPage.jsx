import React from 'react'
import Logo from '../assets/Error_Screen.jpg'
// Yup
const NoPage = () => {
  return (
    <div className='bg-black'>


        <h1 className='ovs'>Siden Findes Ikke.</h1>
        <img src={Logo} alt="" className='m-auto'/>
        {/* <Logo></Logo> */}
    </div>
  )
}

export default NoPage