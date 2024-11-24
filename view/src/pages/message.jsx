import React from 'react'

export default function Message() {
  return (
    <div className='mt-24 min-h-[100vh]'>
        <div className='md:container mx-auto flex flex-col gap-4 lg:p-16 p-6'>
          {/* top part */}
        <div >
                <span className='text-gray-400'>5ademni &gt; messages &gt; John Doe</span>
        </div>
        <div className='flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center sm:min-w-[700px] '>
            <div className='flex gap-4 flex-col h-[60vh] overflow-y-scroll w-full  p-8 border-2 rounded-md mb-4'>
                <div className='flex gap-2'>
                    <img src="https://i.pinimg.com/originals/4f/e6/c7/4fe6c78e357827aa62bf445971249b43.jpg" alt="" className='w-10 h-10 rounded-full bg-gray-400' />
                    <span className='w-[60%] p-2 bg-primary text-gray-100 rounded-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita nesciunt architecto consequatur repellat fugiat provident itaque dolorem, ab neque at obcaecati iure, dolorum doloribus quaerat facilis natus illo aut modi?</span>
                </div>
                <div className='flex flex-row-reverse gap-2 '>
                <img src="https://i.pinimg.com/originals/54/36/d8/5436d89dd2b8e104e72c6b0edc9eafe1.jpg" alt="" className='w-10 h-10 rounded-full bg-gray-400' />
                    <span className='w-[60%] p-2 bg-gray-300 text-gray-900 rounded-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita nesciunt architecto consequatur repellat fugiat provident itaque dolorem, ab neque at obcaecati iure, dolorum doloribus quaerat facilis natus illo aut modi?</span>
                </div>
            </div>
            <div className='w-full border-t-2 pt-4'>
                <form action="" className='flex'>
                    <input type="text" className='border-2 rounded-md flex-1 pl-4 overflow-scroll' placeholder='write your message ...!'/>
                    <button className='bg-primary py-2 px-4 text-gray-100 rounded-md m-4'>Send</button>
                </form>
            </div>
        </div>
        </div>
        
                
    </div>
    </div>
  )
}
