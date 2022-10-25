import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Image/brand.png'
const Header = () => {
  return (
    <>
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-0 md:mb-0">
      <img className="w-20 h-20 text-white p-2 rounded-full" viewBox="0 0 24 24" src={logo} alt="" />
      <span className="ml-2 text-xl ">It-Wolrd</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link  to='' className="mr-5 hover:text-gray-900">First Link</Link>
      <Link  to='' className="mr-5 hover:text-gray-900">Second Link</Link>
      <Link  to='' className="mr-5 hover:text-gray-900">Third Link</Link>
      <Link  to='' className="mr-5 hover:text-gray-900">Fourth Link</Link>
    </nav>
    <div className='md:ml-auto flex flex-wrap items-center justify-center'>
    <img className="w-8 h-8 mr-2  rounded-full" src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="user photo" 	/>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </div>
  </div>
</header>
      
    </>
  )
}

export default Header
