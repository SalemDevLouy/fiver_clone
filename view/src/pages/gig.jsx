import React from 'react'
import Slider from 'infinite-react-carousel';
import Review from '../components/Review.jsx';
export default function Gig() {
  return (
    <div className='mt-24 min-h-[100vh]'>
        <div className='md:container mx-auto flex flex-col gap-4 lg:p-16 p-6'>
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
            <div className='flex flex-col md:flex-row'>
            {/* gig left side */}
            <div className='flex flex-col md:w-[60%] w-full'>
              <div className='flex  gap-2 items-center'>
                <img src="https://i.pinimg.com/originals/54/36/d8/5436d89dd2b8e104e72c6b0edc9eafe1.jpg" alt="user photo" className='w-10 h-10 rounded-full bg-gray-500' />
                <div className='flex flex-col justify-between'>
                  <span> Salem Louafi</span>
                <div>
                  5 stars
                </div>
                </div>
                
              </div>
               {/* here gig slider */} 
              <div>
                <Slider slidesToShow={1} arrowsScroll={1} className='w-full my-16'>
                  <div>
                    <img src="https://i.pinimg.com/564x/11/62/8e/11628e27021218d3017818a879ccbd87.jpg" alt="" className='bg-blue-600 text-center mx-16 h-80'/>
                  </div>
                  <div>
                  <img src="https://i.pinimg.com/564x/11/62/8e/11628e27021218d3017818a879ccbd87.jpg" alt="" className='bg-blue-600 text-center mx-16 h-80'/>
                  </div>
                  <div>
                  <img src="https://i.pinimg.com/564x/11/62/8e/11628e27021218d3017818a879ccbd87.jpg" alt="" className='bg-blue-600 text-center mx-16 h-80'/>
                  </div>
                  <div>
                  <img src="https://i.pinimg.com/564x/11/62/8e/11628e27021218d3017818a879ccbd87.jpg" alt="" className='bg-blue-600 text-center mx-16 h-80'/>
                  </div>

                </Slider>
              </div>
                {/* start gig description */}
                <div className='my-8'>
                  <h2 className='text-xl font-medium my-4'>About this Gig</h2>
                  <p className='text-gray-400 text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit placeat quasi vitae voluptatibus sit ipsa nulla omnis, aperiam aliquid vero officiis repellendus veniam voluptas aspernatur facilis aut, a necessitatibus. Ipsam?</p>
                </div>
                {/* about saller */}
                <div className='my-8'>
                <h2 className='text-xl font-medium my-4'>About The Saller</h2>
                  <div className='flex gap-2 items-center'>
                  <img src="https://i.pinimg.com/originals/54/36/d8/5436d89dd2b8e104e72c6b0edc9eafe1.jpg" alt="user photo" className='w-24 h-24 rounded-full bg-gray-500' />
                  <div>
                    <span> Salem Louafi</span>
                    <div>
                      stars
                    </div>
                    <button className='px-4 py-2 border-2 rounded-md'>Contact</button>
                  </div>
                  
                </div>
                {/* saller information */}
                <div className='border-2 rounded-md flex flex-col mt-4 p-2'>
                  <div className='flex  gap-4 justify-between'>
                  <div className='flex flex-col gap-4 w-[50%]'>
                      <div className='flex flex-col gap-[1px]'>
                        <span className='text-sm text-gray-400'>From</span>
                        <span>Alg</span>
                      </div>
                      <div className='flex flex-col gap-[1px]'>
                        <span className='text-sm text-gray-400'>Avg response time</span>
                        <span>4 h</span>
                      </div>
                      <div className='flex flex-col gap-[1px]'>
                        <span className='text-sm text-gray-400'>Languages</span>
                        <span>Alg</span>
                      </div>
                  </div>
                    <div className='flex flex-col gap-4 w-[50%]'>
                      <div className='flex flex-col gap-[1px]'>
                        <span className='text-sm text-gray-400'>Member since</span>
                        <span>may 2022</span>
                      </div><div className='flex flex-col gap-[1px]'>
                        <span className='text-sm text-gray-400'>Last delivery</span>
                        <span>1 day</span>
                      </div>
                      </div>
                  </div>
                  
                  <div className='border-t-2 mt-2'>
                    <p className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio repudiandae nesciunt quas quod. Saepe dignissimos rerum commodi consequuntur quasi repellat cupiditate hic, distinctio aut, eius quam esse quaerat culpa.</p>
                  </div>
                </div>
                </div>
                {/* Reviews */}
                <div className='my-8'>
                <h2 className='text-xl font-medium my-4'>Reviews</h2>
                  <div className='flex flex-col'>
                    {/* here is a review */}
                    <Review/>
                  </div>
                </div>
            </div>
            {/* gig right side */}
            <div className='border-2 rounded-lg flex-1 flex flex-col p-4 md:mx-8 h-fit md:sticky md:top-[200px]'>
                <div className='flex justify-between items-center'>
                  <h3 className='font-bold text-lg'>Image Enhancement</h3>
                  <p className='font-medium text-lg'>20 <span className='font-bold'>$</span></p>
                </div>
                <p className='text-gray-400 text-sm mt-4'>Service Description
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos reiciendis non, reprehenderit beatae, natus quidem hic culpa, iusto labore eius maiores quia. Voluptate vitae, sequi officia porro nostrum tempore voluptatem?
                </p>
                <div className='flex items-center justify-between mt-4'>
                  <div className='flex gap-2 items-center '>
                    <img src="/img/clock.png" alt=""  className='w-5 h-5 rounded-full'/>
                    <span className='font-semibold'>2 Days Deleverd</span>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <img src="/img/recycle.png" alt="" className='w-5 h-5 rounded-full'/>
                    <span className='font-semibold'>2 Revision</span>
                  </div>
                </div>
                <div className='mt-4'>
                  <ul>
                    <li className='flex gap-2 items-center'><img src="/img/greencheck.png" alt=""  className='w-3 h-3'/> <span>1</span></li>
                    <li className='flex gap-2 items-center'><img src="/img/greencheck.png" alt=""  className='w-3 h-3'/> <span>2</span></li>
                    <li className='flex gap-2 items-center'><img src="/img/greencheck.png" alt=""  className='w-3 h-3'/> <span>3</span></li>
                    <li className='flex gap-2 items-center'><img src="/img/greencheck.png" alt=""  className='w-3 h-3'/> <span>4</span></li>
                  </ul>
                </div>
                <button className='p-2 bg-blue-600 text-gray-100 rounded-md mt-4'>Continue</button>

            </div>
          </div>
        </div>
    </div>
  )
}
