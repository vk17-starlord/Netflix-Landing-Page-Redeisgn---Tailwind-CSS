import React from 'react'
import logo from './assets/logo.png';
function Header({Toggle}) {

  return (
    <div className="Header py-5 flex justify-between">
      <img src={logo}  alt="" />
      <div className='md:hidden sm:hidden'>
      <button className=' px-5 border-2 border-white mx-5 py-2 rounded-md '>
      <i className='align-middle bx bx-world text-xl mx-2'></i>  English
      <i className='align-middle bx bx-caret-down text-xl mx-2'></i>
      </button>

<button className='bg-[#E50914] px-5  mx-5 py-3 rounded-md '>Sign In</button>
      </div>
      <button className='hidden md:block' onClick={()=>{
        Toggle()
      }}>
      <i className='bx bx-menu-alt-right text-4xl'></i>
      </button>
     </div>
  )
}

export default Header