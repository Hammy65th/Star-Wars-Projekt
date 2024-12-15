import { useState } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import './App.css'

import Home from './pages/Home'
import News from './pages/News'
import Business from './pages/Business'
import JediWatch from "./pages/JediWatch"
import Regional from "./pages/Regional"
import Sports from "./pages/Sports"

import NoPage from './pages/NoPage'
import Layout from './layout/Layout'


import LayoutAdmin from './layout/admin/LayoutAdmin'
import HomeAdmin from './pages/admin/HomeAdmin'



function App() {

  const router = createBrowserRouter( 
    [ 

      {
        path: "/", element: <Layout />,
        errorElement: <NoPage/>,
        children: [

          { 
            index: true, element: <Home />
          },
          { 
            path: "/news", element: <News />
          },
          { 
            path: "/business", element: <Business />
          },
          { 
            path: "/jediwatch", element: <JediWatch />
          },
          { 
            path: "/regional", element: <Regional />
          },
          { 
            path: "/sports", element: <Sports />
          },

          
          
          // Not found
          { 
            path: "*", element: <NoPage />
          },

        ]
      },
      {
        // path: "/admin", 
        element: <LayoutAdmin />,
        errorElement: <NoPage/>,
        children: [
          { 
            path: "/admin", element: <HomeAdmin/>
          }
        ]
      }
      

    
    ]
)

  return (
    <>
      <section className="container mx-auto border border-black">

          <RouterProvider router={router} />

      </section>

      {/* <Home></Home>

      <Contact></Contact>
      <Newspage></Newspage>
      <About></About> */}
    </>
  );
}

export default App;
