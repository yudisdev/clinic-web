import React, { useState } from 'react'

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  const navLinks = [
    {href:'#home', label:'#Home'},
    {href:'#services', label:'#Services'},
    {href:'#about', label:'#About'},
    {href:'#speccialists', label:'#Speccialists'},
    {href:'#contact', label:'#Contact'},
  ]

  return (
   <header className='bg-gradient-to-r from-pink-100 to-purple-100 sticky top-0 z-50'>
    <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
      <a href="/" className='flex items-center focus:outline-none focus:ring-2 focus:ring-pink-600 rounded'>
      <h1 className='text-2xl font-bold text-pink-600'>Dinda Beauty Care</h1>
      </a>
      <nav aria-label='Primary navigation'>
        <ul className='hidden md:flex space-x-8'>
          {navLinks.map((link, index)=>{
            <li key={index}>
              <a href={link.href}
              className='text-gray-700 hover:text-pink-600 transition-colors duration-200 
              focus:outline-none focus:ring-pink-600 focus:rounded'>
                {link.label}
              </a>
            </li>
          })}
        </ul>
      </nav>
        <button className='md:hidden p-2 focus:outline focus:ring-2 focus:ring-pink-600 rounded'
        onClick={toggleMenu}
        aria-label='Toogle Menu'
        aria-expanded={isMenuOpen}
        aria-controls='mobile-menu'>
          

        </button>
    </div>
   </header>
  )
}

export default Header