import React from 'react'

function Footer() {
  return (
   <div className="footer flex-col  bg-[#121212] min-h-[50vh] mt-20 flex justify-center items-start">
       <div className="w-10/12 mx-auto py-4 grid grid-cols-4 md:grid-cols-2 ">
           <div className="block">
<h3 className='font-light my-2 text-base'>Faqs</h3>
<h3 className='font-light my-2 text-base'>Investor Relation</h3>
<h3 className='font-light my-2 text-base'>Privacy</h3>
<h3 className='font-light my-2 text-base'>Speed Test</h3>

           </div>
           <div className="block">
           <h3 className='font-light my-2 text-base'>Help</h3>
<h3 className='font-light my-2 text-base'>Jobs</h3>
<h3 className='font-light my-2 text-base'>Cookie Preference</h3>
<h3 className='font-light my-2 text-base'>Legal Notice</h3>


           </div>
           <div className="block">

           <h3 className='font-light my-2 text-base'>Accounts</h3>
<h3 className='font-light my-2 text-base'>Ways To Watch</h3>
<h3 className='font-light my-2 text-base'>Corporate Information</h3>
<h3 className='font-light my-2 text-base'>Only On Netflix</h3>
           </div>
           <div className="block">
<h3 className='font-light my-2 text-base'>Media Centre</h3>
<h3 className='font-light my-2 text-base'>Terms Of Use</h3>
<h3 className='font-light my-2 text-base'>Contact Us</h3>

           </div>

       </div>
       <div className="w-10/12 block mx-auto">
       <button className=' px-5 border-2 border-white py-2 rounded-md '>
      <i className='align-middle bx bx-world text-xl mx-2'></i>  English
      <i className='align-middle bx bx-caret-down text-xl mx-2'></i>
      </button>
      <p className='my-5'>Netflix India</p>
       </div>
   </div>
  )
}

export default Footer