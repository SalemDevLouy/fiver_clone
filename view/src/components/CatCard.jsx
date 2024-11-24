import React from 'react'
import { Link } from 'react-router-dom'

export default function CatCard({item}) {
  return (
    <Link to='gigs'>
      <div className='relative w-[280px] h-[350px] mx-auto cursor-pointer overflow-hidden'>
        <img src={item.img} alt={item.title} className='object-cover hover:rotate-6 hover:scale-125 transform duration-500'/>
        <div className='absolute top-0 w-full h-f left-0 flex flex-col gap-1 bg-blue-900/85 text-gray-100' >
            <span className='font-semibold text-lg ml-2'>{item.title}</span>
        <span className='font-normal ml-2 '>{item.desc}</span>
        </div>
        
    </div>
    </Link>
    
  )
}
