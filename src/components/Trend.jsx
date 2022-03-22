import React from 'react';
import Banner from '../banner.png';
import series from '../series.png';
function Trend() {
  return (
    <div className='trend  w-full min-h-screen md:min-h-auto'>
      <div className="container bg-[#000]/50   mx-auto w-full px-[7.5%] md:px-7 grid grid-cols-2 md:grid-cols-1 ">
                 <div className="py-10 col-1 min-h-screen md:min-h-auto ">
                   <h2 className='text-xl font-semibold font-sans'>Thriller  | Horrror | Teen Program</h2>
                   <h1 className='text-4xl my-5 font-sans font-bold'>Stranger Things</h1>
                   <h3 className='text-base font-sans font-semibold'>2019 | DIRECTOR :
                   <span className='font-sans font-regular text-slate-400 mx-2'> The Duffer Brothers </span> 
                   SEASONS : <span className='font-sans font-regular text-slate-400 mx-2'>3 ( 25 Episodes)</span>

                   <p className='text-base font-sans font-light text-slate-100 w-9/12 my-4'>In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.</p>
                   </h3>
                   <div className="b-container flex w-9/12 md:w-full md:flex-col ">
                   <button className='bg-[#E50914] px-5 md:w-8/12 w-6/12 mr-5 py-3 flex justify-center my-5 middle'> Watch Episode</button>
                   <button className='border-2 border-white md:w-8/12 px-5 w-6/12  py-3 flex justify-center my-5 middle'> Season 1</button>
                  </div> 
                  <h2 className='text-2xl font-sans font-bold my-5 '>Popular This Week</h2>
                  <img src={series} className='mt-10 w-8/12' alt="txt" />

                 </div>
                 <div className="col-1 md:min-h-auto flex flex-col justify-end items-center min-h-auto ">
                   <img src={Banner} className='w-11/12' alt="txt" />
                 </div>

      </div>
    </div>
  )
}

export default Trend