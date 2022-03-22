import React from 'react'
import hero from './assets/Hero.png'
function Hero() {
  return (
    <div className=' min-h-[100vh]    grid grid-cols-2 md:grid-cols-1 md:py-10'>
      <div className="col flex justify-center flex-col">
        <h1 className='font-sans font-bold md:text-3xl  text-5xl mb-5'>WHAT BEST EXCLUSIVE MOVIES , TV SERIES AND TV SHOWS </h1>
        <p className='w-8/12 text-xl font-light md:w-11/12 md:text-xm text-slate-200'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        <button className='bg-[#E50914] px-5 w-4/12 md:w-6/12 lg:6/12  py-3 flex justify-center my-5 middle'> Get Started</button>
      </div>
      <div className="col   flex justify-center flex-col">
        <img src={hero} className="w-full" alt="" />
      </div>

    </div>
  )
}

export default Hero