import React from 'react'
import { Link } from 'react-router-dom'
export default function 
() {
  return (
    <div className='mt-24 min-h-[100vh]'>
        <div className='md:container mx-auto flex flex-col gap-4 lg:p-16 p-6'>
          {/* top part */}
            <div >
                <div className='flex items-center justify-between'>
                        <h1 className='text-2xl font-bold'>All  Gigs</h1>
                        <Link to="/add"><button className='bg-primary text-gray-100 rounded-sm p-2'>Add new gig</button></Link>
                        
                        
                </div>
            </div>
            <div className='mt-4'>
                <table className='w-full border-none rounded-sm text-center'>
                    <tr className='bg-gray-200 p-8'>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Orders</th>
                        <th>Actions</th>
                    </tr>
                    <tr className='border-b-2'>
                        <td><img src="https://i.pinimg.com/564x/11/62/8e/11628e27021218d3017818a879ccbd87.jpg" alt=""  className='w-20 h-12 bg-primary m-2 mx-auto'/></td>
                        <td>image Enhancement</td>
                        <td>20 $</td>
                        <td>30</td>
                        <td><img src="/img/delete.png" alt="" className='w-6 h-6 mx-auto'/></td>
                    </tr>
                    
                </table>
            </div>
        </div>
        </div>
  )
}
