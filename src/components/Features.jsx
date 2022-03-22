import React from 'react'
import download from './assets/download.svg' 
import device from './assets/device.svg' 

function Features() {
  return (
    <div  className='feature md:grid-cols-1  md:my-10 grid grid-cols-3 w-10/12 mx-auto '>
       <div className="col  my-20 md:my-2 p-3">
           <div className="icon px-4 w-max py-5 rounded-full bg-[#E50914]">
                      <img src={download} alt="" className='w-10/12 mx-auto' />
           </div>
           <h1 className='text-2xl my-2 font-bold'>Download your shows to watch offline.</h1>
           <p className='text-slate-300 font-light text-lg'>Save your favourites easily and always have something to watch.</p>
       </div>
       <div className="col  my-20 md:my-2 p-3">
           <div className="icon px-4 w-max py-5 rounded-full bg-[#E50914]">
                      <img src={device} alt="" className='w-10/12 mx-auto' />
           </div>
           <h1 className='text-2xl my-2 font-bold'>Watch everywhere and
Anytime</h1>
           <p className='text-slate-300 font-light text-lg'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
       </div>
       <div className="col  my-20 md:my-2 p-3">
           <div className="icon px-4 w-max py-5 rounded-full bg-[#E50914]">
                      <img src={device} alt="" className='w-10/12 max-w-[40px] mx-auto' />
           </div>
           <h1 className='text-2xl my-2 font-bold'>Create profiles for  your canvasren.</h1>
           <p className='text-slate-300 font-light text-lg'>Send canvasren on adventures with their favourite just for them</p>
       </div>

    </div>
  )
}

export default Features