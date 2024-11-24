import React from 'react'

export default function Review() {
  return (
    <div>
    
                  <div className='flex gap-2 items-center'>
                  <img src="https://i.pinimg.com/originals/4f/e6/c7/4fe6c78e357827aa62bf445971249b43.jpg" alt="user photo" className='w-14 h-14 rounded-full bg-gray-500' />
                  <div className='flex flex-col justify-between'>
                    <span>Lana john</span>
                    <div>
                      USA
                    </div>
                    <div>5 stars</div>
                  </div>
                  
                </div>
                <p className='text-gray-400 text-sm my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sunt illo quibusdam repudiandae nobis alias, numquam beatae vero officiis omnis repellat animi quis accusantium cupiditate architecto. Molestiae repellendus eos explicabo?</p>
                <div className='flex gap-4'>
                  <span className='font-semibold'>Helpful?</span>
                  <div className='flex gap-1 cursor-pointer  '><img src="/img/like.png" alt="" className='w-5 h-5'/><span>Yes</span></div>
                  <div className='flex gap-1 cursor-pointer '><img src="/img/dislike.png" alt="" className='w-5 h-5'/><span>No</span></div>
                </div>
                
                </div>

  )
}
