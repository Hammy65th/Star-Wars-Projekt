import { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import Error from '../components/Error'


import React from 'react'


import useRequestData from '../hooks/useRequestData'


const Home = () => {
  

  const { makeRequest, isLoading, data, error } = useRequestData();

  useEffect(() => {
    makeRequest("http://127.0.0.1:8090/api/collections/homepage/records")
  }, [])

  return (
  <div className='container'>

  {isLoading && <Loader/>}
 
  {error && <Error/>}
      
  {data && 
  
  data.items.sort(function(){return 0.5 - Math.random()}).slice(0,1).map(t =>

  <div className='mt-3 text-black bg-white border-2 rounded-lg border-Newsblue' key={t.id}>
    <h1 className='pt-2 text-3xl font-bold'>News in the Republic!</h1>
    
    <section className='p-10'>
    <h2 className='p-2 text-2xl font-bold'>{t.header}</h2>
    <p className='p-2 italic font-semibold'>{t.toptext}</p>
    <p className='mt-3'>{t.text}</p>
    <p className='mt-3'>{t.text2}</p>
    <p className='mt-3'>{t.imagetext}</p>
    </section>
    
    <p className='pb-5'><a className='text-2xl font-bold' href="news">More News</a></p>
  </div>

  

  )
  }
    


  </div>


)



}

export default Home