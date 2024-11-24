import React from 'react'

export default function Add() {
  const handleSubmit = async (event) =>{
    event.preventDefault();
    try {
          const formData = new FormData(event.target);
          setFile(formData.get('file'))
          const imageUrl = await uploadFile(file)
          const data = {
          userId: formData.get('id'),
          title: formData.get('username'),
          desc: formData.get('password'),
          totalStars: formData.get('country'),
          starNumber: formData.get('phone'),
          cat: isSaller,
          price:formData.get('price'),
          cover:formData.get('cover'),
          images:formData.get('images'),
          shortTitle:formData.get('shortTitle'),
          shortDesc:formData.get('shortDesc'),
          deliveryTime:formData.get('deliveryTime'),
          revisionNumber:formData.get('revisionNumber'),
          features:formData.get('features'),
          sales:formData.get('sales')
        }
        const url = "/gigs/creategig"
        const res = await newRequest.post(url, data)
        console.log(res.statusText + " waiting");
        navigate('/login')
  
    } catch (error) {
      console.log(error);
    }
    
   }
  return (
    <div className='mt-24 min-h-[100vh]'>
        <div className='md:container mx-auto flex flex-col gap-4 lg:p-16 p-6'>
          {/* top part */}
          <div >
                  <span className='text-gray-400'>5ademni &gt; Add new gig</span>
          </div>
          <div>
            <div>
              <form action="" className='flex flex-col  gap-4' onSubmit={handleSubmit}>
                <div className='flex flex-col md:flex-row gap-4 w-full'>
                <div className='border-2 rounded-md flex flex-col w-full md:w-[50%] gap-6 p-2' >
                    <div className='flex flex-col '>
                        <label htmlFor="title">Title :</label>
                        <input type="text" id="title" name="title" required className='border-2 p-2 mt-2' placeholder="e.g i will do something i'm realy good at"/>
                    </div>
                      <div className=' flex flex-col'>
                      <label htmlFor="category">Category : </label>
                        <select id="category" name="cat" required className='border-2 p-2 mt-2'>
                          <option value="1">Design</option>
                          <option value="2">Music</option>
                          <option value="3">Development</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="cover" className='block'>Cover image : </label>
                        <input type="file" id="cover" name="cover" required className='border-2 mt-4'/>
                      </div>
                      <div>
                        <label htmlFor="upload" className='block'>Upload image : </label>
                        <input type="file" id="upload" name="images" required className='border-2 mt-4'/>
                      </div>
                      <div>
                        <label htmlFor="description" className='block'>Description :</label>
                        <textarea id="description" name="desc" required className='border-2 p-2 mt-4 w-full h-[200px]'></textarea>
                      </div>
                </div>
                <div className='border-2 rounded-md flex flex-col w-full md:w-[50%] gap-6 p-2'>
                <div className='flex flex-col '>
                        <label htmlFor="servicetitle">Service Title :</label>
                        <input type="text" id="servicetitle" name="shortTitle" required className='border-2 p-2 mt-2' placeholder="e.g One page web design"/>
                </div>
                <div className='flex flex-col '>
                        <label htmlFor="shortdescription">Service Title :</label>
                        <textarea type="text" id="shortdescription" name="shortDesc" required className='border-2 p-2 mt-2' placeholder="Short description of your service"/>
                </div>
                <div className='flex flex-col '>
                        <label htmlFor="delivery">Delivery Time {`(e.g 3 days)`}</label>
                        <input type="number" id="delivery" name="deliveryTime" required className='border-2 p-2 mt-2' min={0} />
                </div>
                <div className='flex flex-col '>
                        <label htmlFor="revision">Revision Number{`(e.g 3 days)`}</label>
                        <input type="number" id="revision" name="revisionNumber" required className='border-2 p-2 mt-2' min={0}/>
                </div>
                <div className='flex flex-col '>
                        <label htmlFor="revision">Add Features</label>
                        <input type="text" id="revision" name="title" required className='border-2 p-2 mt-2' placeholder='e.g page design'/>
                        <input type="text" name="title" required className='border-2 p-2 mt-2' placeholder='e.g file uploading'/>
                        <input type="text"  name="title" required className='border-2 p-2 mt-2' placeholder='e.g setting up a domain'/>
                        <input type="text"  name="title" required className='border-2 p-2 mt-2' placeholder='e.g hosting'/>
                </div>
                <div className='flex flex-col '>
                        <label htmlFor="price">Price :</label>
                        <input type="number" id="price" name="title" required className='border-2 p-2 mt-2' />
                </div>
                </div>
                </div>
                <div className='flex gap-4'>
                  <button className='bg-primary py-2 px-6 text-gray-100 rounded-md my-4' type='submit'>Save</button>
                  <button className='bg-gray-400 py-2 px-4 text-gray-100 rounded-md my-4'>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}
