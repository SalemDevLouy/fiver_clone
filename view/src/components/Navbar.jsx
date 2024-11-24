import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { newRequest } from '../utils/newReq';

export default function Navbar() {

  const navigate  = useNavigate()

// verified currenUser from localStorage
const  currentUser =JSON.parse(localStorage.getItem('currentUser')) 
// scrolling event handlers
  window.addEventListener('scroll', () => {
    setIsSecrolled(window.scrollY > 10? 'bg-gray-200 text-gray-900' : 'bg-blue-800');
  });
  const [isScrolled, setIsSecrolled] = useState('bg-blue-800');

  // display manu handler
  const [activeManu, setActiveManu] = useState('hidden')
  const toggleMenu = () => {
    setActiveManu(activeManu === 'hidden'? 'flex' : 'hidden')
  }

  // handle logout
  const handleLogout = async() => {
    const url = '/auth/logout'
    const res = await newRequest.post(url)
    localStorage.removeItem('currentUser')
    navigate('/')
  }
  return (
    <div className={isScrolled + ` w-full mx-auto fixed top-0 z-50 transform duration-500 text-gray-100 `} >
    <div className='md:container mx-auto py-4 px-6 md:px-16 flex items-center justify-between '>
        <div className="">
          <Link to='/' className='text-3xl font-bold'>
            <span className='text-3xl font-bold '>5ademni</span>
            <span className='text-3xl font-bold text-primary'>.</span>
          </Link>
        </div>
        <div className='capitalize font-semibold flex items-center'>
            <span className='px-1 mx-2 hidden lg:flex'><a href="">5ademni business</a> </span>
            <span className='px-1 mx-2 hidden lg:flex'><a href="">Explore</a>  </span>
            <span className='px-1 mx-2 hidden lg:flex'><a href="">english</a> </span>
            
            {!currentUser?.isSaller && <span className='px-1 mx-2 hidden lg:flex'><Link to={'/login'}>sign in</Link> </span>}
            {!currentUser?.isSaller && <span className='px-1 mx-2 hidden lg:flex'><a href="">become a saller</a> </span>}
            {!currentUser &&<Link to={'/register'}><button className='capitalize rounded-md  px-3 border-2 border-primary hover:bg-primary hover:text-gray-100 transform duration-500'>join</button></Link>}
            {currentUser && (<div className=' flex items-center'>
              <img className='inline w-10 h-10 rounded-full cursor-pointer border-[4px] border-blue-500' src={currentUser.img || "/img/man.png"} alt="" onClick={()=>toggleMenu()}/>
              <span className='px-1 hidden cursor-pointer md:inline h-fit' onClick={()=>toggleMenu()}>{currentUser.username}</span>
              <div className={activeManu + ' flex-col w-52 bg-gray-100 rounded-md text-gray-900 p-2 absolute right-20 top-14'}>
                {currentUser?.isSaller && (
                  <>
                  <Link to={'/myGigs'} className='rounded-md p-1 hover:bg-blue-300 transform duration-500'><span onClick={()=>toggleMenu()}>Gigs</span></Link>
                  <Link to={'/add'} className='rounded-md p-1 hover:bg-blue-300 transform duration-500'><span onClick={()=>toggleMenu()}>Add New Gig</span></Link>  
                  </>
                )}
                <span className=' rounded-md p-1 hover:bg-blue-300 transform duration-500 cursor-pointer' onClick={()=>toggleMenu()}>My Profile</span>
                <span className=' rounded-md p-1 hover:bg-blue-300 transform duration-500 cursor-pointer' onClick={()=>toggleMenu()}>Orders</span>
                <span className=' rounded-md p-1 hover:bg-blue-300 transform duration-500 cursor-pointer' onClick={()=>toggleMenu()}>Messages</span>
                <span className=' rounded-md p-1 hover:bg-red-300 transform duration-500 cursor-pointer' onClick={handleLogout}>Logout</span>
              </div>
            </div>)}
        </div>
    </div>
    <div>
      <div className='hidden md:container mx-auto px-16 lg:flex justify-between items-center text-sm border-t-2 border-gray-300 py-2'>
        <span className='px-4'>Graphics & Design</span>
        <span className='px-4'>Video & Editing</span>
        <span className='px-4'>Writing & Translating</span>
        <span className='px-4'>AI Services</span>
        <span className='px-4'>Degital Marketing</span>
        <span className='px-4'>Music & Audio</span>
        <span className='px-4'>Programming & Tech</span>
        <span className='px-4'>Business</span>
        <span className='px-4'>Lifestyle</span>
  </div>
    </div>
    </div>
  )
}
