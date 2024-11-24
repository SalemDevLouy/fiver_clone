import React from 'react'

export default function FeaturesDark() {
  return (
    <div className='bg-blue-900 text-gray-100'>
        <div className='md:container mx-auto flex items-center justify-center p-6 md:p-16 '>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                <div className="flex flex-col gap-8 w-full md:w-[50%] items-start">
                    <h1 className='font-bold text-2xl'> 5ademni <i className='font-normal'>business</i></h1>
                    <h1 className='font-bold text-4xl'>A business solution designed for <i className='font-normal block'>teams</i></h1>
                    <p className='text-lg'>  Upgrade to a curated experience packed with tools and benefits,dedicated to businesses</p>
                <div className="flex gap-2 items-center">
                <img src="./img/check.png" alt="" className='w-8 h-8'/>
                Connect to freelancers with proven business experience
                </div>

                <div className="flex gap-2 items-center">
                <img src="./img/check.png" alt="" className='w-8 h-8'/>
                Get matched with the perfect talent by a customer success manager
                </div>

                <div className="flex gap-2 items-center">
                <img src="./img/check.png" alt="" className='w-8 h-8'/>
                Manage teamwork and boost productivity with one powerful workspace
                </div>
                <button className='px-4 py-2 bg-blue-500 rounded-md mt-2'>Explore Liverr Business</button>
            </div>
            <div className="flex-1">
                <img
                    src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
                    alt=""
                />
            </div>
        </div>
      </div>
      </div>
  )
}
