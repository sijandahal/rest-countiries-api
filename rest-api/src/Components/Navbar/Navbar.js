import React from 'react';
import { MoonIcon } from '@heroicons/react/solid'


const Navbar = () => {
  return (
    <header className = "bg-white py-5 shadow-md" >
        <nav>
         <div className = "container flex justify-between" >
                    <h2 className = "font-bold text-2xl text-Dark-text">Where in the World</h2>
                   <div className = "right flex item-center ">
                            <span>
                            <MoonIcon className="h-5 w-5 text-blue-500"/>
                            </span>
                            <p className  = "ml-3">
                                Dark Mode
                            </p>
                   </div>
         </div>
        </nav>
    </header>
  )
}

export default Navbar;