import React from 'react'

export default function GigCard({gig}) {
  return (
    <div className=' w-[280px] h-[350px] shadow-lg mx-auto bg-gray-100'>
        <div className='flex flex-col '>
            <img src={gig.cover} className='h-40 w-full mb-4'/>
            <div className='flex flex-col p-2 '>
                <div className=' flex gap-2 '>
                    <img src="https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='h-6 w-6 rounded-full bg-slate-500'/>
                    <p>Username</p>
                </div>
                <p className='text-[12px] text-gray-400 max-h-10'>{gig.desc}</p>
                <div className='flex'>
                  {gig.starNumber}
                  <img src="/img/star.png" alt="star" className='h-4 w-4 ml-1'/>
                </div>
                <div className='p-2 flex justify-between items-center border-t-gray-400 border-t-[1px]'>
                    <img src="/img/heart.png" alt="stars" className='w-4 h-4 '/>
                    <div>
                        <span className='flex flex-col uppercase text-gray-500 text-[8px]'>starting at </span>
                        <span className='font-medium'> {gig.price} $</span>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}
