import React from 'react'
import  Logo  from './logo'
import Pages from './pages'

export const Navbar = () => {
  return (
    <>
    <nav className='flex items-center justify-between px-8 py-4 bg-gray-900 text-white shadow-md'>
        {<Logo/>} 
        {<Pages/>}
    </nav>   
    </>
  )
  
}
