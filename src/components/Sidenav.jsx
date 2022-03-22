import React from 'react'

function Sidenav({Toggle}) {
  return (
    <div className='flex transition ease-in-out delay-150 justify-center flex-col  fixed top-0 right-0 bg-[#E50914] px-5 w-[90vw] h-full '>
      <button onClick={()=>{
          Toggle()
      }} className='bg-rose-500 w-max px-2 py-1  absolute top-4 right-9 rounded-full '>
      <i class='bx bx-x text-xl '></i>
      </button>
      <button className='border-slate-50 px-2 my-5 mx-5 py-2 rounded-md border-2'>
      <i className='align-middle bx bx-world text-xl mx-2'></i>  English
      <i className='align-middle bx bx-caret-down text-xl mx-2'></i>
      </button>

<button className='bg-black px-5  my-2 mx-5 py-3 rounded-md '>Sign In</button>
    </div>
  )
}

export default Sidenav;