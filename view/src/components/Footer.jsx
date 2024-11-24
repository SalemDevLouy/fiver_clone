import React from 'react'

export default function Footer() {
  return (
    <div className="bg-gray-100">
  <div className="mx-auto md:container space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
      <div className="">
            <span className='text-3xl font-bold '>5ademni</span>
            <span className='text-3xl font-bold text-primary'>.</span>
        </div>

        <p className="mt-4 max-w-xs text-gray-500 capitalize">
        the first algerian website for selling and requesting digital products & Services .
        </p>

        </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
        <div>
          <p className="font-medium text-gray-900">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:text-primary transform duration-500"> Graphics & Design </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:text-primary transform duration-500"> Video & Editing</a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:text-primary transform duration-500"> Writing & Translating </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:text-primary transform duration-500"> AI Services </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:text-primary transform duration-500"> Degital Marketing </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 transition hover:text-primary transform duration-500"> Music & Audio </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 transition hover:text-primary transform duration-500"> Programming & Tech </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900">Company</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:text-primary transform duration-500"> About </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:text-primary transform duration-500"> Meet the Team </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:text-primary transform duration-500"> Accounts Review </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900">Helpful Links</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:text-primary transform duration-500"> Contact </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:text-primary transform duration-500"> FAQs </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:text-primary transform duration-500"> Live Chat </a>
            </li>
          </ul>
        </div>

        
      </div>
    </div>

    <p className="text-lg text-center text-gray-500">&copy; 2024 All rights reserved |  <span className='text-primary'>Salem Louy Dev</span></p>
  </div>
</div>
  )
}
