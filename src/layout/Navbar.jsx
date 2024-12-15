import React from 'react'
import { NavLink } from 'react-router-dom'
import { LiaHamburgerSolid } from "react-icons/lia";
import { useState } from 'react'

import top from '../assets/resize/title_1_1440x50.jpg'
import middle from '../assets/resize/holonet_main_1440x200.jpg'
import divider from '../assets/resize/subscription_bar_1440x50.jpg'
import divider2 from '../assets/resize/subscription_bar_1440x50_reversed.jpg'
import button from '../assets/resize/Button_200x50.jpg'

const Navbar = () => {
  
    const [showMenu, setShowMenu] = useState(false)
    
  return (
    <nav className='relative text-white '>
      
      <div className='container'>

        <div>
            <img src={top} alt="" />
        </div>

        <div>
            <a href="/"><img src={middle} alt="" /></a>
        </div>

        <div className='mb-2'>
            <img src={divider} alt="" />
        </div>

        <button onClick={ ()=> setShowMenu( !showMenu )} className='mr-2 bg-emerald-500 md:hidden'>
            <LiaHamburgerSolid size="2rem" />
        </button>
    
    <div >
        <menu className={ `m-auto absolute top-0 flex-col md:flex-row md:bg-transparent md:h-auto md:flex md:left-0 md:static h-screen  md:p-0 p-10 ${ showMenu === true ? "left-0" : "-left-full" } transition-all duration-100` }>
            <li>
                <a href="/">
                <div className='relative text-center text-Newsblue hover:text-white'>
                <img src={button} alt="" />
                <div className="w-full absolute bottom-2 left-0 text-center mt-10 ">
                <h2 className="text-3xl font-bold text-center font-outline-2 hover:font-outline-4 buttonfull">
                        Home
                    </h2>
                </div>
                </div>
                </a>
            </li>
            <li>
                <a href="news">
                <div className='relative text-center text-Newsblue hover:text-white'>
                <img src={button} alt="" />
                <div className="w-full absolute bottom-2 left-0 text-center mt-10">
                <h2 className="text-3xl font-bold text-center font-outline-2 hover:font-outline-4">
                        News
                    </h2>
                </div>
                </div>
                </a>
            </li>
            <li>
                <a href="business">
                <div className='relative text-center text-Newsblue hover:text-white'>
                <img src={button} alt="" />
                <div className="w-full absolute bottom-2 left-0 text-center mt-10">
                    <h2 className="text-3xl font-bold text-center font-outline-2 hover:font-outline-4">
                        Business
                    </h2>
                </div>
                </div>
                </a>
            </li>
            <li>
                <a href="regional">
                <div className='relative text-center text-Newsblue hover:text-white'>
                <img src={button} alt="" />
                <div className="w-full absolute bottom-2 left-0 text-center mt-10">
                <h2 className="text-3xl font-bold text-center font-outline-2 hover:font-outline-4">
                        Regional
                    </h2>
                </div>
                </div>
                </a>
            </li>
            <li>
                <a href="jediwatch">
                <div className='relative text-center text-Newsblue hover:text-white'>
                <img src={button} alt="" />
                <div className="w-full absolute bottom-2 left-0 text-center mt-10">
                <h2 className="text-3xl font-bold text-center font-outline-2 hover:font-outline-4">
                        Jedi Watch
                    </h2>
                </div>
                </div>
                </a>
            </li>

            <li>
                <a href="sports">
                <div className='relative text-center text-Newsblue hover:text-white'>
                <img src={button} alt="" />
                <div className="w-full absolute bottom-2 left-0 text-center mt-10">
                <h2 className="text-3xl font-bold text-center font-outline-2 hover:font-outline-4">
                        Sports
                    </h2>
                </div>
                </div>
                </a>
            </li>

            <li>
                <a href="admin">
                <div className='relative text-center text-Newsblue hover:text-white'>
                <img src={button} alt="" />
                <div className="w-full absolute bottom-2 left-0 text-center mt-10">
                <h2 className="text-3xl font-bold text-center font-outline-2 hover:font-outline-4">
                        Admin
                    </h2>
                </div>
                </div>
                </a>
            </li>
            
        </menu>
    </div>    


        <div className='mt-2'>
            <img src={divider2} alt="" />
        </div>

        </div>
    </nav>
  )
}

export default Navbar