import React from 'react'

export default function Featured() {
  return (
    <div className='bg-blue-50'>
    <div className='md:container mx-auto flex items-center justify-center p-6 md:p-16 '>
    <div className="flex flex-col md:flex-row gap-8 w-full items-start justify-between">
          <div className="flex flex-col  gap-8 w-full lg:w-[50%] ">
            <h1 className='text-xl font-bold'>A whole world of freelance talent at your fingertips</h1>
            <div className='flex flex-col gap-2'>
              <div className="flex gap-2 items-center font-semibold">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            </div>
            

            <div className='flex flex-col gap-2'>

            <div className="flex gap-2 items-center font-semibold">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>

           </div>
           <div className='flex flex-col gap-2'>

            <div className="flex gap-2 items-center font-semibold">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>

          </div>
          <div className='flex flex-col gap-2'>

            <div className="flex gap-2 items-center font-semibold">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>

          </div>
          <div className="flex-1 hidden lg:inline">
            <div className='relative top-0 left-0 w-full h-full rounded-lg '>
              <div className='absolute top-0 left-0 z-40 flex items-center justify-center w-full h-[450px] bg-blue-800/75 rounded-xl'>
                  <h1 className='text-gray-100 text-[100px] font-bold text-center'>5edemni. <i className='text-3xl font-normal block'>click here to start vidoe</i></h1>
              </div>
              <video src="./img/video.mp4" controls  className='absolute h-[450px] z-30 rounded-xl'></video>
            </div>
            
          </div>
        </div>
    </div>
    </div>
  )
}
