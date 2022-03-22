import React from 'react'
import phone from './assets/phone.svg';
import tablet from './assets/tablet.svg';
import laptop from './assets/laptop.svg';
import Tv from './assets/phone.svg';

function Pricing() {
  return (
    <div className='pricing w-10/12 py-10 mx-auto '>
    <div className="px-4 md:px-1 py-2 w-full bg-[#181818BF] mx-auto rounded-md  grid grid-cols-5 ">
      <div className="col md:w-full  flex justify-center items-center my-2">
        <h3 className='sm:text-xs text-left w-full font-semibold text-lg sm:text-[10px]'>Advantage</h3>
      </div>
      <div className="col md:w-full flex justify-center items-center my-2">
<div className='bg-[#E50914] md:w-full md:rounded-none py-2 px-10 md:px-1  rounded-md'>
  <h3 className='font-semibold md:text-center text-lg sm:text-[10px]'>Mobile</h3>
</div>
        

      </div>
      <div className="col md:w-full flex justify-center items-center my-2">
<div className='bg-[#E50914] md:w-full md:rounded-none py-2 px-10 md:px-1  rounded-md opacity-60'>
  <h3 className='font-semibold md:text-center text-lg sm:text-[10px]'>Basic</h3>
</div>
        

      </div>
      <div className="col md:w-full flex justify-center items-center my-2">
<div className='bg-[#E50914] md:w-full md:rounded-none py-2 px-10 md:px-1  rounded-md opacity-60'>
  <h3 className='font-semibold md:text-center text-lg sm:text-[10px]'>Standard</h3>
</div>
        

      </div>
      <div className="col md:w-full flex justify-center items-center my-2">
<div className='bg-[#E50914] md:w-full md:rounded-none py-2 px-10 md:px-1  rounded-md opacity-60'>
  <h3 className='font-semibold md:text-center text-lg sm:text-[10px]'>Premium</h3>
</div>
        

      </div>
    </div>
<div>  
</div>

<div className='main-body bg-[#181818BF] p-4 my-5 rounded-md'>
<div className=" w-full   border-b-white border-b-2 my-2 mx-auto   grid grid-cols-5 ">

<div className="py-2 col flex justify-center items-center my-2 ">
  <h3 className='font-semibold text-lg sm:text-xs text-left w-full'>Monthly Quality</h3>
</div>
<div className="col flex justify-center items-center my-2">
  <h3 className='font-regular text-lg sm:text-xs'> ₹199</h3>
</div>
<div className="col flex justify-center items-center my-2">
  <h3 className='font-regular text-lg sm:text-xs'> ₹499</h3>
</div>
<div className="col flex justify-center items-center my-2">
  <h3 className='font-regular text-lg sm:text-xs'> ₹649</h3>
</div>
<div className="col flex justify-center items-center my-2">
  <h3 className='font-regular text-lg sm:text-xs'> ₹799</h3>
</div>
</div>

{/* col-2 */}

<div className=" w-full   border-b-white border-b-2 my-2 mx-auto   grid grid-cols-5 ">

<div className="py-2 col flex justify-center items-center my-2 ">
  <h3 className='font-semibold text-lg sm:text-xs text-left w-full'>Video Quality</h3>
</div>
<div className="col flex justify-center items-center my-2">
  <h3 className='font-regular text-lg sm:text-xs'> Good </h3>
</div>
<div className="col flex justify-center items-center my-2">
<h3 className='font-regular text-lg sm:text-xs'> Good </h3>
</div>
<div className="col flex justify-center items-center my-2">
<h3 className='font-regular text-lg sm:text-xs'> Better </h3>
</div>
<div className="col flex justify-center items-center my-2">
<h3 className='font-regular text-lg sm:text-xs'> Best </h3>
</div>

</div>

<div className=" w-full   border-b-white border-b-2 my-2 mx-auto   grid grid-cols-5 ">

<div className="py-2 col flex justify-center items-center my-2 ">
  <h3 className='font-semibold text-lg sm:text-xs text-left w-full'>Resolution</h3>
</div>
<div className="col flex justify-center items-center my-2">
  <h3 className='font-regular text-lg sm:text-xs'> 480p </h3>
</div>
<div className="col flex justify-center items-center my-2">
<h3 className='font-regular text-lg sm:text-xs'> 720p </h3>
</div>
<div className="col flex justify-center items-center my-2">
<h3 className='font-regular text-lg sm:text-xs'> 1080p </h3>
</div>
<div className="col flex justify-center items-center my-2">
<h3 className='font-regular text-lg sm:text-xs'> 1080p </h3>
</div>

</div>


<div className=" w-full   border-b-white border-b-2 my-2 mx-auto   grid grid-cols-5 ">

<div className="py-2 col flex justify-center items-start my-2 ">
  <h3 className='font-semibold text-lg sm:text-xs text-left w-full'>Devices You Can Use</h3>
</div>
<div className="col   grid content-start my-2">
<img src={phone} className=' mx-auto  w-[32px]' alt="" />
</div>
<div className="col grid content-start justify-center   my-2">
<img src={phone} alt="" className='my-2 mx-auto w-[32px]' />
<img src={tablet} alt="" className='my-2 mx-auto w-[32px]' />

</div>
<div className="col grid content-start justify-center  my-2">
<img src={phone} alt="" className='my-2 mx-auto w-[32px]' />
<img src={tablet} alt="" className='my-2 mx-auto w-[32px]' />
<img src={laptop} alt="" className='my-2 mx-auto w-[32px]' />
<img src={Tv} alt="" className='my-2 mx-auto w-[32px]' />

</div>
<div className="col grid content-start justify-center  my-2">
<img src={phone} alt="" className='my-2 mx-auto w-[32px]' />
<img src={tablet} alt="" className='my-2 mx-auto w-[32px]' />
<img src={laptop} alt="" className='my-2 mx-auto w-[32px]' />
<img src={Tv} alt="" className='my-2 mx-auto w-[32px]' />

</div>

</div>


<p className='font-light '>
content is available in all resolutions. See our Terms of Use for more details.
Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.
</p>
<div className="w-full flex justify-center items-center">

<button className="bg-[#E50914] md:w-full md:rounded-none md:w-6/12 sm:w-8/12 w-3/12 py-2 mt-4 mx-auto">Next</button>

</div>
</div>

    </div>

)
}

export default Pricing