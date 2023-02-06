import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { useEffect } from 'react';



const Navbar = () => {

  const [navbtn,setNavBtn] = useState(true)

  const handleChange = () => {
  setNavBtn(prev => prev = !prev)

  }



  return (
    <div className='flex w-full justify-between p-4 z-30  '>
          <Link to="/">
       <h1 className='text-red-600 text-4xl font-bold z-50'>NETFLIX</h1>
       </Link>
       <div className='text-xl hidden md:block'>
        <Link to="/signin">
        <button className='p-2'>Sign In</button>
       </Link>

       <Link to="/signup">
        <button className='bg-red-700 rounded-xl p-3'>Sign Up</button>
       </Link>
       
       </div>

    
      {/* ///////Mobile page//// */}
      
        
        {!navbtn? <div className= 'text-3xl md:hidden h-screen w-full bg-slate-800/80 z-30 flex flex-col items-center justify-center absolute top-0 left-0 font-bold'>
        <Link to="/signin">
        <button className='p-3 m-2' onClick={handleChange}>Sign In</button>
       </Link>

       <Link to="/signup">
        <button className='bg-red-700 rounded-xl duration-75 p-3 hover:w-60 ease-in-out' onClick={handleChange}>Sign Up</button>
       </Link>
      
       </div> :null}
        
        
        {/* /////////////////// */}

       <div className='md:hidden p-2 cursor-pointer z-50'>
        {navbtn? <GiHamburgerMenu onClick={handleChange} size={25}/> : <ImCross onClick={handleChange} size={25}/> } 
        </div>


    </div>
  )
}

export default Navbar