import React from 'react'

export default function ProjectCard({project}) {
  return (
    <div className='relative w-[280px] h-full mx-auto cursor-pointer overflow-hidden '>
    <img src={project.img} alt={project.cat} className='object-cover hover:rotate-6 hover:scale-125 transform duration-500'/>
    <div className='absolute bottom-0 w-full  left-0 flex flex-col gap-1 bg-blue-700/85 text-gray-100' >
        <span className='font-semibold text-lg ml-2'>{project.cat}</span>
        <div className='flex gap-1 mb-2 pl-2'>
            <img src={project.pp} alt="" className='w-6 h-6 rounded-full'/>
            <span className='font-normal ml-2 '>{project.username}</span>
        </div>
    
    </div>
    
</div>
  )
}
