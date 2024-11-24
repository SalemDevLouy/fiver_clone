import React from 'react'

export default function Hero() {
  return (

<div
  className="z-0 relative bg-[url(https://i.pinimg.com/originals/b5/70/02/b570024ea79008ce6100507aaf256a93.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div className="absolute inset-0 bg-gray-900/75 "></div>

  <div
    className="relative mx-auto md:container px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-16"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl text-left font-extrabold text-white sm:text-5xl">
        Let us find your

        <strong className="block text-left font-extrabold text-primary"> Freelencer. </strong>
      </h1>

      <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed text-left capitalize">
        the first algerian website for selling and requesting digital products & Services
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-600 sm:w-auto transform duration-500 "
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 transform duration-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</div>
  )
}
