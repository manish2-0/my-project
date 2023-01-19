import React from 'react'
import { Link } from 'react-router-dom'

function Frontpage() {
  return (


    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 m-2 rounded-md dark:bg-blue-900 sticky top-2 z-[1000]">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src="https://i.ibb.co/3zVgbDq/Logo.png" className="h-10 sm:h-14" />
          {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */ }
        </a>
        <div className="flex items-center justify-center md:order-2">
          <button type="button" className="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">

            {/* <img className="w-8 h-8 rounded-full" src="https://i.ibb.co/3zVgbDq/Logo.png" alt="user photo" /> */ }
            <span className='text-[16px] flex items-center justify-center h-full text-white align-middle'>Hello,BLP User</span>
          </button>
          {/* <!-- Dropdown menu --> */ }

        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 " id="mobile-menu-2">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-blue-900 dark:border-gray-700">

            <li>
              <Link to="/" className="text-[17px] block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white active:text-black  md:dark:hover:bg-transparent dark:border-gray-700">View</Link>
            </li>
            <li>
              <Link to="/newclient" className="text-[17px] block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white active:text-white dark:hover:bg-gray-700  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Add</Link>
            </li>
            <li>
              <Link to="#" className="text-[17px] block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white active:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Find</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>



  )
}

export default Frontpage