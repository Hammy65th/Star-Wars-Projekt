import React from 'react'
import { useEffect, useState } from 'react'
import Error from '../components/Error'
import Loader from '../components/Loader'

import useRequestData from '../hooks/useRequestData'

import divider from '../assets/resize/subscription_bar_1440x50_reversed.jpg'
import divider2 from '../assets/resize/subscription_bar_1440x50.jpg'

// const Footer = () => {
//   return (
//   <div className='container '>
//     <img src={divider} alt="" />

//     <div className='border-x-2 border-Newsblue flex bg-Newsblue p-2'>
//     <img className='m-auto' src={ad} alt="" />
    
//     <img className='m-auto' src={ad2} alt="" />
//     </div>

//     <img src={divider2} alt="" />
//   </div>
//   )
// }

// export default Footer

const Footer = () => {
 
  const {makeRequest, isLoading, data, error} = useRequestData()
 
  useEffect(() => {
    makeRequest('http://127.0.0.1:8090/api/collections/ads/records')
  }, [])

  return (
  <div className='container '>
    
   {isLoading && <Loader/>}
   
   {error && <Error/>}
   <img className='m-auto' src={divider} alt="" />
  <div className='flex border-x-2 border-Newsblue bg-Newsblue p-2 justify-around'>

   {data && 
   
   data.items.sort(function(){return 0.5 - Math.random()}).slice(0,2).map(t =>
  
   

    <div className='border-x-2 border-Newsblue flex bg-Newsblue p-2' key={t.id}>
    <img className='m-auto' src={'http://127.0.0.1:8090/api/files/ads/'+ t.id + '/' + t.image} alt="" />
     {/* /api/files/collectionIdOrName/recordId/filename */}
    {/* <img className='m-auto' src={t.image} alt="" /> */}
    </div>

   
  )
   
   }
   
  </div>
    <img className='m-auto' src={divider2} alt="" />
  </div>
  )
}

export default Footer