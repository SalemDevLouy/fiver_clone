import React ,{useState} from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { newRequest } from '../utils/newReq';
import { ToastContainer, toast } from 'react-toastify';
export default function Login() {
 const [error, setError] = useState('')
const navigate = useNavigate()

 const handleSubmit = async (event) =>{
  event.preventDefault();
  try {
        const formData = new FormData(event.target);
        const data = {
        email: formData.get('email'),
        password: formData.get('password')
      }
      const url = '/auth/login'
      const res = await newRequest.post(url, data)
      localStorage.setItem('currentUser',JSON.stringify(res.data));
      navigate('/')
      
      toast.success("Login Succful", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });

  } catch (error) {
    console.log(error.response.data);
    setError(error.response.data)
  }
  
 }
  return (
    <div className=' h-[100vh] bg-[url(https://i.pinimg.com/originals/b5/70/02/b570024ea79008ce6100507aaf256a93.jpg)] bg-cover bg-center bg-no-repeat'>
            <div className='md:container mx-auto flex flex-col gap-4 p-6 md:px-16 items-center  '>
            <div className="absolute inset-0 bg-gray-900/75 "></div>

                <div className='h-[100vh] flex w-full justify-center items-center z-30'>
                <form onSubmit={handleSubmit} className='bg-gray-500/75 w-full  sm:max-w-[400px] rounded-lg p-2 md:p-16'>
                    <div className='flex items-center justify-center'>
                    <div className="">
            <span className='text-3xl font-bold  text-gray-100'>5ademni</span>
            <span className='text-3xl font-bold text-primary'>.</span>
            <span className='text-3xl font-normal italic text-gray-100'> Login</span>
        </div>
                </div>
                <div className='flex flex-col gap-4 my-4'>
                    <input className='border-2 p-4 rounded-md' type='text' name='email' placeholder='Email' />
                    <input className='border-2 p-4 rounded-md mt-2' type='password' name='password' placeholder='Password' />
                    <button type='submit' className='bg-primary text-gray-100 rounded-lg p-2 mt-4'>Login</button>
                    <span className='text-red-500'>{error && error}</span>
                </div>
                <div className='flex items-center justify-center'>
                    <p className='text-gray-100'>Don't have an account?
                      <Link to={'/register'}><span className='text-primary cursor-pointer'> Sign up</span></Link> 
                    </p>
            
                    </div>
                </form>
                </div>
            </div>
            <ToastContainer />
        </div>
  )
}
