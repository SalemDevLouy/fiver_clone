import React from 'react'

export default function contactUs() {
    
  return (
    <div className='mt-24 min-h-[100vh]'>
    <div className='md:container mx-auto flex flex-col gap-4 p-16 '>
    <div >
                  <span className='text-gray-400'>5ademni &gt; Contact Us </span>
                </div>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-gray-200 rounded-md">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
      
      <div className="">
            <span className='text-3xl font-bold '>5ademni</span>
            <span className='text-3xl font-bold text-primary'>.</span>
        </div>

        <p className="mt-4  text-gray-500 capitalize">
        the first algerian website for selling and requesting digital products & Services .
        </p>


        <div className="mt-8">
          <a href="#" className="text-2xl font-bold text-primary"> 0123 456 789 </a>

          <address className="mt-2 not-italic">Zaoualia, Elmoghier, Algeria</address>
        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="#" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm border-[2px]"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm border-[2px]"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm border-[2px]"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm border-[2px]"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-primary px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
    </div>
    </div>
  )
}
