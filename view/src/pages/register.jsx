import React,{useState} from 'react'
import { Link, useNavigate} from 'react-router-dom';
import uploadFile from '../utils/upload'
import { newRequest } from '../utils/newReq';
export default function Register() {
    // checkbox handler 
    const [isSaller, setIsSaller] = useState(false)
    const [file, setFile] = useState(null)
    //define useNavigate function
    const navigate = useNavigate()

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try {
              const formData = new FormData(event.target);
              setFile(formData.get('file'))
              const imageUrl = await uploadFile(file)
              const data = {
              email: formData.get('email'),
              username: formData.get('username'),
              password: formData.get('password'),
              country: formData.get('country'),
              phone: formData.get('phone'),
              isSaller: isSaller,
              desc:"",
              img: imageUrl || '',
            }
            const url = "/auth/register"
            const res = await newRequest.post(url, data)
            console.log(res.statusText + " waiting");
            navigate('/login')
      
        } catch (error) {
          console.log(error);
        }
        
       }
    return (
        <div className=' h-[100vh] bg-[url(https://i.pinimg.com/originals/b5/70/02/b570024ea79008ce6100507aaf256a93.jpg)] bg-cover bg-center bg-no-repeat'>
            <div className='md:container mx-auto flex flex-col gap-4 p-6 md:px-16 items-center  '>
            <div className="absolute inset-0 bg-gray-900/75 "></div>

                <div className='h-[100vh] flex w-full justify-center items-center z-30'>
                <form className='bg-gray-500/75 w-full  md:max-w-[800px] rounded-lg p-2 md:p-16' onSubmit={handleSubmit}>
                    <div className='flex items-center justify-center'>
                    <div className="">
                <span className='text-3xl font-bold text-gray-100'>5ademni</span>
                <span className='text-3xl font-bold text-primary'>.</span>
                <span className='text-3xl font-normal italic text-gray-100'> Register</span>
            </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between my-4 gap-4'>
                        <div className='flex flex-col '>
                            <input className='border-2 p-4 rounded-md' type='text' name='username' placeholder='Username' />
                            <input className='border-2 p-4 rounded-md mt-2' type='email' name='email' placeholder='Email' />
                            <input className='bg-gray-300 p-4 rounded-md mt-2' type='file' name='file'  />
                        </div> 
                        <div className='flex flex-col w-full'>
                            <input className='border-2 p-4 rounded-md ' type='text' name='country' placeholder='Country' />
                            <input className='border-2 p-4 rounded-md mt-2' type='number' name='phone' placeholder='Phone' min={0} />
                            <input className='border-2 p-4 rounded-md mt-2' type='password' name='password' placeholder='Password' />
                            <div className='h-full flex justify-start items-center'>
                                <label for="saller" className='text-gray-200 m-2 '>- I want To Become A Saller</label>
                                <input className='border-2 p-4 rounded-md mt-2' id='saller' type='checkbox' onChange={()=>setIsSaller(!isSaller)} />
                            </div>
                            
                            
                        </div>
                        </div>
                        <button type='submit' className='bg-primary text-gray-100 rounded-lg p-2 mt-4'>Register</button>
                    
                    <div className='flex items-center justify-center'>
                        <p className='text-gray-100'>You have an account?
                          <Link to={'/login'}><span className='text-primary cursor-pointer'> Login</span></Link> 
                        </p>
                
                </div>
                </form>
                </div>
            </div>
        </div>
      )
}
