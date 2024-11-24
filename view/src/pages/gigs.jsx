import React, { useEffect, useRef } from "react";
import GigCard from './../components/GigCard';
import { newRequest } from '../utils/newReq';
import {
  useQuery,
} from '@tanstack/react-query'
import { useLocation } from 'react-router-dom';
export default function Gigs() {
  const minRef = useRef()
  const maxRef = useRef()
  const {search} = useLocation()
  const { isLoading, error, data,refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
      newRequest.get(`/gigs${search}`).then((res) =>{return res.data})
      // newRequest.get(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}`).then((res) =>{return res.data})
  })

  useEffect(() => {
    refetch();
  }, []);
  const apply = () => {
    refetch();
  };

  return (
    <div className='mt-24 min-h-[100vh]'>
    <div className='md:container mx-auto flex flex-col gap-4 p-16 '>
      {/* top part */}
      <div >
        <span className='text-gray-400'>5ademni &gt; Graphic Design &gt; </span>
      </div>
       <div>
              <h1 className='text-xl font-bold'>AI Artist</h1>
            <p className='text-gray-400'>
              Explore the boundaries of art and technology with 5ademni's AI artist
            </p>
       </div>
       {/* filter part */}
       <div>
            <div className='flex items-end justify-between'>
              <div className='hidden lg:flex flex-col lg:flex-row gap-2'>
                      <span className='text-gray-400'>Budget :</span> 
                  <div className='flex gap-2'>
                    <input ref={minRef} type="text" placeholder='min' className='border-2 rounded-sm pl-2'/>
                    <input ref={maxRef} type="text" placeholder='max' className='border-2 rounded-sm pl-2'/>
                    <button className='text-gray-100 bg-blue-600 rounded-lg px-2 py-1' onClick={apply}>Apply</button>
                  </div>
              </div>
            
            
        </div>
       
       </div>
       {/* cards part */}
       <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
            {isLoading ? "Louading ..." : error ? "Something went wrong ..!" : data.map((gig,index)=>(
              <GigCard key={index} gig={gig} />
            ))}
       </div>
       
    </div>
    </div>
  )
}
