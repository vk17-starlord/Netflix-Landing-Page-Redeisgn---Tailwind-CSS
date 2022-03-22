import React from 'react'

function GetStarted() {
  return (
    <div className='start w-full min-h-[75vh] md:min-h-[50vh]'>
       <div className="w-full bg-[#000]/70 min-h-[75vh] flex flex-col justify-center items-center">
           <h1 className='md:text-3xl  text-5xl my-5 font-sans font-extrabold text-center'>Unlimited movies,<br/> TV shows and more !!</h1>
           <h3 className='text-2xl font-medium opacity-80 '>Watch anywhere. Cancel anytime.</h3>
           <button className='bg-[#E50914] md:w-4/12 sm:w-6/12 px-5 w-3/12 md:w-6/12 lg:6/12  py-3 flex justify-center my-5 middle'> Get Started</button>

       </div>
    </div>
  )
}

export default GetStarted