import { projects } from '../data'
import Slider from 'infinite-react-carousel';
import ProjectCard from './ProjectCard';
import { useState } from 'react';

export default function ProductSlider() {
  // access to page width in state
  const [pagewidth, setPagewidth] = useState(window.innerWidth)
  
  window.addEventListener('resize', () => {
    setPagewidth(window.innerWidth)
  })
  
  
  return (
    <div className=''>
    <div className='md:container mx-auto flex items-center justify-center p-2 '>
        <Slider slidesToShow={pagewidth < 700 ? 1 : pagewidth > 700 && pagewidth < 1024 ? 2:4} arrowsScroll={pagewidth < 700 ? 1 : pagewidth > 700 && pagewidth < 1024 ? 2:4} className='w-full px-16 my-16'>
            {/* {projects.length?projects.map((project,index) =>(
                <ProductSlider key={index} project={project} />
            )):''} */}
            {projects.map((project,index) =>(
                <ProjectCard key={index} project={project} />
            ))}
        </Slider>
    </div>
    </div>
  )
}
