import React, { useState } from 'react'
import Slider from 'infinite-react-carousel';
import CatCard from './CatCard';
import { cards } from '../data';

export default function Slide() {
  // access to page width in state
  const [pagewidth, setPagewidth] = useState(window.innerWidth)
  
  window.addEventListener('resize', () => {
    setPagewidth(window.innerWidth)
  })
  
  // access to page width
  return (
    <div className=''>
    <div className='md:container mx-auto flex items-center justify-center p-2 '>
        <Slider slidesToShow={pagewidth < 700 ? 1 : pagewidth > 700 && pagewidth < 1024 ? 2:4} arrowsScroll={pagewidth < 700 ? 1 : pagewidth > 700 && pagewidth < 1024 ? 2:4} className='w-full px-6 md:px-16 my-16'>
            {cards.length?cards.map((card,index) =>(
                <CatCard key={index} item={card} />
            )):''}
        </Slider>
    </div>
    </div>
  )
}
